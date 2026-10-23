// The fixed-height box every object sits in, so a row of objects keeps one size.
export function Stage({ children }: { children?: React.ReactNode }) {
  return <div className="grid h-[200px] place-items-center">{children}</div>;
}
