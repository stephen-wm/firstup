import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { createMetadata } from '@/config/create-metadata';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = createMetadata({
	title: 'Your online presence in one link',
	description:
		'Create your personal FirstUp page and share your links, socials, and content in one place. Free forever.',
});

export default function Home() {
	return (
		<div
			className="flex flex-1 flex-col items-center justify-center bg-zinc-50
				font-sans dark:bg-black"
		>
			<Header />

			<main
				className="flex min-h-screen w-full max-w-full flex-1 items-center
					justify-center bg-primary px-16 py-32 sm:items-center dark:bg-black"
			>
				<div
					className="flex flex-col justify-center gap-4 text-center
						text-balance"
				>
					<Link
						className="mx-auto"
						href="/"
					>
						<Image
							alt="FirstUp logo"
							className="transition-all duration-150
								hover:drop-shadow-[0_0_20px_rgba(170,227,25,0.9)] dark:hidden"
							height={0}
							priority
							src="/branding/logo-primary-alt.svg"
							style={{ height: '35px', width: 'auto' }}
							width={0}
						/>
						<Image
							alt="FirstUp logo"
							className="hidden transition-all duration-150
								hover:drop-shadow-[0_0_20px_rgba(170,227,25,0.9)] dark:block"
							height={0}
							priority
							src="/branding/logo-secondary.svg"
							style={{ height: '35px', width: 'auto' }}
							width={0}
						/>
					</Link>

					<p
						className="max-w-md text-base/6 text-zinc-600 lg:text-lg
							dark:text-zinc-600"
					>
						Looking for a starting point or more instructions? Head over to the{' '}
						<Link
							className="font-medium text-zinc-950 transition-colors
								duration-150 hover:text-primary dark:text-zinc-50"
							href="https://github.com/stephen-wm/firstup"
							rel="noopener noreferrer"
							target="_blank"
						>
							GitHub repository
						</Link>{' '}
						to learn more.
					</p>
				</div>
			</main>

			<Footer />
		</div>
	);
}
