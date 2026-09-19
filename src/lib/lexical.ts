// A five-sentence corpus and three queries. Lexical matching is real
// (word boundaries, case-insensitive); semantic scores are precomputed for
// the demo — the point is the contrast, not the numbers.

export type LexDoc = { id: string; text: string };

export const LEX_DOCS: LexDoc[] = [
  { id: "D1", text: "Training a young dog takes patience and consistency." },
  { id: "D2", text: "The puppy chewed my running shoes." },
  { id: "D3", text: "Vaccination schedules keep puppies healthy." },
  { id: "D4", text: "Choosing a reliable used car takes research." },
  { id: "D5", text: "Vehicle maintenance keeps a car running for years." },
];

export type LexQuery = {
  q: string;
  label: string;
  semantic: { id: string; score: number }[];
  verdict: string;
};

export const LEX_QUERIES: LexQuery[] = [
  {
    q: "puppy",
    label: "“puppy”",
    semantic: [
      { id: "D2", score: 0.95 },
      { id: "D3", score: 0.92 },
      { id: "D1", score: 0.9 },
    ],
    verdict:
      "The word matches one sentence. Meaning finds all three — including the one about a dog.",
  },
  {
    q: "cat",
    label: "“cat”",
    semantic: [
      { id: "D1", score: 0.87 },
      { id: "D2", score: 0.86 },
      { id: "D3", score: 0.85 },
    ],
    verdict:
      "No document contains the word “cat”. Meaning still retrieves the pet sentences.",
  },
  {
    q: "car",
    label: "“car”",
    semantic: [
      { id: "D4", score: 0.94 },
      { id: "D5", score: 0.93 },
    ],
    verdict:
      "When the words already match, lexical search is strong. Meaning is the safety net.",
  },
];

export function lexicalMatches(q: string): { id: string; count: number }[] {
  const needle = q.toLowerCase();
  const re = new RegExp(`\\b${needle}\\b`, "gi");
  return LEX_DOCS.map((d) => ({
    id: d.id,
    count: (d.text.match(re) || []).length,
  })).filter((x) => x.count > 0);
}

export function lexicalHtml(q: string): string {
  const matches = lexicalMatches(q);
  if (matches.length === 0) {
    return `<li class="lx-empty label">no exact match</li>`;
  }
  return matches
    .map((m) => {
      const doc = LEX_DOCS.find((d) => d.id === m.id)!;
      return `<li class="lx-row">
        <span class="lx-id label">${m.id}</span>
        <p class="lx-text">${doc.text}</p>
        <span class="lx-count label">×${m.count}</span>
      </li>`;
    })
    .join("");
}

export function semanticHtml(q: string): string {
  const query = LEX_QUERIES.find((x) => x.q === q);
  if (!query) return "";
  return query.semantic
    .map((s, i) => {
      const doc = LEX_DOCS.find((d) => d.id === s.id)!;
      return `<li class="lx-row${i === 0 ? " is-top" : ""}">
        <span class="lx-id label">${s.id}</span>
        <p class="lx-text">${doc.text}</p>
        <span class="lx-score">${s.score.toFixed(2)}</span>
      </li>`;
    })
    .join("");
}
