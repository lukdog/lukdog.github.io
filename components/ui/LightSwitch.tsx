// "Turn off the lights": the same theme switch as in the header, for the things that glow.
'use client';

import { toggleTheme, useTheme } from '@/lib/theme';
import { SketchButton } from './SketchButton';
import { SwapText } from './SwapText';

export function LightSwitch({ className }: { className?: string }) {
  const theme = useTheme();
  return (
    <SketchButton className={className} onClick={(event) => toggleTheme(event.currentTarget)}>
      <SwapText text={theme === 'dark' ? 'turn the lights on' : 'turn off the lights'} />
    </SketchButton>
  );
}
