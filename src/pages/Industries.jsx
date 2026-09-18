import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container, Section } from '../components/Layout';
import { SectionHeader } from '../components/SectionHeader';
import { IndustryCard } from '../components/IndustryCard';
import { IndustryPanel } from '../components/IndustryPanel';
import { RevealGroup } from '../components/Reveal';
import { CtaBanner } from '../components/CtaBanner';
import { Seo } from '../components/Seo';
import { useSolutionStore } from '../store/solutionStore';
import { useContentStore } from '../store/contentStore';

export default function Industries() {
  const industries = useContentStore((s) => s.industries);
  const activeSlug = useSolutionStore((s) => s.activeSlug);
  const setActiveSlug = useSolutionStore((s) => s.setActiveSlug);
  const clearActive = useSolutionStore((s) => s.clearActive);

  // deep link from the home page: /industries#healthcare-pharmaceuticals
  useEffect(() => {
    const slug = window.location.hash.slice(1);
    if (slug && industries.some((i) => i.slug === slug)) setActiveSlug(slug);
  }, [industries, setActiveSlug]);

  const active = industries.find((i) => i.slug === activeSlug) || null;

  const onSelect = (slug) => {
    setActiveSlug(slug === activeSlug ? null : slug);
    if (slug !== activeSlug) {
      requestAnimationFrame(() => {
        document.getElementById(`industry-${slug}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  };

  return (
    <>
      <Seo title="Industries" description="Cleaning challenges and matched equipment, sector by sector — healthcare, hospitality, IT-ITES, food processing and more." />

      <Section className="pt-24 sm:pt-28 lg:pt-32">
        <Container>
          <SectionHeader
            as="h1"
            kicker="Industries"
            title="Specified against the floor"
            lead="Select an industry to see the cleaning challenges it presents and the equipment matched to them."
          />

          <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((i) => (
              <IndustryCard key={i.slug} industry={i} onSelect={onSelect} active={i.slug === activeSlug} />
            ))}
          </RevealGroup>

          <div className="mt-4">
            <AnimatePresence mode="wait">
              {active && <IndustryPanel key={active.slug} industry={active} onClose={clearActive} />}
            </AnimatePresence>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container><CtaBanner /></Container>
      </Section>
    </>
  );
}
