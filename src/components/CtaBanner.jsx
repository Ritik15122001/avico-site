import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

/**
 * Closing call to action. Photographic background with a dark scrim, mirroring
 * the hero so the page opens and closes on the same treatment.
 */
export function CtaBanner({
  image = '/images/industries/industrial-manufacturing.webp',
  kicker = 'Next step',
  title = 'Put the machine on your floor first',
  body = 'Trials run on your actual surface, under your actual soil load, before anything is quoted.',
}) {
  return (
    <Reveal>
      <section className="relative isolate overflow-hidden rounded-[var(--radius-glass)] border border-line">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <span aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-180 from-black/72 via-black/60 to-black/78" />
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(90%_130%_at_12%_100%,color-mix(in_srgb,var(--pri)_40%,transparent),transparent_70%)]"
        />

        <div className="relative flex flex-col items-center gap-4 px-5 py-12 text-center sm:px-10 sm:py-16">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white backdrop-blur-md">
            <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent2" />
            {kicker}
          </span>

          <h2 className="max-w-[20ch] text-balance font-display text-[1.75rem] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.3rem]">
            {title}
          </h2>

          <p className="max-w-[54ch] text-pretty text-[0.92rem] leading-[1.6] text-white/75 sm:text-[0.98rem]">
            {body}
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-linear-150 from-primary2 to-primary px-7 font-sans text-[0.77rem] font-bold uppercase tracking-[0.1em] text-on-accent glow-accent transition hover:-translate-y-0.5 hover:glow-accent-lg"
            >
              Book a demonstration
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 font-sans text-[0.77rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/20"
            >
              Browse catalogue
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
