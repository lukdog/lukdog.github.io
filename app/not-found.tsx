// A torn-out page: the link points somewhere that does not exist.
import { InkLink } from '@/components/ui/InkLink';
import { Note } from '@/components/ui/Note';

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[70vh] max-w-[1080px] content-center gap-4 py-16">
      <h1 className="text-[clamp(2.6rem,7vw,4.5rem)] leading-none font-extrabold tracking-[-0.035em]">
        This page is missing.
      </h1>
      <Note>(maybe I tore it out of the notebook)</Note>
      <p className="mt-4">
        <InkLink href="/">Back to the first page</InkLink>
      </p>
    </main>
  );
}
