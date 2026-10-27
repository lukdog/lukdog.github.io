# Design decisions

Why the site is the way it is, and what we tried and dropped. Read it before you discuss design, copy or motion, and
update it in the same commit when a decision changes. The mockups (v1–v6, October 2026) are kept locally in `mockups/`,
outside git.

## The idea

- **Present me through what I like doing, not through my job.** Playful, not formal. The role is one small line under
  the title.
- **A notebook**: highlighter, arrows, circles and notes drawn by hand, like the old site. The other directions were a
  "playground" (a toy for each passion: too many toys to polish) and a "maker bench" (it spoke about my job at Arduino,
  not about what I do for fun).
- **One page, in this order**: hello → at work → so far → after work → say hi ("split"). Dropped: "stacked" (13 items
  before the timeline) and "tabs" (half the content behind a click, and the hobbies are what makes me different).
- **The page is long on purpose**: every item says something true about me. Replace an item instead of adding one.
- **Projects are described, never named or linked.** The repos may come in a later phase.

## Hero

- **The title is highlighted one word at a time** with rough-notation, like the old site. It never appears in blocks.
- **A colour polaroid.** Dropped: a pencil sketch made from the photo (too many lines, not the style of the other
  drawings). The photo was updated on 2026-10-24 to a newer one with sunglasses. Its weakness: no eye contact, and on
  desktop I look out of the page. A recent photo looking at the camera or to the left would be stronger; never mirror
  a face.
- **The byline says "engineering manager in the software team at Arduino"**, not "I lead engineering": I manage three
  small teams, about ten people.

## At work

- **Three groups**: Building software, Making interfaces, Working with people (3 + 3 + 2 items).
- **"I build software products with my teams"**: as a manager I don't want to sound like I write all the code myself.
- **"I help teams ship"** was added so the part about people is not missing; "I ask why, before how" moved there.
- **Jokes kept on purpose**: "I write ~~bugs~~ code", "I draw boxes and arrows", "I ask why, before how", "I swear".

## After work

- **Getting outside comes first** (bike, snowboard, trekking, swimming), so it doesn't look like my only hobby is more
  computers. The "no screens" joke is used only once, in the group note.
- **No hints under the objects**: people find out by themselves that they can touch them. The only clue is a 2px lift
  on mouse hover.
- **LED games** are drawn as a board like an UNO R4, with no logo, the same size as the other objects. The Flappy game
  plays by itself and is not interactive.
- **The desk gadgets copy the real ones** (from photos and the NessoHippo and CandyPad repos). The hippo's mood follows
  how many tokens I used today, compared with a normal day. The macropad has 17 keys and 2 knobs.

## So far (timeline)

- **One block per company, with its roles inside**, and empty coloured dots. Dropped: company logos (six palettes in a
  hand-drawn page, plus brand rules) and initials in the dots.
- **Every role in first person**, past tense for the closed ones.
- **Politecnico di Torino**: 2011 → 2016, with the BSc in Computer Engineering in 2014.

## Motion

Tuned in three rounds on 2026-10-24:

1. In the mockup almost everything moved with the scroll. On a 2560×1400 screen up to 21 animations moved together,
   and at the bottom 6 never stopped. It felt annoying.
2. Everything played once, on arrival (commit `3723168`). Calm, but too static: the cards that followed the scroll were
   my favourite part.
3. **Kept** (`56764c7`): cards follow the scroll only while they arrive, with the columns a little apart so a row comes
   in like a wave, then they stay still. Titles, companies and timeline dots appear once. Sports move only while their
   card arrives. The cube and the knobs stay still. Living objects pause while the page scrolls. Only the sun lamp
   (scrolling is the day passing) and the timeline line follow the scroll all the way.

Two exceptions to "UI motion under 300 ms": the circular theme change (450 ms, rare, a small celebration) and the LED
afterglow (it copies a real LED).

## Details

- **Theme switch**: a hand-drawn sun that becomes a moon, with no label.
- **Theme**: every visit starts from the system theme, and the switch lasts only for the open tab (`sessionStorage`).
  Dropped: remembering the choice forever (after one click the site stopped following the system) and not remembering
  it at all (a reload would undo the click).
- **Alignment**: every drawing and object starts at the left edge of its text, so there is one axis. Before, drawings
  were on the left and objects in the centre.
- **Favicon**: the "L" of "Luca." on the orange highlighter, on paper so it reads on light and dark tabs.
- **The header name links to `#top`**: back to the top, without reloading or replaying the hero.
- **Contact**: `hello@lukdog.com`, a forwarding alias made only for the site, so it can be dropped if spam grows. Not
  `luca@lukdog.com`: lukdog is already my nickname. Medium was removed from the links.

## Tech

- **Next.js App Router with static export**, React 19, Tailwind CSS v4 and TypeScript. All the copy in one file,
  small readable components. The repo is public, so it must stay clean.
- **No animation library**: scroll motion is plain CSS. react-rough-notation was already a dependency and stays.
- **No test suite**: the only tricky logic (`lib/flappy.ts`, `lib/nesso-face.ts`) is written as pure functions.

## Open

- Try the site in Safari and Firefox.
- The timeline says "Senior Staff Manager", the byline says "engineering manager": align them if the official title
  is different.
- Close the dependabot PRs for the old dependencies.
