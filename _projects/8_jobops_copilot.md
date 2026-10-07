---
layout: page
title: JobOps Copilot
description: Multi-tenant AI agent platform for job-search operations
img:
importance: 3
category: work
---

_Personal project · May 2026–present · [live demo](https://jobops-web.azurewebsites.net)_

JobOps Copilot is a multi-tenant platform for running a job search: a CRM for applications, job discovery, company research, interview prep, and outreach drafting. Stateful LangGraph agents do the research and drafting, but a person approves everything. The system never applies to a job or sends a message on its own.

## What I built

- A Next.js and React frontend, an Express/TypeScript API, and a Python/FastAPI service for the agents
- LangGraph workflows for job tracking, company research, interview preparation, skill-gap analysis, and outreach drafting, with tool calls over MCP and results saved to the database
- RAG over resumes and job descriptions with pgvector, plus routing across several model providers
- Tenant isolation, PII redaction, rate limits, cost controls, and prompt-injection defenses
- Evaluation and quality gates in CI/CD, which helped raise job-ranking correlation from 0.716 to 0.821
- Workflow integrations with n8n, Make, and Zapier
- Deployment on Azure: App Service and Azure PostgreSQL for the web app and API, Container Apps for the agent service

## Stack

Next.js, React, TypeScript, Express, Python, FastAPI, LangGraph, PostgreSQL, pgvector, MCP, Azure, Docker

## Links

- [GitHub repository](https://github.com/Taleef7/jobops-copilot)
- [Live demo](https://jobops-web.azurewebsites.net)
