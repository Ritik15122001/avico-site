import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { Container, Section } from '../components/Layout';
import { GlassCard } from '../components/GlassCard';
import { PostCard } from '../components/PostCard';
import { Reveal, RevealGroup } from '../components/Reveal';
import { Button } from '../components/Button';
import { Kicker } from '../components/SectionHeader';
import { CtaBanner } from '../components/CtaBanner';
import { Seo } from '../components/Seo';
import { useContentStore } from '../store/contentStore';

export default function PostDetail() {
  const { slug } = useParams();
  const posts = useContentStore((s) => s.posts);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Seo title="Article not found" />
        <Section className="pt-28 sm:pt-32">
          <Container className="flex flex-col items-start gap-5">
            <Kicker>404</Kicker>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">That article isn&rsquo;t here</h1>
            <p className="max-w-[54ch] text-muted">It may have been renamed or unpublished.</p>
            <Button to="/blog">All articles</Button>
          </Container>
        </Section>
      </>
    );
  }

  const paragraphs = (post.body || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />

      <Section className="pt-24 pb-0 sm:pt-28 lg:pt-32">
        <Container>
          <Link
            to="/blog"
            className="group mb-6 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition hover:text-accent"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            All articles
          </Link>

          <article>
            <header className="max-w-[46rem]">
              <p className="mb-4 flex flex-wrap items-center gap-2.5 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
                <span className="rounded-full border border-[color-mix(in_srgb,var(--pri)_28%,transparent)] bg-[color-mix(in_srgb,var(--pri)_10%,transparent)] px-2.5 py-1 text-accent">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted2">
                  <Clock size={11} aria-hidden="true" />
                  {post.readTime}
                </span>
              </p>

              <h1 className="text-balance font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.6rem]">
                {post.title}
              </h1>

              <p className="mt-4 max-w-[60ch] text-pretty text-[1rem] leading-[1.65] text-muted sm:text-[1.08rem]">
                {post.excerpt}
              </p>
            </header>

            {post.image && (
              <Reveal className="mt-8">
                <GlassCard className="overflow-hidden p-1.5">
                  <img
                    src={post.image}
                    alt=""
                    loading="eager"
                    decoding="async"
                    className="aspect-[16/8] w-full rounded-[calc(var(--radius-glass)-6px)] object-cover"
                  />
                </GlassCard>
              </Reveal>
            )}

            {paragraphs.length > 0 && (
              <div className="mt-9 max-w-[42rem]">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mb-5 text-pretty text-[1rem] leading-[1.78] text-muted first:text-[1.05rem] first:text-ink"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </article>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container>
            <h2 className="mb-6 font-display text-[1.4rem] font-bold text-ink sm:text-[1.7rem]">Keep reading</h2>
            <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {related.map((p) => <PostCard key={p.id} post={p} />)}
            </RevealGroup>
          </Container>
        </Section>
      )}

      <Section className="pt-0">
        <Container><CtaBanner /></Container>
      </Section>
    </>
  );
}
