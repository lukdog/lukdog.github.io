// A page section with its underlined title, a margin note, an intro line and its groups of items.
import type { Section as SectionContent } from '@/content/types';
import { Underlined } from '@/components/ui/HandLines';
import { Note } from '@/components/ui/Note';
import { Group } from './Group';

export function SectionHead({
  id,
  title,
  underline,
  note,
}: Pick<SectionContent, 'id' | 'title' | 'underline' | 'note'>) {
  return (
    <div className="mb-5 flex flex-wrap items-baseline gap-x-[18px] gap-y-0.5">
      <h2
        id={`${id}-title`}
        data-reveal
        className="text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
      >
        <Underlined color={underline}>{title}</Underlined>
      </h2>
      <Note>{note}</Note>
    </div>
  );
}

export function Section({ section }: { section: SectionContent }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="py-14">
      <SectionHead {...section} />
      <p className="text-ink-soft mb-2 max-w-[54ch] text-[1.2rem]">{section.intro}</p>
      {section.groups.map((group) => (
        <Group key={group.title} group={group} />
      ))}
    </section>
  );
}
