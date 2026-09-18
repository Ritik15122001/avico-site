const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

/** Prefix API-hosted uploads; leave bundled /images paths alone. */
export const assetUrl = (url) => (url && url.startsWith('/uploads/') ? `${BASE}${url}` : url);

async function request(path, { method = 'GET', body, token, signal } = {}) {
  const res = await fetch(`${BASE}/api${path}`, {
    method,
    signal,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.error || `Request failed (${res.status})`);
  return data;
}

export const api = {
  get: (p, o) => request(p, o),
  post: (p, body, o) => request(p, { ...o, method: 'POST', body }),
  patch: (p, body, o) => request(p, { ...o, method: 'PATCH', body }),
  del: (p, o) => request(p, { ...o, method: 'DELETE' }),
};

export const API_BASE = BASE;
