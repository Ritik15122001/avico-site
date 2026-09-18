import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from './Layout';
import { cx } from '../lib/cx';
import { useContentStore } from '../store/contentStore';
import { useReducedMotion } from '../hooks/useReducedMotion';

const DURATION = 7000;

export function Hero() {
  const heroSlides = useContentStore((s) => s.hero);
  const [index, setIndex] = useState(0);
  // Only slides in this set have their src attached, so we never fetch five
  // 1080p files up front.
  const [loaded, setLoaded] = useState(() => new Set([0]));
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const reduced = useReducedMotion();

  const slide = heroSlides[index] ?? heroSlides[0];

  const go = useCallback((n) => {
    const count = heroSlides.length;
    if (!count) return;
    const next = ((n % count) + count) % count;
    setIndex(next);
    setLoaded((prev) => new Set(prev).add(next).add((next + 1) % count));
  }, [heroSlides.length]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !inView || heroSlides.length < 2) return;
    let timer = window.setInterval(() => go(index + 1), DURATION);
    const onVisibility = () => {
      clearInterval(timer);
      if (!document.hidden) timer = window.setInterval(() => go(index + 1), DURATION);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [index, go, reduced, inView, heroSlides.length]);

  // single source of truth for playback: active slide only, and only while in view
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index && inView) v.play().catch(() => {});
      else v.pause();
    });
  }, [index, inView, loaded]);

  const rise = reduced
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -12 } };

  if (!slide) return null;

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pb-12"
    >
      {/* footage */}
      <div className="absolute inset-0 -z-30 bg-[#0b0c0f]">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden="true"
            className={cx(
              'absolute inset-0 transition-opacity duration-[1200ms] ease-out',
              i === index ? 'opacity-100' : 'opacity-0',
            )}
          >
            {loaded.has(i) && (
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={s.video}
                muted
                loop
                playsInline
                preload={i === 0 ? 'auto' : 'metadata'}
                className={cx('h-full w-full object-cover', i === index && !reduced && 'kenburns')}
              />
            )}
          </div>
        ))}
      </div>

      {/*
        Cinematic scrim. Deliberately theme-independent: hero copy is always light
        on darkened footage, which reads consistently across all six themes and
        keeps the video visible instead of hiding it behind a panel.
      */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-linear-180 from-black/75 via-black/25 via-40% to-black/70" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-linear-90 from-black/80 via-black/40 via-45% to-black/10" />

      <Container className="relative z-10 flex flex-1 flex-col">
        <div className="flex flex-1 items-center py-8 sm:py-10">
          <div className="w-full max-w-[64rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              {...rise}
              transition={{ duration: 0.45, ease: [0.2, 0.9, 0.25, 1] }}
              className="flex flex-col items-start gap-4 sm:gap-5"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[0.64rem] uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent2" />
                {slide.eyebrow}
              </span>

              <h2 className="font-display text-[clamp(2.15rem,7.4vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-white drop-shadow-[0_2px_24px_rgb(0_0_0/0.5)]">
                {slide.title.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
                <span className="block text-accent2">{slide.accent}</span>
              </h2>

              <p className="max-w-[70ch] text-pretty text-[0.97rem] leading-[1.6] text-white/75 sm:text-[1.08rem]">
                {slide.lead}
              </p>

              <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Link
                  to="/products"
                  className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-linear-150 from-primary2 to-primary px-7 font-sans text-[0.78rem] font-bold uppercase tracking-[0.1em] text-on-accent glow-accent transition hover:-translate-y-0.5 hover:glow-accent-lg"
                >
                  Explore Products
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link
                  to="/industries"
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-7 font-sans text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/20"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* slim slide indicators — the rail was removed, but an auto-rotating
            carousel still needs a visible, operable control */}
        <div role="tablist" aria-label="Hero slides" className="flex items-center gap-2">
          {heroSlides.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Slide ${i + 1}: ${s.thumb.label}`}
                onClick={() => go(i)}
                className="group relative h-8 w-12 sm:w-16"
              >
                <span
                  className={cx(
                    'absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full transition-colors',
                    active ? 'bg-white/30' : 'bg-white/20 group-hover:bg-white/40',
                  )}
                >
                  {active && <span key={index} className={cx('block h-full rounded-full bg-accent2', !reduced && 'fill-bar')} />}
                </span>
              </button>
            );
          })}
        </div>

      </Container>

    </section>
  );
}
