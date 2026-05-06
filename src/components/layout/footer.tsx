import { type ComponentProps } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaThreads, FaTiktok, FaXTwitter } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { Separator } from '@/components/ui/separator';

interface FooterProps extends ComponentProps<'footer'> {
	className?: string;
}

const footerLinks = [
	{
		group: 'Platform',
		links: [
			{ label: 'Features', href: '#' },
			{ label: 'Pricing', href: '#' },
			{ label: 'About', href: '#' },
		],
	},
	{
		group: 'Features',
		links: [
			{ label: 'Built in Analytics', href: '#' },
			{ label: 'QR Code Generator', href: '#' },
			{ label: 'Link Shortener', href: '#' },
			{ label: 'Fully Customizable', href: '#' },
		],
	},
	{
		group: 'Company',
		links: [
			{ label: 'About us', href: '#' },
			{ label: "What's new", href: '#' },
			{ label: 'Become an affiliate', href: '#' },
			{ label: 'Reviews', href: '#' },
			{ label: 'Press', href: '#' },
			{ label: 'Careers', href: '#' },
		],
	},
	{
		group: 'Support',
		links: [
			{ label: 'Help center', href: '#' },
			{ label: 'Getting started', href: '#' },
			{ label: 'Go Pro', href: '#' },
			{ label: 'FAQs', href: '#' },
			{ label: 'Report a violation', href: '#' },
			{ label: 'Contact us', href: '#' },
		],
	},
	{
		group: 'Legal',
		links: [
			{ label: 'Terms of Service', href: '#' },
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Cookie Policy', href: '#' },
		],
	},
];

const socials = [
	{ icon: FaXTwitter, label: 'X', href: 'https://x.com/firstup' },
	{ icon: FaThreads, label: 'Threads', href: 'https://threads.com/firstup' },
	{
		icon: FaInstagram,
		label: 'Instagram',
		href: 'https://instagram.com/firstup',
	},
	{ icon: FaTiktok, label: 'TikTok', href: 'https://tiktok.com/firstup' },
];

export function Footer({ className, ...props }: Readonly<FooterProps>) {
	return (
		<footer
			className={cn(
				`inset-0 flex w-full max-w-full items-center justify-center
				bg-foreground pt-16 pb-10 lg:pt-24 dark:bg-background`,
				className,
			)}
			{...props}
		>
			<div
				className="flex w-full max-w-[calc(100vw-32px)] flex-col items-center
					justify-center self-stretch px-4"
			>
				<div
					className="mb-10 grid w-full max-w-full grid-cols-2 gap-10
						lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr]"
				>
					<div>
						<Link href="/">
							<Image
								alt="FirstUp logo"
								className="transition-opacity duration-150 hover:opacity-75"
								height={0}
								loading="eager"
								priority
								src="/branding/logo-secondary.svg"
								style={{ height: 'auto', width: '130px' }}
								width={0}
							/>
						</Link>

						<p className="mt-3 max-w-62 text-base/relaxed text-white/40">
							One link for everything you are. Build your personal page in
							minutes.
						</p>

						<div className="mt-4 flex gap-2">
							{socials.map(({ icon: Icon, href, label }) => (
								<Link
									className="flex size-8 items-center justify-center rounded-xl
										bg-white/6 text-sm font-semibold text-white/40
										transition-all hover:bg-white/10 hover:text-white/70"
									href={href}
									key={label}
									rel="noreferrer noopener"
									target="_blank"
								>
									<Icon className="size-4" />
									<span className="sr-only">{label}</span>
								</Link>
							))}
						</div>
					</div>

					{footerLinks.map(({ group, links }) => (
						<div key={group}>
							<p
								className="mb-4 text-xs font-semibold tracking-[0.04em]
									text-white uppercase"
							>
								{group}
							</p>

							<div className="flex flex-col space-y-4">
								{links.map(({ href, label }) => (
									<Link
										className="block text-base text-white/40 transition-colors
											duration-150 hover:text-primary"
										href={href}
										key={label}
									>
										{label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>

				<Separator className="mb-10 bg-white/6" />

				<div className="flex w-full max-w-full items-center justify-center">
					<p className="text-base text-white/25">
						&copy; {new Date().getFullYear()} FirstUp. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
