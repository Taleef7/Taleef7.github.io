---
layout: page
title: SemEval 2026 Task 6 (CLARITY)
description: Multi-seed DeBERTa ensembles for political response clarity and evasion classification
img:
importance: 2
category: research
---

**PFW at SemEval-2026 Task 6: Multi-Seed DeBERTa Ensembles for Political Response Clarity and Evasion Classification**

_Taleef Tamsal and Jonathan Rusert. SemEval 2026, pp. 1518–1525._

CLARITY asks whether a politician's answer in an interview actually answers the question. Subtask 1 labels each response as a clear reply, an ambivalent one, or a clear non-reply. Subtask 2 identifies which of nine evasion techniques was used. Our system placed 18th of 41 on clarity (macro F1 0.76) and 12th of 33 on evasion (macro F1 0.50) without calling any external LLM.

## System

- DeBERTa-xlarge for the 3-way clarity task and DeBERTa-v3-large for the 9-way evasion task
- Five cross-validation folds times ten random seeds, for 50 models per subtask, combined by averaging their logits

## What we learned

Three extra steps (learned ensemble weights, per-class thresholds, and hierarchical masking) all improved our cross-validation scores and then made the official scores worse, by 0.02 to 0.10 F1. The evaluation set has only 237 examples, and two of the three drops fall inside the noise you would expect from a set that small, so we read this cautiously. The direction was consistent, though, and it suggests that tuning on cross-validation predictions can overfit when evaluation data is limited. Adding diversity through more seeds held up better than calibrating predictions after the fact.

## Links

- [Paper (ACL Anthology)](https://aclanthology.org/2026.semeval-1.197/)
- [Code](https://github.com/Taleef7/semeval-2026-task6)
- [CLARITY task page](https://konstantinosftw.github.io/CLARITY-SemEval-2026/)
