import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** Section-entrance reveal. Falls back to a plain div when motion is reduced. */
export function Reveal({ as = 'div', delay = 0, y = 22, className, children, ...rest }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduced) {
    const Plain = as;
    return <Plain className={className} {...rest}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.9, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Wraps a grid so its children stagger in at a fixed 60ms step, capped at 8. */
export function RevealGroup({ as: Tag = 'div', className, children }) {
  const reduced = useReducedMotion();
  const items = Array.isArray(children) ? children : [children];

  if (reduced) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className}>
      {items.map((child, i) => (
        <Reveal key={child?.key ?? i} delay={Math.min(i, 7) * 0.06} className="contents">
          {child}
        </Reveal>
      ))}
    </Tag>
  );
}
