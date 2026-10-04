/**
 * Builds the AVICO model photos: picks one source shot per model from
 * assets-src/avico-products, blanks the supplier logo in the top-left corner,
 * crops where needed, removes the white backdrop (same flood-fill as
 * process-products.mjs), trims and writes public/images/products/avico/<slug>.webp.
 *
 * Run: node scripts/process-avico.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.env.ROOT || '.';
const SRC = path.join(ROOT, 'assets-src/avico-products');
const OUT = path.join(ROOT, 'public/images/products/avico');
const WHITE = 238, SPREAD = 26, PAD = 12;

// slug -> [source file, options]  (logo: blank the supplier mark top-left; crop: fractional box)
const PICKS = {
  'avf-004': ['avf-004-1.webp', { logo: true, tight: true }],
  'avf-005': ['avf-005-x1.webp', { logo: true, tight: true, crop: [0.53, 0, 0.47, 1] }],
  'avf-17h': ['avf-17h-1.webp', { logo: true, tight: true }],
  'avf-18h': ['avf-18h-1.webp', { logo: true, tight: true }],
  'avfg': ['avfg-1.jpg', {}],
  'avrs-80l': ['avrs-80l-b3.webp', { logo: true }],
  'avrs-140l': ['avrs-140l-1.webp', { logo: true }],
  'avsd-55l': ['avsd-55l-3.webp', { logo: true }],
  'avsd-50l': ['avsd-50l-1.webp', { logo: true }],
  'avsd-32l': ['avsd-32l-1.webp', { logo: true, tight: true }],
  'avms-40l': ['avms-40l-3.jpg', {}],
  'avs-690': ['avs-690-2.webp', { logo: true }],
  'avrsw': ['avrsw-3.jpg', {}],
  'avvc-80l-3': ['avvc-80l-3-h1.jpg', {}],
  'avvc-60l-2': ['avvc-60l-2-2.webp', { logo: true }],
  'avvc-30l': ['avvc-30l-2.webp', { logo: true }],
  'avvc-15l': ['avvc-15l-1.webp', { logo: true }],
  'avbp': ['avbp-1.jpg', {}],
  'avsc': ['avsc-1.jpg', {}],
  'avpw-4hp': ['avpw-4hp-1.jpg', {}],
  'avpw-3hp': ['avpw-3hp-2.jpg', {}],
  'avec-450': ['avec-450-2.webp', { logo: true }],
  'avac': ['avac-1.jpg', {}],
  'avcc-40l': ['avcc-40l-1.webp', { logo: true, tight: true }],
  'avcc-20l': ['avcc-20l-2.webp', { logo: true, tight: true }],
  'avcs-730sf': ['avcs-730sf-2.webp', { logo: true }],
  'avcb': ['avcb-1.webp', { logo: true }],
};

async function build(slug, file, opt) {
  let img = sharp(path.join(SRC, file)).flatten({ background: '#ffffff' });
  let { width: w, height: h } = await img.metadata();
  if (opt.crop) {
    const [x, y, cw, ch] = opt.crop;
    img = sharp(await img.extract({ left: Math.round(x * w), top: Math.round(y * h), width: Math.round(cw * w), height: Math.round(ch * h) }).toBuffer());
    ({ width: w, height: h } = await img.metadata());
  }
  if (opt.logo) {
    const lw = Math.round(w * 0.25), lh = Math.round(h * 0.25);
    img = sharp(await img.composite([{ input: { create: { width: lw, height: lh, channels: 3, background: '#ffffff' } }, left: 0, top: 0 }]).toBuffer());
  }
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  ({ width: w, height: h } = info);
  const c = info.channels;
  // `tight` only treats near-pure white as backdrop, so white plastic parts survive
  const [WH, SP] = opt.tight ? [252, 3] : [WHITE, SPREAD];
  const isBg = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return min >= WH - SP && max - min <= SP;
  };
  const bg = new Uint8Array(w * h), q = [];
  const push = (x, y) => { const p = y * w + x; if (bg[p] || !isBg(p * c)) return; bg[p] = 1; q.push(p); };
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
  for (let i = 0; i < q.length; i++) {
    const p = q[i], x = p % w, y = (p / w) | 0;
    if (x > 0) push(x - 1, y); if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1); if (y < h - 1) push(x, y + 1);
  }
  // drop small islands (leftover logo text, specks) so they neither show nor widen the trim
  const seen = new Uint8Array(w * h), MIN = w * h * 0.004;
  for (let s0 = 0; s0 < w * h; s0++) {
    if (bg[s0] || seen[s0]) continue;
    const comp = [s0]; seen[s0] = 1;
    for (let k = 0; k < comp.length; k++) {
      const p = comp[k], x = p % w, y = (p / w) | 0;
      for (const n of [x > 0 ? p - 1 : -1, x < w - 1 ? p + 1 : -1, y > 0 ? p - w : -1, y < h - 1 ? p + w : -1]) {
        if (n >= 0 && !bg[n] && !seen[n]) { seen[n] = 1; comp.push(n); }
      }
    }
    if (comp.length < MIN) for (const p of comp) bg[p] = 1;
  }
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = y * w + x, i = p * c;
    if (bg[p]) { data[i + 3] = 0; continue; }
    const edge = (x > 0 && bg[p - 1]) || (x < w - 1 && bg[p + 1]) || (y > 0 && bg[p - w]) || (y < h - 1 && bg[p + w]);
    if (edge) { const lum = (data[i] + data[i + 1] + data[i + 2]) / 3; if (lum > 200) data[i + 3] = Math.round(255 * Math.max(0, (255 - lum) / 55)); }
    if (data[i + 3] > 8) { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }
  }
  const left = Math.max(0, minX - PAD), top = Math.max(0, minY - PAD);
  const cw = Math.min(w - left, maxX - minX + 1 + PAD * 2), ch = Math.min(h - top, maxY - minY + 1 + PAD * 2);
  const out = path.join(OUT, `${slug}.webp`);
  const r = await sharp(data, { raw: { width: w, height: h, channels: c } })
    .extract({ left, top, width: cw, height: ch })
    .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 90 }).toFile(out);
  const kept = Math.round((1 - bg.reduce((a, v) => a + v, 0) / (w * h)) * 100);
  return `${slug.padEnd(12)} ${file.padEnd(20)} -> ${r.width}x${r.height} ${Math.round(r.size / 1024)}kB subject ${kept}%`;
}

await mkdir(OUT, { recursive: true });
for (const [slug, [file, opt]] of Object.entries(PICKS)) {
  try { console.log(await build(slug, file, opt)); } catch (e) { console.log(`${slug} FAILED — ${e.message}`); }
}
