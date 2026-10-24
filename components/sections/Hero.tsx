// The opening: the highlighted hello, one line about what I like, and a taped polaroid.
import Image from 'next/image';
import type { Site } from '@/content/types';
import { Squiggle } from '@/components/ui/HandLines';
import { HeroTitle } from './HeroTitle';

function Lead({ text, squiggle }: { text: string; squiggle: string }) {
  const [before, after] = text.split(squiggle);
  return (
    <p className="mt-8 max-w-[32ch] text-[clamp(1.25rem,2.3vw,1.55rem)] leading-[1.45] font-medium">
      {before}
      <Squiggle>{squiggle}</Squiggle>
      {after}
    </p>
  );
}

export function Hero({ hero }: { hero: Site['hero'] }) {
  const { photo } = hero;
  return (
    <section
      id="hero"
      aria-labelledby="hello"
      className="grid items-center gap-10 pt-10 pb-14 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] md:gap-14 md:pt-16 md:pb-24"
    >
      <div>
        <HeroTitle words={hero.words} />
        <Lead text={hero.lead} squiggle={hero.squiggle} />
        <p className="text-ink-soft mt-5 max-w-[52ch] font-mono text-sm leading-relaxed">{hero.byline}</p>
      </div>

      <div className="polaroid-tilt w-[min(100%,250px)] justify-self-center md:w-[min(100%,330px)]">
        <figure className="polaroid bg-raised relative m-0 -rotate-3 p-3 pb-2.5 shadow-[0_1px_2px_var(--shadow),0_14px_30px_var(--shadow)]">
          <span
            aria-hidden
            className="bg-teal/30 absolute -top-[13px] left-1/2 z-10 h-[26px] w-24 -translate-x-1/2 rotate-[2.5deg]"
          />
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            preload
            className="block aspect-[3/4] h-auto w-full object-cover"
          />
          <figcaption className="font-hand flex items-center justify-center gap-1.5 pt-2 text-[1.6rem] leading-none font-bold">
            {photo.caption}
            <svg className="h-[26px] w-[34px] overflow-visible" viewBox="0 0 40 30" aria-hidden>
              <path
                className="hero-arrow stroke-ink fill-none stroke-[2.2] [stroke-linecap:round] [stroke-linejoin:round]"
                pathLength={1}
                d="M4 26 Q7 9 30 7 M22 2 L31 7 L24 13"
              />
            </svg>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
