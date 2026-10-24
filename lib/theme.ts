// Light or dark: a choice made in this tab wins, otherwise the system. app/layout.tsx applies it before the first paint.
'use client';

import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();

const current = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

function saved(): Theme | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch {
    return null;
  }
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((listener) => listener());
}

function followSystem(event: MediaQueryListEvent) {
  if (!saved()) apply(event.matches ? 'dark' : 'light');
}

function subscribe(listener: () => void) {
  if (!listeners.size) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', followSystem);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', followSystem);
  };
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, current, () => 'light');
}

/** Switches theme for this tab only, so a new visit starts from the system again; where View Transitions exist the new theme grows as a circle from `origin`. */
export function toggleTheme(origin: Element) {
  const next: Theme = current() === 'dark' ? 'light' : 'dark';
  const commit = () => {
    apply(next);
    try {
      sessionStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return commit();

  const box = origin.getBoundingClientRect();
  const x = box.left + box.width / 2;
  const y = box.top + box.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document
    .startViewTransition(commit)
    .ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 450, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    })
    .catch(() => {});
}
