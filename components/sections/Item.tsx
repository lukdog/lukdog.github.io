// One thing I like doing: its drawing or object, a title and one or two lines.
import type { Item as ItemContent } from '@/content/types';
import { RichText } from '@/components/ui/RichText';
import { visuals } from '@/components/visuals';

/** `column` staggers the entrance, so a row arrives one item after the other. */
export function Item({ item, column }: { item: ItemContent; column: number }) {
  const Visual = visuals[item.visual];
  return (
    <article data-reveal className="item rise min-w-0" style={{ '--i': column } as React.CSSProperties}>
      <Visual />
      <h4 className="mt-4 mb-1.5 text-xl leading-tight font-bold tracking-[-0.01em]">
        <RichText text={item.title} />
      </h4>
      <p className="text-ink-soft max-w-[40ch]">{item.text}</p>
    </article>
  );
}
