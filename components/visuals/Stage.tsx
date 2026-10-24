// The fixed-height box every object sits in, so a row of objects keeps one size.
// Objects start at the left edge of the text below them, like the pen drawings do.
export function Stage({ children }: { children?: React.ReactNode }) {
  return <div className="grid h-[200px] items-center justify-items-start">{children}</div>;
}
