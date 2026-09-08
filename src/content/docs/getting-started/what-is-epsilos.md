---
title: What is Epsilos?
description: Epsilos is a managed platform that provides businesses with e-commerce stores and ready websites. Hosting and infrastructure are handled by Epsilos; management happens in a browser-based admin panel.
sidebar:
  order: 1
---

Epsilos ([epsilos.com](https://www.epsilos.com)) provides businesses of every size
with **e-commerce stores** and **ready websites**. A client subscribes to a package,
gets a ready-to-use site, and manages everything from an admin panel, no technical
background required.

It sits in the same category as Shopify, WooCommerce and Wix-based stores: the
client can build and run the store or site through the browser, and the Epsilos
team can also handle setup on request at no extra charge.

Epsilos is more than an e-commerce provider: it is an **ecosystem**. Developers,
designers, digital agencies and hosting providers can serve their own clients on
top of Epsilos as partners. They can also offer their products and services
(theme development, hosting and more) to every Epsilos user through the **Epsilos
Market** and earn revenue from them.

Epsilos serves e-commerce at every scale. For large businesses with **high-capacity**
needs it offers dedicated solutions and comprehensive development packages: **B2C**
storefronts alongside **high-traffic** e-commerce packages, **B2B** systems and
**cross-border / e-export** solutions.

**Hosting is flexible.** By default Epsilos runs the infrastructure on its own
servers as a managed service: nothing for the client to set up or maintain, with
updates and backups handled by Epsilos. When you need more control, the same
platform can run on partner data centers, another hosting provider or your own
servers. The **Epsilos licence system** lets you run Epsilos on your own
infrastructure. This is more flexibility and control than most e-commerce software
vendors offer.

Epsilos keeps pace with evolving software technology and publishes updates from the
Epsilos panel, showing customers concrete information about the platform openly.
The [changelog](/changelog) is public.

## Two product lines, one platform

### E-commerce packages

Epsilos offers professional e-commerce packages for many sectors, from general
product catalogs to those needing custom modules: B2C, B2B, cross-border,
marketplace integrations, ERP and e-document integrations, a mobile app, UX tools
and digital marketing services.

It covers everything from low-volume stores to high-traffic e-commerce portals.
Custom modules are built per client request for sector-specific needs. Thanks to
Epsilos's architecture these are designed as **isolated modules**: each coded
component is kept isolated in the codebase and included in the project build only
when needed. So no store owner carries the weight of code they don't use. This
**isolated-module design** keeps bugs to a minimum and makes updates and
maintenance easier; the result is faster, leaner e-commerce software with no
stale-code burden.

### Ready website packages

Ready-to-use website packages for businesses that want a corporate or showcase site
without a store. Drag-and-drop design tools, one-click live-editor editing, blog,
contact forms, multi-language support, SEO, UX tools and theme designs suited to
your business model.

### Concept design

For clients who want an original, purpose-built design, Epsilos produces a
brand-specific theme and delivers it on the same platform, integrated into Epsilos.

## Signature feature: the visual page builder

Epsilos's signature feature is a **drag-and-drop layout designer** that works
directly on the live site view. Pages are built with a 4-level nested grid:
**Grid → Row → Column → Module**, styled with 35+ ready-made modules. Each module
has its own settings panel opened via a gear icon on the live canvas. No coding
required. You can edit your content the fastest, easiest way through neat inline
panels, without even entering the admin panel.

## Themes and sectors

Epsilos ships responsive themes and modules tuned for **30+ sectors**: textile and
apparel, electronics, furniture and home, food and grocery, cosmetics, automotive
parts, jewelry and accessories, sporting goods, books and stationery, B2B wholesale
and more. The active theme is switched from the panel without touching content or
data.

## System architecture

Epsilos has built high-performance solutions on current software architectures
since 2019. The current generation, **v3 "Nova"**, is a full modernization of the
platform on a current stack.

It is a multi-tenant platform, available as a SaaS service or deployed on your own
infrastructure:

- **Backend:** ASP.NET Core (.NET) with Entity Framework Core as the data layer.
- **Database:** PostgreSQL (primary), with SQL Server also supported.
- **Admin panel:** a React 19 single-page application (Vite, MUI) talking to a
  JSON API.
- **Storefront:** server-rendered for SEO and fast first load, progressively
  enhanced with JavaScript.
- **Multi-tenancy:** every store runs with its **own isolated database and
  application pool**: tenant data is separated by design, not by a filter column.
- **Deployment:** run fully managed by Epsilos, or on partner data centers or your
  own servers. The licence system enables self-hosted and partner-hosted
  installations.
- **Delivery:** static assets served from a CDN; themes and settings resolved at
  runtime so changes apply without redeploying.
- **Operations:** in the managed model, Epsilos handles hosting, scaling, security
  patching, monitoring and backups.

## Next steps

- [Who is it for?](/getting-started/who-is-it-for)
- [How it works](/getting-started/how-it-works)
- [Full feature list](/features/overview)
