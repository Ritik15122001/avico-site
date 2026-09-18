import { cx } from '../lib/cx';
import { ArrowLink } from './Button';
import { Reveal } from './Reveal';

export function Kicker({ children, className }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2.5 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-accent',
        'before:block before:h-px before:w-5 before:bg-current',
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Standard section heading block. `action` renders inline on desktop and
 * drops below the copy on mobile so the baseline never breaks.
 */
export function SectionHeader({ kicker, title, lead, action, as = 'h2', align = 'start', className }) {
  const Heading = as;
  const centered = align === 'center';

  return (
    <Reveal
      className={cx(
        'mb-6 flex flex-col gap-4 sm:mb-8',
        action && !centered && 'lg:flex-row lg:items-end lg:justify-between lg:gap-8',
        className,
      )}
    >
      <div className={cx('flex flex-col gap-2.5', centered ? 'mx-auto max-w-2xl items-center text-center' : 'max-w-2xl items-start')}>
        {kicker && <Kicker>{kicker}</Kicker>}
        <Heading className="text-balance font-display text-[1.6rem] font-bold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[2rem] lg:text-[2.3rem]">
          {title}
        </Heading>
        {lead && <p className="max-w-[58ch] text-pretty text-[0.92rem] leading-[1.6] text-muted sm:text-[0.95rem]">{lead}</p>}
      </div>
      {action && <div className={cx('flex-none', centered && 'self-center')}>{action}</div>}
    </Reveal>
  );
}

export { ArrowLink };
