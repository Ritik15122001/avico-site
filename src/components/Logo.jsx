import { Link } from 'react-router-dom';
import { useContentStore } from '../store/contentStore';

export function Logo({ size = 40, onDark = false, className = '' }) {
  const site = useContentStore((s) => s.site);
  return (
    <Link to="/" className={`inline-flex flex-none items-center gap-2.5 ${className}`} aria-label={`${site.name} — home`}>
      <svg
        viewBox="0 0 44 44"
        width={size}
        height={size}
        aria-hidden="true"
        className="flex-none glow-accent-mark"
      >
        <defs>
          <linearGradient id="avico-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--acc)" />
            <stop offset="0.55" stopColor="var(--pri2)" />
            <stop offset="1" stopColor="var(--acc2)" />
          </linearGradient>
        </defs>
        {/* tile */}
        <rect x="1" y="1" width="42" height="42" rx="12" fill="url(#avico-mark)" />
        <rect x="1.5" y="1.5" width="41" height="41" rx="11.5" fill="none" stroke="rgb(255 255 255 / 0.35)" />
        {/* the A */}
        <path d="M10.5 33.5 20.2 11.2a2 2 0 0 1 3.6 0l9.7 22.3" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* crossbar drawn as a cleaning sweep */}
        <path d="M6.5 30.2c7.2-5.6 19.4-8.3 31.4-6.4-10.6.6-20.6 3.3-28.8 8.6a1.6 1.6 0 0 1-2.6-2.2z" fill="#fff" />
        {/* sparkle — the clean finish */}
        <path d="M34.6 6.6l1 2.9 2.9 1-2.9 1-1 2.9-1-2.9-2.9-1 2.9-1z" fill="#FFE8CF" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.24rem] font-extrabold tracking-[0.09em] ${onDark ? 'text-white' : 'text-ink'}`}>{site.name}</span>
        <span className={`mt-1 font-mono text-[0.55rem] uppercase tracking-[0.34em] ${onDark ? 'text-white/55' : 'text-muted2'}`}>{site.tagline}</span>
      </span>
    </Link>
  );
}
