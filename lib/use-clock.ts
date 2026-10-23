// The current time, refreshed every few seconds. On the server (and during hydration) there is no clock: null.
'use client';

import { useSyncExternalStore } from 'react';

const TICK_MS = 15_000;
const listeners = new Set<() => void>();
let now = Date.now();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!timer) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      listeners.forEach((l) => l());
    }, TICK_MS);
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

export function useClock(): Date | null {
  const time = useSyncExternalStore(
    subscribe,
    () => now,
    () => null
  );
  return time === null ? null : new Date(time);
}
