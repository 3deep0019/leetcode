# LeetCode Practice

A local LeetCode-style workspace for practicing JavaScript problems from this repo.

## Setup

```bash
npm install
```

## Practice UI (recommended)

```bash
npm run dev
```

Opens a browser UI with:

- Easy / Medium / Hard filters
- Problem search
- One problem at a time with description + code editor
- Run button to test against sample cases from each README

## Other commands

```bash
npm run problems   # regenerate public/problems.json from problem folders
npm run compile    # regenerate compiled/easy.md, medium.md, hard.md and .js files
npm run build      # build the UI for production
npm run preview    # preview the production build
```

## Adding problems

Create a folder like `42-my-problem/` with:

- `README.md` — LeetCode problem description (HTML from LeetCode works)
- `my-problem.js` — your reference solution (used for function signature + tests, not shown in UI)

Then run `npm run problems` (or `npm run dev`, which runs it automatically).
