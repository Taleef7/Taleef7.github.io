---
layout: page
title: WorkWell Measure Studio
description: Healthcare quality-measure platform built on FHIR and CQL
img:
importance: 1
category: work
---

_Medical Informatics Engineering · Software Developer · May 2026–present_

WorkWell Measure Studio is a full-stack platform for Total Worker Health compliance. It runs CMS clinical quality measure logic written in CQL, reads patient data as HL7 FHIR R4 through SMART Backend Services, and keeps the evidence behind every computed result so a reviewer can see why a case passed or failed. I'm its sole developer.

## What I built

- Encoded nine CMS clinical quality measures. All nine pass the 455 official MADiE test cases, and measure correctness is a release gate. Along the way I found a defect in the reference engine, which its maintainers confirmed.
- Scaled the platform to 72,100 computed outcomes across 5,000 subjects, with a resumable batch pipeline that keeps memory bounded and isolates failures to individual records.
- Traced a four-day production outage to its root cause. The fix cut idle database queries from about 1,300 a day to 2.
- Moved manual drafting and evidence review into AI-assisted workflows through 13 role-gated, read-only MCP tools. The AI can draft and summarize, but deterministic CQL decides every compliance result.
- Migrated the backend from Java 21/Spring Boot to modular TypeScript without breaking any REST contracts, and added FHIR MeasureReport, MAT-compatible, and QRDA exports.
- Backed it all with 3,268 automated backend tests in CI.

## Stack

TypeScript, Next.js, PostgreSQL, Docker, GitHub Actions, HL7 FHIR R4, SMART Backend Services, CQL, MCP

## Links

- [GitHub repository](https://github.com/Taleef7/workwell)
