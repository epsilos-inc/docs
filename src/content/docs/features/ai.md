---
title: AI tools
description: "In Epsilos, AI is not a chat box bolted onto the panel: the tools are built into the admin workflow. An agentic AI editor in the admin bar, content and SEO tools, and a multi-provider backend."
sidebar:
  order: 6
---

In Epsilos, AI is not a chat box stuck in the corner of the panel. The AI tools are
built into the admin workflow and, where it matters most, they work **agentically**:
they don't just suggest text, they do the work.

## The AI editor in the admin bar (agentic)

Opened from the live editor bar, the AI editor **designs the front-end from your
prompt and writes the result into the page's header, footer and content areas
itself**, no manual copy-paste.

- **Works with tools:** it reads the page's zones, edits them, and writes to the
  theme CSS when needed.
- **Efficient by design:** the context that builds up from the first message
  (system instructions, page content, earlier steps) is **cached**, so each turn
  does not reprocess everything and pays only for what is new. Small changes use
  targeted text replacement instead of regenerating the whole page, and the agent
  does not re-read a zone it already wrote in the same session. Per-turn cost stays
  low and predictable.
- **Two modes:** a *Design* mode for structural changes, a *Content* mode for text
  only. Content mode redirects you to Design mode when a request is structural.
- **Draft → preview → publish:** every change accumulates in a draft first, is
  previewed with the real theme render, and is published on your approval.
- **Version history:** every publish is recorded in the content history tagged
  "AI Editor"; you can roll back at any time.
- **You stay in control:** a run shows live progress and can be stopped at any
  moment (an interrupted turn is never written to the site). Each turn shows an
  estimated token count and cost.

## Content and SEO tools

From the admin panel:

- Product and page description generation
- SEO title / description / keyword copy (with instructions specific to your
  business model)
- Competitor analysis
- Variant generation assistance

## Storefront AI assistant

Optionally, an AI assistant that helps visitors on the storefront can be enabled.

## Multi-provider backend

Epsilos is not tied to a single AI provider. Gemini, OpenAI, Anthropic (Claude),
Grok and Groq are supported; which tool uses which model is managed from settings.
The agentic editor runs on Claude (Sonnet by default; Fable and Opus are also
available).

## Purpose

AI's job here is to remove repetitive work, not to replace the person. That is why
every generation is **draft first**, then **approval**, then **reversible**. Cost is
shown openly and the [changelog](/changelog) is public. The AI works with Epsilos's
**modernized architecture** (see [What is Epsilos?](/getting-started/what-is-epsilos)):
CSS it produces is written to the theme as marked blocks, so the file does not bloat.
