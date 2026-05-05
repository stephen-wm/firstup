import type { Metadata, Viewport } from 'next';
import { Inter_Tight } from 'next/font/google';

import { createMetadata } from '@/config/create-metadata';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const interTight = Inter_Tight({
	variable: '--font-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = createMetadata({});
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
		{ media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={cn('h-full', 'antialiased', 'font-sans', interTight.variable)}
			lang="en"
		>
			<body className="flex min-h-full flex-col">{children}</body>
		</html>
	);
}
