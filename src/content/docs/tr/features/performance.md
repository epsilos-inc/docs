---
title: Performans
description: Epsilos vitrinleri ve web siteleri hız için kurulur — sunucu-render, CDN destekli, otomatik görsel optimizasyonu. Gerçek Core Web Vitals ve Lighthouse verisi.
sidebar:
  order: 4
---

Epsilos siteleri hızlı yüklenmek üzere kurulur. Vitrin, hızlı ilk boyama için
sunucu tarafında render edilir; statik dosyalar global CDN'den servis edilir;
görseller otomatik optimize edilir; sayfalar hem edge'de hem uygulamada cache'lenir.

## Gerçek veri — epsilos.com.tr

epsilos.com.tr'nin kendisi Epsilos platformu üzerinde kuruludur (kurumsal web sitesi
teması). [PageSpeed Insights](https://pagespeed.web.dev/), masaüstü:

| Kategori | Skor |
| --- | :---: |
| Performance | **97** / 100 |
| Accessibility | **95** / 100 |
| Best Practices | **100** / 100 |
| SEO | **100** / 100 |
| Agentic browsing | **3** / 3 |

**Core Web Vitals — alan verisi (gerçek Chrome kullanıcıları), masaüstü: geçiyor**

| Metrik | Değer | Eşik |
| --- | :---: | :---: |
| Largest Contentful Paint (LCP) | 0.8 sn | &lt; 2.5 sn |
| Interaction to Next Paint (INP) | 38 ms | &lt; 200 ms |
| Cumulative Layout Shift (CLS) | 0 | &lt; 0.1 |

Lab metrikleri (masaüstü): First Contentful Paint 0.8 sn · Largest Contentful Paint
0.9 sn · Total Blocking Time 100 ms · Cumulative Layout Shift 0.013 · Speed Index
1.1 sn.

![epsilos.com.tr masaüstü PageSpeed Insights raporu — Performance 97, Accessibility 95, Best Practices 100, SEO 100, Agentic Browsing 3/3](/img/pagespeed-epsilos-com-tr.png)

## Epsilos sitelerini hızlı kılan ne

- **Sunucu-render vitrin** — HTML sunucuda render edilir, ilk boyama JavaScript'i
  beklemez.
- **Global CDN** — CSS, JavaScript, font ve görseller ziyaretçiye yakın edge
  konumlarından servis edilir.
- **Otomatik görsel optimizasyonu** — yüklenen görseller yeniden boyutlandırılır ve
  kodlanır; her düzen alanı ihtiyacı olan boyutu ister.
- **Sayfa ve fragment cache** — çözülmüş sayfalar ve yeniden kullanılan bölümler
  cache'lenir, isteklerin çoğu veritabanı işini atlar.
- **Hafif ön yüz** — vitrin minimal JavaScript gönderir; etkileşimli kısımlar
  aşamalı zenginleştirilir.

## Kendiniz ölçün

Herhangi bir Epsilos sitesinde [PageSpeed Insights](https://pagespeed.web.dev/)
çalıştırın — bir [demo mağaza](https://www.epsilos.com.tr/installer) veya
epsilos.com.tr — ya da Chrome DevTools'tan Lighthouse.

> Skorlar ölçüm anındaki belirli bir sayfa, cihaz ve ağ koşulunu yansıtır ve
> değişir. Core Web Vitals alan verisi görünmek için yeterli gerçek Chrome
> trafiği gerektirir; düşük trafikli sayfalarda PageSpeed origin düzeyi veriye
> döner.
