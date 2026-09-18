import { cx } from '../lib/cx';

export function Container({ as: Tag = 'div', className, children }) {
  return <Tag className={cx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</Tag>;
}

/** One vertical rhythm for every section: 32px mobile → 44px tablet → 56px desktop. */
export function Section({ as: Tag = 'section', className, children, ...rest }) {
  return (
    <Tag className={cx('py-8 sm:py-11 lg:py-14', className)} {...rest}>
      {children}
    </Tag>
  );
}
