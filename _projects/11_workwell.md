---
layout: page
title: WorkWell Measure Studio
description: Production compliance and measure operations platform
img:
importance: 4
category: work
---

**WorkWell Measure Studio**

_Medical Informatics Engineering | Software Developer | 2026 - Present_

Building a production Total Worker Health compliance platform that brings measure authoring, deterministic CQL evaluation, case management, audit trails, administrative operations, and exportable evidence into one operational system.

## Key Contributions

- Migrated the backend from Java 21/Spring Boot to modular TypeScript while preserving REST contracts and deterministic CQL behavior
- Implemented HL7 FHIR R4, SMART Backend Services, FHIR MeasureReport, MAT-compatible, and QRDA interoperability
- Made measure correctness a release gate: **nine CMS quality measures** pass all **455 official MADiE test cases**, and I reported a confirmed reference-engine defect
- Designed a resumable batch pipeline over **70,000 PostgreSQL records** with bounded memory and per-record failure isolation
- Backend covered by **3,268 automated tests**; a read-only MCP interface exposes **13 role-gated tools** without allowing AI to determine compliance, and deterministic CQL remains the compliance authority

## Technical Stack

TypeScript, Next.js, PostgreSQL, Docker, GitHub Actions, HL7 FHIR R4, SMART Backend Services, CQL, MCP

## Links

- [GitHub repository](https://github.com/Taleef7/workwell)
