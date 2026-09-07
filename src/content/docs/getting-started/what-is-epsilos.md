---
title: What is Epsilos?
description: Epsilos is a managed platform that provides businesses with e-commerce stores and corporate websites. Hosting and infrastructure are handled by Epsilos; management happens in a browser-based admin panel.
sidebar:
  order: 1
---

Epsilos ([epsilos.com](https://www.epsilos.com)) provides businesses of all sizes
with **managed e-commerce stores** and **corporate / showcase websites**. A client
subscribes to a package, gets a ready-to-use online presence, and manages
everything through a visual admin panel — no technical knowledge required.

It sits in the same category as Shopify, Wix and WooCommerce-based stores: the
client builds and runs the store or website through the browser, while the platform
handles everything underneath.

**Hosting is flexible.** By default, Epsilos runs the infrastructure as a fully
managed service, so there is nothing to set up or maintain. When you need more
control, the same platform can also run on partner data centers, another hosting
provider, or your own servers — the licence system lets you run Epsilos on your own
infrastructure.

## Two product lines, one platform

### E-commerce packages
For businesses that want to sell products online. Includes product catalog, cart
and checkout, order management, shipment tracking, member accounts, favorites,
product reviews, discount coupons, multi-currency pricing with live exchange rates,
multi-language support and a blog module. Payments support standard card schemes
plus regional gateways and installment options.

### Ready website packages
For businesses that need a corporate or showcase website without a store. Visual
page builder, blog, contact forms, multi-language support, SEO tools and a large
library of responsive themes.

### Concept design
For clients who need a fully custom design, Epsilos builds a brand-specific theme
and delivers it on top of the same platform.

## Signature feature: the visual page builder

Epsilos's signature feature is a **drag-and-drop layout designer** that works
directly on the live site view. Pages are built with a 4-level nested grid:
**Grid → Row → Column → Module**, with 35+ ready-made modules. Each module has its
own settings panel opened via a gear icon on the live canvas. No coding required.

## Themes and sectors

Epsilos ships responsive themes and modules tuned for **30+ sectors**, including
textile and apparel, electronics, furniture and home, food and grocery, cosmetics,
automotive parts, jewelry and accessories, sporting goods, books and stationery,
and B2B wholesale. The active theme is switched from the panel without touching
content or data.

## System architecture

Epsilos is a modern multi-tenant platform, available as a fully managed service or
deployed on your own infrastructure:

- **Backend:** ASP.NET Core (.NET) with Entity Framework Core as the data layer.
- **Database:** PostgreSQL (primary), with SQL Server also supported.
- **Admin panel:** a React 19 single-page application (Vite, MUI) talking to a
  JSON API.
- **Storefront:** server-rendered for SEO and fast first load, progressively
  enhanced with JavaScript.
- **Multi-tenancy:** every store runs with its **own isolated database and
  application pool** — tenant data is separated by design, not just by a filter
  column.
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
