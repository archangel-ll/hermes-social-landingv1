# Hermes Marketing — React + TypeScript

Landing page for [Consulting Hermes](https://consultinghermes.com), migrated from a monolithic 32MB HTML file to a clean Vite + React + TypeScript project.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **CSS Modules** (scoped per component, no extra dependencies)
- **Google Fonts**: Bebas Neue, DM Sans, DM Serif Display

## Project Structure

```
src/
  components/       One file + one CSS module per section
    Nav.tsx
    Hero.tsx
    Marquee.tsx
    Showcase.tsx
    Strategy.tsx    (StrategyLeft + MindsetRight exports)
    Services.tsx    (one-off packages + retainer pricing)
    Proof.tsx       (stats + add-ons)
    CTA.tsx
    Footer.tsx
  data/             All hardcoded content as typed arrays
    services.ts
    retainers.ts
    content.ts      (stats, add-ons, marquee items)
  hooks/
    useAnimations.ts
  styles/
    globals.css     (CSS variables + keyframes)
  types/
    index.ts
public/
  assets/           Media files (extracted from original HTML)
scripts/
  extract-assets.py Extracts base64 blobs from original HTML
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Extract media assets from the original HTML

```bash
python scripts/extract-assets.py /path/to/hermes-landing-final.html
```

This pulls all base64 images and videos into `public/assets/` and prints the filename mapping.

### 3. Wire up asset paths

After extraction, update the `src` values in:
- `src/components/Hero.tsx` — hero background video (`/assets/video-X.mp4`)
- `src/components/Showcase.tsx` — portfolio images and reels
- `src/components/Strategy.tsx` — strategy and mindset images
- `src/components/CTA.tsx` — CTA background video

The components have comments marking each placeholder.

### 4. Run dev server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## Why This Migration

The original `hermes-landing-final.html` was **32MB** — all from 15 embedded base64 assets (22.9MB of media). The actual HTML + CSS + JS was only **28KB**.

After extraction:
- Page loads near-instantly (28KB HTML vs 32MB)
- Assets load lazily from `/public/assets/`
- Components are independently editable
- Content lives in typed data files — update copy without touching JSX

## Updating Content

| What | Where |
|---|---|
| Services / pricing | `src/data/services.ts` |
| Retainer plans | `src/data/retainers.ts` |
| Stats, add-ons, marquee | `src/data/content.ts` |
| Nav links / CTA URL | `src/components/Nav.tsx` |
| Hero headline | `src/components/Hero.tsx` |
