// Flappy Bird on a 12×8 LED matrix, played by a small autopilot. Pure functions: a game in, the next game out.

export const COLS = 12;
export const ROWS = 8;
const BIRD_COL = 2;
const GAP = 3;

type Wall = { col: number; gap: number };
export type Game = { y: number; vy: number; walls: Wall[] };

const newWall = (random: () => number): Wall => ({ col: COLS - 1, gap: 1 + Math.floor(random() * (ROWS - GAP - 1)) });

export const newGame = (random = Math.random): Game => ({ y: 3, vy: 0, walls: [newWall(random)] });

/** A still frame for reduced motion: the bird between two walls. */
export const stillGame: Game = {
  y: 3,
  vy: 0,
  walls: [
    { col: 6, gap: 2 },
    { col: 11, gap: 4 },
  ],
};

const blocked = (wall: Wall, row: number) => row < wall.gap || row >= wall.gap + GAP;

export function step(game: Game, random = Math.random): Game {
  // The autopilot flaps when the next fall would take the bird below the middle of the coming gap.
  const next = game.walls.find((wall) => wall.col >= BIRD_COL);
  const target = next && next.col - BIRD_COL < 6 ? next.gap + 1 : 3.5;
  const flap = game.y + Math.min(game.vy + 0.35, 1) > target + 0.4;
  const vy = Math.min((flap ? -1.1 : game.vy) + 0.35, 1);
  const y = game.y + vy;

  let walls = game.walls.map((wall) => ({ ...wall, col: wall.col - 1 })).filter((wall) => wall.col >= 0);
  if (!walls.length || walls[walls.length - 1].col <= COLS - 6) walls = [...walls, newWall(random)];

  const row = Math.round(y);
  const crashed = row < 0 || row >= ROWS || walls.some((wall) => wall.col === BIRD_COL && blocked(wall, row));
  return crashed ? newGame(random) : { y, vy, walls };
}

/** Brightness of every LED, row by row: 0 off, 1 dim (walls), 2 bright (the bird). */
export function frame(game: Game): number[] {
  const leds = new Array<number>(COLS * ROWS).fill(0);
  for (const wall of game.walls) {
    for (let row = 0; row < ROWS; row++) if (blocked(wall, row)) leds[row * COLS + wall.col] = 1;
  }
  const row = Math.round(game.y);
  if (row >= 0 && row < ROWS) leds[row * COLS + BIRD_COL] = 2;
  return leds;
}
