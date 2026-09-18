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
            <stop offset="0" stopColor="var(--pri2)" />
            <stop offset="1" stopColor="var(--blob1)" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="41" height="41" rx="13" fill="url(#avico-mark)" />
        <rect x="1.5" y="1.5" width="41" height="41" rx="13" fill="none" stroke="rgb(255 255 255 / 0.4)" />
        <path d="M9 32 20 12l11 20" fill="none" stroke="#fff" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6 26h10.8" stroke="#fff" strokeWidth="3.3" strokeLinecap="round" />
        <circle cx="34" cy="13" r="3.1" fill="#fff" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.24rem] font-extrabold tracking-[0.09em] ${onDark ? 'text-white' : 'text-ink'}`}>{site.name}</span>
        <span className={`mt-1 font-mono text-[0.55rem] uppercase tracking-[0.34em] ${onDark ? 'text-white/55' : 'text-muted2'}`}>{site.tagline}</span>
      </span>
    </Link>
  );
}
