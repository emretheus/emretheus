// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — single source of truth for content + SEO
// Edit these values to update the site everywhere.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  /** Full name */
  name: "Emre Ulgac",
  /** Short handle */
  handle: "emretheus",
  /** Role / headline used in hero + <title> */
  role: "AI Agents & Web3 Engineer",
  /** One-line tagline */
  tagline: "Full-stack engineer building autonomous AI agents & Web3 products.",
  /** Longer meta description (150–160 chars ideal for SEO) */
  description:
    "Emre Ulgac (emretheus) — Berlin-based full-stack engineer building autonomous AI agents, LLM systems and Web3 infrastructure. Available for freelance AI agent development.",
  location: "Berlin, Germany",
  /** Canonical absolute URL of the deployed site (no trailing slash). */
  url: "https://emretheus.github.io",
  /** Path to the social-share image, relative to /public */
  ogImage: "/og-image.png",
  /** Locale */
  locale: "en_US",
  lang: "en",
  email: "emretheus@proton.me",
  /** Keywords for the meta keywords tag + general SEO targeting */
  keywords: [
    "AI agents developer",
    "freelance AI engineer",
    "LLM engineer",
    "autonomous agents",
    "Web3 developer",
    "full-stack engineer Berlin",
    "Emre Ulgac",
    "emretheus",
    "MCP server developer",
    "crypto infrastructure",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ANALYTICS — loads only in production. Fill ONE id; leave the rest "".
// Leave all "" to disable analytics entirely.
//
//  • Microsoft Clarity (free forever — heatmaps, session replay, AI summaries):
//      https://clarity.microsoft.com → New project → copy the Project ID.
//  • Counter.dev (free — dead-simple visit counts):
//      https://counter.dev → sign up → copy your data-id (UUID).
// ─────────────────────────────────────────────────────────────────────────────
export const ANALYTICS = {
  clarity: "",
  counterdev: "d06aecf4-f25e-4815-8861-1ff023113277",
};

export type SocialLink = {
  label: string;
  href: string;
  /** inline svg path data (24x24 viewbox) */
  icon: string;
};

export const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/emretheus",
    icon: "M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.555 0-.274-.01-1-.015-1.962-3.196.695-3.87-1.54-3.87-1.54-.523-1.33-1.277-1.683-1.277-1.683-1.044-.714.08-.699.08-.699 1.154.082 1.762 1.185 1.762 1.185 1.026 1.758 2.693 1.25 3.35.956.103-.744.402-1.25.73-1.538-2.553-.29-5.236-1.277-5.236-5.683 0-1.255.448-2.282 1.184-3.087-.119-.29-.513-1.46.112-3.045 0 0 .965-.309 3.163 1.18a11 11 0 0 1 5.762 0c2.196-1.489 3.16-1.18 3.16-1.18.626 1.585.232 2.755.114 3.045.737.805 1.182 1.832 1.182 3.087 0 4.417-2.688 5.39-5.25 5.674.413.356.78 1.057.78 2.131 0 1.54-.014 2.782-.014 3.16 0 .308.207.667.79.554A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emre-ulgac",
    icon: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "Email",
    href: "mailto:emretheus@proton.me",
    icon: "M22 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-8.54 5.34a2 2 0 0 1-2.12 0L2.4 8.25a.75.75 0 0 1 .8-1.27L12 12.4l8.8-5.42a.75.75 0 1 1 .8 1.27Z",
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  tags: string[];
  /** highlight = featured card (spans wider on desktop) */
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "BioAgents",
    tagline: "Autonomous research for the life sciences",
    description:
      "A multi-agent AI framework that conducts autonomous research in the biological sciences, combining scientific literature with data analysis to generate and test hypotheses.",
    href: "https://github.com/emretheus/BioAgents",
    tags: ["Multi-agent", "LLMs", "Python", "Research"],
    featured: true,
  },
  {
    name: "grex",
    tagline: "One interface for every AI coding agent",
    description:
      "A desktop app that gives you a single unified workspace to run and orchestrate Claude, Codex, Cursor and Gemini agents in parallel.",
    href: "https://github.com/emretheus/grex",
    tags: ["Desktop", "AI agents", "TypeScript", "DX"],
    featured: true,
  },
  {
    name: "meetwit",
    tagline: "Local-first AI meeting assistant",
    description:
      "A privacy-first meeting copilot for macOS & Windows with on-device transcription and document-grounded answers during and after calls.",
    href: "https://github.com/emretheus/meetwit",
    tags: ["Local-first", "Transcription", "RAG"],
  },
  {
    name: "inclave",
    tagline: "Private AI over your local files",
    description:
      "A local-first macOS assistant that reasons over PDFs, spreadsheets, CSVs and code entirely on-device using Ollama — no data leaves your machine.",
    href: "https://github.com/emretheus/inclave",
    tags: ["Ollama", "Local-first", "Privacy"],
  },
  {
    name: "claude-remind-mcp",
    tagline: "Search your Claude Code history",
    description:
      "An MCP server that indexes and searches your Claude Code conversation history with fast local BM25 retrieval — recall any past decision instantly.",
    href: "https://github.com/emretheus/claude-remind-mcp",
    tags: ["MCP", "BM25", "Tooling"],
  },
  {
    name: "CoronaMaskOn",
    tagline: "Real-time mask detection",
    description:
      "A computer-vision application that detects and monitors mask compliance in real time from camera feeds.",
    href: "https://github.com/emretheus/CoronaMaskOn",
    tags: ["Computer vision", "Python", "ML"],
  },
];

export type Service = {
  title: string;
  description: string;
  /** inline svg path (24x24) */
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "AI Agent Development",
    description:
      "Design and build autonomous, tool-using agents and multi-agent systems — from a single workflow agent to orchestrated fleets with planning, memory and evals.",
    icon: "M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Zm0 6a2.5 2.5 0 0 1 2.5 2.5c0 1-.6 1.7-1.4 2.1l-.1 2.4h-2l-.1-2.4c-.8-.4-1.4-1.1-1.4-2.1A2.5 2.5 0 0 1 12 8Z",
  },
  {
    title: "LLM Apps & RAG",
    description:
      "Production LLM products: retrieval-augmented generation, structured outputs, function calling, and local-first inference with Ollama for privacy-sensitive workloads.",
    icon: "M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1Zm3 5h10v2H7V9Zm0 4h7v2H7v-2Z",
  },
  {
    title: "MCP & Dev Tooling",
    description:
      "Custom Model Context Protocol servers, CLI tools and integrations that connect your data and workflows to AI coding agents and assistants.",
    icon: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z",
  },
  {
    title: "Web3 & Crypto Infra",
    description:
      "Smart-contract integrations, on-chain data pipelines and full-stack dapps — bringing autonomous agents and crypto infrastructure together.",
    icon: "M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3ZM5 9.6l6 3.3v6.8l-6-3.3V9.6Zm14 0v6.8l-6 3.3v-6.8l6-3.3Z",
  },
];

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "70+", label: "Open-source repositories" },
  { value: "6", label: "AI products shipped" },
  { value: "Berlin", label: "Available remote, worldwide" },
];
