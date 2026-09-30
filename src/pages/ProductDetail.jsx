import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import { Container, Section } from '../components/Layout';
import { GlassCard } from '../components/GlassCard';
import { Plate } from '../components/Media';
import { ProductCard } from '../components/ProductCard';
import { Reveal, RevealGroup } from '../components/Reveal';
import { Button } from '../components/Button';
import { Kicker, SectionHeader } from '../components/SectionHeader';
import { CtaBanner } from '../components/CtaBanner';
import { Seo } from '../components/Seo';
import { useContentStore } from '../store/contentStore';
import { modelSlug } from '../data/categories';

export default function ProductDetail() {
  const { range, model: slug } = useParams();
  const categories = useContentStore((s) => s.categories);
  const site = useContentStore((s) => s.site);

  const category = categories.find((c) => c.id === range);
  let group;
  let model;
  for (const g of category?.groups || []) {
    const hit = g.models.find((m) => modelSlug(m.code) === slug);
    if (hit) { group = g; model = hit; break; }
  }

  if (!model) {
    return (
      <>
        <Seo title="Model not found" />
        <Section className="pt-28 sm:pt-32">
          <Container className="flex flex-col items-start gap-5">
            <Kicker>404</Kicker>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">That model isn&rsquo;t here</h1>
            <p className="max-w-[54ch] text-muted">It may have been renamed or moved to another range.</p>
            <Button to="/products">Full catalogue</Button>
          </Container>
        </Section>
      </>
    );
  }

  const title = model.name || model.code;
  const related = group.models.filter((m) => m.code !== model.code).slice(0, 3);
  const enquire = `/contact?product=${encodeURIComponent(`${model.code} — ${title}`)}`;

  return (
    <>
      <Seo title={`${model.code} ${title}`} description={model.summary || `${model.code} — ${model.spec}. ${category.name} by ${site.name}.`} />

      <Section className="pt-24 pb-0 sm:pt-28 lg:pt-32">
        <Container>
          <Link
            to={`/products#${category.id}`}
            className="group mb-6 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted transition hover:text-accent"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            {category.name}
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <Reveal>
              <GlassCard className="p-3 sm:p-4">
                <Plate src={model.image} alt={`${model.code} ${title}`} caption={model.code} ratio="aspect-square" eager />
              </GlassCard>
            </Reveal>

            <Reveal className="flex flex-col gap-4">
              <p className="flex flex-wrap items-center gap-2.5 font-mono text-[0.62rem] uppercase tracking-[0.14em]">
                <span className="rounded-full border border-[color-mix(in_srgb,var(--pri)_28%,transparent)] bg-[color-mix(in_srgb,var(--pri)_10%,transparent)] px-2.5 py-1 text-accent">
                  {category.name}
                </span>
                <span className="text-muted2">{group.title}</span>
                {model.newArrival && (
                  <span className="rounded-full bg-linear-150 from-primary2 to-primary px-2.5 py-1 text-on-accent">New</span>
                )}
              </p>

              <div>
                <code className="font-mono text-[0.9rem] text-accent">{model.code}</code>
                <h1 className="mt-1 text-balance font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
                  {title}
                </h1>
                {model.spec && <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted2">{model.spec}</p>}
              </div>

              {model.summary && <p className="max-w-[58ch] text-pretty text-[0.95rem] leading-[1.65] text-muted">{model.summary}</p>}

              {model.features?.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.9rem] leading-snug text-ink">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-[color-mix(in_srgb,var(--pri)_14%,transparent)] text-accent">
                        <Check size={12} aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-2 flex flex-wrap gap-3">
                <Button to={enquire}>Request a quote</Button>
                <Button href={site.phoneHref} variant="secondary"><Phone size={15} aria-hidden="true" /> {site.phone}</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader kicker="Specifications" title="Technical data" />
          {model.specs?.length > 0 ? (
            <Reveal>
              <GlassCard className="overflow-hidden">
                <dl className="grid sm:grid-cols-2">
                  {model.specs.map((s, i) => (
                    <div
                      key={`${s.label}-${i}`}
                      className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3 sm:px-5 sm:odd:border-r"
                    >
                      <dt className="text-[0.82rem] text-muted">{s.label}</dt>
                      <dd className="text-right font-mono text-[0.8rem] text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </GlassCard>
            </Reveal>
          ) : (
            <Reveal>
              <GlassCard className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.92rem] text-muted">Full specifications for {model.code} are shared on request.</p>
                <Button to={enquire} variant="secondary">Ask for the data sheet</Button>
              </GlassCard>
            </Reveal>
          )}
          <p className="mt-3 text-[0.75rem] text-muted2">Figures are indicative and confirmed at specification stage.</p>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0">
          <Container>
            <SectionHeader kicker={group.title} title="Related models" />
            <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {related.map((m) => (
                <ProductCard
                  key={m.code}
                  code={m.code}
                  category={category.name}
                  name={m.name || m.spec}
                  image={m.image}
                  to={`/products/${category.id}/${modelSlug(m.code)}`}
                  cta="View details"
                />
              ))}
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
