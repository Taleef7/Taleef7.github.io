---
layout: page
title: JobOps Copilot
description: Human-in-the-loop AI agent platform for job-search operations
img:
importance: 3
category: work
---

**JobOps Copilot**

_Deployed project, 2026_

Built and deployed a human-in-the-loop AI job-operations platform that combines a CRM, job discovery, RAG, multi-step agents, and workflow automation. The system drafts and recommends, but does not auto-apply or send outreach without user approval.

## Key Contributions

- Built a Next.js 16 and React 19 frontend with an Express/TypeScript API and Python/FastAPI agent service
- Developed LangChain agents for job tracking, company research, interview preparation, skill-gap analysis, and outreach drafting
- Added pgvector-backed RAG over resumes and job descriptions, multi-provider model routing, tool calling, and persisted agent outputs
- Deployed the web and API services on Azure App Service with Azure PostgreSQL and the agent service on Azure Container Apps
- Added n8n, Make, and Zapier workflow integrations, evaluation gates, PII redaction, rate limits, cost controls, and prompt-injection defenses

## Links

- [GitHub repository](https://github.com/Taleef7/jobops-copilot)
- [Live demo](https://jobops-web.azurewebsites.net)

## Technical Stack

Next.js, React, TypeScript, Express, Python, FastAPI, LangChain, PostgreSQL, pgvector, Azure, Docker, n8n
