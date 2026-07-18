---
layout: page
title: TurboQuant
description: KV-cache compression for long-context language models
img:
importance: 4
category: research
---

**TurboQuant: KV-Cache Compression for LLMs**

_Engineering replication and evaluation project, 2026_

Reimplemented TurboQuant-style KV-cache compression in PyTorch to study the trade-off between long-context memory usage and generation quality on consumer GPUs. The implementation integrates rotation, Lloyd-Max quantization, Hugging Face DynamicCache, and paired baseline-versus-compressed evaluation.

## Results

- Achieved **5.2x** KV-cache compression in the validated configuration
- Matched baseline completion quality in the tested suites
- Met the retrieval-safety gate through 32K context on Qwen2.5-7B, with a **1.39 percentage-point** paired NIAH delta
- Documented the current scope and limits with reproducible release-check scripts and reports

## Technical Stack

Python, PyTorch, CUDA, Hugging Face Transformers, DynamicCache, Lloyd-Max quantization

## Links

- [GitHub repository](https://github.com/Taleef7/turboquant)
- [Original TurboQuant paper](https://arxiv.org/abs/2504.19874)
