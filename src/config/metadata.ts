import { type Metadata } from 'next';

export const baseMetadata: Metadata = {
	applicationName: 'FirstUp',
	authors: [{ name: 'FirstUp' }],
	creator: 'FirstUp',
	category: 'Link-in-Bio Tool',

	metadataBase: new URL('https://firstup.me/'),

	icons: {
		apple: [{ sizes: '180x180', url: '/apple-icon.png' }],
		icon: [
			{ type: 'image/x-icon', sizes: 'any', url: '/favicon.ico' },
			{ type: 'image/svg+xml', sizes: 'any', url: '/icon.svg' },
			{ type: 'image/png', sizes: '192x192', url: '/icon-192.png' },
			{ type: 'image/png', sizes: '512x512', url: '/icon-512.png' },
		],
	},

	manifest: '/manifest.webmanifest',

	keywords: [
		'link-in-bio',
		'link in bio',
		'personal page',
		'bio link',
		'social links',
		'personal landing page',
		'creator links',
	],

	robots: {
		follow: true,
		index: true,
		googleBot: {
			follow: true,
			index: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},

	title: {
		default: 'FirstUp',
		template: '%s | FirstUp',
	},

	description:
		'FirstUp is your personal link-in-bio page. Share all your links, socials, and content in one place — beautifully.',

	openGraph: {
		siteName: 'FirstUp',
		type: 'website',
		locale: 'en_US',
		url: 'https://firstUp.me',
		title: 'FirstUp — One link for everything you are',
		description:
			'Create your personal FirstUp page and share all your links, socials, and content in one place.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'FirstUp — One link for everything you are',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		creator: '@firstUp',
		title: 'FirstUp — One link for everything you are',
		description:
			'Create your personal FirstUp page and share all your links, socials, and content in one place.',
		images: ['/og-image.png'],
	},
};
