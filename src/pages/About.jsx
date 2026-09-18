import { Container, Section } from '../components/Layout';
import { SectionHeader, Kicker } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Plate } from '../components/Media';
import { Reveal, RevealGroup } from '../components/Reveal';
import { CtaBanner } from '../components/CtaBanner';
import { Seo } from '../components/Seo';
import { useContentStore } from '../store/contentStore';

export default function About() {
  const valueProps = useContentStore((s) => s.valueProps);
  const aboutParagraphs = useContentStore((s) => s.aboutParagraphs);
  const fieldGallery = useContentStore((s) => s.gallery);

  return (
    <>
      <Seo title="About" description="Avico builds and supplies mechanised cleaning systems for commercial and industrial operations." />

      <Section className="pt-24 sm:pt-28 lg:pt-32">
        <Container>
          <SectionHeader
            as="h1"
            kicker="About us"
            title="Mechanised cleaning, engineered for the way floors are actually used."
          />

          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
            <Reveal className="flex flex-col gap-4">
              {aboutParagraphs.map((p) => (
                <p key={p} className="max-w-[64ch] text-pretty leading-relaxed text-muted">{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.08}>
              <GlassCard className="p-4">
                <Plate src="/images/general/about.webp" alt="Avico equipment range" ratio="aspect-[5/4]" />
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHeader kicker="Why choose us" title="What you are actually buying" />
          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
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

      <Section className="pt-0">
        <Container>
          <SectionHeader kicker="The range" title="A catalogue that covers the whole site" />
          <RevealGroup className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-2.5 lg:grid-cols-6">
            {fieldGallery.map((f) => (
              <GlassCard key={f.code} className="overflow-hidden p-1.5">
                <Plate src={f.image} alt={f.code} caption={f.code} ratio="aspect-square" />
              </GlassCard>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid items-stretch gap-4 lg:grid-cols-2">
            <Reveal className="h-full">
              <GlassCard className="flex h-full flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
                <img
                  src="/images/general/certification.webp"
                  alt="Quality management certification"
                  loading="lazy"
                  className="w-[130px] flex-none rounded-[10px] bg-white p-2.5"
                />
                <div className="flex flex-col gap-2.5">
                  <Kicker>Certification</Kicker>
                  <h3 className="font-display text-xl font-bold text-ink">Quality management</h3>
                  <p className="text-[0.92rem] leading-relaxed text-muted">
                    Systems audited and certified against recognised quality management standards.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.08} className="h-full">
              <GlassCard className="flex h-full flex-col gap-2 p-5">
                <Kicker>Environment</Kicker>
                <h3 className="font-display text-xl font-bold text-ink">A lower-impact range</h3>
                <p className="max-w-[56ch] text-[0.92rem] leading-relaxed text-muted">
                  A dedicated bio chemical range and an eco-focused equipment line for sites reducing
                  chemical and water load.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container><CtaBanner /></Container>
      </Section>
    </>
  );
}
