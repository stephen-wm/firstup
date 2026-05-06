'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import { useIsMounted } from '@/hooks/use-is-mounted';

import { ThemeIcon } from '@/components/shared/svgs';
import { Skeleton } from '@/components/ui/skeleton';

interface ThemeTogglerProps {
	readonly className?: string;
}

// ThemeToggler renders a simple icon button that cycles between light and dark.
// It is mounted-gated to prevent a hydration mismatch
export function ThemeToggler({ className, ...props }: ThemeTogglerProps) {
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const isMounted = useIsMounted();

	const { resolvedTheme, setTheme } = useTheme();

	if (!isMounted) {
		return (
			<Skeleton
				aria-hidden="true"
				className="size-10 rounded-md"
			/>
		);
	}

	const isDark = resolvedTheme === 'dark';

	return (
		<button
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			className={cn(
				`inline-flex size-10 cursor-pointer items-center justify-center
				rounded-md border-input text-muted-foreground transition-colors
				hover:bg-accent hover:text-accent-foreground focus-visible:ring-1
				focus-visible:ring-ring focus-visible:outline-none`,
				className,
			)}
			onClick={() => {
				setIsAnimating(true);
				setTheme(isDark ? 'light' : 'dark');
				setTimeout(() => setIsAnimating(false), 300);
			}}
			{...props}
		>
			<motion.div
				animate={{
					rotate: isDark ? 180 : 0,
					scale: isAnimating ? [1, 1.25, 1] : 1,
				}}
				initial={{
					rotate: isDark ? 180 : 0,
					scale: 1,
				}}
				transition={{
					rotate: {
						type: 'spring',
						stiffness: 300,
						damping: 20,
					},
					scale: {
						duration: 0.25,
						ease: 'easeOut',
					},
				}}
				whileTap={{ scale: 0.9 }}
			>
				<ThemeIcon />
			</motion.div>
		</button>
	);
}
