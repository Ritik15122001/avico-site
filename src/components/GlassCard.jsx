import { cx } from '../lib/cx';

/**
 * The single glass surface used by every card on the site.
 * `hover` adds the lift; `as` lets it be an <article>, <li>, <button>, etc.
 */
export function GlassCard({ as: Tag = 'div', hover = false, className, children, ...rest }) {
  return (
    <Tag className={cx('glass', hover && 'glass-hover', className)} {...rest}>
      {children}
    </Tag>
  );
}
