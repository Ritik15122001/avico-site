/**
 * One-off asset pipeline for the product shots.
 *
 * The source JPEGs are cut-outs photographed on white, but each one carries a
 * different amount of baked-in margin, so in a grid they render at wildly
 * different visual sizes. This flood-fills the white *background* to
 * transparent (starting from the border, so white parts inside a product are
 * kept), trims to the remaining content and writes WebP.
 *
 * Run: node scripts/process-products.mjs
 */
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'public/images/products';
const OUT = 'public/images/products';
const WHITE = 238;   // luminance above this counts as backdrop
const SPREAD = 26;   // per-channel spread allowed for "neutral" (kills off-white casts)
const PAD = 12;      // breathing room kept around the trimmed product

async function cutout(file) {
  const src = path.join(SRC, file);
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;

  const isBackdrop = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    return min >= WHITE - SPREAD && max - min <= SPREAD && (r + g + b) / 3 >= WHITE - SPREAD;
  };

  // BFS from every border pixel — only background connected to the edge is removed
  const bg = new Uint8Array(w * h);
  const queue = [];
  const push = (x, y) => {
    const p = y * w + x;
    if (bg[p]) return;
    if (!isBackdrop(p * c)) return;
    bg[p] = 1;
    queue.push(p);
  };
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }

  for (let qi = 0; qi < queue.length; qi++) {
    const p = queue[qi], x = p % w, y = (p / w) | 0;
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }

  // punch out the background, and feather pixels that border it so edges stay smooth
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const p = y * w + x, i = p * c;
      if (bg[p]) { data[i + 3] = 0; continue; }
      const edge =
        (x > 0 && bg[p - 1]) || (x < w - 1 && bg[p + 1]) ||
        (y > 0 && bg[p - w]) || (y < h - 1 && bg[p + w]);
      if (edge) {
        const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
        if (lum > 200) data[i + 3] = Math.round(255 * Math.max(0, (255 - lum) / 55));
      }
      if (data[i + 3] > 8) {
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) throw new Error('everything was treated as background');

  const left = Math.max(0, minX - PAD), top = Math.max(0, minY - PAD);
  const cw = Math.min(w - left, maxX - minX + 1 + PAD * 2);
  const ch = Math.min(h - top, maxY - minY + 1 + PAD * 2);

  const out = path.join(OUT, file.replace(/\.(jpe?g|png)$/i, '.webp'));
  const info2 = await sharp(data, { raw: { width: w, height: h, channels: c } })
    .extract({ left, top, width: cw, height: ch })
    .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 90 })
    .toFile(out);

  const kept = Math.round((1 - bg.reduce((a, v) => a + v, 0) / (w * h)) * 100);
  return { file, from: `${w}x${h}`, to: `${info2.width}x${info2.height}`, kb: Math.round(info2.size / 1024), kept };
}

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));
for (const f of files) {
  try {
    const r = await cutout(f);
    console.log(`${r.file.padEnd(18)} ${r.from.padEnd(10)} -> ${r.to.padEnd(10)} ${String(r.kb).padStart(3)}kB  subject ${r.kept}%`);
  } catch (e) {
    console.log(`${f.padEnd(18)} SKIPPED — ${e.message}`);
  }
}
