---
title: Performance
description: Epsilos storefronts and websites are built for speed — server-rendered, CDN-backed, with automatic image optimization. Real Core Web Vitals and Lighthouse data.
sidebar:
  order: 4
---

Epsilos sites are built to load fast. The storefront is server-rendered for a quick
first paint, static assets are served from a global CDN, images are optimized
automatically, and pages are cached at the edge and in the application.

## Real data — epsilos.com.tr

epsilos.com.tr is itself built on the Epsilos platform (corporate website theme).
[PageSpeed Insights](https://pagespeed.web.dev/), desktop:

| Category | Score |
| --- | :---: |
| Performance | **97** / 100 |
| Accessibility | **95** / 100 |
| Best Practices | **100** / 100 |
| SEO | **100** / 100 |
| Agentic browsing | **3** / 3 |

**Core Web Vitals — field data (real Chrome users), desktop: passing**

| Metric | Value | Threshold |
| --- | :---: | :---: |
| Largest Contentful Paint (LCP) | 0.8 s | &lt; 2.5 s |
| Interaction to Next Paint (INP) | 38 ms | &lt; 200 ms |
| Cumulative Layout Shift (CLS) | 0 | &lt; 0.1 |

Lab metrics (desktop): First Contentful Paint 0.8 s · Largest Contentful Paint
0.9 s · Total Blocking Time 100 ms · Cumulative Layout Shift 0.013 · Speed Index
1.1 s.

![PageSpeed Insights report for epsilos.com.tr on desktop — Performance 97, Accessibility 95, Best Practices 100, SEO 100, Agentic Browsing 3/3](/img/pagespeed-epsilos-com-tr.png)

## What makes Epsilos sites fast

- **Server-rendered storefront** — HTML is rendered on the server, so the first
  paint does not wait for JavaScript.
- **Global CDN** — CSS, JavaScript, fonts and images are served from edge locations
  close to the visitor.
- **Automatic image optimization** — uploaded images are resized and re-encoded;
  each layout slot requests the size it needs.
- **Page and fragment caching** — resolved pages and reusable sections are cached,
  so most requests skip database work.
- **Lean front-end** — the storefront ships minimal JavaScript; interactive parts
  are enhanced progressively.

## Why the score is not 100

PageSpeed usually flags a few **render-blocking CSS and JavaScript requests**. The
score can be pushed higher by merging every stylesheet and script into a single
file, or inlining them into the page — and a site owner who wants that can do it at
any time through the custom code slots.

Epsilos does not do this by default, on purpose. Keeping styles and scripts as
separate, editable files is what makes everyday customization quick; consolidating
everything trades a few milliseconds for slower edits on every future change. A
score in the mid-to-high 90s with passing Core Web Vitals is already an excellent
result for real users, so chasing a perfect 100 is rarely a worthwhile effort.

## Measure it yourself

Run [PageSpeed Insights](https://pagespeed.web.dev/) on any Epsilos site — a
[demo store](https://www.epsilos.com.tr/installer) or epsilos.com.tr — or run
Lighthouse from Chrome DevTools.

> Scores reflect a specific page, device and network at measurement time and will
> vary. Core Web Vitals field data needs enough real Chrome traffic to appear; on
> lower-traffic pages PageSpeed falls back to origin-level data.
