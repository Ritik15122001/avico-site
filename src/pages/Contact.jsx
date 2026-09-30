import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container, Section } from '../components/Layout';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Reveal } from '../components/Reveal';
import { Seo } from '../components/Seo';
import { useContentStore } from '../store/contentStore';
import { formService } from '../services/formService';

const field =
  'h-12 w-full rounded-xl border border-line bg-[color-mix(in_srgb,var(--tint)_5%,transparent)] px-4 text-[0.92rem] text-ink ' +
  'placeholder:text-muted2 transition focus:border-primary2 focus:bg-[color-mix(in_srgb,var(--tint)_9%,transparent)] focus:outline-none';
const labelCls = 'mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.17em] text-muted2';

export default function Contact() {
  const site = useContentStore((s) => s.site);
  // Keyless Google Maps embed, driven by the address in Settings so the pin
  // follows whatever the admin sets.
  const mapQuery = encodeURIComponent((site.address || []).join(', '));
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&hl=en&z=15&output=embed`;
  const categories = useContentStore((s) => s.categories);
  // /contact?product=AVSD 55L — Walk-behind scrubber drier (from a model page)
  const [params] = useSearchParams();
  const product = params.get('product') || '';
  const productRange = product
    ? categories.find((c) => c.groups.some((g) => g.models.some((m) => product.startsWith(`${m.code} `) || product === m.code)))?.name
    : undefined;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    setError(null);
    try {
      await formService.sendEnquiry(data);
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Seo title="Contact" description="Tell us about the floor — area, surface, soil load and your cleaning window." />

      <Section className="pt-24 sm:pt-28 lg:pt-32">
        <Container>
          <SectionHeader
            as="h1"
            kicker="Contact"
            title="Tell us about the floor"
            lead="Area, surface, soil load and the window you have to clean in — enough to come back with a shortlist and a demonstration date."
          />

          <div className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <GlassCard className="p-5 sm:p-7">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className={labelCls}>Name</label>
                    <input id="name" name="name" required placeholder="Your name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>Work email</label>
                    <input id="email" name="email" type="email" required placeholder="you@company.com" className={field} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Company &amp; city</label>
                    <input id="company" name="company" placeholder="Company, city" className={field} />
                  </div>
                  <div>
                    <label htmlFor="interest" className={labelCls}>Interested in</label>
                    <select id="interest" name="interest" className={field} key={productRange || 'none'} defaultValue={productRange || 'Not sure yet'}>
                      <option>Not sure yet</option>
                      {categories.map((c) => <option key={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelCls}>What needs cleaning</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      key={product}
                      defaultValue={product ? `Quote request: ${product}\n\n` : undefined}
                      placeholder="Approx. area, floor type, current method, shift window"
                      className={`${field} h-auto min-h-28 resize-y py-3.5`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-12 rounded-full bg-linear-150 from-primary2 to-primary px-7 font-sans text-[0.77rem] font-bold uppercase tracking-[0.09em] text-on-accent glow-accent transition hover:-translate-y-0.5"
                  >
                    Send enquiry
                  </button>

                  {error && (
                    <p role="alert" className="rounded-xl border border-[color-mix(in_srgb,var(--pri)_40%,transparent)] bg-[color-mix(in_srgb,var(--pri)_12%,transparent)] px-4 py-3 text-[0.85rem] text-soft">
                      {error}
                    </p>
                  )}

                  {sent && (
                    <p role="status" className="rounded-xl border border-[color-mix(in_srgb,var(--pri)_30%,transparent)] bg-[color-mix(in_srgb,var(--pri)_12%,transparent)] px-4 py-3 text-[0.85rem] leading-relaxed text-soft">
Thanks — your enquiry is with us. We'll come back with a shortlist and a demonstration date.
                    </p>
                  )}
                </form>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-3">
              <GlassCard className="px-5 py-4.5">
                <b className="mb-1 block font-mono text-[0.62rem] font-normal uppercase tracking-[0.17em] text-muted2">
                  Registered office
                </b>
                <address className="not-italic leading-relaxed text-ink">
                  {site.address.map((l) => <span key={l} className="block">{l}</span>)}
                </address>
              </GlassCard>

              <GlassCard as="a" href={site.phoneHref} className="block px-5 py-4.5 transition hover:translate-x-1 hover:bg-[color-mix(in_srgb,var(--tint)_8%,transparent)]">
                <b className="mb-1 block font-mono text-[0.62rem] font-normal uppercase tracking-[0.17em] text-muted2">Phone</b>
                <span className="text-ink">{site.phone}</span>
              </GlassCard>

              <GlassCard as="a" href={`mailto:${site.email}`} className="block px-5 py-4.5 transition hover:translate-x-1 hover:bg-[color-mix(in_srgb,var(--tint)_8%,transparent)]">
                <b className="mb-1 block font-mono text-[0.62rem] font-normal uppercase tracking-[0.17em] text-muted2">Email</b>
                <span className="text-ink">{site.email}</span>
              </GlassCard>

              <GlassCard className="flex items-center gap-5 p-5">
                <img
                  src="/images/general/brochure-qr.webp"
                  alt="QR code linking to the Avico product catalogue"
                  loading="lazy"
                  className="w-24 flex-none rounded-[10px] bg-white p-1.5"
                />
                <div>
                  <b className="mb-1 block font-mono text-[0.62rem] font-normal uppercase tracking-[0.17em] text-muted2">Brochure</b>
                  <span className="text-[0.88rem] leading-relaxed text-ink">Scan for the full product catalogue.</span>
                </div>
              </GlassCard>

              <GlassCard className="overflow-hidden p-1.5">
                <iframe
                  title={`Map showing ${site.legalName || site.name} at ${(site.address || []).join(', ')}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block aspect-[4/3] w-full rounded-[calc(var(--radius-glass)-6px)] border-0 sm:aspect-[16/10]"
                />
                <div className="flex items-center justify-between gap-3 px-3.5 py-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted2">Find us</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-primary2 transition hover:text-accent"
                  >
                    Open in Maps
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
