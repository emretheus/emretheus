# Emre Ulgac

**Senior Full-Stack Engineer · AI systems, evaluation & cloud infrastructure**

Berlin, Germany

I build software across the interface, backend and infrastructure, with 6+ years of experience in web applications and machine learning. My recent work focuses on scientific AI: multi-agent workflows, retrieval, evaluation and model serving.

I take responsibility for architecture and delivery, including the parts that keep a system usable in production: persistent state, background jobs, recovery, observability and deployment.

[Website](https://emretheus.xyz) · [LinkedIn](https://www.linkedin.com/in/emre-ulgac) · [Hugging Face](https://huggingface.co/emretheus) · [Email](mailto:ulgacemre@gmail.com)

## Recent engineering work

**Applied Scientific Intelligence · Full-Stack & AI Engineer**

- Built a collaborative research canvas with React, Tauri and Yjs, backed by FastAPI and PostgreSQL.
- Developed multi-agent orchestration connecting literature research, data analysis and prediction tools, with asynchronous execution and conversation-state handling.
- Built literature-agent APIs and persistent research sessions. Used SQS for background jobs and Redis Streams for replayable progress updates across ECS instances.
- Integrated hosted and self-hosted Nemotron models; provisioned vLLM GPU inference with AWS CDK, idle shutdown and on-demand wake-up. Owned ECS/Fargate deployments, logging and cost alerts.

**Bio Protocol · Member of Technical Staff, AI Agents**

- Built BioAgents research workflows and replaced the initial Eliza core with a custom TypeScript/Bun runtime using Anthropic and OpenAI SDKs.
- Built evaluation workflows combining scientist-led human review, LLM-as-judge assessments and LangSmith tracing.
- Implemented biomedical retrieval with document ingestion, embeddings and Cohere reranking. Designed the BullMQ/Redis job system with distributed workers, retries, renewable locks and persisted research state.
- Deployed services on AWS and DigitalOcean using Docker Swarm, with separate environments and commit-pinned releases.

Earlier, I built full-stack and smart-contract applications at Dapplabs, Softfact and CryptoWelts, taught data science at Clarusway, and developed computer vision for a waste-sorting system at Greenbrain AI.

## Selected projects

| Project | Engineering focus |
| --- | --- |
| [Jev RAG Benchmark](https://github.com/emretheus/jev-rag-benchmark) | Reproducible Python comparisons of Jev 1.13, OpenJev and NVIDIA rerankers on XQuAD-EN and SciFact. Frozen candidate pools, nDCG, probability calibration and paired bootstrap confidence intervals. [Leaderboard](https://huggingface.co/spaces/emretheus/jev-rag-benchmark-leaderboard). |
| [BioAgents](https://github.com/bio-xyz/BioAgents) | Multi-agent scientific research system I helped build at Bio Protocol, covering research planning, literature synthesis, data analysis and hypothesis generation. |
| [InClave](https://github.com/emretheus/inclave) | Co-built a local Python/Ollama assistant with sandboxed code execution, network denial and resource limits. A shared engine serves a CLI and a Tauri app through JSON-RPC. |
| [Meetwit](https://github.com/emretheus/meetwit) | Meeting assistant with local Whisper transcription, BGE-M3 embeddings and SQLite vector search, packaged with a FastAPI sidecar and Tauri desktop app. |
| [Grex](https://github.com/emretheus/grex) | A Helmor-based desktop workspace I developed for coding agents, integrating provider CLIs, Git worktrees, diff review and terminals. |

## Research

Co-author of [*Rethinking the AI Scientist: Interactive Multi-Agent Workflows for Scientific Discovery*](https://arxiv.org/abs/2601.12542), January 2026. The paper describes BioAgents and its BixBench evaluation.

## Technical toolkit

| Area | Technologies |
| --- | --- |
| Languages | Python, TypeScript, JavaScript, SQL, Solidity, PHP |
| Frontend & desktop | React, Next.js, Tauri, Yjs |
| Backend & data | FastAPI, Node.js, NestJS, Bun, Laravel, PostgreSQL, Redis |
| Agents & retrieval | LangChain, MCP, tool calling, RAG, embeddings, reranking |
| Evaluation & ML | LangSmith, human evaluation, LLM-as-judge, TensorFlow, scikit-learn, NumPy, pandas |
| Model serving | vLLM, Ollama, Amazon Bedrock, Whisper |
| Distributed workflows | BullMQ, SQS, Redis Streams, WebSockets, SSE |
| Cloud & deployment | AWS, DigitalOcean, Docker Swarm, Kubernetes, Terraform, AWS CDK, CI/CD |

<sub>Site development: [DEVELOPMENT.md](./DEVELOPMENT.md)</sub>
