#!/usr/bin/env python3
"""
Extract base64-embedded assets from the original HTML file
into public/assets/ and print the replacement src mappings.

Usage:
  python scripts/extract-assets.py path/to/hermes-landing-final.html
"""

import re
import base64
import os
import sys

def extract_assets(html_path: str, output_dir: str = "public/assets") -> None:
    os.makedirs(output_dir, exist_ok=True)

    with open(html_path, "r", errors="replace") as f:
        html = f.read()

    pattern = r'(src|href)=[\'"](data:(image|video)/([^;]+);base64,([A-Za-z0-9+/=]+))[\'"]'
    matches = list(re.finditer(pattern, html))

    if not matches:
        print("No base64 assets found.")
        return

    seen: dict[str, str] = {}
    counters: dict[str, int] = {}

    print(f"Found {len(matches)} base64 asset(s)\n")
    print("Replace mappings:")
    print("-" * 60)

    for match in matches:
        attr = match.group(1)
        full_data = match.group(2)
        media_type = match.group(3)  # image or video
        ext = match.group(4).split(";")[0]  # e.g. jpeg, png, mp4
        b64_data = match.group(5)

        # Deduplicate identical blobs
        if full_data in seen:
            asset_name = seen[full_data]
            print(f"  {attr}='{full_data[:40]}...'  =>  /assets/{asset_name}  [DUPLICATE]")
            continue

        # Build filename
        prefix = "img" if media_type == "image" else "video"
        counters[prefix] = counters.get(prefix, 0) + 1
        asset_name = f"{prefix}-{counters[prefix]}.{ext}"
        seen[full_data] = asset_name

        # Write file
        out_path = os.path.join(output_dir, asset_name)
        with open(out_path, "wb") as out:
            out.write(base64.b64decode(b64_data))

        size_kb = os.path.getsize(out_path) / 1024
        print(f"  Saved: /assets/{asset_name}  ({size_kb:.0f} KB)")

    print("\nDone. Update src= attributes in your components to use /assets/<filename>")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/extract-assets.py <html-file>")
        sys.exit(1)
    extract_assets(sys.argv[1])
