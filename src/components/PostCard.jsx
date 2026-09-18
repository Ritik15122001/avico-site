import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Shot } from './Media';
import { cx } from '../lib/cx';

function Meta({ post, className }) {
  return (
    <p className={cx('flex items-center gap-2.5 font-mono text-[0.6rem] uppercase tracking-[0.14em]', className)}>
      <span className="rounded-full border border-[color-mix(in_srgb,var(--pri)_28%,transparent)] bg-[color-mix(in_srgb,var(--pri)_10%,transparent)] px-2.5 py-1 text-accent">
        {post.category}
      </span>
      <span className="inline-flex items-center gap-1.5 text-muted2">
        <Clock size={11} aria-hidden="true" />
        {post.readTime}
      </span>
    </p>
  );
}

/** Wide lead article: image beside the copy on desktop, stacked below it on mobile. */
export function FeaturedPost({ post }) {
  return (
    <GlassCard as="article" hover className="group grid overflow-hidden lg:grid-cols-2">
      <Shot src={post.image} alt="" ratio="aspect-[16/10] lg:aspect-auto lg:h-full" className="rounded-none" />
      <div className="flex flex-col items-start gap-3 p-5 sm:p-7 lg:justify-center lg:p-9">
        <Meta post={post} />
        <h3 className="font-display text-[1.35rem] font-bold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[1.7rem]">
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">{post.title}</Link>
        </h3>
        <p className="max-w-[54ch] text-[0.88rem] leading-[1.6] text-muted">{post.excerpt}</p>
        <span className="mt-1 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary2">
          Read article
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </GlassCard>
  );
}

export function PostCard({ post }) {
  return (
    <GlassCard as="article" hover className="group flex h-full flex-col overflow-hidden">
      <Shot src={post.image} alt="" ratio="aspect-[16/9]" className="rounded-none" />
      <div className="flex flex-1 flex-col items-start gap-2.5 p-4 sm:p-5">
        <Meta post={post} />
        <h3 className="font-display text-[1rem] font-bold leading-snug text-ink">
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">{post.title}</Link>
        </h3>
        <p className="line-clamp-3 text-[0.82rem] leading-[1.55] text-muted">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-primary2">
          Read article
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </GlassCard>
  );
}
