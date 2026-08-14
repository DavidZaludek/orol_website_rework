#!/usr/bin/env python3
"""Search the reviewed OROL image catalogue from the command line."""

from __future__ import annotations

import argparse
import json
import unicodedata
from pathlib import Path
from typing import Any


def normalized(value: str) -> str:
    value = unicodedata.normalize("NFKD", value.casefold())
    return "".join(character for character in value if not unicodedata.combining(character))


def searchable_text(record: dict[str, Any]) -> str:
    values = [
        record.get("drive_path", ""),
        record.get("description_sk", ""),
        " ".join(record.get("tags_sk", [])),
        " ".join(record.get("website_uses", [])),
        record.get("notes_sk", ""),
    ]
    return normalized(" ".join(values))


def main() -> None:
    parser = argparse.ArgumentParser(description="Search reviewed OROL Drive images.")
    parser.add_argument("query", nargs="*", help="Words that must occur in the catalogue record")
    parser.add_argument(
        "--catalogue",
        type=Path,
        default=Path("content/google-drive-image-catalogue.jsonl"),
    )
    parser.add_argument("--use", help="Filter by recommended website use, e.g. doprava")
    parser.add_argument(
        "--quality",
        choices=["excellent", "good", "limited", "reject"],
        help="Filter by quality",
    )
    parser.add_argument(
        "--people",
        choices=["yes", "no", "unknown"],
        help="Filter images containing people",
    )
    parser.add_argument("--limit", type=int, default=20)
    args = parser.parse_args()

    terms = [normalized(term) for term in args.query]
    matches = []
    with args.catalogue.open(encoding="utf-8") as source:
        for line in source:
            if not line.strip():
                continue
            record = json.loads(line)
            haystack = searchable_text(record)
            if any(term not in haystack for term in terms):
                continue
            if args.use and args.use not in record.get("website_uses", []):
                continue
            if args.quality and record.get("quality") != args.quality:
                continue
            if args.people:
                people_filter = {"yes": True, "no": False, "unknown": None}[args.people]
                if record.get("contains_people") is not people_filter:
                    continue
            matches.append(record)

    quality_rank = {"excellent": 0, "good": 1, "limited": 2, "reject": 3}
    matches.sort(key=lambda item: (quality_rank.get(item.get("quality"), 9), item["drive_path"]))
    for record in matches[: args.limit]:
        print(f"[{record['quality']}] {record['description_sk']}")
        print(f"  {record['drive_path']}")
        print(f"  https://drive.google.com/file/d/{record['drive_file_id']}/view")
        print(f"  tags: {', '.join(record.get('tags_sk', []))}")
        print(f"  uses: {', '.join(record.get('website_uses', [])) or '—'}")
    print(f"\n{len(matches)} match(es); showing {min(len(matches), args.limit)}.")


if __name__ == "__main__":
    main()
