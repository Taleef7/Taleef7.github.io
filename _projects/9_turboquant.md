---
layout: page
title: TurboQuant
description: KV-cache compression for long-context language models
img:
importance: 6
category: research
---

_Replication and evaluation project, 2026_

Long contexts run out of GPU memory because the key-value cache grows with every token. I reimplemented TurboQuant-style KV-cache compression in PyTorch to see how much memory it saves on consumer GPUs and what it costs in output quality. The implementation combines rotation, Lloyd-Max quantization, and Hugging Face's DynamicCache, and every compressed run is paired with an uncompressed baseline.

## Results

- 5.2x KV-cache compression in the validated configuration
- Completion quality matched the baseline on the test suites I ran
- On Qwen2.5-7B, needle-in-a-haystack retrieval stayed within 1.39 percentage points of the baseline out to 32K tokens
- Release-check scripts and reports document exactly what was tested and where the implementation stops

## Stack

Python, PyTorch, CUDA, Triton, Hugging Face Transformers

## Links

- [GitHub repository](https://github.com/Taleef7/turboquant)
- [Original TurboQuant paper](https://arxiv.org/abs/2504.19874)
