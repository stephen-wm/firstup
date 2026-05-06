'use client';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '../ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { HamburgerMenuButton } from './hamburger-menu-button';

interface MobileNavGroup {
	group: string;
	links: NavLink[];
}

interface NavLink {
	description?: string;
	href: string;
	label: string;
}

export const MOBILE_NAV: MobileNavGroup[] = [
	{
		group: 'Menu',
		links: [
			{ label: 'Home', href: '/' },
			{ label: 'Integrations', href: '/integrations' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'Customer Stories', href: '/customers' },
			{ label: 'Changelog', href: '/changelog' },
		],
	},
	{
		group: 'Product',
		links: [
			{ label: 'Kanban & Lists', href: '/product/kanban' },
			{ label: 'Timeline', href: '/product/timeline' },
			{ label: 'Collaborative Docs', href: '/product/docs' },
			{ label: 'Smart Notifications', href: '/product/notifications' },
			{ label: 'Team Management', href: '/product/teams' },
			{ label: 'Role-based Access', href: '/product/access' },
			{ label: 'Realtime Presence', href: '/product/realtime' },
			{ label: 'File Management', href: '/product/files' },
		],
	},
	{
		group: 'Resources',
		links: [
			{ label: 'Documentation', href: 'https://docs.nestwork.xyz' },
			{ label: 'API Reference', href: 'https://docs.nestwork.xyz/api' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Changelog', href: '/changelog' },
			{ label: 'Status', href: 'https://status.nestwork.xyz' },
		],
	},
	{
		group: 'Company',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Contact', href: '/contact' },
		],
	},
	{
		group: 'Legal',
		links: [
			{ label: 'Terms of Service', href: '/terms' },
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Cookie Policy', href: '/cookies' },
		],
	},
];

export function MobileNav() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const close = () => setIsOpen(false);

	return (
		<Sheet
			onOpenChange={setIsOpen}
			open={isOpen}
		>
			<SheetTrigger asChild>
				<HamburgerMenuButton
					className="ml-1"
					isOpen={isOpen}
					onClick={() => setIsOpen((prev) => !prev)}
				/>
			</SheetTrigger>

			<SheetContent
				showCloseButton={false}
				side="left"
			>
				<SheetTitle className="sr-only">Mobile navigation</SheetTitle>
				<SheetDescription className="sr-only">
					Main navigation links for FirstUp
				</SheetDescription>

				<div className="flex h-full flex-col">
					{/* SCrollable link groups */}
					<nav className="flex-1 overflow-y-auto p-6">
						<div className="flex flex-col gap-8">
							{MOBILE_NAV.map(({ group, links }) => (
								<div
									className="flex flex-col space-y-4"
									key={group}
								>
									<span
										className="text-xs font-semibold tracking-widest
											text-muted-foreground uppercase"
									>
										{group}
									</span>

									<div className="flex flex-col gap-2">
										{links.map(({ label, href }) => {
											const isExternal = href.startsWith('https');

											return (
												<Link
													href={href}
													key={href}
													onClick={close}
													rel={isExternal ? 'noopener noreferrer' : undefined}
													target={isExternal ? '_blank' : undefined}
												>
													<span className="text-2xl font-medium tracking-tight">
														{label}
													</span>
												</Link>
											);
										})}
									</div>
								</div>
							))}
						</div>
					</nav>

					{/* Pinned CTAs */}
					<div className="flex flex-col gap-3 border-t p-6">
						<Button
							asChild
							size="lg"
						>
							<Link href="#">
								<span
									className="text-base"
									onClick={close}
								>
									Get started free
								</span>
							</Link>
						</Button>

						<Button
							asChild
							size="lg"
							variant="outline"
						>
							<Link href="#">
								<span
									className="text-base"
									onClick={close}
								>
									Sign in
								</span>
							</Link>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
