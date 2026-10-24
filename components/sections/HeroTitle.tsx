// The hero headline: once the fonts are in, each word is highlighted in turn and the rest of the hero follows.
'use client';

import { useEffect, useState } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import type { MarkerColor } from '@/content/types';
import { Marker } from '@/components/ui/Marker';

const STROKE_MS = 250;

export function HeroTitle({ words }: { words: { text: string; marker: MarkerColor }[] }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    document.fonts.ready.then(() => mounted && setReady(true));
    return () => {
      mounted = false;
    };
  }, []);

  // data-ready starts the squiggle, the photo and its caption (globals.css), so the order holds even with slow fonts.
  return (
    <h1
      id="hello"
      data-ready={ready || undefined}
      className="m-0 flex flex-col items-start gap-[0.12em] text-[clamp(3.4rem,11vw,7.25rem)] leading-none font-extrabold tracking-[-0.035em]"
    >
      <RoughNotationGroup show={ready}>
        {words.map((word, i) => (
          <span key={word.text} className="block">
            <Marker color={word.marker} show={ready} inGroup textDelay={i * STROKE_MS + 120}>
              {word.text}
            </Marker>
          </span>
        ))}
      </RoughNotationGroup>
    </h1>
  );
}
