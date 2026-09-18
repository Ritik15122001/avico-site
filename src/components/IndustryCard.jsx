import { Link } from 'react-router-dom';
import {
  Building2, BedDouble, ClipboardCheck, Factory, GraduationCap, HeartPulse,
  Landmark, MonitorCog, Plane, ShoppingBag, UtensilsCrossed, Warehouse,
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { cx } from '../lib/cx';

const ICONS = {
  Building2, BedDouble, ClipboardCheck, Factory, GraduationCap, HeartPulse,
  Landmark, MonitorCog, Plane, ShoppingBag, UtensilsCrossed, Warehouse,
};

/**
 * Visual band. Photography where we have it; otherwise a designed accent panel
 * carrying the sector icon, so a card without a photo still reads as finished.
 */
function Visual({ industry }) {
  const Icon = ICONS[industry.icon] ?? Factory;

  return (
    <div className="relative aspect-[16/8] overflow-hidden bg-deep">
      {industry.image ? (
        <>
          <img
            src={industry.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-linear-0 from-[color-mix(in_srgb,var(--sh)_55%,transparent)] via-transparent to-transparent" />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(130%_120%_at_18%_0%,color-mix(in_srgb,var(--pri2)_26%,transparent),transparent_62%),linear-gradient(150deg,var(--deep),var(--bg2))]"
        >
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'linear-gradient(color-mix(in srgb, var(--tint) 5%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--tint) 5%, transparent) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <Icon
            size={104}
            strokeWidth={1}
            className="absolute -bottom-5 -right-4 text-[color-mix(in_srgb,var(--pri)_16%,transparent)] transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}

      <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl border border-line bg-[var(--glassSoft)] text-primary2 backdrop-blur-md">
        <Icon size={16} strokeWidth={2} aria-hidden="true" />
      </span>
    </div>
  );
}

/** Pass `to` for a navigating card (home) or `onSelect` for the in-page disclosure. */
export function IndustryCard({ industry, to, onSelect, active = false }) {
  const overlay = "text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none";

  return (
    <GlassCard
      as="article"
      hover
      className={cx('group flex h-full flex-col overflow-hidden', active && 'border-[color-mix(in_srgb,var(--pri2)_60%,transparent)]')}
    >
      <Visual industry={industry} />

      <div className="flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
        <h3 className="font-display text-[0.95rem] font-bold leading-snug text-ink">
          {to ? (
            <Link to={to} className={overlay}>{industry.name}</Link>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(industry.slug)}
              aria-expanded={active}
              aria-controls={`industry-${industry.slug}`}
              className={overlay}
            >
              {industry.name}
            </button>
          )}
        </h3>
        <p className="line-clamp-2 text-[0.8rem] leading-[1.55] text-muted">{industry.summary}</p>
      </div>
    </GlassCard>
  );
}
