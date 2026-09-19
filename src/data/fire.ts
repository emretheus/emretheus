export type FireEntry = {
  title: string;
  status: "EXPLORING" | "READING" | "TESTING" | "THINKING";
  /** the plainest possible explanation — one or two sentences, no jargon */
  line: string;
  /** if it matures, what it becomes */
  becomes?: string;
  href?: string;
};

export const FIRE: FireEntry[] = [
  {
    title: "Evaluation beyond vibes",
    status: "TESTING",
    line: "Instead of asking “does this feel better?”, I give each project a small set of test questions and a number. If the number doesn't move, nothing happened.",
    becomes: "LLM evaluations, distilled",
  },
  {
    title: "Hybrid retrieval",
    status: "EXPLORING",
    line: "Word search and meaning search each catch what the other misses. I'm testing how to combine them without making the system harder to debug.",
    becomes: "Reranking, distilled",
    href: "/distillations/semantic-search/",
  },
  {
    title: "Agent memory that ages well",
    status: "READING",
    line: "What should an agent keep, what should it forget, and what should it just recompute? Still reading. No clean answer yet.",
  },
  {
    title: "Local inference economics",
    status: "THINKING",
    line: "Running a model on your own machine is slower per token than renting one. The interesting question is when that is still the right trade.",
  },
];
