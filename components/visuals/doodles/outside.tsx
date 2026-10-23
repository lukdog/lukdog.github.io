// Pen drawings for the sports; their moving parts are driven by scroll (see globals.css).
import { Dots, Doodle, Line, Stroke } from './Doodle';

const spokes = (cx: number, cy: number) =>
  `M${cx} ${cy - 18} L${cx} ${cy + 18} M${cx - 18} ${cy} L${cx + 18} ${cy} M${cx - 13} ${cy - 13} L${cx + 13} ${cy + 13} M${cx + 13} ${cy - 13} L${cx - 13} ${cy + 13}`;

export function BikeDoodle() {
  return (
    <Doodle>
      <Stroke tone="faint" d="M4 98 Q80 95 156 98" />
      <Dots d="M10 104 L150 104" />
      {[40, 120].map((cx) => (
        <g key={cx}>
          <circle className="stroke-sketch draw-step-1" pathLength={1} cx={cx} cy={76} r={20} />
          <g className="spin-on-scroll" style={{ transformOrigin: `${cx}px 76px` }}>
            <Line className="stroke-[1.6]" d={spokes(cx, 76)} />
          </g>
        </g>
      ))}
      <Stroke step={2} tone="coral" d="M40 76 L68 76 L94 46 L58 46 Z M68 76 L56 36 M94 46 L120 76" />
      <Stroke step={3} d="M49 36 L63 35 M94 46 L97 34 Q108 32 109 40 Q109 45 104 45" />
      <circle className="fill-ink" cx={68} cy={76} r={3} />
    </Doodle>
  );
}

export function SnowboardDoodle() {
  return (
    <Doodle>
      <Stroke d="M2 28 Q80 62 158 102" />
      <Stroke
        step={2}
        tone="faint"
        d="M128 6 L118 28 L138 28 Z M128 28 L128 35 M148 22 L141 38 L155 38 Z M148 38 L148 43"
      />
      <Dots d="M20 52 L60 70 M90 82 L130 96" />
      <g className="ride-on-scroll">
        <Line tone="teal" className="stroke-4" d="M-17 3 L17 -1" />
        <Line d="M-6 1 L-2 -9 L4 0 M-2 -9 L0 -20 M-11 -17 L0 -16 L10 -21" />
        <circle className="stroke-sketch" cx={1} cy={-25} r={4.5} />
      </g>
    </Doodle>
  );
}

const trail = 'M24 102 Q48 94 60 86 Q44 78 68 70 Q92 64 80 52 Q96 44 104 22';

export function TrekkingDoodle() {
  return (
    <Doodle>
      <defs>
        <mask id="trail-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={160} height={110}>
          <path
            className="trail-reveal"
            pathLength={1}
            fill="none"
            stroke="#fff"
            strokeWidth={8}
            strokeLinecap="round"
            d={trail}
          />
        </mask>
      </defs>
      <Stroke d="M2 102 L50 36 L72 64 L104 18 L158 102" />
      <Stroke step={2} tone="faint" d="M95 31 L104 18 L113 31 Q108 35 104 31 Q100 35 95 31" />
      <g mask="url(#trail-mask)">
        <Line tone="coral" dash="3 6" d={trail} />
      </g>
      <Stroke step={3} tone="teal" d="M104 18 L104 3 L115 7 L104 11" />
    </Doodle>
  );
}

const wave = (x: number, y: number, amp: number) => `M${x} ${y} q10 -${amp} 20 0${' t20 0'.repeat(17)}`;

export function SwimmingDoodle() {
  return (
    <Doodle clip>
      <Line tone="faint" dash="3 6" d="M0 22 L160 22 M0 100 L160 100" />
      <g className="waves-on-scroll">
        <Line tone="teal" d={wave(-160, 66, 7)} />
        <Line tone="faint" d={wave(-150, 82, 6)} />
      </g>
      <g className="bob-on-scroll">
        <circle className="stroke-sketch" cx={80} cy={56} r={7} />
        <Line className="stroke-[1.6]" d="M74 55 L86 55" />
        <Line tone="coral" d="M62 62 Q70 34 96 48" />
      </g>
    </Doodle>
  );
}
