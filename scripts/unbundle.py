#!/usr/bin/env python3
"""Reverse bundle.py for editing: shared CSS/JS back to file references, embedded images back to asset paths."""
import base64, pathlib, re
ROOT = pathlib.Path(__file__).resolve().parents[1]
IMG = {"data:image/png;base64," + base64.b64encode((ROOT / "assets" / n).read_bytes()).decode(): f"assets/{n}"
       for n in ["xkcd-1205-is-it-worth-the-time.png", "xkcd-1205-is-it-worth-the-time_2x.png"]}
for page in sorted(ROOT.glob("*.html")):
    s = page.read_text(); b = s
    s = re.sub(r'<style data-shared="css">.*?</style>', '<link rel="stylesheet" href="assets/shared.css">', s, flags=re.S)
    s = re.sub(r'<script data-shared="js">.*?</script>', '<script src="assets/shared.js"></script>', s, flags=re.S)
    for uri, path in IMG.items(): s = s.replace(uri, path)
    if s != b: page.write_text(s)
    print(page.name, "unbundled" if s != b else "unchanged", f"{len(s)//1024} KB")
