// A button that answers when you press it, which is the whole point of the item next to it.
'use client';

import { useState } from 'react';
import { Note } from '@/components/ui/Note';
import { SketchButton } from '@/components/ui/SketchButton';
import { SwapText } from '@/components/ui/SwapText';

const ANSWERS = ['go on', 'again?', 'feels good, right?', 'one more', 'ok, you get the idea'];

export function PressMe() {
  const [presses, setPresses] = useState(0);
  return (
    <div className="flex h-[110px] flex-wrap items-center gap-[18px]">
      <SketchButton size="big" onClick={() => setPresses((count) => count + 1)}>
        press me
      </SketchButton>
      <Note>
        <span aria-live="polite">
          <SwapText text={ANSWERS[presses % ANSWERS.length]} />
        </span>
      </Note>
    </div>
  );
}
