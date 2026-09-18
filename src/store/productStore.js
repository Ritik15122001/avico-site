import { create } from 'zustand';

/** UI state only — catalogue data lives in contentStore. */
export const useProductStore = create((set, get) => ({
  activeCategory: null,
  setActiveCategory: (id) => set({ activeCategory: get().activeCategory === id ? null : id }),
}));
