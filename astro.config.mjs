// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ─────────────────────────────────────────────────────────────────────────────
// DEPLOYMENT CONFIG
// ─────────────────────────────────────────────────────────────────────────────
// Served via GitHub Pages on the custom domain https://emretheus.xyz/
// (base "/"). The domain is pinned by public/CNAME so it survives deploys.
//
// Reverting to the github.io URL? set SITE back to
// "https://emretheus.github.io" and remove public/CNAME.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = "https://emretheus.xyz";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Keep a single canonical entry per page (drop the no-trailing-slash dupe).
      filter: (page) => page.endsWith("/"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
