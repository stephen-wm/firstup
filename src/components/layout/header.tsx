import { type ComponentProps } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { MobileNav } from '@/components/layout/mobile-nav';
import { ThemeToggler } from '@/components/layout/theme-toggler';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';

interface HeaderProps extends ComponentProps<'header'> {
	className?: string;
}

const navLinks = [
	{ label: 'Features', href: '#' },
	{ label: 'Analytics', href: '#' },
	{ label: 'Pricing', href: '#' },
	{ label: 'Resources', href: '#' },
	{ label: 'Blog', href: '#' },
] as const;

export function Header({ className, ...props }: Readonly<HeaderProps>) {
	return (
		<header
			className={cn(
				`fixed top-4 left-1/2 z-50 flex h-18 w-full max-w-[calc(100vw-32px)]
				-translate-x-1/2 items-center rounded-xl border border-border/50
				bg-background/95 shadow-md backdrop-blur-md`,
				className,
			)}
			{...props}
		>
			<div
				className="relative flex w-full items-center justify-start self-stretch
					px-4"
			>
				<Link href="/">
					<Image
						alt="FirstUp logo"
						className="transition-opacity duration-150 hover:opacity-75
							dark:hidden"
						height={0}
						loading="eager"
						priority
						src="/branding/logo-primary.svg"
						style={{ height: 'auto', width: '130px' }}
						width={0}
					/>
					<Image
						alt="FirstUp logo"
						className="hidden transition-opacity duration-150 hover:opacity-75
							dark:block"
						height={0}
						loading="eager"
						priority
						src="/branding/logo-secondary.svg"
						style={{ height: 'auto', width: '130px' }}
						width={0}
					/>
				</Link>

				<NavigationMenu
					className="absolute left-1/2 hidden -translate-x-1/2 xl:flex"
				>
					<NavigationMenuList className="gap-1">
						{navLinks.map(({ label, href }) => (
							<NavigationMenuItem key={label}>
								<NavigationMenuLink
									asChild
									className="px-3 py-1"
								>
									<Link href={href}>
										<span className="text-base">{label}</span>
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Action Buttons */}
				<div className="ml-auto flex items-center gap-2 pl-4">
					<Button
						asChild
						className="hidden lg:flex"
						size="lg"
						variant="ghost"
					>
						<Link href="#">
							<span className="px-1 text-base">Sign in</span>
						</Link>
					</Button>
					<Button
						asChild
						className="hidden md:flex"
						size="lg"
						variant="default"
					>
						<Link href="#">
							<span className="px-1 text-base capitalize">
								Get started free
							</span>
						</Link>
					</Button>

					{/* Mobile menu (visible below XL) */}
					<div className="xl:hidden">
						<MobileNav />
					</div>

					<ThemeToggler />
				</div>
			</div>
		</header>
	);
}
