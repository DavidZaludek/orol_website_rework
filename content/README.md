# OROL media catalogue

`google-drive-image-catalogue.jsonl` is the durable index of the OROL Google
Drive image archive. Each line is keyed by the immutable Drive file ID and
contains a Slovak description, searchable tags, quality assessment and
recommended website uses.

`google-drive-video-selection.json` records the reviewed homepage video
playlist, including immutable Drive IDs, trim windows, Slovak labels and the
clips intentionally reversed for a more natural camera direction.

`google-drive-gallery-selection.json` records the 15 Drive images curated for
the website gallery. It keeps each immutable Drive ID, its gallery category,
the optimized output filename and the designated lead image, so the selection
can be reproduced without repeating the full archive review.

`media-selections/shop-interior/` contains eight full-resolution shop-interior
photos preselected and ordered for a short video, plus a contact sheet and
motion/crop guidance in `selection.json`.

To preview a Drive metadata update without writing anything:

```sh
uv run --with google-api-python-client --with google-auth-oauthlib \
  scripts/annotate-google-drive-images.py
```

To write the descriptions, create a Google Cloud OAuth **Desktop app** client,
download its JSON as `credentials.json`, and run:

```sh
uv run --with google-api-python-client --with google-auth-oauthlib \
  scripts/annotate-google-drive-images.py --apply
```

The OAuth token is saved as `.google-drive-token.json`, which is ignored by
Git. Start with `--limit 3 --apply` if you want to verify three files first.
If a batch is interrupted after 100 completed records, resume with
`--start-at 101 --apply`.

The uploader preserves existing human-written descriptions. It replaces only
the text between its `[OROL CATALOGUE START]` and `[OROL CATALOGUE END]`
markers, so repeated runs are safe and do not duplicate metadata.

Validate catalogue structure and Drive ID coverage with:

```sh
python3 scripts/validate-image-catalogue.py \
  content/google-drive-image-catalogue.jsonl --expected 690
```

Search by any combination of Slovak description, tag and file path:

```sh
python3 scripts/search-image-catalogue.py nákladné auto --use doprava --quality excellent
python3 scripts/search-image-catalogue.py hilti --use pozicovna-naradia --people no
```
