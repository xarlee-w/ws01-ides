import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://xarlee-w.github.io',
	base: '/ws01-ides',
	integrations: [
		starlight({
			title: 'M05 · Entorns de desenvolupament',
			locales: {
				root: {
					label: 'Català',
					lang: 'ca-ES',
				}
			},
			social: {
				github: 'https://github.com/xarlee-w/ws01-ides',
			},
			sidebar: [
				/*{
					label: 'Guies',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Eines del desenvolupador', link: '/guides/tooling/' },
						{ label: 'Depuració', link: '/guides/debugging/' },
						{ label: 'Refactorització', link: '/guides/refactoring/' },
					],
				},*/
				{
					label: 'Activitats',
					autogenerate: { directory: 'training' },
				},
				{
					label: 'Recursos',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
