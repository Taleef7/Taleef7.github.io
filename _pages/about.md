---
layout: about
title: about
permalink: /
subtitle: Software Developer @ Medical Informatics Engineering · M.S. Computer Science, Purdue Fort Wayne '26

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

announcements:
  enabled: false # news is included inline below the intro instead of after the page content
  scrollable: false # the 5 latest items fit without a scroll box
  limit: 5 # leave blank to include all the news in the `_news` folder

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

I am a software engineer and researcher who ships production systems and measures whether they work. At Medical Informatics Engineering, I am the sole developer of WorkWell Measure Studio, a healthcare quality-measure platform. I completed my M.S. in Computer Science at <a href='https://www.pfw.edu/'>Purdue University Fort Wayne</a> in May 2026 and defended my thesis on the jailbreak robustness of parameter-efficiently adapted language models under the supervision of Dr. Jonathan Rusert.

My research interests are **LLM safety and adversarial robustness**, **reliable evaluation**, **agentic AI security**, and **trustworthy NLP/RAG**. I care about building evaluations that make failure modes visible before they reach users, and about checking that the evaluators themselves can be trusted.

<h2 style="clear: both"><a href="{{ '/news/' | relative_url }}" style="color: inherit">News</a></h2>

{% include news.liquid limit=true %}

## Selected Research

- **Adaptation, Not Algorithm** (Findings of AACL-IJCNLP 2026): LoRA and full fine-tuning show comparable black-box jailbreak degradation across five open-weight LLM families, six attacks, and three automated judges checked against 750 blind human annotations. [[code/artifacts]](https://github.com/Taleef7/adaptation-not-algorithm)
- **Your Judge Is a Confound** (JUDGe @ NeurIPS 2026, oral; AdvML-Frontiers × CoTMA @ COLM 2026): Evaluator and attack choice can change jailbreak-safety conclusions as much as the adaptation method does. Even GPT-5.6 judges over-flag 21.5–29.9% of safe completions.
- **SemEval 2026**: First-authored system papers on multi-seed DeBERTa ensembles for political response clarity and evasion ([Task 6](https://aclanthology.org/2026.semeval-1.197/)) and lightweight tri-fusion retrieval for multi-turn RAG ([Task 8](https://aclanthology.org/2026.semeval-1.198/), 6/26 on Task B).
- **Ongoing**: Validity instruments in adversarial attack evaluation: a budget-aware black-box attack agent against hate-speech classifiers, and survival-based judges to replace edit-size constraints inherited from word-substitution attacks.

## Selected Engineering Work

- **WorkWell Measure Studio** (Medical Informatics Engineering): A TypeScript/Next.js platform that runs CMS FHIR/CQL measure logic over FHIR R4 data via SMART Backend Services. Nine CMS measures pass all 455 official MADiE test cases, the backend has 3,268 automated tests, and a read-only MCP interface exposes 13 role-gated tools without letting AI decide compliance.
- **RASS / CoRAG**: Built a containerized RAG platform for citation-backed semantic search over 3,000+ Redmine issues, load-tested at 25 concurrent users with sub-500 ms responses and traced with OpenTelemetry.
- **JobOps Copilot**: Built and deployed an Azure-hosted AI job-operations platform with a Next.js frontend, Express/TypeScript API, FastAPI agent service, LangGraph workflows, and RAG; improved ranking correlation from 0.716 to 0.821.
- **Riccle**: Analyzed customer, transaction, and competitor data with Python and SQL, then automated go-to-market workflows that removed six hours of weekly reconciliation.
