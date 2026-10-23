// The whole site is this one page, read top to bottom: hello, work, the path so far, after work, say hi.
import { site } from '@/content/site';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { Timeline } from '@/components/sections/Timeline';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1080px]">
      <Header name={site.name} nav={site.nav} />
      <main>
        <Hero hero={site.hero} />
        <Section section={site.work} />
        <Timeline timeline={site.timeline} />
        <Section section={site.afterWork} />
        <Contact contact={site.contact} />
      </main>
      <Footer name={site.name} note={site.footer.note} repo={site.repo} />
    </div>
  );
}
