import { create } from 'zustand';

/** UI state only — industry data lives in contentStore. */
export const useSolutionStore = create((set) => ({
  activeSlug: null,
  setActiveSlug: (slug) => set({ activeSlug: slug }),
  clearActive: () => set({ activeSlug: null }),
}));
