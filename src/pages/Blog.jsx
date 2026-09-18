import { Container, Section } from '../components/Layout';
import { SectionHeader } from '../components/SectionHeader';
import { FeaturedPost, PostCard } from '../components/PostCard';
import { Reveal, RevealGroup } from '../components/Reveal';
import { NewsletterForm } from '../components/NewsletterForm';
import { Seo } from '../components/Seo';
import { useContentStore } from '../store/contentStore';

export default function Blog() {
  const posts = useContentStore((s) => s.posts);
  const [lead, ...rest] = posts;

  return (
    <>
      <Seo title="Blog" description="Specification, chemistry and maintenance notes for the people running the equipment." />

      <Section className="pt-24 sm:pt-28 lg:pt-32">
        <Container>
          <SectionHeader
            as="h1"
            kicker="Our blog"
            title="Notes from the floor"
            lead="Specification, chemistry and maintenance, written for the people running the equipment."
          />

          <Reveal className="mb-4">
            <FeaturedPost post={lead} />
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => <PostCard key={p.id} post={p} />)}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container><NewsletterForm /></Container>
      </Section>
    </>
  );
}
