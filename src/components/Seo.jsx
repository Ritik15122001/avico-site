import { useEffect } from 'react';
import { useContentStore } from '../store/contentStore';

/** Minimal head management — title + meta description per route. */
export function Seo({ title, description }) {
  const site = useContentStore((s) => s.site);

  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description || site.description);
  }, [title, description, site]);

  return null;
}
