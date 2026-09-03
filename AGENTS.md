# Epsilos Docs

Epsilos'un kamuya açık bilgi bankası (`docs.epsilos.com`). Amaç: LLM görünürlüğü +
markalı/karşılaştırma SEO'su. **Bu proje ana `smartweb` çözümünden bağımsızdır.**

- **Plan / hedefler / deploy / Search Console:** ana repoda `smartweb/docs/docs-site.md`
- Astro + Starlight statik site, **veritabanı yok**
- İçerik: `src/content/docs/**` (İngilizce, kaynak dil, öneksiz) + `src/content/docs/tr/**` (Türkçe, `/tr/`)
- Alt-yollar diller arası aynı; çevrilmemiş sayfa İngilizce'ye düşer; sidebar `astro.config.mjs`
- Sonraki diller aynı desenle: `src/content/docs/<lang>/**` + `locales` girişi
- İçerik kaynağı: `smartweb/docs/business-context.md` (Epsilos = "managed SaaS" konumlandırması)
- Deploy hedefi: `DOCS_SITE` env var

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
