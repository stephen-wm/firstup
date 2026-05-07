import { FaInstagram, FaThreads, FaTiktok, FaXTwitter } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { AnimatedList } from '@/components/ui/animated-list';

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

let profileLinks = [
	{ label: 'My Portfolio', accent: true },
	{ label: 'YouTube Channel', accent: false },
	{ label: 'Instagram', accent: false },
	{ label: 'Newsletter', accent: false },
	{ label: 'Merch Shop', accent: false },
];

profileLinks = Array.from({ length: 10 }, () => profileLinks).flat();

export function HeroMockup() {
	return (
		<div
			className="relative w-75 shrink-0 overflow-hidden rounded-[36px] border
				border-ring bg-background shadow-[0_32px_64px_rgba(0,0,0,0.6)] ring-4
				ring-ring"
		>
			{/* Notch */}
			<div
				className="absolute top-0 left-1/2 z-10 h-5 w-20 -translate-x-1/2
					rounded-b-2xl bg-ring"
			/>

			<div className="px-4 pt-10 pb-8">
				{/* Profile header */}
				<div className="mb-6 flex flex-col items-center">
					<div
						className="mb-3 flex size-16 items-center justify-center
							rounded-full bg-linear-to-br from-primary to-[#6a9500] text-2xl
							font-bold text-primary-foreground"
					>
						Y
					</div>
					<p className="text-sm font-bold text-foreground">@yourname</p>
					<p
						className="mt-0.5 text-[10px] text-muted-foreground
							dark:text-white/40"
					>
						Creator · Designer · Builder ✦
					</p>
				</div>

				{/* Animated links */}
				<div className="relative flex h-80 w-full flex-col overflow-hidden">
					<AnimatedList
						className="flex flex-col gap-2"
						delay={1000}
					>
						{profileLinks.map((link, idx) => (
							<ProfileLink
								key={idx}
								label={link.label}
							/>
						))}
					</AnimatedList>
					<div
						className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4
							bg-linear-to-t from-background"
					/>
				</div>

				{/* Social icons */}
				<div className="mt-5 flex justify-center gap-2">
					{socials.map(({ icon: Icon, label }) => (
						<div
							className="flex size-10 items-center justify-center rounded-full
								bg-foreground/50 text-[10px] font-semibold text-white/40
								dark:bg-white/10"
							key={label}
						>
							<Icon className="size-4" />
						</div>
					))}
				</div>

				<p
					className="mt-4 text-center text-[9px] text-muted-foreground
						dark:text-white/20"
				>
					made with FirstUp ✦
				</p>
			</div>
		</div>
	);
}

function ProfileLink({ label }: Readonly<{ label: string }>) {
	return (
		<div
			className={cn(
				`relative mx-auto min-h-fit w-full max-w-100 cursor-pointer
				overflow-hidden rounded-2xl p-4`,
				// animation styles
				'transition-all duration-200 ease-in-out hover:scale-[103%]',
				// light styles
				`bg-white
				[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]`,
				// dark styles
				`transform-gpu dark:bg-transparent
				dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
				dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]`,
			)}
		>
			{label}
		</div>
	);
}
