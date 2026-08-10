---
layout: about
title: about
permalink: /
subtitle: Software Developer @ Medical Informatics Engineering · M.S. Computer Science, Purdue Fort Wayne '26

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

I am a software engineer who ships production systems and measures whether they work. At Medical Informatics Engineering, I rebuilt a healthcare compliance platform's backend as its sole developer while preserving every API contract. I completed my M.S. in Computer Science at <a href='https://www.pfw.edu/'>Purdue University Fort Wayne</a> in May 2026 and defended my thesis on the jailbreak robustness of parameter-efficiently adapted language models under the supervision of Dr. Jonathan Rusert.

My work sits at the intersection of software engineering and applied AI: designing reliable services, integrating language models with existing systems, and building evaluations that make failure modes visible before they reach users.

## Professional Focus

- **Production systems**: Modular backend services, healthcare interoperability, resilient batch processing, and CI-backed delivery.
- **Applied AI**: Guardrailed assistants, read-only MCP tools, retrieval systems, and agent workflows that remain observable and grounded.
- **LLM safety and evaluation**: Adversarial robustness, evaluator calibration, and measurement methods that expose brittle behavior in realistic settings.

## Selected Research

- **Master's thesis**: _Do Efficient Adaptations Reduce Safety? Jailbreak Robustness of PEFT vs. Full Fine-Tuning on Consumer-Accessible LLMs._ I evaluated 25 model configurations across four jailbreak attacks and two safety benchmarks, producing nearly 600 attack-success-rate measurements and calibrating the results against a 750-sample human annotation study.

- **Your Judge Is a Confound**: First-authored paper on how evaluator and attack choice distort jailbreak-safety measurement for fine-tuned LLMs; accepted to the AdvML-Frontiers × CoTMA Workshop at COLM 2026.
- **SemEval 2026**: First-authored system papers on multi-seed DeBERTa ensembles for political response clarity and evasion classification (18/41 and 12/33) and lightweight tri-fusion retrieval for multi-turn RAG (6/26 on Task B).

## Selected Engineering Work

- **Medical Informatics Engineering**: Rebuilt a healthcare compliance platform from Java 21/Spring Boot to modular TypeScript, delivered HL7 FHIR R4 interoperability for eight CMS measures, and shipped guarded AI/MCP tools backed by 785 automated tests.
- **JobOps Copilot**: Built and deployed an Azure-hosted AI job-operations platform with a Next.js frontend, Express/TypeScript API, FastAPI agent service, LangGraph workflows, and RAG; improved ranking correlation from 0.716 to 0.821.
- **RASS / CoRAG**: Built a containerized RAG platform for citation-backed enterprise search with hybrid OpenSearch retrieval, reranking, MCP/SSE interfaces, and evaluation gates over 3,000+ documents.
- **Riccle**: Analyzed customer, transaction, and competitor data with Python and SQL, then automated go-to-market workflows that removed six hours of weekly reconciliation.
