// A drawn button with a hard pencil shadow that it sinks into when pressed.
import classNames from 'classnames';

type SketchButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { size?: 'small' | 'big' };

const sizes = {
  small:
    'bg-raised min-h-11 px-[18px] font-mono text-sm font-semibold tracking-[0.04em] shadow-[3px_3px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--ink)]',
  big: 'bg-orange text-on-marker min-h-14 px-[26px] text-[1.15rem] font-extrabold tracking-[-0.01em] shadow-[5px_5px_0_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_var(--ink)]',
};

export function SketchButton({ size = 'small', className, ...props }: SketchButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'border-ink text-ink cursor-pointer rounded-[12px_14px_11px_15px/14px_11px_15px_12px] border-2',
        'transition-[translate,box-shadow] duration-[120ms] ease-out [-webkit-tap-highlight-color:transparent]',
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
