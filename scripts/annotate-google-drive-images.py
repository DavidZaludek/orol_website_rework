#!/usr/bin/env python3
"""Apply the reviewed image catalogue to Google Drive file descriptions.

The catalogue is keyed by immutable Drive file IDs, so files may be moved or
renamed without breaking the update. Authentication uses Google's standard
installed-app OAuth flow and stores the refresh token outside the repository.
"""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path
from typing import Any

# Allows metadata updates on existing files without granting file-content access.
DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.metadata"
CATALOGUE_START = "[OROL CATALOGUE START]"
CATALOGUE_END = "[OROL CATALOGUE END]"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Write Slovak catalogue annotations into Google Drive descriptions."
    )
    parser.add_argument(
        "--catalogue",
        type=Path,
        default=Path("content/google-drive-image-catalogue.jsonl"),
        help="Reviewed JSONL catalogue (default: content/google-drive-image-catalogue.jsonl)",
    )
    parser.add_argument(
        "--credentials",
        type=Path,
        default=Path(os.environ.get("OROL_DRIVE_CREDENTIALS", "credentials.json")),
        help="Google OAuth desktop-client JSON file",
    )
    parser.add_argument(
        "--token",
        type=Path,
        default=Path(os.environ.get("OROL_DRIVE_TOKEN", ".google-drive-token.json")),
        help="Location for the OAuth refresh token",
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Perform Drive writes. Without this flag the command is a dry run.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        help="Process only the first N catalogue entries (useful for a test run).",
    )
    parser.add_argument(
        "--start-at",
        type=int,
        default=1,
        help="One-based catalogue row to start at, so interrupted updates can resume.",
    )
    return parser.parse_args()


def read_catalogue(path: Path) -> list[dict[str, Any]]:
    records: list[dict[str, Any]] = []
    with path.open(encoding="utf-8") as source:
        for line_number, line in enumerate(source, 1):
            if not line.strip():
                continue
            record = json.loads(line)
            if not record.get("drive_file_id") or not record.get("description_sk"):
                raise ValueError(f"Missing Drive ID or description on line {line_number}")
            records.append(record)
    return records


def drive_description(record: dict[str, Any]) -> str:
    tags = ", ".join(record.get("tags_sk", []))
    uses = ", ".join(record.get("website_uses", [])) or "bez odporúčania"
    notes = record.get("notes_sk", "").strip()
    parts = [
        record["description_sk"].strip(),
        f"Kľúčové slová: {tags}",
        f"Odporúčané použitie na webe: {uses}",
        f"Kvalita: {record.get('quality', 'neuvedená')}",
    ]
    if notes:
        parts.append(f"Poznámka: {notes}")
    parts.append("Katalóg: OROL / vizuálna revízia")
    return "\n".join(parts)


def merge_with_existing_description(existing: str, catalogue_text: str) -> str:
    """Replace our own prior block while preserving human-written text."""
    pattern = re.compile(
        rf"\n*{re.escape(CATALOGUE_START)}.*?{re.escape(CATALOGUE_END)}\n*",
        flags=re.DOTALL,
    )
    human_text = pattern.sub("\n", existing or "").strip()
    catalogue_block = f"{CATALOGUE_START}\n{catalogue_text}\n{CATALOGUE_END}"
    return f"{human_text}\n\n{catalogue_block}" if human_text else catalogue_block


def authenticate(credentials_path: Path, token_path: Path):
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
    except ImportError as exc:
        raise SystemExit(
            "Missing Google client libraries. Run: "
            "uv run --with google-api-python-client --with google-auth-oauthlib "
            "scripts/annotate-google-drive-images.py --help"
        ) from exc

    credentials = None
    if token_path.exists():
        credentials = Credentials.from_authorized_user_file(str(token_path), [DRIVE_SCOPE])
    if credentials and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
    if not credentials or not credentials.valid:
        if not credentials_path.exists():
            raise SystemExit(f"OAuth client file not found: {credentials_path}")
        flow = InstalledAppFlow.from_client_secrets_file(str(credentials_path), [DRIVE_SCOPE])
        credentials = flow.run_local_server(port=0)
        token_path.parent.mkdir(parents=True, exist_ok=True)
        token_path.write_text(credentials.to_json(), encoding="utf-8")
    return credentials


def main() -> None:
    args = parse_args()
    records = read_catalogue(args.catalogue)
    if args.start_at < 1:
        raise SystemExit("--start-at must be at least 1")
    records = records[args.start_at - 1 :]
    if args.limit is not None:
        records = records[: args.limit]

    if not args.apply:
        print(f"Dry run: {len(records)} Drive descriptions are ready to update.")
        for record in records[:3]:
            print(f"- {record['drive_path']} ({record['drive_file_id']})")
        print("Run again with --apply after supplying OAuth credentials.")
        return

    credentials = authenticate(args.credentials, args.token)
    from googleapiclient.discovery import build

    drive = build("drive", "v3", credentials=credentials, cache_discovery=False)
    updated = 0
    unchanged = 0
    for record in records:
        current = (
            drive.files()
            .get(fileId=record["drive_file_id"], fields="id,description", supportsAllDrives=True)
            .execute()
        )
        description = merge_with_existing_description(
            current.get("description", ""), drive_description(record)
        )
        if description == current.get("description", ""):
            unchanged += 1
            print(f"Unchanged {unchanged}: {record['drive_path']}")
            continue
        drive.files().update(
            fileId=record["drive_file_id"],
            body={"description": description},
            fields="id",
            supportsAllDrives=True,
        ).execute()
        updated += 1
        print(f"Updated {updated}/{len(records)}: {record['drive_path']}")
    print(f"Completed: {updated} updated, {unchanged} already current.")


if __name__ == "__main__":
    main()
