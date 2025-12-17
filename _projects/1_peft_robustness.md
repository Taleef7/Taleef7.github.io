---
layout: page
title: PEFT & Jailbreak Robustness
description: Master's thesis on robustness-efficiency trade-offs in instruction-tuned LLMs
img:
importance: 1
category: research
---

**Robustness-Efficiency Trade-offs in PEFT-based Instruction-Tuned LLMs**

*Master's Thesis, Purdue University Fort Wayne*  
*Advisor: Dr. Jonathan Rusert*

This thesis empirically studies how parameter-efficient fine-tuning (PEFT) techniques like LoRA and QLoRA, combined with quantization, affect the jailbreak robustness of consumer-sized language models. The core research question is whether the same techniques that make models cheaper and easier to deploy can quietly erode safety margins under realistic adversarial prompting.

## Research Questions

- How do PEFT methods (LoRA, QLoRA) interact with quantization to influence model robustness against jailbreak attacks?
- What are the trade-offs between computational efficiency and adversarial robustness in instruction-tuned models?
- Can we identify systematic patterns in how efficiency optimizations impact safety alignment?

## Methodology

- Empirical evaluation using modern black-box jailbreak attack families
- Testing on consumer-accessible model sizes (7B-13B parameters)
- Building evaluation harnesses for reproducible robustness experiments
- Comprehensive analysis of failure modes under different PEFT and quantization configurations

## Target Venue

EMNLP 2026

## Skills & Tools

Python, PyTorch, Transformers, PEFT, LoRA/QLoRA, Quantization, Adversarial Evaluation, LLM Safety
