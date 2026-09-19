// A tiny, honest BM25 lab: fixed corpus, live scoring, no hidden magic.

export type Doc = { id: string; text: string; tokens: string[] };

export const DOCS: Doc[] = [
  {
    id: "D1",
    text: "Vector databases store vectors. A database indexes vectors for fast vector search.",
    tokens: ["vector", "databases", "store", "vectors", "a", "database", "indexes", "vectors", "for", "fast", "vector", "search"],
  },
  {
    id: "D2",
    text: "A vector database stores embeddings, and searching embeddings with a vector index returns similar items.",
    tokens: ["a", "vector", "database", "stores", "embeddings", "and", "searching", "embeddings", "with", "a", "vector", "index", "returns", "similar", "items"],
  },
  {
    id: "D3",
    text: "Relational databases use tree indexes; choosing a database depends on the workload.",
    tokens: ["relational", "databases", "use", "tree", "indexes", "choosing", "a", "database", "depends", "on", "the", "workload"],
  },
  {
    id: "D4",
    text: "Vector search finds similar embeddings. Embeddings encode meaning.",
    tokens: ["vector", "search", "finds", "similar", "embeddings", "embeddings", "encode", "meaning"],
  },
  {
    id: "D5",
    text: "A database can be a vector store if it indexes embeddings efficiently.",
    tokens: ["a", "database", "can", "be", "a", "vector", "store", "if", "it", "indexes", "embeddings", "efficiently"],
  },
];

export const QUERIES = ["vector database", "database", "vector", "indexes"];

export type TermRow = {
  term: string;
  tf: number;
  idf: number;
  /** the tf part of the formula, after saturation and length correction */
  part: number;
  contribution: number;
};

export type DocRow = {
  doc: Doc;
  len: number;
  norm: number;
  score: number;
  terms: TermRow[];
};

export type Bm25Result = {
  rows: DocRow[];
  qTerms: string[];
  avgdl: number;
  df: Record<string, number>;
};

export function computeBm25(query: string, k1: number, b: number): Bm25Result {
  const qTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const N = DOCS.length;
  const lens = DOCS.map((d) => d.tokens.length);
  const avgdl = lens.reduce((a, c) => a + c, 0) / N;

  const df: Record<string, number> = {};
  for (const t of qTerms) {
    df[t] = DOCS.filter((d) => d.tokens.includes(t)).length;
  }
  const idfOf = (t: string) => Math.log(1 + (N - df[t] + 0.5) / (df[t] + 0.5));

  const rows: DocRow[] = DOCS.map((doc, i) => {
    const len = lens[i];
    const norm = 1 - b + b * (len / avgdl);
    let score = 0;
    const terms: TermRow[] = qTerms.map((term) => {
      const tf = doc.tokens.filter((x) => x === term).length;
      const part = tf === 0 ? 0 : (tf * (k1 + 1)) / (tf + k1 * norm);
      const contribution = idfOf(term) * part;
      score += contribution;
      return { term, tf, idf: idfOf(term), part, contribution };
    });
    return { doc, len, norm, score, terms };
  }).sort((a, b2) => b2.score - a.score);

  return { rows, qTerms, avgdl, df };
}

/** Highlight query terms in the document text, safely. */
export function highlight(text: string, terms: string[]): string {
  let out = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  for (const t of terms) {
    const re = new RegExp(`\\b(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "gi");
    out = out.replace(re, "<mark>$1</mark>");
  }
  return out;
}
