import { chromium } from '/Users/ritikkumar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright-core/index.mjs';
import sharp from 'sharp';
import fs from 'node:fs';
const OUT = '/private/tmp/claude-501/-Users-ritikkumar-Documents-Avico/0e3ca986-2bc8-4e45-81ca-853b95dab3e5/scratchpad/r';
fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
for (const a of process.argv.slice(2)) {
  const [w, route, mode = 'view', scrollY = '0'] = a.split('|');
  const ctx = await b.newContext({ viewport: { width: +w, height: 900 }, deviceScaleFactor: 1 });
  const pg = await ctx.newPage();
  await pg.goto('http://localhost:5199' + route, { waitUntil: 'domcontentloaded' });
  await pg.waitForTimeout(2200);
  if (+scrollY) { await pg.evaluate((y) => window.scrollTo(0, y), +scrollY); await pg.waitForTimeout(900); }
  const buf = await pg.screenshot({ fullPage: mode === 'full' });
  const name = `${w}${route.replace(/\//g, '_') || '_home'}_${scrollY}.png`;
  // keep every side under 1900px so the images stay readable downstream
  await sharp(buf).resize({ width: 1000, height: 1400, fit: 'inside', withoutEnlargement: true }).png().toFile(`${OUT}/${name}`);
  console.log(name);
  await ctx.close();
}
await b.close();
