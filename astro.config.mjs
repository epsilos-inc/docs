// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Deploy hedefi ortam degiskeniyle secilir (varsayilan: canli docs domaini).
// Ornek: DOCS_SITE=https://docs.epsilos.com npm run build
const site = process.env.DOCS_SITE ?? 'https://docs.epsilos.com';

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'Epsilos',
			description:
				'Epsilos e-commerce and corporate website platform — official knowledge base, deployment model, features and comparisons.',
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
			],
		}),
	],
});
