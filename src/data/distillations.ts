export type Distillation = {
  slug: string;
  title: string;
  question: string;
  /** The one-sentence model that ends every distillation */
  oneSentence: string;
  fields: string[];
  readingTime: string;
};

export const DISTILLATIONS: Distillation[] = [
  {
    slug: "semantic-search",
    title: "Semantic Search",
    question:
      "How does a computer know that “dog” and “puppy” are related when they are different words?",
    oneSentence:
      "Semantic search finds information by comparing meaning rather than only matching words.",
    fields: ["retrieval", "embeddings"],
    readingTime: "14 min",
  },
  {
    slug: "bm25",
    title: "BM25",
    question:
      "How does a search engine decide which document is most relevant — using nothing but word counts?",
    oneSentence:
      "BM25 ranks a document by how often your words appear in it, weighted by how rare those words are, corrected for document length.",
    fields: ["retrieval", "ranking"],
    readingTime: "16 min",
  },
  {
    slug: "chunking",
    title: "Chunking",
    question:
      "Why does a search system that understands meaning still miss the answer that was right there in the document?",
    oneSentence:
      "Chunking is the decision about what counts as one searchable unit — and most retrieval failures start there.",
    fields: ["retrieval", "chunking"],
    readingTime: "13 min",
  },
  {
    slug: "reranking",
    title: "Reranking",
    question:
      "If vector search already found the right document, why do production systems pay for a second pass?",
    oneSentence:
      "A reranker is a slower, more careful reader that looks at your query and each candidate together — and fixes the order the fast pass got approximately right.",
    fields: ["retrieval", "ranking"],
    readingTime: "12 min",
  },
  {
    slug: "recall-mrr-ndcg",
    title: "Recall@K, MRR, nDCG",
    question:
      "How do you know a retrieval system got better — without trusting your own vibes?",
    oneSentence:
      "Retrieval metrics are three questions asked of one ranked list: did you find it, how high, and how well did you order everything that matters?",
    fields: ["evaluation", "retrieval"],
    readingTime: "15 min",
  },
];

/** Topics in the queue — visible, honest, not yet written. */
export const DISTILLATION_QUEUE = [
  "Cosine similarity",
  "Embeddings",
  "HNSW",
  "Vector databases",
  "Attention",
  "Tokens",
  "Context windows",
  "Tool calling",
  "Structured outputs",
  "Groundedness",
  "LLM evaluations",
  "RAG",
  "Queues",
  "Caching",
  "Database indexes",
  "Transactions",
];
