// "Say hi": a circled hello, the address when there is one, and where else to find me.
import type { Site } from '@/content/types';
import { Circled } from '@/components/ui/HandLines';
import { InkLink } from '@/components/ui/InkLink';

export function Contact({ contact }: { contact: Site['contact'] }) {
  const [before] = contact.title.split(contact.circled);
  const last = contact.socials.length - 1;
  return (
    <section id={contact.id} aria-labelledby={`${contact.id}-title`} className="pt-16 pb-[72px]">
      <h2
        id={`${contact.id}-title`}
        className="contact-title mb-5 text-[clamp(2.6rem,7vw,4.5rem)] leading-none font-extrabold tracking-[-0.035em]"
      >
        {before}
        <Circled>{contact.circled}</Circled>
      </h2>
      <p className="max-w-[46ch] text-[1.2rem]">{contact.text}</p>
      {contact.email && (
        <p className="mt-6 font-mono">
          <InkLink href={`mailto:${contact.email}`}>{contact.email}</InkLink>
        </p>
      )}
      <p className="text-ink-soft mt-7">
        Or find me on{' '}
        {contact.socials.map((social, i) => (
          <span key={social.href}>
            <InkLink href={social.href} className="text-ink">
              {social.label}
            </InkLink>
            {i < last - 1 ? ', ' : i === last - 1 ? ' and ' : '.'}
          </span>
        ))}
      </p>
    </section>
  );
}
