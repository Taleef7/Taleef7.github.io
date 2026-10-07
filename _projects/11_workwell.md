---
layout: page
title: WorkWell Measure Studio
description: Clinical quality measure platform built on FHIR and CQL
img:
importance: 1
category: work
---

_Medical Informatics Engineering · Software Developer · May 2026–present_

WorkWell Measure Studio is a clinical quality measure platform for WebChart. It runs CMS's own FHIR measure artifacts against live HL7 FHIR R4 data, pulled through SMART Backend Services, and keeps the evidence behind every computed result so a reviewer can see why a case passed or failed. I'm its sole developer.

## What I built

- Retired the Java/Spring Boot backend in favor of TypeScript over more than 500 pull requests, with 3,268 automated tests.
- Put measure correctness behind a permanent CI gate: all 455 official MADiE test cases across nine CMS measures have to pass. Checked against HAPI's independent engine, our results agree on 362 of 387 cases. Along the way I found a defect in the reference engine, which its maintainers confirmed.
- Scaled a 20,000-patient sandbox to 120,000 evaluations a night. Batching made official measure execution 10 to 16 times faster, and a CSV export that used to time out at 60 seconds now finishes in 7.7.
- Shipped a read-only MCP server with 13 tools, CDS Hooks cards, and FHIR MeasureReport and QRDA exports that validate with zero errors. The AI tools can look things up and summarize, but they never decide compliance.

## Stack

TypeScript, Next.js, PostgreSQL, Docker, GitHub Actions, HL7 FHIR R4, SMART Backend Services, CQL, CDS Hooks, MCP

## Links

- [GitHub repository](https://github.com/Taleef7/workwell)
