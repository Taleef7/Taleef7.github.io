---
layout: page
title: "M.S. Thesis: PEFT and Jailbreak Robustness"
description: Does parameter-efficient fine-tuning make LLMs easier to jailbreak?
img:
importance: 1
category: research
---

**Do Efficient Adaptations Reduce Safety? Jailbreak Robustness of PEFT vs. Full Fine-Tuning on Consumer-Accessible LLMs**

_M.S. thesis, Purdue University Fort Wayne, defended May 2026_  
_Advisor: Dr. Jonathan Rusert. Committee: Dr. Anshuman Misra and Prof. Jay Johns._

People fine-tune open-weight models on consumer hardware all the time, usually with LoRA or QLoRA instead of full fine-tuning. My thesis asks whether that choice changes how easily the resulting model can be jailbroken. I fine-tuned 25 model configurations across five families (Gemma-2, Llama-3.1, Phi-4, Qwen2.5, and Qwen3), attacked them with four jailbreak methods on two safety benchmarks, and scored nearly 600 attack-success measurements with three automated evaluators. A 750-sample human annotation study checked the evaluators themselves.

## Findings

- Full fine-tuning, LoRA, and QLoRA all raised average black-box attack success. The method mattered less than the fact of fine-tuning.
- The attack type interacted with the adaptation method. A model that got harder to break with a white-box attack could get easier to break with black-box ones.
- The evaluator changed the answer. Against human labels, the HarmBench classifier was far more precise than GPT-4o-mini, which flagged many safe outputs as jailbreaks.
- Quantizing the base model to 4 bits did not measurably change its safety.

## Methods

- Attacks: PAIR, DeepInception, ArtPrompt, and AutoDAN, on HarmBench and JailbreakBench
- Training and evaluation pipelines with FSDP and SLURM on Purdue's Gilbreth cluster (A100 and A30 GPUs)
- Bootstrap confidence intervals, equivalence testing, and interaction analysis

## Papers from this work

- _Adaptation, Not Algorithm: LoRA and Full Fine-Tuning Show Comparable Black-Box Jailbreak Degradation in Five Open-Weight LLMs._ Findings of AACL-IJCNLP 2026. [[code and artifacts]](https://github.com/Taleef7/adaptation-not-algorithm)
- _Your Judge Is a Confound: Evaluator and Attack Choice Distort Jailbreak-Safety Measurement for Fine-Tuned LLMs._ JUDGe workshop at NeurIPS 2026 (oral); AdvML-Frontiers × CoTMA at COLM 2026.

## Links

- [Thesis in the Purdue repository](https://doi.org/10.25394/PGS.32192700)
- [Paper code and artifacts](https://github.com/Taleef7/adaptation-not-algorithm)
