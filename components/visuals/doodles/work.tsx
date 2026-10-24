// Pen drawings for the "at work" items.
import { Doodle, Label, Stroke } from './Doodle';

export function CodeDoodle() {
  return (
    <Doodle>
      <Stroke d="M10 12 Q80 7 150 11 Q154 55 150 99 Q80 104 11 100 Q6 56 10 12 Z" />
      <Stroke d="M11 28 Q80 24 150 27" />
      {[22, 32, 42].map((cx) => (
        <circle key={cx} className="fill-ink" cx={cx} cy={19.5} r={2.6} />
      ))}
      <Stroke step={2} tone="teal" d="M62 42 Q52 42 54 54 Q55 63 46 65 Q55 67 54 77 Q52 90 62 89" />
      <Stroke step={3} tone="teal" d="M98 42 Q108 42 106 54 Q105 63 114 65 Q105 67 106 77 Q108 90 98 89" />
      <path className="stroke-teal doodle-cursor fill-none stroke-3 [stroke-linecap:round]" d="M80 56 L80 74" />
    </Doodle>
  );
}

export function WhyDoodle() {
  return (
    <Doodle>
      <Stroke d="M34 10 Q80 7 126 11 Q129 50 126 88 L110 99 Q72 101 35 98 Q30 55 34 10 Z" />
      <Stroke d="M126 88 Q113 87 110 99" />
      <Label x={80} y={62} size="big">
        why?
      </Label>
      <Stroke step={2} tone="coral" d="M54 50 Q55 33 80 33 Q106 34 105 52 Q104 71 78 70 Q55 69 52 54 Q51 44 60 38" />
      <Label x={80} y={88}>
        then how
      </Label>
    </Doodle>
  );
}

export function ArchitectureDoodle() {
  return (
    <Doodle>
      <Stroke d="M10 42 Q31 39 52 42 Q54 56 52 70 Q31 72 11 69 Q8 56 10 42 Z" />
      <Stroke d="M104 8 Q126 6 148 9 Q150 22 148 35 Q126 37 105 35 Q102 22 104 8 Z" />
      <Stroke d="M104 74 Q126 72 148 75 Q150 88 148 101 Q126 103 105 101 Q102 88 104 74 Z" />
      <Label x={31} y={61} size="box">
        ui
      </Label>
      <Label x={126} y={27} size="box">
        api
      </Label>
      <Label x={126} y={93} size="box">
        db
      </Label>
      <Stroke step={2} d="M55 50 Q78 30 100 24 M92 19 L101 24 L93 30" />
      <Stroke step={2} d="M126 38 Q128 54 126 70 M121 63 L126 71 L131 63" />
      <Stroke step={2} tone="faint" d="M55 62 Q78 78 100 86" />
      <Stroke step={3} tone="coral" d="M71 66 L85 80 M85 66 L71 80" />
    </Doodle>
  );
}

export function IntegrationsDoodle() {
  return (
    <Doodle>
      <Stroke d="M8 36 Q28 33 48 36 Q50 52 48 70 Q28 72 9 69 Q6 52 8 36 Z" />
      <Stroke d="M112 36 Q132 33 152 36 Q154 52 152 70 Q132 72 113 69 Q110 52 112 36 Z" />
      <Label x={28} y={58} size="box">
        this
      </Label>
      <Label x={132} y={58} size="box">
        that
      </Label>
      <Label x={80} y={26}>
        {'{ json }'}
      </Label>
      <Stroke step={2} tone="teal" d="M52 45 Q80 37 108 45 M100 40 L109 45 L101 51" />
      <Stroke step={3} tone="teal" d="M108 62 Q80 70 52 62 M60 57 L51 62 L59 68" />
    </Doodle>
  );
}

export function WebDoodle() {
  return (
    <Doodle>
      <Stroke d="M8 10 Q80 6 152 10 Q155 55 151 100 Q80 104 9 100 Q5 55 8 10 Z" />
      <Stroke d="M9 26 Q80 23 151 26" />
      <Stroke step={2} tone="faint" d="M44 14 Q80 13 116 14 Q118 18 116 22 Q80 23 44 22 Q42 18 44 14 Z" />
      <Stroke step={2} d="M20 36 Q80 34 140 36 L140 58 Q80 60 20 58 Z" />
      <Stroke step={3} d="M20 68 L72 68 L72 90 L20 90 Z M88 68 L140 68 L140 90 L88 90 Z" />
      <Stroke step={3} tone="teal" d="M110 44 L110 64 L115 59 L120 70 L124 68 L119 57 L126 57 Z" />
    </Doodle>
  );
}

export function MobileDoodle() {
  return (
    <Doodle>
      <Stroke d="M58 4 Q80 2 102 4 Q108 5 108 12 L108 98 Q108 106 101 106 Q80 108 59 106 Q52 105 52 98 L52 12 Q52 5 58 4 Z" />
      <Stroke d="M72 10 Q80 9 88 10" />
      <Stroke step={2} d="M62 28 L98 28 M62 42 L92 42 M62 56 L96 56" />
      <Stroke step={3} tone="coral" d="M64 76 Q74 74 86 75 Q93 80 86 88 Q74 89 64 87 Q58 82 64 76 Z" />
      <circle className="fill-coral" cx={83} cy={81.5} r={4} />
    </Doodle>
  );
}

export function TeamsDoodle() {
  return (
    <Doodle>
      <Label x={80} y={30}>
        ship it!
      </Label>
      <Stroke d="M56 58 L100 58 L100 96 L56 96 Z M56 58 L66 48 L110 48 L100 58 M100 96 L110 86 L110 48" />
      <Stroke step={2} d="M31 46 a7 7 0 1 0 -14 0 a7 7 0 1 0 14 0 M24 53 L24 76 L16 98 M24 76 L32 98 M24 62 L54 70" />
      <Stroke
        step={2}
        d="M147 40 a7 7 0 1 0 -14 0 a7 7 0 1 0 14 0 M140 47 L140 70 L132 92 M140 70 L148 92 M140 56 L112 64"
      />
      <Stroke step={3} tone="coral" d="M78 58 L78 96 M78 58 L88 48" />
    </Doodle>
  );
}
