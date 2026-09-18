import { Container, Section } from '../components/Layout';
import { Button } from '../components/Button';
import { Kicker } from '../components/SectionHeader';
import { Seo } from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <Section className="pt-32 sm:pt-40">
        <Container className="flex flex-col items-start gap-5">
          <Kicker>404</Kicker>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            That page isn&rsquo;t here
          </h1>
          <p className="max-w-[54ch] leading-relaxed text-muted">
            The link may be out of date. The catalogue and the industry pages are the best places to start.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/">Back to home</Button>
            <Button to="/products" variant="secondary">Browse catalogue</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
