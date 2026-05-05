export const siteConfig = {
	name: 'FirstUp',
	description:
		'Link-in-bio platform to share your links, socials, and content from one beautiful, customizable page.',
	url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
	ogImage: '/og-image.png',
} as const;

export type SiteConfig = typeof siteConfig;
