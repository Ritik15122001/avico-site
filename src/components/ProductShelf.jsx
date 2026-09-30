import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus } from 'lucide-react';
import { modelSlug } from '../data/categories';
import { GlassCard } from './GlassCard';
import { Plate } from './Media';
import { cx } from '../lib/cx';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ProductShelf({ category, open, onToggle }) {
  const reduced = useReducedMotion();
  const panelId = `shelf-${category.id}`;

  return (
    <GlassCard as="section" id={category.id} className="overflow-hidden scroll-mt-28">
      <h3>
        <button
          type="button"
          onClick={() => onToggle(category.id)}
          aria-expanded={open}
          aria-controls={panelId}
          className="grid w-full grid-cols-[56px_1fr_auto] items-center gap-3.5 p-3.5 text-left transition hover:bg-[color-mix(in_srgb,var(--tint)_5%,transparent)] sm:grid-cols-[80px_1fr_auto] sm:gap-5 sm:p-5 lg:grid-cols-[120px_1fr_auto] lg:gap-6"
        >
          <Plate src={category.image} alt={category.name} ratio="aspect-square" className="w-full" />

          <span className="min-w-0">
            <span className="block font-mono text-[0.58rem] uppercase tracking-[0.16em] text-accent sm:text-[0.61rem]">
              {category.kicker} · {category.count} models
            </span>
            <span className="mt-1.5 block font-display text-lg font-bold tracking-tight text-ink sm:text-xl lg:text-[1.65rem]">
              {category.name}
            </span>
            <span className="mt-1.5 line-clamp-3 block max-w-[64ch] text-[0.82rem] leading-relaxed text-muted sm:text-[0.87rem]">
              {category.blurb}
            </span>
          </span>

          <span
            aria-hidden="true"
            className={cx(
              'grid h-10 w-10 flex-none place-items-center rounded-full border border-line transition duration-300 sm:h-11 sm:w-11',
              open ? 'rotate-45 border-transparent bg-accent text-on-accent' : 'bg-[color-mix(in_srgb,var(--tint)_8%,transparent)] text-accent',
            )}
          >
            <Plus size={18} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.9, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-line px-3.5 pb-6 pt-6 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
              {category.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">
                    {group.title}{' '}
                    <span className="font-mono text-[0.67rem] font-normal normal-case tracking-normal text-muted2">
                      {group.models.length}
                    </span>
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {group.models.map((m) => (
                      <li key={m.code}>
                        <Link
                          to={`/products/${category.id}/${modelSlug(m.code)}`}
                          className="group/row flex items-center gap-2.5 rounded-[10px] border border-[color-mix(in_srgb,var(--tint)_6%,transparent)] bg-[color-mix(in_srgb,var(--tint)_4.5%,transparent)] px-3 py-2 transition hover:border-line2 hover:bg-[color-mix(in_srgb,var(--tint)_9%,transparent)]"
                        >
                        {m.image && (
                          <span className="h-7 w-7 flex-none overflow-hidden rounded-md bg-[var(--plateA)] p-0.5">
                            <img src={m.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                          </span>
                        )}
                        <code className="flex-none font-mono text-[0.74rem] text-accent">{m.code}</code>
                        {m.newArrival && (
                          <span className="flex-none rounded-full bg-[color-mix(in_srgb,var(--pri)_14%,transparent)] px-1.5 py-px font-mono text-[0.5rem] uppercase tracking-[0.12em] text-accent">New</span>
                        )}
                        <span className="ml-auto truncate text-right text-[0.74rem] text-muted2">{m.spec}</span>
                        <ChevronRight size={13} className="flex-none text-muted2 transition group-hover/row:translate-x-0.5 group-hover/row:text-accent" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
