Static Astro marketing site for super-dashboards.com (Apache Superset consulting).

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Static build → dist/
npm run preview   # Preview build locally
```

## Key Files

| File                          | Purpose                                              |
| ----------------------------- | ---------------------------------------------------- |
| `astro.config.mjs`            | Astro config (static output, responsive images)      |
| `src/pages/index.astro`       | Homepage (hero, services, booking CTA)               |
| `src/layouts/Base.astro`      | Base layout with Google Analytics                    |
| `src/components/Header.astro` | Navigation                                           |
| `src/components/Footer.astro` | Footer                                               |
| `src/components/BookingModal.astro` | SSA booking embed modal                        |
| `src/content/posts/`          | Markdown blog posts (content collection)             |
| `src/content.config.ts`       | Content collection schema                            |
| `src/styles/global.css`       | Global styles (ported from WordPress theme)          |

## Deploy

Pushes to `main` auto-deploy via Cloudflare Pages.

Manual deploy (fallback):
```bash
npx wrangler pages deploy dist --project-name super-dashboards-website
```

Requires `CLOUDFLARE_API_TOKEN` env var. Token management:
https://dash.cloudflare.com/d16525d5cec3893e23d594d775d079b2/api-tokens

## Git Submodule

This repo is included as a submodule in `nsquared-team/blink-operations-ai` at `super-dashboards.com/`.
