// The NessoHippo on my monitor: the face from the device, with its blinks, breathing, quick gaze and moods.
'use client';

import { useEffect, useRef, useState } from 'react';
import { colours, faceFor, towardsHue, type Face, type Mood } from '@/lib/nesso-face';
import { useAlive } from '@/lib/use-alive';
import { Stage } from '../Stage';
import styles from './NessoHippo.module.css';

const EYES_X = [84, 156];
const EYES_Y = 58;
// Until the first frame is drawn the face has the quiet blue of a calm day; after that the loop owns the fills.
const { bg: BG, dark: DARK } = colours(faceFor('resting', 0.3).hue);

/** Idle, then Claude works, then it asks for input; a pet or an answer makes it happy for a moment. */
const NEXT_MOOD: Record<Mood, { after: number; mood: Mood }> = {
  resting: { after: 5000, mood: 'busy' },
  busy: { after: 4000, mood: 'curious' },
  curious: { after: 9000, mood: 'resting' },
  heart: { after: 2000, mood: 'resting' },
};

type Live = Face & { gazeX: number; gazeY: number };
type Motion = { blink: number; rock: number; breath: number; quiver: number };
const STILL: Motion = { blink: 1, rock: 0, breath: 0, quiver: 0 };

/** Writes a face straight into the SVG; colours only when the hue has actually moved. */
function createPainter(svg: SVGSVGElement) {
  const eyes = [...svg.querySelectorAll<SVGGElement>('[data-eye]')];
  const nose = svg.querySelector<SVGGElement>('[data-nose]');
  const bgFills = [...svg.querySelectorAll('[data-fill="bg"]')];
  const darkFills = [...svg.querySelectorAll('[data-fill="dark"]')];
  let paintedHue = -1;

  return (live: Live, motion: Motion) => {
    if (Math.abs(live.hue - paintedHue) > 0.5) {
      const { bg, dark } = colours(live.hue);
      bgFills.forEach((el) => el.setAttribute('fill', bg));
      darkFills.forEach((el) => el.setAttribute('fill', dark));
      paintedHue = live.hue;
    }
    const scaleX = 1 + live.joy * 0.16;
    const scaleY = live.open * (1 - live.joy * 0.28) * motion.blink;
    eyes.forEach((eye, i) => {
      const tilt = (live.tilt + motion.rock) * (i ? 1 : -1) * 9;
      const x = EYES_X[i] + live.gazeX * 12;
      const y = EYES_Y + live.gazeY * 8 + motion.breath;
      eye.setAttribute(
        'transform',
        `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${tilt.toFixed(1)}) scale(${scaleX.toFixed(3)} ${scaleY.toFixed(3)})`
      );
    });
    nose?.setAttribute('transform', `translate(0 ${(motion.breath * 0.6 + motion.quiver).toFixed(1)})`);
  };
}

function Eye({ x }: { x: number }) {
  return (
    <g data-eye transform={`translate(${x} ${EYES_Y})`}>
      <rect data-fill="dark" fill={DARK} x={-25} y={-15} width={50} height={38} rx={15} />
      <rect className={styles.white} x={-25} y={-19} width={50} height={38} rx={15} />
      <rect data-fill="bg" fill={BG} x={3} y={-14} width={14} height={5} rx={2.5} />
    </g>
  );
}

