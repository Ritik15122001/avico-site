import { api } from './api';

export const formService = {
  sendEnquiry: (payload) => api.post('/enquiries', payload),
  subscribe: (email) => api.post('/subscribers', { email }),
};
