export type SystemEntry = {
  name: string;
  oneLiner: string;
  domains: string[];
  /** link to the case study, when it exists */
  href?: string;
  repo?: string;
  status: "case study" | "queued";
};

export const SYSTEMS: SystemEntry[] = [
  {
    name: "grex",
    oneLiner:
      "One workspace to run Claude, Codex, Cursor and Gemini agents in parallel — and keep their work from colliding.",
    domains: ["orchestration", "agents", "desktop"],
    href: "/systems/grex/",
    repo: "https://github.com/emretheus/grex",
    status: "case study",
  },
  {
    name: "meetwit",
    oneLiner:
      "A meeting assistant that transcribes on your machine and answers from your documents — nothing leaves the device.",
    domains: ["local-first", "speech", "retrieval"],
    repo: "https://github.com/emretheus/meetwit",
    status: "queued",
  },
  {
    name: "inclave",
    oneLiner:
      "Private AI over your local files: PDFs, spreadsheets and code, reasoned over entirely on-device with Ollama.",
    domains: ["local-first", "inference"],
    repo: "https://github.com/emretheus/inclave",
    status: "queued",
  },
  {
    name: "claude-remind-mcp",
    oneLiner:
      "An MCP server that indexes your Claude Code history with local BM25 so any past decision is one search away.",
    domains: ["tooling", "retrieval", "MCP"],
    repo: "https://github.com/emretheus/claude-remind-mcp",
    status: "queued",
  },
  {
    name: "BioAgents",
    oneLiner:
      "A multi-agent research framework that forms hypotheses, reads the literature and tests them in the life sciences.",
    domains: ["multi-agent", "research"],
    repo: "https://github.com/emretheus/BioAgents",
    status: "queued",
  },
];
