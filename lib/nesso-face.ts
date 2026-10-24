// The NessoHippo face from the real device: a few numbers per mood, and the same colour rules (one hue, three flat colours).

export type Mood = 'resting' | 'busy' | 'curious' | 'heart';

/** The shape of the face: eye opening, joy (wide and squat = happy), lid tilt (+ sad, - angry) and background hue. */
export type Face = { hue: number; open: number; joy: number; tilt: number };

/** `level` is today's use against the usual day, 0 (quiet) to 1 (1.5× the average): blue, then green, then lime. */
export function faceFor(mood: Mood, level: number): Face {
  switch (mood) {
    case 'busy':
      return { hue: 33, open: 0.85, joy: 0.35, tilt: 0 };
    case 'curious':
      return { hue: 165, open: 1.18, joy: -0.15, tilt: 0 };
    case 'heart':
      return { hue: 330, open: 0.7, joy: 1, tilt: 0 };
    default:
      return {
        hue: level < 0.5 ? 215 - 160 * level : 135 - 100 * (level - 0.5),
        open: 1,
        joy: -0.3 + level * 0.9,
        tilt: (1 - level) * 0.35,
      };
  }
}

export function hsv(h: number, s: number, v: number) {
  const channel = (n: number) => {
    const k = (n + h / 60) % 6;
    return Math.round((v - v * s * Math.max(0, Math.min(k, 4 - k, 1))) * 255);
  };
  return `rgb(${channel(5)} ${channel(3)} ${channel(1)})`;
}

/** Background and shadow colours, as on the device: HSV(h, .78, .95) and HSV(h - 8, .88, .40). */
export const colours = (hue: number) => ({ bg: hsv(hue, 0.78, 0.95), dark: hsv((hue + 352) % 360, 0.88, 0.4) });

/** Moves `from` a fraction of the way to `to` around the colour wheel, the short way. */
export function towardsHue(from: number, to: number, amount: number) {
  const delta = ((to - from + 540) % 360) - 180;
  return (from + delta * amount + 360) % 360;
}
