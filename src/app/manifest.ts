import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: '#121216',
		categories: [
			'link-in-bio',
			'link in bio',
			'personal page',
			'bio link',
			'social links',
			'personal landing page',
			'creator links',
		],
		description:
			'Your personal link-in-bio page. Share all your links, socials, and content in one place — beautifully.',
		display: 'standalone',
		icons: [
			{
				purpose: 'maskable',
				sizes: '192x192',
				src: '/icon-192.png',
				type: 'image/png',
			},
			{
				purpose: 'any',
				sizes: '512x512',
				src: '/icon-512.png',
				type: 'image/png',
			},
			{
				sizes: '180x180',
				src: '/apple-icon.png',
				type: 'image/png',
			},
			{
				purpose: 'any',
				sizes: 'any',
				src: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		name: 'FirstUp',
		orientation: 'portrait-primary',
		screenshots: [
			{
				form_factor: 'wide',
				label: 'FirstUp dashboard — kanban board view',
				sizes: '1280x800',

				src: '/screenshots/dashboard.png',
				type: 'image/png',
			},
			{
				form_factor: 'narrow',
				label: 'FirstUp on mobile',
				sizes: '390x844',

				src: '/screenshots/mobile.png',
				type: 'image/png',
			},
		],
		short_name: 'FirstUp',
		start_url: '/',
		theme_color: '#AAE139',
	};
}
