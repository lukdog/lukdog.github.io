// Living objects (the game, the face, the screen) move only when someone is looking:
// at least half on screen, not while the page is scrolling, and never with reduced motion.
'use client';

import { useInView } from './use-in-view';
import { useReducedMotion } from './use-reduced-motion';
import { useScrolling } from './use-scrolling';

export function useAlive<T extends Element>() {
  const [ref, inView] = useInView<T>({ threshold: 0.5 });
  const scrolling = useScrolling();
  const reduceMotion = useReducedMotion();
  return [ref, inView && !scrolling && !reduceMotion, reduceMotion] as const;
}
