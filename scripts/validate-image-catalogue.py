#!/usr/bin/env python3
"""Validate coverage and schema of the reviewed Google Drive image catalogue."""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path
from typing import Any

ALLOWED_USES = {
    "doprava",
    "cenova-ponuka",
    "poradenstvo",
    "stavbyveduci",
    "pozicovna-naradia",
    "miesanie-farieb",
    "kontakty-na-remeselnikov",
    "produkty",
    "realizacie",
    "o-nas",
    "socialne-siete",
}
ALLOWED_QUALITY = {"excellent", "good", "limited", "reject"}
ALLOWED_ORIENTATION = {"landscape", "portrait", "square"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("catalogue", type=Path)
    parser.add_argument("--map", dest="mapping", type=Path)
    parser.add_argument("--expected", type=int)
    return parser.parse_args()


def load_records(path: Path) -> list[dict[str, Any]]:
    records = []
    with path.open(encoding="utf-8") as source:
        for line_number, line in enumerate(source, 1):
            if not line.strip():
                continue
            try:
                record = json.loads(line)
            except json.JSONDecodeError as exc:
                raise ValueError(f"Invalid JSON on line {line_number}: {exc}") from exc
            record["_line"] = line_number
            records.append(record)
    return records


def validate_record(record: dict[str, Any]) -> list[str]:
    line = record["_line"]
    errors = []
    required = {
        "preview_index",
        "drive_file_id",
        "drive_path",
        "description_sk",
        "tags_sk",
        "website_uses",
        "quality",
        "orientation",
        "contains_people",
        "contains_visible_text",
        "notes_sk",
        "annotation_source",
    }
    missing = required - record.keys()
    if missing:
        errors.append(f"line {line}: missing {sorted(missing)}")
    if record.get("quality") not in ALLOWED_QUALITY:
        errors.append(f"line {line}: invalid quality")
    inferred_only = record.get("annotation_source") == "luna-filename-review"
    if record.get("orientation") not in ALLOWED_ORIENTATION and not (
        inferred_only and record.get("orientation") is None
    ):
        errors.append(f"line {line}: invalid orientation")
    if not isinstance(record.get("tags_sk"), list) or not 5 <= len(record["tags_sk"]) <= 12:
        errors.append(f"line {line}: tags_sk must have 5-12 entries")
    uses = record.get("website_uses")
    if not isinstance(uses, list) or len(uses) > 4 or set(uses) - ALLOWED_USES:
        errors.append(f"line {line}: invalid website_uses")
    if record.get("annotation_source") not in {
        "luna-visual-review",
        "luna-companion-match",
        "luna-filename-review",
    }:
        errors.append(f"line {line}: invalid annotation_source")
    for field in ("contains_people", "contains_visible_text"):
        value = record.get(field)
        if not isinstance(value, bool) and not (inferred_only and value is None):
            errors.append(f"line {line}: invalid {field}")
    return errors


def load_map(path: Path) -> dict[int, tuple[str, str]]:
    expected: dict[int, tuple[str, str]] = {}
    with path.open(encoding="utf-8") as source:
        for row in csv.reader(source, delimiter="\t"):
            index = int(row[0].split("_", 1)[0])
            expected[index] = (row[1], row[2])
    return expected


def main() -> None:
    args = parse_args()
    records = load_records(args.catalogue)
    errors = [error for record in records for error in validate_record(record)]
    indexes = [record.get("preview_index") for record in records if record.get("preview_index") is not None]
    if len(indexes) != len(set(indexes)):
        errors.append("duplicate preview_index values")
    ids = [record.get("drive_file_id") for record in records]
    if len(ids) != len(set(ids)):
        errors.append("duplicate drive_file_id values")
    if args.expected is not None and len(records) != args.expected:
        errors.append(f"expected {args.expected} records, found {len(records)}")

    if args.mapping:
        expected = load_map(args.mapping)
        for record in records:
            index = record.get("preview_index")
            if index not in expected:
                errors.append(f"line {record['_line']}: index {index} absent from map")
                continue
            path, drive_id = expected[index]
            if (record.get("drive_path"), record.get("drive_file_id")) != (path, drive_id):
                errors.append(f"line {record['_line']}: Drive path/ID does not match map")
        if args.expected == len(expected) and set(indexes) != set(expected):
            errors.append("catalogue indexes do not provide complete map coverage")

    if errors:
        raise SystemExit("Catalogue validation failed:\n- " + "\n- ".join(errors[:50]))
    print(f"Valid catalogue: {len(records)} unique Drive image records.")


if __name__ == "__main__":
    main()
