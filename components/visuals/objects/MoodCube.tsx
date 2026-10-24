// The 3D printed cube: each tap turns it on the next side, and the bulb takes that side's light.
'use client';

import { useState } from 'react';
import { Stage } from '../Stage';
import styles from './MoodCube.module.css';

const SCENES = [
  { name: 'work', light: 'var(--scene-work)' },
  { name: 'relax', light: 'var(--scene-relax)' },
  { name: 'movie', light: 'var(--scene-movie)' },
  { name: 'off', light: undefined },
];

export function MoodCube() {
  const [turns, setTurns] = useState(0);
  const scene = SCENES[turns % SCENES.length];

  return (
    <Stage>
      <button
        type="button"
        className={`${styles.cube} touchable`}
        aria-label={`Turn the cube on the next side. Now: ${scene.name}`}
        style={{ '--turn': turns, '--scene': scene.light } as React.CSSProperties}
        onClick={() => setTurns((count) => count + 1)}
      >
        <span className={styles.scene} aria-hidden>
          <span className={styles.body}>
            {SCENES.map(({ name }, side) => (
              <span key={name} className={styles.face} data-side={side}>
                {name}
              </span>
            ))}
            <span className={`${styles.face} ${styles.top}`} />
            <span className={`${styles.face} ${styles.bottom}`} />
          </span>
        </span>
        <svg className={styles.bulb} viewBox="0 0 70 100" aria-hidden>
          <circle className={styles.glow} cx={35} cy={36} r={34} filter="url(#cube-soft)" />
          <path
            className={styles.glass}
            d="M35 8 Q58 9 59 33 Q59 49 46 60 L45 72 L25 72 L24 60 Q11 49 11 33 Q12 9 35 8 Z"
          />
          <path className={styles.ink} d="M26 80 L44 80 M28 88 L42 88" />
          <filter id="cube-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={12} />
          </filter>
        </svg>
      </button>
    </Stage>
  );
}
