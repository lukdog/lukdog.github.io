// Copyright, a small note and the link to this site's source.
import { InkLink } from '@/components/ui/InkLink';

export function Footer({ name, note, repo }: { name: string; note: string; repo: string }) {
  return (
    <footer className="border-rule text-ink-faint flex flex-wrap justify-between gap-x-6 gap-y-2 border-t-2 border-dashed pt-6 pb-10 font-mono text-[0.8125rem]">
      <span>
        © {new Date().getFullYear()} {name}
      </span>
      <span>
        {note} · <InkLink href={repo}>source</InkLink>
      </span>
    </footer>
  );
}
