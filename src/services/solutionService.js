import { api } from './api';
import { normIndustry } from './normalize';

export const solutionService = {
  getIndustries: async () => (await api.get('/industries')).map(normIndustry),
  getIndustry: async (slug) => normIndustry(await api.get(`/industries/${slug}`)),
};
