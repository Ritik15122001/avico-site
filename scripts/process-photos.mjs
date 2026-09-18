/** Industry/general photography: no cut-out, just resize + WebP. */
import sharp from 'sharp';
import { readdir, unlink } from 'node:fs/promises';
import path from 'node:path';

for (const [dir, width] of [['public/images/industries', 1200], ['public/images/general', 900]]) {
  for (const f of (await readdir(dir)).filter((x) => /\.(jpe?g|png)$/i.test(x))) {
    const src = path.join(dir, f);
    const out = src.replace(/\.(jpe?g|png)$/i, '.webp');
    const r = await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    await unlink(src);
    console.log(`${f.padEnd(34)} -> ${path.basename(out).padEnd(34)} ${String(Math.round(r.size / 1024)).padStart(3)}kB`);
  }
}
