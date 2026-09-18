import { create } from 'zustand';
import { api } from '../services/api';
import * as N from '../services/normalize';

// Bundled content ships with the build so the first paint is instant and the
// site still renders if the API is unreachable. hydrate() then swaps in live data.
import { categories as seedCategories } from '../data/categories';
import { trendingProducts, bestsellers, topSellers, fieldGallery } from '../data/products';
import { industries as seedIndustries } from '../data/industries';
import { posts as seedPosts } from '../data/posts';
import { heroSlides as seedHero } from '../data/hero';
import { site as seedSite, testimonials as seedTestimonials, valueProps as seedValueProps, aboutParagraphs as seedAbout, marqueeItems as seedMarquee } from '../data/site';

const byCollection = (products, name) => products.filter((p) => p.collections?.includes(name));

export const useContentStore = create((set) => ({
  ready: false,
  live: false,

  categories: seedCategories,
  trending: trendingProducts,
  bestsellers,
  topSellers,
  gallery: fieldGallery,
  industries: seedIndustries,
  posts: seedPosts,
  hero: seedHero,
  testimonials: seedTestimonials,
  site: seedSite,
  aboutParagraphs: seedAbout,
  valueProps: seedValueProps,
  marqueeItems: seedMarquee,

  hydrate: async () => {
    try {
      const [categories, products, industries, posts, hero, testimonials, settings] = await Promise.all([
        api.get('/categories'),
        api.get('/products'),
        api.get('/industries'),
        api.get('/posts'),
        api.get('/hero'),
        api.get('/testimonials'),
        api.get('/settings'),
      ]);

      const normProducts = products.map(N.normProduct);
      const s = N.normSettings(settings);

      set({
        ready: true,
        live: true,
        categories: categories.map(N.normCategory),
        trending: byCollection(normProducts, 'trending'),
        bestsellers: byCollection(normProducts, 'bestseller'),
        topSellers: byCollection(normProducts, 'topseller'),
        gallery: byCollection(normProducts, 'gallery'),
        industries: industries.map(N.normIndustry),
        posts: posts.map(N.normPost),
        hero: hero.map(N.normHero),
        testimonials: testimonials.map(N.normTestimonial),
        ...s,
      });
    } catch (err) {
      // keep the bundled content — the site stays usable if the API is down
      if (import.meta.env.DEV) console.warn('[content] falling back to bundled data:', err.message);
      set({ ready: true, live: false });
    }
  },
}));
