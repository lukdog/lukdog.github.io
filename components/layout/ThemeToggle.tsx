// The theme switch: a hand-drawn sun that turns into a moon.
'use client';

import { toggleTheme, useTheme } from '@/lib/theme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === 'dark'}
      aria-label="Dark mode"
      className={`${styles.toggle} ${className ?? ''}`}
      onClick={(event) => toggleTheme(event.currentTarget)}
    >
      <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden>
        <mask id="moon-cut">
          <rect x={-8} y={-8} width={48} height={48} fill="#fff" />
          <circle className={styles.bite} cx={37} cy={10} r={8.5} fill="#000" />
        </mask>
        <g className={styles.rays}>
          <path d="M16 2 L16 5.5 M16 26.5 L16 30 M2 16 L5.5 16 M26.5 16 L30 16 M6.2 6.4 L8.6 8.8 M23.4 23.2 L25.8 25.6 M6.4 25.8 L8.8 23.4 M23.2 8.6 L25.6 6.2" />
        </g>
        <circle className={styles.core} cx={16} cy={16} r={7} mask="url(#moon-cut)" />
      </svg>
    </button>
  );
}
