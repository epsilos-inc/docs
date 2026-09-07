# Epsilos Docs

Epsilos'un resmi bilgi bankası / dokümantasyon sitesi. **Astro + Starlight** ile
üretilen statik site; `docs.epsilos.com` adresine deploy edilir.
**Varsayılan / kaynak dil: İngilizce (öneksiz kök)**, Türkçe `/tr/` altında,
sonraki diller aynı desenle (`/de/`, `/fr/` ...).

> Ayrıntılı plan, hedefler ve deploy notları: ana repoda `smartweb/docs/doc-portal.md`.

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

- `src/content/docs/**` — Ingilizce sayfalar (kaynak dil, URL onegi yok)
- `src/content/docs/tr/**` — Turkce sayfalar (`/tr/` altinda)
- Bolumler: `getting-started/`, `features/`, `comparison/`, `pricing/`, `partners/`, `faq/`
- Alt-yollar diller arasi AYNI (Starlight ceviri eslemesi); metin dile gore cevrilir
- Cevrilmemis sayfa Ingilizce icerige duser
- Sidebar yapisi: `astro.config.mjs`

## Veritabani

Yok. Statik site — icerik markdown olarak bu repoda. Veritabani, backend veya
runtime yok.
