export type FragmentKind = "note" | "observation" | "definition";

export type Fragment = {
  id: string;
  kind: FragmentKind;
  date: string;
  title: string;
  body: string[];
};

export const FRAGMENTS: Fragment[] = [
  {
    id: "vocabulary",
    kind: "definition",
    date: "2026-03",
    title: "What I mean by “distillation”",
    body: [
      "A distillation is not a simplification. Nothing is lost. It is a separation: the idea is pulled apart until the part that carries the meaning sits alone, and the rest is understood as packaging.",
      "You know a distillation worked when the intimidating version and the plain version turn out to be the same sentence, just said in different vocabularies.",
    ],
  },
  {
    id: "seams",
    kind: "observation",
    date: "2026-02",
    title: "Systems fail at the seams",
    body: [
      "Most multi-agent failures I see are not model failures. They are seam failures: two components that each do their job well, connected by an assumption nobody wrote down.",
      "The fix is rarely a better model. It is making the seam explicit — naming the contract, the failure mode, and who is responsible when it breaks.",
    ],
  },
  {
    id: "reading-equations",
    kind: "note",
    date: "2026-02",
    title: "Equations are compressed sentences",
    body: [
      "The BM25 formula looks hostile for about ten seconds. Then you notice it is three ordinary ideas stacked: how often, how rare, how long.",
      "Notation is not difficulty. It is density. The job is to unpack it without losing the precision it was buying.",
    ],
  },
  {
    id: "local-first-values",
    kind: "observation",
    date: "2026-01",
    title: "Local-first is a values choice that happens to be engineering",
    body: [
      "On-device inference is slower than a datacenter and always will be. People choose it anyway, for the same reason they close the bathroom door.",
      "Privacy is not a feature list. It is the ability to say: this never leaves my machine — and have that be literally true.",
    ],
  },
  {
    id: "demos",
    kind: "note",
    date: "2026-01",
    title: "The demo is the easy part",
    body: [
      "A demo shows the path that works once. A product survives every path that fails later.",
      "Evaluations, retries, guardrails and boring error paths are where the actual work lives — and the least visible part of any agent system.",
    ],
  },
  {
    id: "words-and-vectors",
    kind: "note",
    date: "2025-12",
    title: "Meaning has geometry",
    body: [
      "The strangest idea in modern search is that meaning can have coordinates — that “cat” and “kitten” are close, and “car” is far, in a space nobody drew.",
      "Once you accept the geometry, cosine similarity stops being a formula and becomes a question: do these two arrows point the same way?",
    ],
  },
];
