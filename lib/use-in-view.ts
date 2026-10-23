// Tells a component whether it is on screen, so animations and timers run only when someone can see them.
'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView<T extends Element>({
  once = false,
  rootMargin,
}: { once?: boolean; rootMargin?: string } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return [ref, inView] as const;
}
