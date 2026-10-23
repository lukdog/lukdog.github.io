// A link underlined in pencil; on hover an ink stroke is drawn over it.
import classNames from 'classnames';

type InkLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Hide the pencil line at rest (used in the navigation). */
  bare?: boolean;
  className?: string;
};

export function InkLink({ href, children, bare = false, className }: InkLinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        'relative text-inherit no-underline',
        'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-current',
        'after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100',
        !bare && 'bg-[linear-gradient(var(--rule),var(--rule))] bg-size-[100%_2px] bg-bottom-left bg-no-repeat',
        className
      )}
    >
      {children}
    </a>
  );
}
