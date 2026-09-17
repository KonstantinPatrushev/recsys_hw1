#!/usr/bin/env bash
# Runs tests/icon_check.html against a page in headless Chrome and prints the JSON result.
# Requires a static server on :8765 serving hw1/ (python3 -m http.server 8765).
page="${1:?usage: run_icon_check.sh <page relative to hw1>}"
google-chrome --headless=new --disable-gpu --no-sandbox --virtual-time-budget=10000 \
  --dump-dom "http://localhost:8765/tests/icon_check.html?page=${page}" 2>/dev/null \
  | python3 -c 'import sys,re,html; print(html.unescape(re.search(r"<pre id=\"result\">(.*?)</pre>", sys.stdin.read(), re.S).group(1)))'
