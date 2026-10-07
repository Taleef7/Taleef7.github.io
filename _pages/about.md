---
layout: about
title: about
permalink: /
subtitle: Software Developer at Medical Informatics Engineering · Researcher in LLM safety and evaluation

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

I'm a software developer at Medical Informatics Engineering and a researcher in LLM safety and evaluation. I finished my M.S. in Computer Science at <a href='https://www.pfw.edu/'>Purdue University Fort Wayne</a> in May 2026, where Dr. Jonathan Rusert advised my thesis on how parameter-efficient fine-tuning affects jailbreak robustness.

Most of my research asks whether the numbers we report about model safety can be trusted. I study how fine-tuning changes a model's resistance to jailbreaks, and how much the answer depends on the automated judge doing the scoring. In one of our studies, GPT-4o-mini labeled 45.7% of outputs that human annotators agreed were safe as jailbreaks. I'm also interested in agentic AI security and in retrieval systems that stay faithful to their sources.

At work I'm the sole developer of WorkWell Measure Studio, which computes CMS clinical quality measures from FHIR data. It's the same problem in a different setting: checking that a system's output means what it claims to mean.

<h2 style="clear: both"><a href="{{ '/news/' | relative_url }}" style="color: inherit">News</a></h2>

{% include news.liquid limit=true %}

## Selected research

- _Adaptation, Not Algorithm_ (Findings of AACL-IJCNLP 2026). Across five open-weight model families, LoRA and full fine-tuning degrade black-box jailbreak safety by about the same amount. QLoRA is less predictable, and 4-bit quantization alone does little. [[code and artifacts]](https://github.com/Taleef7/adaptation-not-algorithm)
- _Your Judge Is a Confound_ (JUDGe workshop at NeurIPS 2026, oral; AdvML-Frontiers × CoTMA at COLM 2026). Swapping the judge can change a safety conclusion as much as swapping the fine-tuning method. Even GPT-5.6 judges flagged 21.5–29.9% of safe completions, and identical outputs sometimes got a different label when scored again.
- Two SemEval 2026 system papers in the ACL Anthology: multi-seed DeBERTa ensembles for political response clarity ([Task 6](https://aclanthology.org/2026.semeval-1.197/)) and tri-fusion retrieval for multi-turn RAG ([Task 8](https://aclanthology.org/2026.semeval-1.198/), 6th of 26 on generation).
- In progress: a budget-aware black-box attack agent against hate-speech classifiers. The validity constraints these attacks are usually scored with measure edit size rather than whether the harmful content survived, so I'm calibrating survival-based judges against human-written contrast pairs.

See [publications]({{ '/publications/' | relative_url }}) for abstracts, PDFs, and BibTeX.

## Selected engineering work

- [WorkWell Measure Studio]({{ '/projects/11_workwell/' | relative_url }}) (Medical Informatics Engineering, 2026–present). A TypeScript/Next.js platform that runs CMS FHIR/CQL measure logic. Nine CMS measures pass all 455 official test cases, and the platform has computed 72,100 outcomes for 5,000 subjects. AI tools help with drafting and evidence review, but deterministic logic decides every compliance result.
- [RASS]({{ '/projects/2_rass/' | relative_url }}) (Medical Informatics Engineering internship, 2025). A containerized RAG service for semantic search over 3,000+ Redmine issues, load-tested at 25 concurrent users with responses under 500 ms.
- [JobOps Copilot]({{ '/projects/8_jobops_copilot/' | relative_url }}) (2026–present). A multi-tenant platform that runs stateful LangGraph agents with pgvector RAG and MCP tools, with tenant isolation, PII redaction, and CI quality gates.
- Riccle (2025–2026). At an early-stage e-commerce startup, I merged order, inventory, payment, and customer data from four trackers into one source and set up recurring KPI reports in SQL and Python, saving about six hours a week.
