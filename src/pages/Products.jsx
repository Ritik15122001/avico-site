import { useEffect } from 'react';
import { Container, Section } from '../components/Layout';
import { SectionHeader } from '../components/SectionHeader';
import { ProductCard } from '../components/ProductCard';
import { ProductShelf } from '../components/ProductShelf';
import { RevealGroup } from '../components/Reveal';
import { CtaBanner } from '../components/CtaBanner';
import { Seo } from '../components/Seo';
import { useProductStore } from '../store/productStore';
import { useContentStore } from '../store/contentStore';

export default function Products() {
  const categories = useContentStore((s) => s.categories);
  const trendingProducts = useContentStore((s) => s.trending);
  const totalModels = categories.reduce((n, c) => n + c.count, 0);
  const activeCategory = useProductStore((s) => s.activeCategory);
  const setActiveCategory = useProductStore((s) => s.setActiveCategory);

  // deep link from a category card: /products#floor-care
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !categories.some((c) => c.id === id)) return;
    useProductStore.setState({ activeCategory: id });
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [categories]);

  return (
    <>
      <Seo title="Products" description={`${totalModels} models across eight ranges — machines, manual systems and chemistry.`} />

      <Section className="pt-24 sm:pt-28 lg:pt-32">
        <Container>
          <SectionHeader
            as="h1"
            kicker="Catalogue"
            title={`${totalModels} models, eight ranges`}
            lead="Machines, manual systems and chemistry across eight ranges. Working widths, tank capacities and productivity figures are confirmed at specification stage."
          />

          <RevealGroup className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {trendingProducts.map((p) => <ProductCard key={p.id} {...p} />)}
          </RevealGroup>

          <div className="flex flex-col gap-3">
            {categories.map((c) => (
              <ProductShelf
                key={c.id}
                category={c}
                open={activeCategory === c.id}
                onToggle={setActiveCategory}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container><CtaBanner /></Container>
      </Section>
    </>
  );
}
