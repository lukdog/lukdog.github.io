// The desk display with my day: weather, clock and the next meeting, or the current one with a progress bar.
'use client';

import { useEffect, useState } from 'react';
import { useClock } from '@/lib/use-clock';
import { useInView } from '@/lib/use-in-view';
import { useReducedMotion } from '@/lib/use-reduced-motion';
import { Stage } from '../Stage';
import styles from './ScheduleScreen.module.css';

const FLIP_MS = 6000;
const hhmm = (date: Date) => date.toTimeString().slice(0, 5);

/** The half-hour mark `steps` slots after the current one. */
function slot(date: Date, steps: number) {
  const mark = new Date(date);
  mark.setMinutes(Math.floor(date.getMinutes() / 30) * 30 + 30 * steps, 0, 0);
  return mark;
}

/** What the screen shows at a given time; before the clock is known (server render) it shows a fixed morning. */
function agenda(now: Date | null) {
  if (!now) {
    return {
      day: 'Friday',
      time: '08:55',
      next: 'At 09:30',
      until: 'Until 11:30',
      after: 'Next at 11:30 to 12:00',
      progress: 40,
    };
  }
  const hour = now.getHours();
  const officeHours = hour >= 9 && hour < 18;
  return {
    day: now.toLocaleDateString('en-GB', { weekday: 'long' }),
    time: hhmm(now),
    // Outside office hours the next meeting is the morning standup.
    next: officeHours ? `At ${hhmm(slot(now, 1))}` : `${hour >= 18 ? 'Tomorrow at' : 'At'} 09:30`,
    until: `Until ${hhmm(slot(now, 1))}`,
    after: `Next at ${hhmm(slot(now, 1))} to ${hhmm(slot(now, 2))}`,
    progress: Math.round(((now.getMinutes() % 30) / 30) * 100),
  };
}

function Cloud() {
  return (
    <svg className={styles.cloud} viewBox="0 0 32 24" aria-hidden>
      <path d="M8 20 Q2 20 2 15 Q2 10 8 10 Q9 4 16 4 Q23 4 24 11 Q30 11 30 16 Q30 20 25 20 Z" />
    </svg>
  );
}

export function ScheduleScreen() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reduceMotion = useReducedMotion();
  const [inMeeting, setInMeeting] = useState(false);
  const [flips, setFlips] = useState(0);
  const now = useClock();
  const day = agenda(now);

  // While on screen it alternates between the two views; a tap flips it and restarts the timer.
  useEffect(() => {
    if (!inView || reduceMotion) return;
    const timer = setInterval(() => setInMeeting((value) => !value), FLIP_MS);
    return () => clearInterval(timer);
  }, [inView, reduceMotion, flips]);

  return (
    <Stage>
      <div ref={ref} className={styles.display} data-view={inMeeting ? 'now' : 'next'}>
        <div className={styles.pcb}>
          <span className={`${styles.hole} ${styles.left}`} aria-hidden />
          <span className={`${styles.hole} ${styles.right}`} aria-hidden />
          <span className={styles.mic} aria-hidden />
          <span className={styles.pins} aria-hidden />
          <button
            type="button"
            className={`${styles.screen} touchable-press`}
            aria-label="Switch between the next meeting and the current one"
            onClick={() => {
              setInMeeting((value) => !value);
              setFlips((count) => count + 1);
            }}
          >
            <span className={`${styles.view} ${styles.next}`} aria-hidden>
              <span className={styles.clock}>
                <Cloud />
                <span className={styles.stack}>
                  <span className={styles.small}>{day.day}</span>
                  <span className={styles.time}>{day.time}</span>
                  <span className={styles.small}>broken clouds</span>
                </span>
              </span>
              <span className={styles.card}>
                <span className={styles.caption}>{day.next}</span>
                <span className={styles.title}>Team standup…</span>
              </span>
            </span>
            <span className={`${styles.view} ${styles.now}`} aria-hidden>
              <span className={styles.main}>
                <span className={styles.caption}>{day.until}</span>
                <span className={styles.title}>Design review…</span>
                <span className={styles.bar} style={{ '--progress': `${day.progress}%` } as React.CSSProperties}>
                  <span className={styles.fill} />
                  <span className={styles.mark} />
                </span>
                <span className={styles.caption}>{day.after}</span>
                <span className={styles.title}>Planning…</span>
              </span>
              <span className={styles.side}>
                <span className={styles.sideTime}>{day.time}</span>
                <Cloud />
                <span>scattered clouds</span>
              </span>
            </span>
          </button>
        </div>
        <span className={styles.stand} aria-hidden />
      </div>
    </Stage>
  );
}
