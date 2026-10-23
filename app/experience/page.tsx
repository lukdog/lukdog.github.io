// The old /experience page is now a section of the home page; old links land there.
import type { Metadata } from 'next';
import { InkLink } from '@/components/ui/InkLink';

export const metadata: Metadata = { title: 'Moved', robots: { index: false } };

export default function Experience() {
  return (
    <main className="mx-auto max-w-[1080px] py-16">
      <meta httpEquiv="refresh" content="0; url=/#so-far" />
      <p>
        This page moved: <InkLink href="/#so-far">see the path so far</InkLink>.
      </p>
    </main>
  );
}
