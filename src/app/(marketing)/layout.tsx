import { type ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function Layout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<div className="flex flex-1 flex-col items-start">
			{/* Header */}
			<Header />

			{/* Main */}
			<main className="flex-1 self-stretch">{children}</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
