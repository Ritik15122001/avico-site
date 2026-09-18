import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cx } from '../lib/cx';

const base =
  'inline-flex h-12 items-center justify-center gap-2 rounded-full border px-6 text-center ' +
  'font-sans text-[0.77rem] font-bold uppercase tracking-[0.09em] transition ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary2 ' +
  'disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary:
    'border-transparent bg-linear-150 from-primary2 to-primary text-on-accent ' +
    'glow-accent ' +
    'hover:-translate-y-0.5 hover:glow-accent-lg',
  secondary:
    'border-line2 bg-[color-mix(in_srgb,var(--tint)_6%,transparent)] text-ink hover:border-primary2 hover:bg-[color-mix(in_srgb,var(--tint)_12%,transparent)]',
  ghost: 'border-transparent text-ink hover:bg-[color-mix(in_srgb,var(--tint)_8%,transparent)]',
};

/** Renders <Link>, <a> or <button> depending on the props — same box in all three cases. */
export function Button({ to, href, variant = 'primary', className, children, ...rest }) {
  const cls = cx(base, variants[variant], className);
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button type="button" className={cls} {...rest}>{children}</button>;
}

export function ArrowLink({ to, href, children, className }) {
  const cls = cx(
    'group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em]',
    'text-primary2 transition hover:text-accent',
    className,
  );
  const inner = (
    <>
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </>
  );
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <Link to={to} className={cls}>{inner}</Link>;
}
