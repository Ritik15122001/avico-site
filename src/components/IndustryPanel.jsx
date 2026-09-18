import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Kicker } from './SectionHeader';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function IndustryPanel({ industry, onClose }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      id={`industry-${industry.slug}`}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: 14 }}
      transition={{ duration: 0.3, ease: [0.2, 0.9, 0.25, 1] }}
      className="scroll-mt-28"
    >
      <GlassCard className="p-5 sm:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Kicker>Industry</Kicker>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{industry.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 flex-none items-center gap-2 rounded-full border border-line bg-[color-mix(in_srgb,var(--tint)_6%,transparent)] px-4 text-[0.78rem] text-muted transition hover:border-primary2 hover:text-ink"
          >
            <X size={14} aria-hidden="true" />
            Close
          </button>
        </div>

        <p className="max-w-[70ch] text-pretty text-[0.95rem] leading-relaxed text-muted">{industry.lead}</p>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <h4 className="mb-3.5 font-mono text-[0.63rem] uppercase tracking-[0.17em] text-primary2">Cleaning challenges</h4>
            <ul className="flex flex-col gap-2.5">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-[0.86rem] leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-mono text-[0.63rem] uppercase tracking-[0.17em] text-primary2">Recommended equipment</h4>
            <ul className="flex flex-col gap-1.5">
              {industry.equipment.map((e) => (
                <li
                  key={e}
                  className="rounded-[10px] border border-[color-mix(in_srgb,var(--tint)_6%,transparent)] bg-[color-mix(in_srgb,var(--tint)_5%,transparent)] px-3.5 py-2.5 text-[0.82rem] text-ink"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-7 flex flex-wrap gap-1.5 border-t border-line pt-5">
          {industry.tags.map((t) => (
            <li key={t} className="rounded-full border border-line bg-[color-mix(in_srgb,var(--tint)_5%,transparent)] px-3 py-1 text-[0.73rem] text-muted">
              {t}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  );
}
