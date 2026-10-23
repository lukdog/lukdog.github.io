// Text that blurs out and back in when it changes, so the change reads as one object rather than two.
'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

const SWAP_MS = 120;

export function SwapText({ text }: { text: string }) {
  const [shown, setShown] = useState(text);
  const swapping = text !== shown;

  useEffect(() => {
    if (!swapping) return;
    const timer = setTimeout(() => setShown(text), SWAP_MS);
    return () => clearTimeout(timer);
  }, [text, swapping]);

  return (
    <span
      className={classNames(
        'inline-block transition-[opacity,filter] duration-[120ms] ease-out',
        swapping && 'opacity-0 blur-[2px]'
      )}
    >
      {shown}
    </span>
  );
}
