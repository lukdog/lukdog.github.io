// Name, the four sections and the theme switch.
import type { Link } from '@/content/types';
import { InkLink } from '@/components/ui/InkLink';
import { ThemeToggle } from './ThemeToggle';

export function Header({ name, nav }: { name: string; nav: Link[] }) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1 pt-6 min-[860px]:grid-cols-[minmax(0,1fr)_auto_auto]">
      <a href="#top" className="text-ink justify-self-start text-lg font-bold tracking-[-0.01em] no-underline">
        {name}
      </a>
      <nav
        aria-label="Sections"
        className="text-ink-soft col-span-full flex flex-wrap gap-x-[22px] min-[860px]:col-span-1 min-[860px]:col-start-2 min-[860px]:row-start-1 min-[860px]:mr-2"
      >
        {nav.map((link) => (
          <InkLink key={link.href} href={link.href} bare className="py-2.5">
            {link.label}
          </InkLink>
        ))}
      </nav>
      <ThemeToggle className="col-start-2 row-start-1 min-[860px]:col-start-3" />
    </header>
  );
}
