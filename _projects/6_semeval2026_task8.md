---
layout: page
title: SemEval 2026 Task 8 (MTRAGEval)
description: Lightweight tri-fusion retrieval and faithful generation for multi-turn RAG
img:
importance: 3
category: research
---

**PFW Task 8 at SemEval-2026 Task 8: Lightweight Tri-Fusion Retrieval with Prompt-Engineered Faithful Generation for Multi-Turn RAG**

_Taleef Tamsal and Jonathan Rusert. SemEval 2026, pp. 1526–1532._

MTRAGEval tests retrieval-augmented generation over multi-turn conversations, where each new question depends on what came before. Our system fuses three retrievers (BM25, SPLADE-v3, and Jina Embeddings v4) with weighted reciprocal rank fusion and prompts GPT-4o or GPT-4o-mini zero-shot to answer from the retrieved passages.

## Results

<table class="table table-sm">
  <thead>
    <tr><th>Task</th><th>Metric</th><th>Score</th><th>Rank</th></tr>
  </thead>
  <tbody>
    <tr><td>A: retrieval</td><td>nDCG@5</td><td>0.433</td><td>20 of 38</td></tr>
    <tr><td>B: generation from reference passages</td><td>H-mean</td><td>0.756</td><td>6 of 26</td></tr>
    <tr><td>C: retrieval plus generation</td><td>H-mean</td><td>0.533</td><td>14 of 29</td></tr>
  </tbody>
</table>

## What we learned

- Telling the model exactly how to format citations raised citation use from 4% to 93% on a 100-example development sample. Chain-of-thought prompting alone did not.
- The system handled unanswerable questions almost perfectly (H = 0.990) but did poorly on underspecified ones, where it should have asked a clarifying question and instead answered or refused.

## Links

- [Paper (ACL Anthology)](https://aclanthology.org/2026.semeval-1.198/)
- [Code](https://github.com/Taleef7/semeval-2026-task8)
- [MTRAGEval benchmark](https://ibm.github.io/mt-rag-benchmark/MTRAGEval/)
