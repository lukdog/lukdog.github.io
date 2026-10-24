// True while the visitor is scrolling, and for a moment after; living objects pause so the page holds still.
'use client';

import { useSyncExternalStore } from 'react';

const SETTLE_MS = 250;
const listeners = new Set<() => void>();
let scrolling = false;
let settle: ReturnType<typeof setTimeout> | undefined;

function update(value: boolean) {
  if (scrolling === value) return;
  scrolling = value;
  listeners.forEach((listener) => listener());
}

function onScroll() {
  update(true);
  clearTimeout(settle);
  settle = setTimeout(() => update(false), SETTLE_MS);
}

function subscribe(listener: () => void) {
  if (!listeners.size) addEventListener('scroll', onScroll, { passive: true });
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) removeEventListener('scroll', onScroll);
  };
}

export function useScrolling() {
  return useSyncExternalStore(
    subscribe,
    () => scrolling,
    () => false
  );
}
