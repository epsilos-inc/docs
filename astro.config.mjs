// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// Deploy hedefi ortam degiskeniyle secilir (varsayilan: canli docs domaini).
// Ornek: DOCS_SITE=https://docs.epsilos.com npm run build
const site = process.env.DOCS_SITE ?? 'https://docs.epsilos.com';

// Site geneli yapilandirilmis veri (schema.org). Her sayfanin <head>'ine eklenir.
// logo: docs sitesinde barindirilan raster PNG (640x163, Google'in >=112px logo sarti).
const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			'@id': 'https://www.epsilos.com/#organization',
			name: 'Epsilos',
			url: 'https://www.epsilos.com',
			logo: `${site}/epsilos-logo.png`,
			description:
				'Epsilos is a managed platform for e-commerce stores and corporate websites, with a visual page builder and flexible hosting.',
			sameAs: [
				'https://www.instagram.com/epsiloseticaret/',
				'https://tr.linkedin.com/showcase/epsilos-inc/',
				'https://www.youtube.com/@epsiloseticaret',
				'https://www.facebook.com/epsiloseticaret',
			],
		},
		{
			'@type': 'SoftwareApplication',
			'@id': 'https://www.epsilos.com/#software',
			name: 'Epsilos',
			applicationCategory: 'BusinessApplication',
			operatingSystem: 'Web',
			url: 'https://www.epsilos.com',
			publisher: { '@id': 'https://www.epsilos.com/#organization' },
			description:
				'Managed e-commerce and corporate website platform. Visual drag-and-drop page builder, themes for 30+ sectors, multi-language and multi-currency, B2B and B2C, marketplace and ERP integrations. Run fully managed by Epsilos or self-hosted through the licence system. Built on .NET, PostgreSQL and React.',
			offers: { '@type': 'Offer', category: 'Subscription' },
		},
		{
			'@type': 'WebSite',
			'@id': 'https://docs.epsilos.com/#website',
			url: 'https://docs.epsilos.com',
			name: 'Epsilos Documentation',
			publisher: { '@id': 'https://www.epsilos.com/#organization' },
			inLanguage: ['en', 'tr'],
		},
	],
};

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'Epsilos',
			description:
				'Epsilos e-commerce and corporate website platform - official knowledge base, deployment model, features and comparisons.',
			logo: {
				light: './src/assets/epsilos-logo.svg',
				dark: './src/assets/epsilos-logo-light.svg',
				replacesTitle: true,
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/epsilos.css'],
			plugins: [
				starlightLlmsTxt({
					projectName: 'Epsilos',
					description:
						'Managed e-commerce and corporate website platform - visual drag-and-drop page builder, themes for 30+ sectors, multi-language and multi-currency, B2B and B2C, marketplace and ERP integrations. Run fully managed by Epsilos or self-hosted through the licence system.',
					details: [
						'- **What it is:** a managed platform for e-commerce stores and corporate/showcase websites, managed from one visual admin panel. No technical knowledge required.',
						'- **Hosting:** fully managed by Epsilos by default, or deployed on partner data centers or your own servers through the licence system.',
						'- **Generation:** Epsilos has run managed stores and sites for years; the current generation is Epsilos v3 "Nova", a full modernization of the platform.',
						'- **Architecture:** multi-tenant SaaS. Backend ASP.NET Core (.NET) + EF Core; PostgreSQL (SQL Server also supported); React 19 admin SPA; server-rendered storefront. Each store has its own isolated database and application pool.',
						'- **Signature feature:** a drag-and-drop layout designer that works on the live site, with 35+ modules.',
						'- **Commerce:** product catalog and variants, cart/checkout, orders and shipping, coupons, abandoned cart recovery, reviews, multi-currency with live exchange rates, B2B/wholesale, marketplace and ERP integrations, mobile app.',
						'- **Website:** blog, contact forms, live chat, SEO tools, rich-snippet/structured-data markup, multi-language with RTL.',
						'- **Partners:** reseller program (automated demo and full installs, licence tracking, priority support) and a designer program with a theme/add-on marketplace.',
						'- **Alternatives:** compared with Shopify, Wix, WooCommerce, İkas and İdeasoft on the Comparison page.',
					].join('\n'),
				}),
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: 'f0t9XDrPYQt5-69y5jj0LHOBDLkvSG-9SL4R0CpPCYU',
					},
				},
				// Epsilos marka fontlari (Sora / Manrope).
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap',
					},
				},
				// Eski tarayicilar icin .ico yedek favicon (SVG'ye ek).
				{
					tag: 'link',
					attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
				},
				// llms.txt keşfi - konvansiyonel yol /llms.txt; ayrica link ipucu.
				{
					tag: 'link',
					attrs: {
						rel: 'alternate',
						type: 'text/plain',
						href: '/llms.txt',
						title: 'llms.txt',
					},
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify(structuredData),
				},
			],
			// Varsayilan / kaynak dil: Ingilizce -> URL onegi YOK (docs.epsilos.com/getting-started/...)
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en-US' },
				// Turkce -> /tr/ altinda. Sonraki diller ayni desenle (/de/, /fr/ ...).
				tr: { label: 'Türkçe', lang: 'tr-TR' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/epsilos-inc/docs' },
			],
			editLink: {
				baseUrl: 'https://github.com/epsilos-inc/docs/edit/main/',
			},
			lastUpdated: true,
			// Konu agaci: her ust klasor bir bolum. Etiketler dile gore cevrilir.
			sidebar: [
				{
					label: 'Getting Started',
					translations: { 'tr-TR': 'Başlangıç' },
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Features',
					translations: { 'tr-TR': 'Özellikler' },
					items: [{ autogenerate: { directory: 'features' } }],
				},
				{
					label: 'Comparison',
					translations: { 'tr-TR': 'Karşılaştırma' },
					items: [{ autogenerate: { directory: 'comparison' } }],
				},
				{
					label: 'Pricing',
					translations: { 'tr-TR': 'Fiyatlandırma' },
					items: [{ autogenerate: { directory: 'pricing' } }],
				},
				{
					label: 'Partner Program',
					translations: { 'tr-TR': 'Bayi Programı' },
					items: [{ autogenerate: { directory: 'partners' } }],
				},
				{
					label: 'FAQ',
					translations: { 'tr-TR': 'SSS' },
					items: [{ autogenerate: { directory: 'faq' } }],
				},
				{
					label: 'Changelog',
					translations: { 'tr-TR': 'Değişiklik Günlüğü' },
					items: [{ slug: 'changelog' }],
				},
			],
		}),
	],
});
