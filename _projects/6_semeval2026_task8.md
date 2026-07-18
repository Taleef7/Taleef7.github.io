---
layout: page
title: SemEval 2026 Task 8 (MTRAGEval)
description: Lightweight tri-fusion retrieval and faithful generation for multi-turn RAG
img:
importance: 7
category: research
---

**SemEval-2026 Task 8: Lightweight Tri-Fusion Retrieval with Prompt-Engineered Faithful Generation for Multi-Turn RAG**

_With Dr. Jonathan Rusert, Purdue University, 2026_

I co-authored the system paper for MTRAGEval, a SemEval 2026 benchmark for multi-turn retrieval-augmented generation. The project focuses on retrieval and generation quality when conversation history accumulates across turns.

## System and Results

- Lightweight tri-fusion retrieval combining BM25, SPLADE, and Jina v4 retrieval signals
- Prompt-engineered generation designed to remain faithful to retrieved evidence
- Reproducible retrieval, generation, submission, and camera-ready analysis pipelines
- **Task A**: nDCG@5 of **0.433**, ranking **20/38**
- **Task B**: H-mean of **0.756**, ranking **6/26**
- **Task C**: H-mean of **0.533**, ranking **14/29**

## Evaluation Focus

The work connects directly to my broader research interests:

- Builds on RASS project experience with production RAG pipelines and evaluation
- Addresses evaluation as a first-class system requirement
- Focuses on realistic failure modes and edge cases
- Explores retrieval-conditioned failure patterns

## Links

- [Code and paper repository](https://github.com/Taleef7/semeval-2026-task8)
- [MTRAGEval benchmark](https://ibm.github.io/mt-rag-benchmark/MTRAGEval/)
