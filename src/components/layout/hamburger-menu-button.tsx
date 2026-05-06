'use client';

import { forwardRef } from 'react';

import { type HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface HamburgerMenuButtonProps extends Readonly<HTMLMotionProps<'button'>> {
	className?: string;
	isOpen: boolean;
}

export const HamburgerMenuButton = forwardRef<
	HTMLButtonElement,
	HamburgerMenuButtonProps
>(({ className, isOpen, ...props }, ref) => {
	return (
		<motion.button
			animate={isOpen ? 'open' : 'closed'}
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			className={cn(
				`relative flex size-9 flex-col items-center justify-center gap-2
				rounded-md border border-border md:hidden`,
				className,
			)}
			initial="closed"
			ref={ref}
			style={{ touchAction: 'manipulation' }}
			{...props}
		>
			<motion.span
				className="absolute h-0.5 w-5 bg-foreground"
				transition={{ duration: 0.3 }}
				variants={{
					closed: { rotate: 0, y: -8 },
					open: { rotate: 45, y: 0 },
				}}
			/>

			<motion.span
				className="absolute h-0.5 w-5 bg-foreground"
				transition={{ duration: 0.3 }}
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
			/>

			<motion.span
				className="absolute h-0.5 w-5 bg-foreground"
				transition={{ duration: 0.3 }}
				variants={{
					closed: { rotate: 0, y: 8 },
					open: { rotate: -45, y: 0 },
				}}
			/>
		</motion.button>
	);
});

HamburgerMenuButton.displayName = 'HamburgerMenuButton';
