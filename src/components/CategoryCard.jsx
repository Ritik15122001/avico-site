import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Plate } from './Media';

export function CategoryCard({ id, name, kicker, summary, image, count }) {
  return (
    <GlassCard as="article" hover className="group flex h-full flex-col overflow-hidden p-3">
      <Plate src={image} alt={name} />

      <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-accent">{kicker}</p>

      <h3 className="mt-1.5 font-display text-[1.02rem] font-bold text-ink">
        <Link to={`/products#${id}`} className="after:absolute after:inset-0 after:content-['']">
          {name}
        </Link>
      </h3>

      <p className="mt-1.5 line-clamp-2 text-[0.8rem] leading-[1.55] text-muted">{summary}</p>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-2.5 font-mono text-[0.66rem] text-muted2">
        <span>{count} models</span>
        <ArrowRight size={13} className="text-primary2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </GlassCard>
  );
}
