// Renders copy from content/site.ts; `~~word~~` becomes a word crossed out by hand.
export function RichText({ text }: { text: string }) {
  return text.split(/(~~[^~]+~~)/).map((part, i) =>
    part.startsWith('~~') ? (
      <s
        key={i}
        className="text-ink-faint after:bg-coral relative no-underline after:absolute after:inset-x-[-6%] after:top-[54%] after:h-[3px] after:-rotate-[5deg] after:rounded-full"
      >
        {part.slice(2, -2)}
      </s>
    ) : (
      part
    )
  );
}
