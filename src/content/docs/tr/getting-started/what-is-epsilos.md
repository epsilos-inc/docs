---
title: Epsilos nedir?
description: Epsilos, işletmelere e-ticaret mağazaları ve kurumsal web siteleri sunan yönetilen bir platformdur. Barındırma ve altyapı Epsilos'ta, yönetim tarayıcı tabanlı panelde.
sidebar:
  order: 1
---

Epsilos ([epsilos.com](https://www.epsilos.com)), her ölçekten işletmeye **yönetilen
e-ticaret mağazaları** ve **kurumsal / tanıtım web siteleri** sunar. Müşteri bir
pakete abone olur, kullanıma hazır bir çevrimiçi varlık elde eder ve her şeyi
görsel bir yönetim panelinden yönetir — teknik bilgi gerekmez.

Shopify, Wix ve WooCommerce tabanlı mağazalarla aynı kategoridedir: müşteri
mağazasını veya sitesini tarayıcı üzerinden kurup yönetir, platform alt tarafta
her şeyi hallederek çalışır.

**Barındırma esnektir.** Epsilos varsayılan olarak altyapıyı tamamen yönetilen bir
hizmet olarak işletir; kurulacak veya bakımı yapılacak bir şey yoktur. Daha fazla
kontrole ihtiyaç duyduğunuzda aynı platform partner veri merkezlerinde, farklı bir
hosting sağlayıcısında veya kendi sunucularınızda da çalışabilir — lisans sistemi,
Epsilos'u kendi altyapınızda çalıştırmanıza imkân tanır.

## İki ürün hattı, tek platform

### E-Ticaret Paketleri
Ürünlerini çevrimiçi satmak isteyen işletmeler için. Ürün kataloğu, sepet ve ödeme
akışı, sipariş yönetimi, kargo takibi, üye hesapları, favoriler, ürün yorumları,
indirim kuponları, canlı döviz kuruyla çoklu para birimi, çok dilli destek ve blog
modülü içerir. Ödemeler standart kart şemalarının yanında bölgesel ödeme
altyapılarını ve taksit seçeneklerini destekler.

### Hazır Web Sitesi Paketleri
E-ticaret olmadan kurumsal veya tanıtım sitesi isteyen işletmeler için. Görsel
sayfa oluşturucu, blog, iletişim formları, çok dilli destek, SEO araçları ve geniş
bir duyarlı tema kütüphanesi.

### Konsept Tasarım
Tamamen özgün bir tasarım isteyen müşteriler için Epsilos, markaya özel bir tema
üretir ve aynı platformun üzerinde teslim eder.

## Öne çıkan özellik: Görsel sayfa oluşturucu

Epsilos'un imza özelliği, doğrudan canlı site görünümü üzerinde çalışan bir
**sürükle-bırak düzen tasarımcısıdır**. Sayfalar 4 seviyeli iç içe bir ızgarayla
kurulur: **Izgara → Satır → Kolon → Modül**, 35+ hazır modülle. Her modülün canlı
tuval üzerinde bir dişli simgesiyle açılan kendi ayar paneli vardır. Kod yazmak
gerekmez.

## Temalar ve sektörler

Epsilos, **30+ sektöre** göre uyarlanmış duyarlı temalar ve modüller sunar:
tekstil ve hazır giyim, elektronik, mobilya ve ev, gıda ve market, kozmetik, oto
yedek parça, mücevher ve aksesuar, spor ürünleri, kitap ve kırtasiye, B2B toptan
ve daha fazlası. Aktif tema, içeriğe veya veriye dokunmadan panelden değiştirilir.

## Sistem altyapısı

Epsilos yıllardır yönetilen mağazalar ve siteler işletir. Mevcut nesil
**v3 "Nova"**, platformun güncel bir yığın üzerine tam modernleştirilmiş hâlidir.

Tamamen yönetilen bir hizmet olarak veya kendi altyapınızda kurulabilen, çok
kiracılı (multi-tenant) bir platformdur:

- **Backend:** ASP.NET Core (.NET), veri katmanı Entity Framework Core.
- **Veritabanı:** PostgreSQL (birincil), SQL Server de desteklenir.
- **Yönetim paneli:** JSON API ile konuşan React 19 tek sayfa uygulaması (Vite, MUI).
- **Vitrin:** SEO ve hızlı ilk yükleme için sunucu tarafında render edilir,
  JavaScript ile aşamalı zenginleştirilir.
- **Çok kiracılılık:** her mağaza **kendi izole veritabanı ve uygulama havuzuyla**
  çalışır — kiracı verisi bir filtre sütunuyla değil, tasarım gereği ayrıdır.
- **Dağıtım:** Epsilos tarafından tamamen yönetilen şekilde ya da partner veri
  merkezlerinde veya kendi sunucularınızda çalıştırılır. Lisans sistemi
  kendi-sunucunuzda ve partner-barındırmalı kurulumları mümkün kılar.
- **Teslim:** statik dosyalar CDN'den servis edilir; tema ve ayarlar çalışma
  zamanında çözülür, değişiklikler yeniden yayınlamadan uygulanır.
- **Operasyon:** yönetilen modelde barındırma, ölçekleme, güvenlik yaması, izleme
  ve yedekleme Epsilos'ta.

## Sonraki adımlar

- [Kimler için?](/tr/getting-started/who-is-it-for)
- [Nasıl çalışır?](/tr/getting-started/how-it-works)
- [Özelliklerin tam listesi](/tr/features/overview)
