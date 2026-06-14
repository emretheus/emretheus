// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// ─────────────────────────────────────────────────────────────────────────────
// DEPLOYMENT CONFIG
// ─────────────────────────────────────────────────────────────────────────────
// This is the user-site repo (github.com/emretheus/emretheus), so GitHub Pages
// serves it at the ROOT → https://emretheus.github.io/  (base must be "/").
//
// Using a CUSTOM DOMAIN (e.g. emre.dev)?
//   1. set SITE: "https://emre.dev"
//   2. keep BASE: "/"
//   3. add a CNAME file in /public with your domain (see public/CNAME.example)
// ─────────────────────────────────────────────────────────────────────────────
const SITE = "https://emretheus.github.io";
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
