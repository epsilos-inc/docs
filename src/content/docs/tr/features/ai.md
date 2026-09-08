---
title: Yapay Zeka Desteği
description: Epsilos'ta yapay zeka, panele sonradan iliştirilmiş bir sohbet kutusu değil — yönetim akışının içine yerleşmiş araçlardır. Admin bar'daki agentic AI editör, içerik ve SEO araçları, çok sağlayıcılı altyapı.
sidebar:
  order: 6
---

Epsilos'ta yapay zeka, panelin köşesine iliştirilmiş bir sohbet kutusu değildir.
AI araçları doğrudan yönetim akışının içine yerleşmiştir ve en çok işe yaradığı
yerde **agentic** çalışır — yani sana yalnızca metin önermez, işi kendisi yapar.

## Admin bar'daki AI editör (agentic)

Canlı editör çubuğundan açılan AI editör, verdiğin **prompt'a göre ön yüz tasarımı
yapar ve sonucu sayfanın header, footer ve içerik alanlarına kendisi yazar** —
manuel kopyala-yapıştır yok.

- **Araç kullanımıyla çalışır:** sayfanın bölümlerini okur, değiştirir, gerektiğinde
  tema CSS'ine yazar.
- **Tasarımı gereği verimli:** ilk mesajdan itibaren biriken bağlam — sistem
  talimatları, sayfa içeriği, önceki adımlar — **önbelleğe alınır**; agent her turda
  baştan işlemez, yalnızca yeni kısmın bedelini öder. Küçük değişiklikler tam sayfa
  yeniden üretmek yerine hedefli metin değişimiyle yapılır ve agent aynı oturumda
  zaten yazdığı bir bölümü tekrar okumaz. Tur başına maliyet düşük ve öngörülebilir kalır.
- **İki mod:** *Tasarım* modu yapısal değişiklikler için, *İçerik* modu yalnızca
  metin için. Yapısal bir istek geldiğinde İçerik modu seni Tasarım moduna yönlendirir.
- **Taslak → önizleme → yayınla:** her değişiklik önce taslakta birikir, gerçek
  tema render'ıyla önizlenir, onayınla yayınlanır.
- **Sürüm geçmişi:** her yayın içerik geçmişine "AI Editor" etiketiyle kaydedilir;
  istediğin an geri alabilirsin.
- **Kontrol sende:** süren işlem canlı ilerleme gösterir, istediğin an durdurabilirsin
  (yarıda kesilen tur siteye yazılmaz). Her turun altında tahmini token ve maliyet görünür.

## İçerik ve SEO araçları

Yönetim panelinden:

- Ürün ve sayfa açıklaması üretimi
- SEO başlık / açıklama / anahtar kelime metinleri (iş modeline özel talimatlarla)
- Rekabet analizi
- Varyasyon oluşturma yardımı

## Vitrin AI asistanı

İsteğe bağlı olarak, mağazanın ön yüzünde ziyaretçilere yardımcı olan bir AI
asistanı etkinleştirilebilir.

## Çok sağlayıcılı altyapı

Epsilos tek bir AI sağlayıcısına bağlı değildir. Gemini, OpenAI, Anthropic (Claude),
Grok ve Groq desteklenir; hangi aracın hangi modeli kullanacağı ayarlardan yönetilir.
Agentic editör Claude ile çalışır (varsayılan Sonnet; Fable ve Opus seçenekleri de var).

## Amaç

Yapay zekanın işi, tekrar eden yükü kaldırmaktır — insanın yerini almak değil. Bu
yüzden her üretim **önce taslak**, sonra **onay**, sonra **geri alınabilir**.
Maliyet açıkça gösterilir, [changelog](/tr/changelog) herkese açıktır. AI, Epsilos'un
**modernleştirilmiş mimarisiyle** ([Epsilos nedir?](/tr/getting-started/what-is-epsilos))
uyumlu çalışır: ürettiği CSS temaya marker'lı bloklar hâlinde yazılır, dosya şişmez.
