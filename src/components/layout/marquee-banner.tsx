import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import { InfiniteSlider } from '../motion-primitives/infinite-slider';

interface MarqueeBannerProps extends ComponentProps<'div'> {
	className?: string;
}

const items = [
	'Fully customizable',
	'Analytics Dashboard',
	'Unlimited Links',
	'Custom Domains',
	'Mobile-First',
	'Link Scheduling',
	'QR Codes',
	'Drag & Drop Reorder',
	'Dark & Light Themes',
];

export function MarqueeBanner({
	className,
	...props
}: Readonly<MarqueeBannerProps>) {
	const doubled = [...items, ...items];

	return (
		<div
			className={cn('max-w-full overflow-x-hidden bg-primary py-3', className)}
			{...props}
		>
			<InfiniteSlider gap={24}>
				{doubled.map((item, i) => (
					<div key={i}>
						<span
							className="px-6 text-[12px] font-bold whitespace-nowrap
								text-foreground uppercase dark:text-background"
						>
							{item}
						</span>

						<span className="ml-6 opacity-35 dark:text-background">✦</span>
					</div>
				))}
			</InfiniteSlider>
		</div>
	);
}