export function NessoHippo() {
  const [ref, alive, reduceMotion] = useAlive<HTMLDivElement>();
  const [mood, setMood] = useState<Mood>('resting');
  const [level, setLevel] = useState(0.3);
  const screen = useRef<SVGSVGElement>(null);
  const painter = useRef<ReturnType<typeof createPainter>>(null);
  const live = useRef<Live>({ ...faceFor('resting', 0.3), gazeX: 0, gazeY: 0 });
  const target = useRef(faceFor('resting', 0.3));
  const moodNow = useRef<Mood>('resting');

  useEffect(() => {
    if (screen.current) painter.current = createPainter(screen.current);
  }, []);

  useEffect(() => {
    target.current = faceFor(mood, level);
    moodNow.current = mood;
    // With reduced motion the face simply changes; otherwise the loop below blends towards it.
    if (reduceMotion && painter.current) {
      Object.assign(live.current, target.current, { gazeX: 0, gazeY: 0 });
      painter.current(live.current, STILL);
    }
  }, [mood, level, reduceMotion]);

  // The mood moves on by itself while someone is watching.
  useEffect(() => {
    if (!alive) return;
    const { after, mood: next } = NEXT_MOOD[mood];
    const timer = setTimeout(() => {
      if (mood === 'heart') setLevel((today) => Math.min(1, (today + 0.35) % 1.2));
      setMood(next);
    }, after);
    return () => clearTimeout(timer);
  }, [mood, alive]);

  // One requestAnimationFrame loop while someone is watching, writing to the SVG and never through React.
  useEffect(() => {
    const svg = screen.current;
    if (!svg || !alive) return;

    let gaze = { x: 0, y: 0 };
    let pointer: { x: number; y: number } | null = null;
    let lastPointerAt = -Infinity;
    let nextGazeAt = 0;
    let blinkAt = performance.now() + 2000;
    let blinkUntil = 0;
    let frame = 0;

    const onPointer = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      lastPointerAt = performance.now();
    };

    const loop = (t: number) => {
      // Read the layout once, before any write, so the loop never forces a reflow.
      if (pointer) {
        const box = svg.getBoundingClientRect();
        const dx = pointer.x - (box.left + box.width / 2);
        const dy = pointer.y - (box.top + box.height / 2);
        const distance = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, distance / 220);
        gaze = { x: (dx / distance) * reach, y: (dy / distance) * reach };
        pointer = null;
      }
      const mood = moodNow.current;
      if (mood === 'busy') {
        // Reading a line: the gaze steps right, then flicks back.
        gaze = { x: -0.8 + (Math.floor(t / 450) % 5) * 0.4, y: 0.35 };
      } else if (t - lastPointerAt > 2500 && t > nextGazeAt) {
        gaze = { x: Math.random() * 1.6 - 0.8, y: Math.random() - 0.5 };
        nextGazeAt = t + 1900 + Math.random() * 2400;
      }

      // A snappy gaze reads as alive; colour and shape blend more slowly.
      const face = live.current;
      const goal = target.current;
      face.gazeX += (gaze.x - face.gazeX) * 0.35;
      face.gazeY += (gaze.y - face.gazeY) * 0.35;
      face.hue = towardsHue(face.hue, goal.hue, 0.08);
      face.open += (goal.open - face.open) * 0.12;
      face.joy += (goal.joy - face.joy) * 0.12;
      face.tilt += (goal.tilt - face.tilt) * 0.12;

      if (t > blinkAt) {
        blinkUntil = t + 130;
        blinkAt = t + (Math.random() < 0.12 ? 300 : 2600 + Math.random() * 3400);
      }
      painter.current?.(face, {
        blink: t < blinkUntil ? 0.1 : 1,
        rock: mood === 'curious' ? Math.sin((t / 2600) * Math.PI * 2) * 0.35 : 0,
        breath: Math.sin((t / 3000) * Math.PI * 2) * 1.2,
        quiver: mood === 'busy' ? Math.floor(t / 150) % 2 : 0,
      });
      frame = requestAnimationFrame(loop);
    };

    addEventListener('pointermove', onPointer, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('pointermove', onPointer);
    };
  }, [alive]);

  const love = () => setMood('heart');

  return (
    <Stage>
      <div ref={ref} className={styles.hippo} data-mood={mood}>
        <div className={styles.device}>
          <button
            type="button"
            className={`${styles.screenButton} touchable-press`}
            aria-label="Pet the hippo"
            onClick={love}
          >
            <svg ref={screen} className={styles.screen} viewBox="0 0 240 135" aria-hidden>
              <rect data-fill="bg" fill={BG} width={240} height={135} />
              {EYES_X.map((x) => (
                <Eye key={x} x={x} />
              ))}
              <g data-nose>
                <rect data-fill="dark" fill={DARK} x={103} y={96} width={8} height={13} rx={4} />
                <rect data-fill="dark" fill={DARK} x={129} y={96} width={8} height={13} rx={4} />
              </g>
            </svg>
          </button>
          <button type="button" className={styles.key} aria-label="Press the hippo's button" onClick={love}>
            <span />
          </button>
        </div>
        <span className={styles.monitor} aria-hidden />
        <span className="sr-only" aria-live="polite">
          {mood === 'curious' ? 'The hippo needs your input. Press its button.' : ''}
        </span>
      </div>
    </Stage>
  );
}
