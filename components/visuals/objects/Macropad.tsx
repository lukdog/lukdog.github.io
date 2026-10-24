// The CandyPad macropad: keys go down when you press them, on screen or on your own keyboard, and the OLED says which.
'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useInView } from '@/lib/use-in-view';
import { Stage } from '../Stage';
import styles from './Macropad.module.css';

type Key = { code: string; label: string; shape?: 'tall' | 'wide' };

// The numpad layout, row by row; "+" and "ent" take two rows, "0" two columns.
const KEYS: Key[] = [
  { code: 'NumLock', label: 'num' },
  { code: 'NumpadDivide', label: '/' },
  { code: 'NumpadMultiply', label: '*' },
  { code: 'NumpadSubtract', label: '-' },
  { code: 'Numpad7', label: '7' },
  { code: 'Numpad8', label: '8' },
  { code: 'Numpad9', label: '9' },
  { code: 'NumpadAdd', label: '+', shape: 'tall' },
  { code: 'Numpad4', label: '4' },
  { code: 'Numpad5', label: '5' },
  { code: 'Numpad6', label: '6' },
  { code: 'Numpad1', label: '1' },
  { code: 'Numpad2', label: '2' },
  { code: 'Numpad3', label: '3' },
  { code: 'NumpadEnter', label: 'ent', shape: 'tall' },
  { code: 'Numpad0', label: '0', shape: 'wide' },
  { code: 'NumpadDecimal', label: '.' },
];

const SYMBOLS: Record<string, string> = {
  '/': 'NumpadDivide',
  '*': 'NumpadMultiply',
  '-': 'NumpadSubtract',
  '+': 'NumpadAdd',
  '.': 'NumpadDecimal',
  Enter: 'NumpadEnter',
  NumLock: 'NumLock',
};

const codeFor = (event: KeyboardEvent) => (/^[0-9]$/.test(event.key) ? `Numpad${event.key}` : SYMBOLS[event.key]);

export function Macropad() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [down, setDown] = useState<string | null>(null);
  const [last, setLast] = useState<Key | null>(null);

  const press = (key: Key) => {
    setDown(key.code);
    setLast(key);
  };

  // While the pad is on screen it mirrors the visitor's keyboard; nothing is intercepted.
  useEffect(() => {
    if (!inView) return;
    const onDown = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
      const key = KEYS.find((k) => k.code === codeFor(event));
      if (key) press(key);
    };
    const onUp = (event: KeyboardEvent) => {
      if (codeFor(event)) setDown(null);
    };
    addEventListener('keydown', onDown);
    addEventListener('keyup', onUp);
    return () => {
      removeEventListener('keydown', onDown);
      removeEventListener('keyup', onUp);
    };
  }, [inView]);

  return (
    <Stage>
      <div
        ref={ref}
        className={styles.pad}
        role="img"
        aria-label="A macropad with a tiny screen, two knobs and seventeen keys"
      >
        <div className={styles.top}>
          <span className={styles.oled}>
            <span>candypad</span>
            <span>{last ? `key ${last.label}` : 'layer 0'}</span>
          </span>
          <span className={styles.knob} />
          <span className={styles.knob} />
        </div>
        <div className={styles.keys}>
          {KEYS.map((key) => (
            <span
              key={key.code}
              className={classNames(styles.key, key.shape && styles[key.shape], down === key.code && styles.down)}
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                press(key);
              }}
              onPointerUp={() => setDown(null)}
              onPointerCancel={() => setDown(null)}
            >
              {key.label}
            </span>
          ))}
        </div>
      </div>
    </Stage>
  );
}
