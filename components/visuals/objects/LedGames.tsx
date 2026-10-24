// An UNO R4-style board whose LED matrix plays Flappy Bird by itself while it is on screen.
'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { frame, step, stillGame, type Game } from '@/lib/flappy';
import { useAlive } from '@/lib/use-alive';
import { Stage } from '../Stage';
import styles from './LedGames.module.css';

const TICK_MS = 170;

function Board() {
  return (
    <svg className={styles.board} viewBox="0 0 240 186" aria-hidden>
      <path className={styles.raised} d="M8 30 L-6 30 Q-9 30 -9 33 L-9 50 Q-9 53 -6 53 L8 53" />
      <path className={styles.raised} d="M8 116 L-13 116 L-13 152 L8 152" />
      <path
        className={styles.raised}
        d="M14 12 Q120 8 214 12 L228 24 Q231 92 228 160 L216 174 Q120 178 14 174 Q8 173 8 166 Q6 92 8 20 Q8 13 14 12 Z"
      />
      {[
        [40, 24],
        [24, 162],
        [214, 40],
        [214, 150],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} className={styles.ink} cx={cx} cy={cy} r={4} />
      ))}
      <path className={styles.ink} d="M70 16 L146 16 L146 28 L70 28 Z M152 16 L206 16 L206 28 L152 28 Z" />
      <path className={styles.pins} d="M74 22 L143 22 M156 22 L203 22" />
      <path className={styles.ink} d="M88 158 L140 158 L140 170 L88 170 Z M148 158 L200 158 L200 170 L148 170 Z" />
      <path className={styles.pins} d="M92 164 L137 164 M152 164 L197 164" />
      <path className={styles.ink} d="M48 84 L78 84 L78 114 L48 114 Z" />
      <path
        className={styles.thin}
        d="M53 80 L53 84 M59 80 L59 84 M65 80 L65 84 M71 80 L71 84 M53 114 L53 118 M59 114 L59 118 M65 114 L65 118 M71 114 L71 118 M44 90 L48 90 M44 98 L48 98 M44 106 L48 106 M78 90 L82 90 M78 98 L82 98 M78 106 L82 106"
      />
      <path className={styles.ink} d="M150 34 L206 34 L206 54 L150 54 Z" />
      <path className={styles.ink} d="M28 58 L42 58 L42 72 L28 72 Z" />
      <circle className={styles.ink} cx={35} cy={65} r={3.5} />
      <path className={styles.frame} d="M114 60 L222 60 L222 136 L114 136 Z" />
    </svg>
  );
}

export function LedGames() {
  const [ref, alive, reduceMotion] = useAlive<HTMLDivElement>();
  const [game, setGame] = useState<Game>(stillGame);

  // The game goes on while someone is watching and waits, mid-flight, while the page scrolls.
  useEffect(() => {
    if (!alive) return;
    const timer = setInterval(() => setGame((current) => step(current)), TICK_MS);
    return () => clearInterval(timer);
  }, [alive]);

  const leds = frame(reduceMotion ? stillGame : game);

  return (
    <Stage>
      <div ref={ref} className={styles.r4} role="img" aria-label="A small board playing Flappy Bird on its LED matrix">
        <Board />
        <span className={styles.matrix} aria-hidden>
          {leds.map((level, i) => (
            <span key={i} className={classNames(styles.led, level === 1 && styles.dim, level === 2 && styles.on)} />
          ))}
        </span>
      </div>
    </Stage>
  );
}
