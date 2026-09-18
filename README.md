# AVICO — React + Vite + Tailwind

Production frontend converted from the original `reference/avico-glass-themes.html` prototype.
Same brand, content and assets — rebuilt on a consistent layout, spacing and responsive system.

## Stack
React 19 · Vite · Tailwind CSS v4 · React Router · Zustand · Framer Motion · Lucide React

## Commands
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Structure
```
src/
  components/   Navbar, Hero, Footer, cards, ProductShelf, IndustryPanel, primitives
  pages/        Home, Products, Industries, About, Blog, Contact, NotFound
  data/         categories (133 models), industries (12), products, posts, hero, site, navigation
  store/        uiStore (mobile menu), productStore, solutionStore
  services/     productService, solutionService  ← swap the bodies for fetch() when the API lands
  hooks/        useScrolled, useReducedMotion
  layouts/      MainLayout
  lib/          cx
scripts/        one-off asset pipeline (see below)
public/
  images/{products,industries,general}   all WebP
  logo/
```

## Design system
Colour, radius and glass values are CSS custom properties in `src/index.css`, mapped into Tailwind
through `@theme inline`. A single warm "ember" palette ships — the prototype's runtime theme
switcher and its five alternate palettes were removed.

Type: **Archivo** for display, **Figtree** for body, **JetBrains Mono** for labels.

### Layout rhythm
- Container: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`
- Section: `py-8 sm:py-11 lg:py-14` (32 / 44 / 56px)
- Image-led card grids are 2-up on phones (`grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`);
  text-heavy grids stay single column until `sm`.
- Products: transparent cut-out, `object-contain` on a studio plate at `aspect-[4/3]`.
  Industries: `object-cover` at `aspect-[16/8]`.

### Two CSS gotchas
- Never write `rgb(var(--someRGB) / 0.4)`. Lightning CSS cannot validate it and silently drops the
  whole declaration. Use `color-mix(in srgb, var(--token) 40%, transparent)` instead.
- Avoid the `background` shorthand when the value contains `var()` — use `background-image`.
- Accent shadows are named utilities (`glow-accent`, `glow-accent-lg`, …) because Tailwind cannot
  parse arbitrary shadow values that nest `color-mix()`.

## Assets
`scripts/process-products.mjs` turns the source product JPEGs into transparent, trimmed WebP
cut-outs: it flood-fills the white backdrop starting from the image border (so white *inside* a
product survives), feathers the edge, trims to content and re-encodes. This is what makes every
product in a grid read at the same scale. `scripts/process-photos.mjs` resizes and re-encodes the
industry and general photography. Both are one-off — rerun them only when source art changes.

All twelve industries carry photography. Seven banners plus hospitality and warehousing come from
the original charnock.biz set; healthcare, retail and industrial-manufacturing had no source art and
use Pexels stock (Pexels licence). Every industry also declares an `icon` in
`src/data/industries.js`, shown as a chip on the card and used as a designed fallback panel if a
photo is ever missing.

Hero footage is deliberately **not** bundled: 1080p Pexels stock streamed from source, as the
prototype did. URLs live in `src/data/hero.js`. Only slide 0 is fetched on load, the rest attach as
the carousel reaches them, and playback stops via `IntersectionObserver` once the hero leaves view.

> Avico is a placeholder brand. Product photography and catalogue model codes are third-party
> placeholder content from charnock.biz; hero footage is Pexels stock. Replace all of it with
> Avico's own before publishing.

## Adding the API later
Components read from Zustand stores, which read from `src/services/*`. Those services return local
data from `src/data/*` today. Point them at real endpoints and nothing above them changes.

## Deployment
Client-side routing needs an SPA rewrite. `public/_redirects` covers Netlify; on other hosts add
the equivalent rewrite of all paths to `/index.html`.
