# Random Lunch Generator — A01 (LLM4Rec, HSE)

**Live demo:** https://konstantinpatrushev.github.io/recsys_hw1/

Fork of [dryjins/RecSys-LLMs/week1](https://github.com/dryjins/RecSys-LLMs/tree/main/week1) with the
"icon sometimes not displaying" bug fixed.

**Bug.** Three of the 12 menu items used Font Awesome classes that do not exist in Font Awesome
**Free 6.4.0** (`fa-bowl-hot` is Pro-only, `fa-pasta` and `fa-bowl` do not exist at all).
An unknown class gets no `::before` content, so Ramen, Pasta and Soup were shown with an empty icon —
on 3/12 = 25 % of clicks.

**Fix.** `index.html`: Ramen → `fa-bowl-food`, Pasta → `fa-plate-wheat`, Soup → `fa-mug-hot`.
`prompt.md`: the code-generation prompt now restricts the model to an explicit list of verified icon names.

## Layout

| Path | What |
|---|---|
| `index.html` | fixed app (served by GitHub Pages) |
| `prompt.md` | improved code-generation prompt |
| `baseline/` | original `index.html` and `prompt.md` from the course repo |
| `tests/icon_check.html`, `tests/run_icon_check.sh` | renders every menu icon in headless Chrome and reports empty ones |
| `tests/simulate.mjs` | Monte-Carlo estimate of how often the baseline shows an empty icon |
| `experiment/` | prompts and 9 LLM-generated pages (baseline / rules-only / allowlist prompt) |
| `evidence/` | JSON outputs of the checks, screenshots |

## Reproduce

```bash
python3 -m http.server 8765 &            # from this folder
tests/run_icon_check.sh baseline/index.html   # broken_count: 3
tests/run_icon_check.sh index.html            # broken_count: 0
experiment/run_all.sh                         # table for all generated pages
node tests/simulate.mjs
```

Requires `google-chrome` and Node.js ≥ 18.
