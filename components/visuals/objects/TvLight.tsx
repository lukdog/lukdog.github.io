// The light behind the TV: each tap changes channel and the wall glows with the picture's colour.
'use client';

import { useState } from 'react';
import { Stage } from '../Stage';
import styles from './TvLight.module.css';

const CHANNELS = [
  { name: 'a sunset', top: '#ff8a5b', bottom: '#7a3e9d' },
  { name: 'the sea', top: '#3bb6e0', bottom: '#1e4e9c' },
  { name: 'a forest', top: '#7bd17b', bottom: '#1f6b4a' },
  { name: 'a game', top: '#c86bff', bottom: '#ff5fa2' },
];

export function TvLight() {
  const [channel, setChannel] = useState(0);
  const { name, top, bottom } = CHANNELS[channel];

  return (
    <Stage>
      <button
        type="button"
        className={`${styles.tv} touchable`}
        aria-label={`Change channel. Now showing ${name}`}
        style={{ '--tv-a': top, '--tv-b': bottom } as React.CSSProperties}
        onClick={() => setChannel((current) => (current + 1) % CHANNELS.length)}
      >
        <span className={styles.glow} aria-hidden />
        <span className={styles.body} aria-hidden>
          <span className={styles.screen} />
        </span>
        <span className={styles.feet} aria-hidden />
      </button>
    </Stage>
  );
}
