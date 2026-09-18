import { api } from './api';
import { normCategory, normProduct } from './normalize';

export const productService = {
  getCategories: async () => (await api.get('/categories')).map(normCategory),
  getCategory: async (slug) => normCategory(await api.get(`/categories/${slug}`)),
  getProducts: async () => (await api.get('/products')).map(normProduct),
};
