---
layout: page
title: RASS
description: Retrieval-augmented semantic search over engineering issues
img:
importance: 2
category: work
---

**Retrieval-Augmented Semantic Search (RASS)**

_Medical Informatics Engineering · Software Development Intern · May–August 2025_

RASS lets engineers search more than 3,000 Redmine issues by meaning instead of keywords and get answers with citations back to the source issues. I built and containerized the first prototype and grew it into a multi-service platform.

## What I built

- A pipeline that ingests documents, embeds them, retrieves with hybrid search in OpenSearch, and reranks the results. An LLM plans the query before retrieval.
- Separate services for asynchronous ingestion and for query serving, written in Node.js with Redis and PostgreSQL and deployed with Docker.
- REST, MCP, and SSE interfaces with structured citations, JWT and API-key authentication, and per-user security filters, so both people and AI agents can query it.
- Benchmarks for relevance, grounding, and latency across retriever and model settings. Context relevance stayed above 85% in RAGAS and TruLens checks that run before each deployment.
- Load tests at 25 concurrent users with responses under 500 ms, plus OpenTelemetry tracing so retrieval and service failures are easy to diagnose.

## Stack

Node.js, Docker, OpenSearch, Redis, PostgreSQL, RAGAS, TruLens, OpenTelemetry

## Links

- [RASS / CoRAG repository](https://github.com/Taleef7/enhanced-rass)
