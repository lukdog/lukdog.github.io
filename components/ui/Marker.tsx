// A hand-drawn highlighter stroke behind a few words, drawn with rough-notation like on the old site.
'use client';

import classNames from 'classnames';
import { RoughNotation } from 'react-rough-notation';
import type { MarkerColor } from '@/content/types';
import { markerHex } from '@/lib/markers';
import { useInView } from '@/lib/use-in-view';
import { useReducedMotion } from '@/lib/use-reduced-motion';

type MarkerProps = {
  color: MarkerColor;
  show: boolean;
  children: React.ReactNode;
  /** Delays the switch to dark text until the stroke has passed under it. */
  textDelay?: number;
  /** Inside a RoughNotationGroup the group draws the strokes in turn, so this one must not draw itself. */
  inGroup?: boolean;
};

export function Marker({ color, show, children, textDelay = 120, inGroup = false }: MarkerProps) {
  const reduceMotion = useReducedMotion();
  return (
    <RoughNotation
      type="highlight"
      show={inGroup ? false : show}
      color={markerHex[color]}
      animate={!reduceMotion}
      animationDuration={250}
      padding={[2, 2]}
      iterations={1}
      multiline={false}
    >
      <span
        className={classNames(
          'inline-block px-[0.14em] transition-colors duration-200',
          show ? 'text-on-marker' : 'text-ink'
        )}
        style={{ transitionDelay: `${textDelay}ms` }}
      >
        {children}
      </span>
    </RoughNotation>
  );
}

/** A marker that draws itself the first time it scrolls into view. */
export function MarkerOnView({ color, children }: Omit<MarkerProps, 'show' | 'textDelay'>) {
  const [ref, inView] = useInView<HTMLSpanElement>({ once: true, rootMargin: '0px 0px -15% 0px' });
  return (
    <span ref={ref}>
      <Marker color={color} show={inView}>
        {children}
      </Marker>
    </span>
  );
}
