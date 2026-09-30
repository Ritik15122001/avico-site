import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Plate } from './Media';

export function ProductCard({ code, category, name, image, to = '/contact', cta = 'Request quote', badge }) {
  return (
    <GlassCard as="article" hover className="group flex h-full flex-col overflow-hidden p-3">
      <div className="relative">
        <Plate src={image} alt={name} caption={code} />
        {badge && (
          <span className="absolute right-2 top-2 rounded-full bg-linear-150 from-primary2 to-primary px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-on-accent">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-3">
        <code className="font-mono text-[0.78rem] text-accent">{code}</code>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted2">{category}</span>
      </div>

      <h3 className="mt-1.5 font-sans text-[0.94rem] font-semibold leading-snug text-ink">
        <Link to={to} className="after:absolute after:inset-0 after:content-['']">
          {name}
        </Link>
      </h3>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-2.5 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-primary2">
        <span>{cta}</span>
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </GlassCard>
  );
}
