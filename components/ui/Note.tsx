// A handwritten note in the margin, slightly tilted.
import classNames from 'classnames';

export function Note({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={classNames(
        'font-hand text-ink-faint inline-block -rotate-2 text-[1.45rem] leading-[1.15] font-semibold',
        className
      )}
    >
      {children}
    </span>
  );
}
