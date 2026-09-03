# Epsilos Docs

Epsilos'un resmi bilgi bankası / dokümantasyon sitesi. **Astro + Starlight** ile
üretilen statik site; `docs.epsilos.com` (TR kök + `/en/` İngilizce) adresine deploy edilir.

> Ayrıntılı plan, hedefler ve deploy notları: ana repoda `smartweb/docs/docs-site.md`.

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/  (statik cikti)
npm run preview
```

Deploy hedefi ortam degiskeniyle secilir:

```bash
DOCS_SITE=https://docs.epsilos.com npm run build
```

## Icerik

- `src/content/docs/**` — TR sayfalar (kok dil, URL onegi yok)
- `src/content/docs/en/**` — Ingilizce sayfalar (`/en/` altinda)
- Bolumler: `getting-started/`, `features/`, `comparison/`, `pricing/`, `partners/`, `faq/`
- Slug'lar Ingilizce kanonik; goruntulenen metin dile gore cevrilir
- Sidebar yapisi: `astro.config.mjs`

## Veritabani

Yok. Statik site — icerik markdown olarak bu repoda. Veritabani, backend veya
runtime yok.
