import { type ComponentProps, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface TagProps extends ComponentProps<'div'> {
	children: ReactNode;
	className?: string;
}

export function Tag({ children, className, ...props }: Readonly<TagProps>) {
	return (
		<div
			className={cn(
				`mx-auto mb-6 inline-flex w-max items-center gap-1.5 rounded-full border
				border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold
				tracking-[0.07em] text-primary uppercase`,
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}
