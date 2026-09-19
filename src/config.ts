// ─────────────────────────────────────────────────────────────────────────────
// SITE — identity, copy and SEO. Edit here to update the site everywhere.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Emretheus",
  fullName: "Emre Ulgac",
  handle: "emretheus",
  /** The statement */
  statement: "Fire, distilled.",
  /** Brand philosophy */
  philosophy: "Steal the fire from complexity. Distill it. Give it away.",
  /** What this place is */
  tagline:
    "I go into complex systems, ideas and technologies, find what actually matters, and bring it back in a form humans can understand.",
  /** Current thesis */
  thesisLead: "Code is becoming easier to produce.",
  thesis: "Understanding what should be built — and why — isn't.",
  description:
    "Emretheus (Emre Ulgac) — a laboratory and publication about understanding complex systems. Distillations on semantic search, retrieval, LLMs, agent systems and the engineering decisions behind them.",
  location: "Berlin, Germany",
  url: "https://emretheus.xyz",
  ogImage: "/og-image.png",
  locale: "en_US",
  lang: "en",
  email: "emretheus@proton.me",
  keywords: [
    "Emretheus",
    "Emre Ulgac",
    "semantic search explained",
    "BM25 explained",
    "RAG",
    "LLM systems",
    "AI engineering",
    "retrieval",
    "embeddings",
    "agent systems",
    "software architecture",
    "Berlin engineer",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ANALYTICS — production only. Privacy-friendly: no cookies, visit counts only.
// ─────────────────────────────────────────────────────────────────────────────
export const ANALYTICS = {
  counterdev: "d06aecf4-f25e-4815-8861-1ff023113277",
};

export type NavItem = {
  label: string;
  href: string;
  note: string;
};

export const NAV: NavItem[] = [
  { label: "Fire", href: "/fire/", note: "what I'm exploring" },
  { label: "Distillations", href: "/distillations/", note: "concepts, explained" },
  { label: "Systems", href: "/systems/", note: "decisions & architecture" },
  { label: "Fragments", href: "/fragments/", note: "notes in passing" },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/emretheus" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emre-ulgac" },
  { label: "Email", href: "mailto:emretheus@proton.me" },
];
