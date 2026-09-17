#!/usr/bin/env bash
# Checks every generated page in experiment/ with the browser icon check and prints a summary table.
cd "$(dirname "$0")/.."
for f in experiment/baseline_run*.html experiment/improved_run*.html experiment/v2_run*.html; do
  tests/run_icon_check.sh "$f" > "evidence/icon_check_$(basename "$f" .html).json"
  python3 - "$f" <<'PY'
import json, sys
f = sys.argv[1]
d = json.load(open(f"evidence/icon_check_{f.split('/')[-1][:-5]}.json"))
bad = [r["icon"] for r in d["rows"] if not r["rendered"]]
print(f"{f:36s} items={d['total']:2d} broken={d['broken_count']}  {bad}")
PY
done
