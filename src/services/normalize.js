import { assetUrl } from './api';

/** Maps API documents onto the shapes the components already expect. */

export const normCategory = (c) => ({
  id: c.slug,
  name: c.name,
  kicker: c.kicker,
  summary: c.summary,
  blurb: c.blurb,
  image: assetUrl(c.image),
  count: (c.groups || []).reduce((n, g) => n + (g.models?.length || 0), 0),
  groups: (c.groups || []).map((g) => ({
    title: g.title,
    models: (g.models || []).map((m) => ({ code: m.code, spec: m.spec, ...(m.image ? { image: assetUrl(m.image) } : {}) })),
  })),
});

export const normProduct = (p) => ({
  id: p._id || p.code,
  code: p.code,
  name: p.name,
  category: p.category,
  image: assetUrl(p.image),
  collections: p.collections || [],
});

export const normIndustry = (i) => ({
  slug: i.slug,
  name: i.name,
  icon: i.icon,
  summary: i.summary,
  lead: i.lead,
  image: assetUrl(i.image),
  challenges: i.challenges || [],
  equipment: i.equipment || [],
  tags: i.tags || [],
});

export const normPost = (p) => ({
  id: p._id || p.slug,
  slug: p.slug,
  category: p.category,
  readTime: p.readTime,
  title: p.title,
  excerpt: p.excerpt,
  image: assetUrl(p.image),
  featured: p.featured,
});

export const normHero = (s, i) => ({
  id: s._id || i,
  eyebrow: s.eyebrow,
  title: s.titleLines || [],
  accent: s.accent,
  lead: s.lead,
  video: s.video,
  thumb: { label: s.thumbLabel, category: s.thumbCategory, image: assetUrl(s.thumbImage) },
});

export const normTestimonial = (t) => ({ quote: t.quote, name: t.name, org: t.org });

export const normSettings = (s) => ({
  site: {
    name: s.name, tagline: s.tagline, legalName: s.legalName, description: s.description,
    blurb: s.blurb, phone: s.phone, phoneHref: s.phoneHref, email: s.email,
    address: s.address || [], social: s.social || [],
  },
  aboutParagraphs: s.aboutParagraphs || [],
  valueProps: s.valueProps || [],
  marqueeItems: s.marqueeItems || [],
});
