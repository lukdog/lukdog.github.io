// Building blocks for the pen drawings: a fixed 160×110 canvas and strokes that can draw themselves on scroll.
import classNames from 'classnames';

export type Tone = 'ink' | 'teal' | 'coral' | 'faint';

const toneClass: Record<Tone, string> = {
  ink: '',
  teal: 'stroke-teal',
  coral: 'stroke-coral stroke-3',
  faint: 'stroke-ink-faint stroke-[1.8]',
};

export function Doodle({ children, clip = false }: { children: React.ReactNode; clip?: boolean }) {
  return (
    <svg
      className={classNames('block h-[110px] w-40', clip ? 'overflow-hidden' : 'overflow-visible')}
      viewBox="0 0 160 110"
      aria-hidden
    >
      {children}
    </svg>
  );
}

type StrokeProps = {
  d: string;
  tone?: Tone;
  /** Order in which the stroke is drawn when the drawing scrolls into view (1 first). */
  step?: 1 | 2 | 3;
};

export function Stroke({ d, tone = 'ink', step = 1 }: StrokeProps) {
  return <path className={classNames('stroke-sketch', toneClass[tone], `draw-step-${step}`)} pathLength={1} d={d} />;
}

/** A stroke that never draws itself, for parts that move instead. */
export function Line({
  d,
  tone = 'ink',
  dash,
  className,
}: {
  d: string;
  tone?: Tone;
  dash?: string;
  className?: string;
}) {
  return (
    <path
      className={classNames('stroke-sketch', toneClass[tone], className)}
      style={dash ? { strokeDasharray: dash } : undefined}
      d={d}
    />
  );
}

/** A row of little dots, like gravel or snow. */
export function Dots({ d }: { d: string }) {
  return <Line tone="faint" className="stroke-[3.2]" dash="0.1 9" d={d} />;
}

export function Label({
  x,
  y,
  children,
  size = 'small',
}: {
  x: number;
  y: number;
  children: string;
  size?: 'big' | 'small' | 'box';
}) {
  const sizeClass = {
    big: 'fill-ink text-[30px] font-bold',
    small: 'fill-ink-faint text-[18px] font-semibold',
    box: 'fill-ink text-[18px] font-bold',
  }[size];
  return (
    <text className={classNames('font-hand', sizeClass)} x={x} y={y} textAnchor="middle">
      {children}
    </text>
  );
}
