import { Container, Section } from '../components/Layout';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowLink, Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { GlassCard } from '../components/GlassCard';
import { Plate } from '../components/Media';
import { Reveal, RevealGroup } from '../components/Reveal';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { IndustryCard } from '../components/IndustryCard';
import { PostCard } from '../components/PostCard';
import { CtaBanner } from '../components/CtaBanner';
import { NewsletterForm } from '../components/NewsletterForm';
import { Seo } from '../components/Seo';

import { useContentStore } from '../store/contentStore';

// image-led cards go 2-up on phones; text-heavy cards stay single column
const gridCards = 'grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4';
const gridCards3 = 'grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3';
const gridText = 'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4';
const gridText3 = 'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3';

export default function Home() {
  const categories = useContentStore((s) => s.categories);
  const trendingProducts = useContentStore((s) => s.trending);
  const bestsellers = useContentStore((s) => s.bestsellers);
  const topSellers = useContentStore((s) => s.topSellers);
  const fieldGallery = useContentStore((s) => s.gallery);
  const industries = useContentStore((s) => s.industries);
  const posts = useContentStore((s) => s.posts);
  const valueProps = useContentStore((s) => s.valueProps);
  const testimonials = useContentStore((s) => s.testimonials);
  const aboutParagraphs = useContentStore((s) => s.aboutParagraphs);

  return (
    <>
      <Seo />
      <h1 className="sr-only">Avico — mechanised cleaning equipment, tools and chemistry</h1>
      <Hero />

      <Section>
        <Container>
          <SectionHeader
            kicker="Choose categories"
            title="Eight ranges, one supplier"
            lead="Machines, manual systems and chemistry designed to work together."
            action={<ArrowLink to="/products">All products</ArrowLink>}
          />
          <RevealGroup className={gridCards}>
            {categories.map((c) => <CategoryCard key={c.id} {...c} />)}
          </RevealGroup>
        </Container>
      </Section>

      <Marquee />

      <Section>
        <Container>
          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <GlassCard className="p-4">
                <Plate src="/images/general/about.webp" alt="Avico equipment range" ratio="aspect-[5/4]" />
              </GlassCard>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col gap-5">
              <SectionHeader
                kicker="About us"
                title="Built around the floor, not the brochure"
                className="mb-0 sm:mb-0"
              />
              {aboutParagraphs.slice(0, 2).map((p) => (
                <p key={p} className="max-w-[64ch] text-pretty leading-relaxed text-muted">{p}</p>
              ))}
              <Button to="/about" variant="secondary" className="self-start">More about Avico</Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            kicker="New trending"
            title="Machines moving this quarter"
            action={<ArrowLink to="/products">View all</ArrowLink>}
          />
          <RevealGroup className={gridCards3}>
            {trendingProducts.map((p) => <ProductCard key={p.id} {...p} />)}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader kicker="In the field" title="Where these machines work" />
          <RevealGroup className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 lg:grid-cols-6">
            {fieldGallery.map((f) => (
              <GlassCard key={f.code} className="overflow-hidden p-1.5">
                <Plate src={f.image} alt={f.code} caption={f.code} ratio="aspect-square" />
              </GlassCard>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            kicker="Bestsellers"
            title="Consumables and daily tools"
            lead="The items a cleaning team touches every hour of the shift."
            action={<ArrowLink to="/products">Shop the range</ArrowLink>}
          />
          <RevealGroup className={gridCards}>
            {bestsellers.map((p) => <ProductCard key={p.id} {...p} />)}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader kicker="Why choose us" title="What you are actually buying" />
          <RevealGroup className={gridText}>
            {valueProps.map((v) => (
              <GlassCard key={v.n} as="article" className="flex h-full flex-col gap-2 p-5">
                <b className="font-mono text-[0.7rem] tracking-[0.14em] text-primary2">{v.n}</b>
                <h3 className="font-sans text-[1.02rem] font-semibold leading-snug text-ink">{v.title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-muted">{v.body}</p>
              </GlassCard>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            kicker="Industries"
            title="Specified sector by sector"
            action={<ArrowLink to="/industries">All industries</ArrowLink>}
          />
          <RevealGroup className={gridCards}>
            {industries.slice(0, 8).map((i) => (
              <IndustryCard key={i.slug} industry={i} to={`/industries#${i.slug}`} />
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader kicker="Top seller" title="Reordered most often" />
          <RevealGroup className={gridCards3}>
            {topSellers.map((p) => <ProductCard key={p.id} {...p} />)}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            kicker="Our blog"
            title="Notes from the floor"
            lead="Specification, chemistry and maintenance, written for the people running the equipment."
            action={<ArrowLink to="/blog">All articles</ArrowLink>}
          />
          <RevealGroup className={gridText3}>
            {posts.slice(0, 3).map((p) => <PostCard key={p.id} post={p} />)}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader kicker="What customers say" title="In their words" />
          <RevealGroup className={gridText3}>
            {testimonials.map((t) => (
              <GlassCard key={t.name + t.org} as="figure" className="m-0 flex h-full flex-col gap-3.5 p-5">
                <span aria-hidden="true" className="font-display text-4xl leading-none text-primary2 opacity-50">&ldquo;</span>
                <blockquote className="text-[0.97rem] leading-relaxed text-ink">{t.quote}</blockquote>
                <figcaption className="mt-auto flex flex-col gap-0.5 border-t border-line pt-3.5">
                  <b className="text-[0.88rem] text-ink">{t.name}</b>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.13em] text-muted2">{t.org}</span>
                </figcaption>
              </GlassCard>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="flex flex-col gap-4">
          <NewsletterForm />
          <CtaBanner />
        </Container>
      </Section>
    </>
  );
}
