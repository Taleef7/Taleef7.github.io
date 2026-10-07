---
layout: page
title: SemEval-2025 Task 10
description: Narrative framing in multilingual online news
img:
importance: 5
category: research
---

**SemEval-2025 Task 10: Multilingual Characterization and Extraction of Narratives from Online News**

_Purdue University Fort Wayne, 2024–2025_

This task looks at how news articles frame people and events in five languages: English, Georgian, German, Greek, and Turkish. I built XLM-RoBERTa and multilingual BERT systems for three subtasks:

1. Entity framing: is a named entity cast as a protagonist, an antagonist, or an innocent?
2. Narrative classification: which narratives and sub-narratives does an article contain?
3. Narrative extraction: write a short explanation of the main narrative, grounded in the article text.

## Results

On our internal validation split, the systems reached about 8x the shared baseline. The harder lesson was how much the outcome depended on representation choices and on how evaluation was set up, which matters a lot for politically sensitive text where labels are already contested.

## Stack

Python, PyTorch, Hugging Face Transformers, XLM-RoBERTa, multilingual BERT

## Links

- [GitHub repository](https://github.com/Taleef7/semeval-2025-task10-PFWT10)
