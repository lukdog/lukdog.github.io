// Small hand-drawn strokes that decorate words: a squiggle, an underline and a circle.
import classNames from 'classnames';
import type { MarkerColor } from '@/content/types';
import { markerStroke } from '@/lib/markers';

const line = 'fill-none [stroke-linecap:round]';

export function Squiggle({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative whitespace-nowrap">
      {children}
      <svg
        className="absolute bottom-[-0.34em] left-0 h-[0.45em] w-full overflow-visible"
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className={classNames(line, 'stroke-teal hero-squiggle stroke-3')}
          pathLength={1}
          d="M2 7 Q8 2 14 7 T26 7 T38 7 T50 7 T62 7 T74 7 T86 7 T98 7 T110 7 T118 6"
        />
      </svg>
    </span>
  );
}

export function Underlined({ children, color }: { children: React.ReactNode; color: MarkerColor }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute bottom-[-0.22em] left-[-2%] h-[0.32em] w-[104%] overflow-visible"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className={classNames(line, markerStroke[color], 'draw-on-enter stroke-4')}
          pathLength={1}
          d="M2 8 Q50 3 100 7 T198 5"
        />
      </svg>
    </span>
  );
}

export function Circled({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-[0.14em]">
      {children}
      <svg
        className="absolute top-[-0.18em] left-[-0.36em] h-[calc(100%+0.34em)] w-[calc(100%+0.72em)] overflow-visible"
        viewBox="0 0 120 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className={classNames(line, 'stroke-coral draw-on-enter stroke-3')}
          pathLength={1}
          d="M20 46 Q16 14 62 12 Q108 11 110 40 Q111 70 60 71 Q16 71 12 46 Q10 28 36 18"
        />
      </svg>
    </span>
  );
}
