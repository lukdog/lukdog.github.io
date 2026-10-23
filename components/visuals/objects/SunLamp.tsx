// The lamp that copies the sun: scrolling moves the sun along its arc and the light follows its colour.
'use client';

import { useEffect, useRef } from 'react';
import { Stage } from '../Stage';
import styles from './SunLamp.module.css';

/** Where the day is, from 0 (sunrise, 5:30) to 1 (night, 21:30). */
function dayProgress(date: Date) {
  const hours = date.getHours() + date.getMinutes() / 60;
  return hours < 5.5 || hours > 21.5 ? 0.999 : (hours - 5.5) / 16;
}

export function SunLamp() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Without scroll-driven animation, or with reduced motion, the lamp shows the visitor's own time of day.
    const followsScroll =
      CSS.supports('animation-timeline: view()') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!followsScroll) ref.current?.style.setProperty('--sun-at', `-${dayProgress(new Date()).toFixed(3)}s`);
  }, []);

  return (
    <Stage>
      <svg
        ref={ref}
        className={styles.lamp}
        viewBox="0 0 280 220"
        role="img"
        aria-label="A lamp under the arc of the sun"
      >
        <path className={styles.arc} d="M40 160 A100 100 0 0 1 240 160" />
        <text className={styles.label} x={40} y={184} textAnchor="middle">
          sunrise
        </text>
        <text className={styles.label} x={240} y={184} textAnchor="middle">
          sunset
        </text>
        <g className={styles.orbit}>
          <circle className={styles.sun} cx={140} cy={60} r={11} />
        </g>
        <circle className={styles.glow} cx={140} cy={150} r={50} filter="url(#lamp-soft)" />
        <path className={styles.cone} d="M106 142 L82 202 Q140 212 198 202 L174 142 Z" />
        <path className={styles.shade} d="M116 108 Q140 105 164 108 L180 140 Q140 145 100 140 Z" />
        <ellipse className={styles.light} cx={140} cy={142} rx={38} ry={5} />
        <path className={styles.ink} d="M140 145 Q138 172 140 198" />
        <path className={styles.shade} d="M116 202 Q140 195 164 202 Q140 209 116 202 Z" />
        <filter id="lamp-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={12} />
        </filter>
      </svg>
    </Stage>
  );
}
