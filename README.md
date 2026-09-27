# Automating Without Overwhelming Yourself

Workshop materials from the UMSI AI Clinic Bootcamp, September 27, 2026, taught by Tina Lasisi.
Find the smallest useful step of a workflow that is worth automating, have AI build it, run it on
test data, and keep the judgment calls manual.

## What's here

- `site/`: the presentation, published by GitHub Pages. Start at `site/index.html`.
  - `01`–`06`: the six sections (should you automate it, your projects through IDEA, tools of the
    trade, three demos, hands-on, share-out).
  - `projects.html`: the eleven AI Clinic client projects in three shapes.
  - `data/`: the dummy data for the hands-on. Every file is fake and has a few planted problems.
  - `demos/`: the demo workspace (house rules for Claude Code and Codex, the three prompts, demo data).
- `scripts/`: the page template and the bundler that inlines styles for single-file viewing.
- `.github/workflows/pages.yml`: publishes `site/` to GitHub Pages on every push to `main`.

## Editing

Edit the pages in `site/`, commit, and push. The action republishes the site in a minute or two.
Shared styles live in `site/assets/shared.css`.

The xkcd comic "Is It Worth the Time?" is by Randall Munroe (xkcd.com/1205), licensed CC BY-NC 2.5.
