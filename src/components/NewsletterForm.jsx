import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Kicker } from './SectionHeader';
import { Reveal } from './Reveal';
import { formService } from '../services/formService';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await formService.subscribe(email);
      setSent(true);
      setEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Reveal>
      <GlassCard className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div className="flex flex-col gap-2.5">
          <Kicker>Newsletter</Kicker>
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Product news &amp; application notes</h2>
          <p className="max-w-[56ch] text-[0.92rem] leading-relaxed text-muted">
            Occasional updates on new machines, chemistry and service programmes.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-12 w-full rounded-full border border-line bg-[color-mix(in_srgb,var(--tint)_5%,transparent)] px-5 text-[0.92rem] text-ink placeholder:text-muted2 focus:border-primary2 focus:bg-[color-mix(in_srgb,var(--tint)_9%,transparent)] focus:outline-none sm:w-64"
          />
          <button
            type="submit"
            className="h-12 flex-none rounded-full bg-linear-150 from-primary2 to-primary px-7 font-sans text-[0.77rem] font-bold uppercase tracking-[0.09em] text-on-accent glow-accent transition hover:-translate-y-0.5"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <p role="alert" className="rounded-xl border border-[color-mix(in_srgb,var(--pri)_40%,transparent)] bg-[color-mix(in_srgb,var(--pri)_12%,transparent)] px-4 py-3 text-[0.85rem] text-soft lg:col-span-2">
            {error}
          </p>
        )}

        {sent && (
          <p role="status" className="rounded-xl border border-[color-mix(in_srgb,var(--pri)_30%,transparent)] bg-[color-mix(in_srgb,var(--pri)_12%,transparent)] px-4 py-3 text-[0.85rem] text-soft lg:col-span-2">
            Thanks — you're on the list. We'll be in touch with product news and application notes.
          </p>
        )}
      </GlassCard>
    </Reveal>
  );
}
