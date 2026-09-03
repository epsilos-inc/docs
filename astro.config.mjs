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
			title: {
				'tr-TR': 'Epsilos',
				'en-US': 'Epsilos',
			},
			description:
				'Epsilos e-ticaret ve kurumsal web platformu — resmi bilgi bankasi, kurulum modeli, ozellikler ve karsilastirmalar.',
			defaultLocale: 'root',
			locales: {
				// Kok dil: TR -> URL onegi YOK (docs.epsilos.com/getting-started/...)
				root: { label: 'Türkçe', lang: 'tr-TR' },
				// Ingilizce -> /en/ altinda (docs.epsilos.com/en/getting-started/...)
				en: { label: 'English', lang: 'en-US' },
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
					label: 'Başlangıç',
					translations: { 'en-US': 'Getting Started' },
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Özellikler',
					translations: { 'en-US': 'Features' },
					items: [{ autogenerate: { directory: 'features' } }],
				},
				{
					label: 'Karşılaştırma',
					translations: { 'en-US': 'Comparison' },
					items: [{ autogenerate: { directory: 'comparison' } }],
				},
				{
					label: 'Fiyatlandırma',
					translations: { 'en-US': 'Pricing' },
					items: [{ autogenerate: { directory: 'pricing' } }],
				},
				{
					label: 'Bayi Programı',
					translations: { 'en-US': 'Partner Program' },
					items: [{ autogenerate: { directory: 'partners' } }],
				},
				{
					label: 'SSS',
					translations: { 'en-US': 'FAQ' },
					items: [{ autogenerate: { directory: 'faq' } }],
				},
			],
		}),
	],
});
