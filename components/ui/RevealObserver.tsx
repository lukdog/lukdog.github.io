// One observer for the whole page: marks each [data-reveal] element the first time it comes into view,
// and globals.css plays its entrance once. Until this runs, nothing is held back.
'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    document.documentElement.dataset.motion = 'ready';
    return () => observer.disconnect();
  }, []);

  return null;
}
