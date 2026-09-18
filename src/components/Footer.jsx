import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from './Layout';
import { Logo } from './Logo';
import { useContentStore } from '../store/contentStore';
import { footerColumns } from '../data/navigation';

// lucide-react v1 no longer ships brand marks, so these are inline rather than
// pulling in another icon package for three glyphs.
const SOCIAL_ICONS = {
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.65h.05C13.4 9.7 14.7 8.7 16.6 8.7c4.03 0 4.78 2.6 4.78 6V21h-4v-5.65c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.19 1.46-2.19 2.98V21H9z" />
    </svg>
  ),
  YouTube: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22.6 7.3a2.6 2.6 0 0 0-1.83-1.84C19.15 5 12 5 12 5s-7.15 0-8.77.46A2.6 2.6 0 0 0 1.4 7.3 27.4 27.4 0 0 0 .95 12c0 1.6.15 3.18.45 4.7a2.6 2.6 0 0 0 1.83 1.84C4.85 19 12 19 12 19s7.15 0 8.77-.46a2.6 2.6 0 0 0 1.83-1.84c.3-1.52.45-3.1.45-4.7s-.15-3.18-.45-4.7zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const linkCls =
  'inline-block py-1 text-[0.86rem] text-white/60 transition-colors hover:text-white focus-visible:text-white';

export function Footer() {
  const site = useContentStore((s) => s.site);

  return (
    <footer className="relative isolate mt-14 overflow-hidden bg-[var(--footer-bg)] text-[var(--footer-ink)]">
      {/* warm accent wash so the block reads as part of the brand, not a slab */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_120%_at_8%_0%,color-mix(in_srgb,var(--pri)_26%,transparent),transparent_58%)]"
      />
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-90 from-transparent via-[color-mix(in_srgb,var(--acc2)_55%,transparent)] to-transparent" />

      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:gap-x-8 lg:grid-cols-[1.7fr_1fr_1fr_1.35fr] lg:gap-10 lg:py-16">
          {/* brand */}
          <div className="col-span-2 flex flex-col items-start gap-5 lg:col-span-1">
            <Logo onDark />
            <p className="max-w-[34ch] text-[0.88rem] leading-[1.65] text-white/60">{site.blurb}</p>

            <ul className="mt-auto flex items-center gap-2.5">
              {site.social.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/65 transition hover:border-accent2/70 hover:bg-white/10 hover:text-white"
                    >
                      {Icon ? <Icon width={16} height={16} aria-hidden="true" /> : s.label[0]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* link columns */}
          {footerColumns.slice(0, 2).map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 font-mono text-[0.62rem] font-normal uppercase tracking-[0.2em] text-accent2">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={linkCls}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* contact */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-4 font-mono text-[0.62rem] font-normal uppercase tracking-[0.2em] text-accent2">
              Get in touch
            </h2>

            <ul className="flex flex-col gap-3.5">
              <li className="flex gap-3 text-[0.86rem] leading-[1.6] text-white/65">
                <MapPin size={15} className="mt-1 flex-none text-accent2" aria-hidden="true" />
                <address className="not-italic">
                  {site.address.map((l) => <span key={l} className="block">{l}</span>)}
                </address>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-[0.86rem] text-white/65 transition-colors hover:text-white">
                  <Phone size={15} className="flex-none text-accent2" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-[0.86rem] text-white/65 transition-colors hover:text-white">
                  <Mail size={15} className="flex-none text-accent2" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="group mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-linear-150 from-primary2 to-primary px-6 font-sans text-[0.73rem] font-bold uppercase tracking-[0.1em] text-on-accent glow-accent transition hover:-translate-y-0.5"
            >
              Request a quote
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[0.78rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <nav aria-label="Legal" className="flex items-center gap-6">
            {footerColumns[2].links.map((l) => (
              <Link key={l.label} to={l.to} className="transition-colors hover:text-white">{l.label}</Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
