# CLAUDE.md

Luca's personal site: one page drawn like a notebook, deployed to [lukdog.com](https://lukdog.com).
Read `README.md` first: it explains the stack, the content model, the structure and the motion. This file only adds
the rules and the traps that the README does not cover. `docs/decisions.md` says why the site is the way it is and
what was dropped: read it before discussing design, copy or motion, and update it in the same commit when a decision
changes.

## Commands

`yarn dev`, `yarn build` (static site in `out/`), `yarn lint`, `yarn typecheck`, `yarn format:check`. The Node version
is in `.nvmrc`. Run all of them before a commit: the hook only runs lint and typecheck, CI also checks format and build.

## Rules of this site

- **Copy** lives only in `content/site.ts`. Simple English (B2 level), first person, short sentences, past tense for
  closed roles. Ask before changing what a sentence means.
- **A new item** needs four things: its key in `VisualKey` (`content/types.ts`), a component in
  `components/visuals/doodles/` or `objects/`, its entry in `components/visuals/index.tsx`, and the item in `site.ts`.
- **Alignment**: every drawing and object starts at the left edge of the text below it. Pen drawings use `Doodle` and
  `Stroke` on the 160×110 canvas (`shift` moves a narrow one left); objects sit in `Stage`. Check it at 375px.
- **Colours** come only from the tokens in `app/globals.css`, and each token has a dark value under
  `[data-theme='dark']`. Keep WCAG AA contrast in both themes. Fonts and easings live in the non-inline `@theme`, so
  CSS modules can read `var(--font-*)` and `var(--ease-*)`.
- **Motion** was tuned with Luca over several rounds: don't change its behaviour without asking. Cards follow the
  scroll while they come in, then stay still. Titles, companies and timeline dots appear once. Only the sun lamp and
  the timeline line follow the scroll all the way. Living objects run only while on screen and pause while the page
  scrolls (`lib/use-alive.ts`). Animate only transforms, opacity and strokes, and keep the page still with
  `prefers-reduced-motion`.
- **Theme**: every visit starts from the system theme; the switch is saved in `sessionStorage` only.
- **Static export**: no server features (API routes, middleware, image optimisation, custom headers).
- **Photos** go in `public/` as 660×880 (3:4) sRGB JPEGs with all metadata removed: phone photos carry GPS.

## Checking a change

- Build, serve `out/` with `python3 -m http.server 4320 --directory out`, and check 375px and 1280px, light and dark.
- The in-app browser throttles frames and caches hard: trust DOM measurements over screenshots, and add `?v=…` to the
  URL after a rebuild. Its colour-scheme emulation does not fire `matchMedia` change events.
- The README screenshot is headless Chrome at 1280×800 (with `--virtual-time-budget` so the hero finishes), saved as
  an 800×500 JPEG in `docs/screenshot.jpg`. Refresh it when the hero changes.

## Git

- Every push to `main` deploys the site, so work on a branch and open a PR. The old site is on the `old` branch.
- No `Co-Authored-By: Claude` in commits and no Claude line in PR descriptions. Commits are GPG-signed.
