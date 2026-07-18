---
layout: page
title: "Master's Thesis: PEFT and Jailbreak Robustness"
description: Jailbreak robustness of PEFT versus full fine-tuning on consumer-accessible LLMs
img:
importance: 1
category: research
---

**Do Efficient Adaptations Reduce Safety? Jailbreak Robustness of PEFT vs. Full Fine-Tuning on Consumer-Accessible LLMs**

_Master's Thesis, Purdue University, defended May 2026_
_Advisor: Dr. Jonathan Rusert; Committee: Dr. Anshuman Misra and Dr. Jay Johns_

This thesis presents a systematic empirical study of how full fine-tuning, LoRA, QLoRA, and quantization affect jailbreak robustness in consumer-accessible language models. The study covers **25 model configurations**, **four jailbreak attacks**, **two safety benchmarks**, **three automated evaluators**, and **600 attack-success-rate measurements**, with a 100-sample human annotation study for evaluator validation.

## Research Questions

## Principal Findings

- Full fine-tuning, LoRA, and QLoRA all increased mean black-box attack success in the primary analysis.
- Attack type interacted significantly with adaptation strategy: behavior that improved against a white-box attack could worsen against black-box attacks.
- Evaluator choice materially changed measured safety; human validation favored the Llama-2 evaluator over GPT-4o-mini for precision on the annotated sample.
- Four-bit quantization of the base model preserved safety within the uncertainty of the study.

## Methodology

- Empirical evaluation using PAIR, DeepInception, ArtPrompt, and AutoDAN
- Testing Gemma-2, Llama-3.1, Qwen-3, Phi-4, and Qwen-2.5 model families
- Reproducible FSDP and SLURM training and evaluation pipelines on Purdue Gilbreth
- Statistical analysis with bootstrap confidence intervals, hypothesis tests, and interaction analysis

## Skills & Tools

Python, PyTorch, Transformers, PEFT, LoRA/QLoRA, Quantization, Adversarial Evaluation, LLM Safety

## Links

- [Thesis repository](https://github.com/Taleef7/peft-robustness-thesis)
- [Thesis PDF and publication record](https://hammer.purdue.edu/articles/thesis/Do_Efficient_Adaptations_Reduce_Safety_Jailbreak_Robustness_of_PEFT_vs_Full_Fine-Tuning_on_Consumer-Accessible_LLMs/32192700)
