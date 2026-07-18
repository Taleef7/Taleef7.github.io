---
layout: page
title: RASS
description: Retrieval-Augmented Semantic Search platform for enterprise documents
img:
importance: 2
category: work
---

**Retrieval-Augmented Semantic Search (RASS)**

_Medical Informatics Engineering | Software Development Intern | May 2025 - September 2025_

Built a containerized, multi-service RAG platform for semantic, citation-backed search over long-form enterprise documents. The system decouples asynchronous ingestion from query serving and treats evaluation as a first-class requirement, with automated quality gates for grounding and relevance integrated into the deployment pipeline.

## Key Contributions

- Designed and implemented a multi-service RAG pipeline using Node.js, Docker, OpenSearch, Redis, and PostgreSQL
- Combined HyDE query expansion, hybrid search, parent-child retrieval, deduplication, reranking, and feedback boosting
- Indexed more than 3,000 Redmine issues and measured more than 85% context relevance with TruLens
- Exposed REST, MCP, and SSE interfaces with structured citations, JWT/API-key authentication, user-scoped security filters, and OpenTelemetry observability
- Decoupled asynchronous document ingestion from query serving for up to 25 concurrent users and AI agents

## Technical Stack

Python, LangChain, Vector Databases, Docker, RAGAS, TruLens, Enterprise Search

## Impact

- Enabled citation-backed semantic search across thousands of pages of technical documentation
- Established an evaluation-first approach to ensure answer quality before deployment
- Provided measurable quality and observability signals for stakeholder confidence

## Links

- [RASS / CoRAG repository](https://github.com/Taleef7/enhanced-rass)
