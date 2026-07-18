---
layout: page
title: SemEval 2026 Task 6 (CLARITY)
description: Multi-seed DeBERTa ensembles for political response clarity and evasion classification
img:
importance: 6
category: research
---

**SemEval-2026 Task 6: Multi-Seed DeBERTa Ensembles for Political Response Clarity and Evasion Classification**

_With Dr. Jonathan Rusert, Purdue University, 2026_

I co-authored the system paper for SemEval 2026 Task 6 (CLARITY), which studies whether political responses clearly answer questions or evade them. Our system used multi-seed DeBERTa ensembles and placed **18/41** on Subtask 1 (clarity) and **12/33** on Subtask 2 (evasion).

## System and Results

- DeBERTa-xlarge for 3-way clarity classification and DeBERTa-v3-large for 9-way evasion classification
- Five folds and ten seeds per fold, producing a 50-model ensemble for each subtask
- Simple logit averaging without an external LLM or API dependency
- Official macro F1 of **0.76** for clarity and **0.50** for evasion

The paper also documents an optimization paradox: learned ensemble weights, per-class thresholds, and hierarchical masking improved out-of-fold scores but degraded official evaluation scores. Model-level diversity transferred more reliably than prediction-level calibration under the limited evaluation set.

## Task Scope

The task uses the QEvasion dataset and evaluates both 3-way clarity (*Clear Reply*, *Ambivalent*, *Clear Non-Reply*) and 9-way evasion-type classification.

## Links

- [Code and paper repository](https://github.com/Taleef7/semeval-2026-task6)
- [CLARITY task page](https://konstantinosftw.github.io/CLARITY-SemEval-2026/)
