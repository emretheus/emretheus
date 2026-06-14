# Development

This repository (`emretheus/emretheus`) is also Emre's personal site, built with
[Astro](https://astro.build) and deployed to GitHub Pages on the custom
domain **https://emretheus.xyz/**.

> The `README.md` is the GitHub **profile** README. This file holds the
> technical docs for the site. Editing either one does not affect the other.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321/
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Edit content

Everything lives in **`src/config.ts`** — name, role, tagline, SEO
description/keywords, social links, projects, and freelance services. Update
that one file and the whole site (and its SEO metadata) updates.

## Project structure

```
public/            static assets (favicon, og-image, robots.txt, .nojekyll)
src/
  config.ts        single source of truth — content + SEO
  components/
    SEO.astro      all meta tags + JSON-LD structured data
    Header / Hero / About / Projects / Services / Contact / Footer
  layouts/
    BaseLayout.astro   <head>, fonts, theme, scroll-reveal
  styles/global.css    design tokens + base styles
  pages/index.astro    assembles the page
.github/workflows/deploy.yml   GitHub Pages CI/CD
```

## Deploy (GitHub Pages)

1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source =
   GitHub Actions**.
3. The workflow builds and publishes automatically. Live at
   `https://emretheus.xyz/` (custom domain, pinned by `public/CNAME`).

### Use a custom domain (e.g. `emre.dev`)

1. In `astro.config.mjs`: set `SITE = "https://emre.dev"` (keep `BASE = "/"`).
2. In `src/config.ts`: set `url` to your domain and update `robots.txt` +
   the sitemap line.
3. Rename `public/CNAME.example` → `public/CNAME` (edit the domain inside).
4. Point your domain's DNS at GitHub Pages and set the custom domain in
   **Settings → Pages**.

## SEO checklist (already wired in)

- ✅ Unique `<title>` + meta description + keywords
- ✅ Open Graph + Twitter `summary_large_image` cards (1200×630 image)
- ✅ JSON-LD: `Person`, `WebSite`, `ProfessionalService`
- ✅ Canonical URL, `robots` directives, `robots.txt`
- ✅ Auto-generated `sitemap-index.xml`
- ✅ Semantic HTML, skip-link, reduced-motion + accessible focus states
- ✅ Responsive, mobile-first, dark theme

After going live, submit your sitemap in
[Google Search Console](https://search.google.com/search-console) and validate
rich results with the
[Rich Results Test](https://search.google.com/test/rich-results).
