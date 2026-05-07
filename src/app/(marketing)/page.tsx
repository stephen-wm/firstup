import { type ReactNode } from 'react';

import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Link as LinkIcon, Star, Zap } from 'lucide-react';

import { createMetadata } from '@/config/create-metadata';
import { cn } from '@/lib/utils';

import { MarqueeBanner } from '@/components/layout/marquee-banner';
import { HeroMockup } from '@/components/layout/phone-mockup';
import { Tag } from '@/components/layout/tag';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Marquee } from '@/components/ui/marquee';

export const metadata: Metadata = createMetadata({
	title: 'Your online presence in one link',
	description:
		'Create your personal FirstUp page and share your links, socials, and content in one place. Free forever.',
});

const features = [
	{
		icon: '🎨',
		title: 'Fully Customizable',
		desc: 'Make your page unmistakably yours. Choose themes, colors, fonts, and button styles that match your brand.',
	},
	{
		icon: '📊',
		title: 'Built-in Analytics',
		desc: "Know what's working. See clicks, traffic sources, and top-performing links — all in one dashboard.",
	},
	{
		icon: '⚡',
		title: 'Blazing Fast',
		desc: 'Your profile loads instantly on any device. No bloat, no slowdowns — just your links, ready to tap.',
	},
	{
		icon: '📱',
		title: 'Mobile-First Design',
		desc: 'Designed for the device your audience uses most. Every profile looks great on any screen size.',
	},
	{
		icon: '🔗',
		title: 'Unlimited Links',
		desc: 'Add as many links as you need. Drag to reorder, toggle on/off, and group by topic.',
	},
	{
		icon: '🛡️',
		title: 'Privacy Focused',
		desc: 'Your data is yours. No hidden tracking, no selling your info. Full transparency, always.',
	},
];

const plans = [
	{
		name: 'Free',
		price: '$0',
		sub: 'forever free',
		dark: false,
		features: [
			'1 profile',
			'Up to 5 links',
			'Basic themes',
			'FirstTap subdomain',
		],
		cta: 'Get Started',
		href: '/register',
	},
	{
		name: 'Pro',
		price: '$5',
		sub: '/month',
		dark: true,
		badge: 'Most Popular',
		features: [
			'Unlimited links',
			'All themes + custom colors',
			'Custom domain',
			'Analytics dashboard',
			'Remove FirstTap branding',
		],
		cta: 'Start Free Trial',
		href: '/register',
	},
	{
		name: 'Business',
		price: '$15',
		sub: '/month',
		dark: false,
		features: [
			'5 profiles',
			'Everything in Pro',
			'Team collaboration',
			'API access',
			'Priority support',
		],
		cta: 'Contact Sales',
		href: '/contact',
	},
];

const steps = [
	{
		n: '01',
		title: 'Claim your username',
		desc: 'Sign up in seconds and grab your unique FirstTap URL. That link is yours — no one else can have it.',
	},
	{
		n: '02',
		title: 'Add and arrange your links',
		desc: 'Drop in your socials, website, content, and anything else. Drag to reorder, toggle links on and off anytime.',
	},
	{
		n: '03',
		title: 'Put it everywhere',
		desc: 'One link in every bio, every email, every business card. Your audience always knows where to find you.',
	},
];

const reviews = [
	{
		initial: 'M',
		color: 'bg-primary text-foreground',
		quote:
			'I switched from another tool and never looked back. The customization options are on another level — my page actually looks like mine now.',
		name: 'Maya R.',
		role: 'Content Creator · 120K followers',
		stars: 5,
	},
	{
		initial: 'J',
		color: 'bg-purple-400 text-white',
		quote:
			"Finally a link-in-bio that doesn't look like everyone else's. My freelance clients immediately ask about it — it's become part of my brand.",
		name: 'James T.',
		role: 'Freelance Designer',
		stars: 5,
	},
	{
		initial: 'P',
		color: 'bg-blue-400 text-white',
		quote:
			'The analytics make a real difference. I can see which links perform and make decisions based on actual data instead of guessing.',
		name: 'Priya K.',
		role: 'Marketing Consultant',
		stars: 5,
	},
	{
		initial: 'A',
		color: 'bg-blue-400 text-white',
		quote:
			'The analytics make a real difference. I can see which links perform and make decisions based on actual data instead of guessing.',
		name: 'Alana T.',
		role: 'Marketing Consultant',
		stars: 5,
	},
	{
		initial: 'R',
		color: 'bg-blue-400 text-white',
		quote:
			'The analytics make a real difference. I can see which links perform and make decisions based on actual data instead of guessing.',
		name: 'Ralph B.',
		role: 'Marketing Consultant',
		stars: 5,
	},
	{
		initial: 'Z',
		color: 'bg-blue-400 text-white',
		quote:
			'The analytics make a real difference. I can see which links perform and make decisions based on actual data instead of guessing.',
		name: 'Zaire A.',
		role: 'Marketing Consultant',
		stars: 5,
	},
];

const faqs = [
	{
		id: 'item-1',
		question: 'What is FirstTap and how does it work?',
		answer:
			'FirstTap gives you a single, beautiful page at firsttap.me/yourname where you can list all your links — social profiles, websites, content, shops, and anything else. Share that one URL everywhere and your audience always has access to everything you want them to see.',
	},
	{
		id: 'item-2',
		question: 'Is FirstTap free to use?',
		answer:
			'Yes. FirstTap is free forever with up to 5 links and basic themes. If you want unlimited links, custom domains, advanced customization, and analytics, our Pro plan starts at $5/month. No credit card needed to get started.',
	},
	{
		id: 'item-3',
		question: 'Can I use my own domain with FirstTap?',
		answer:
			'Yes, on the Pro and Business plans you can connect your own custom domain — so your profile lives at yourname.com instead of firsttap.me/yourname. We handle the SSL and DNS setup guidance, and it works with any major domain registrar.',
	},
	{
		id: 'item-4',
		question: 'Is FirstTap safe to add to my social media bios?',
		answer:
			'Completely. FirstTap uses SSL encryption, follows privacy best practices, and works seamlessly with Instagram, TikTok, YouTube, X, LinkedIn, and every other major platform. Your profile page is clean, fast, and free of anything that could get flagged.',
	},
	{
		id: 'item-5',
		question: 'How many links should I put on my FirstTap?',
		answer:
			'Quality beats quantity. Typically 4–7 focused links perform best — fewer choices means more clicks per link. Prioritize your highest-value destinations: your latest content, newsletter, shop, or portfolio. You can always toggle links on and off as your priorities change.',
	},
	{
		id: 'item-6',
		question: 'Do I need a website to use FirstTap?',
		answer:
			"Not at all. Thousands of FirstTap users don't have a separate website — their FirstTap page is their hub. It's perfect for creators, freelancers, small businesses, or anyone who wants a clean central home without building or maintaining a full site.",
	},
	{
		id: 'item-7',
		question: 'Can I see who is clicking my links?',
		answer:
			'Yes. Pro and Business plans include a full analytics dashboard showing total views, clicks per link, geographic breakdown of your audience, device types, and referral sources. You get real data to understand what resonates and what to prioritize.',
	},
	{
		id: 'item-8',
		question: 'What happens if I cancel my plan?',
		answer:
			"Your profile stays live on the free plan with reduced features. You'll have 30 days to export your data before paid-only content is archived. We never delete your account or your URL without notice — your username stays yours.",
	},
];

export function Heading({
	children,
	className,
	...props
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<h2
			className={cn(
				'text-4xl font-extrabold tracking-tight lg:text-5xl',
				className,
			)}
			{...props}
		>
			{children}
		</h2>
	);
}

export default function Home() {
	return (
		<div
			className="flex flex-1 flex-col items-center justify-center bg-zinc-50
				font-sans dark:bg-black"
		>
			{/* <section
				className="flex min-h-screen w-full max-w-full flex-1 items-center
					justify-center bg-primary px-16 py-32 sm:items-center dark:bg-black"
			>
				<div className="w-91">
					<HeroMockup />
				</div>
			</section> */}

			{/* Hero Section */}
			<section
				className="relative flex size-full min-h-screen flex-1 items-center
					justify-center overflow-hidden bg-foreground py-24 lg:px-16
					dark:bg-[#090b0c]"
			>
				<div
					className="pointer-events-none absolute inset-0
						bg-[radial-gradient(ellipse_at_30%_20%,rgba(163,227,20,0.13),transparent_60%)]"
				/>
				<div
					className="pointer-events-none absolute top-0 right-0 size-150
						rounded-full
						bg-[radial-gradient(circle,rgba(163,227,20,0.04),transparent_70%)]
						blur-3xl"
				/>

				<div
					className="relative container grid items-center gap-16 px-4
						lg:grid-cols-2"
				>
					{/* LEFT */}
					<div
						className="flex flex-col items-center text-center lg:items-start
							lg:text-left"
					>
						<div
							className="mb-6 inline-flex w-max items-center gap-1.5
								rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1
								text-[11px] font-bold tracking-[0.07em] text-primary uppercase"
						>
							✦ Now in public beta
						</div>
						<h1
							className="mb-6 w-full max-w-xl text-5xl leading-[1.05]
								font-extrabold tracking-tight text-white lg:text-[64px]"
						>
							Everything you are.{' '}
							<span className="text-primary">One link.</span>
						</h1>
						<p
							className="mb-8 w-full max-w-lg text-lg/relaxed text-balance
								text-white/60 lg:text-xl"
						>
							Build a beautiful, customizable profile page to share your links,
							grow your audience, and understand what works.
						</p>
						<div className="mb-3 w-full max-w-lg">
							<div
								className="flex items-center rounded-xl border border-white/10
									bg-white py-2 pe-2 pl-5 transition focus-within:border-primary
									focus-within:ring-4 focus-within:ring-primary/20"
							>
								<span
									className="flex shrink-0 items-center pe-0 text-sm
										text-muted-foreground"
								>
									<LinkIcon className="me-2 size-4" />
									firsttap.me/
								</span>
								<Input
									className="border-0 py-4 ps-0 text-base shadow-none
										placeholder:text-muted-foreground focus-visible:ring-0
										focus-visible:ring-offset-0"
									placeholder="yourname"
								/>
								<Button
									asChild
									className="shrink-0 px-5"
									size="lg"
								>
									<Link href="/register">Claim your link</Link>
								</Button>
							</div>
						</div>
						<p className="text-xs text-white/30">
							Free forever · No credit card required
						</p>
					</div>

					{/* RIGHT — Phone mockups */}
					<div className="relative flex items-end justify-center">
						<div
							className="pointer-events-none absolute inset-0 rounded-full
								bg-[radial-gradient(circle,rgba(163,227,20,0.06),transparent_70%)]
								blur-2xl"
						/>

						<div className="z-10 w-87.5">
							<HeroMockup />
						</div>
					</div>
				</div>
			</section>

			{/* Marquee Banner */}
			<MarqueeBanner />

			{/* Stats Banner */}
			<section
				className="flex w-full items-center justify-center bg-secondary py-14"
			>
				<div className="container grid grid-cols-3 gap-6 px-4 text-center">
					{[
						{ n: '10K+', l: 'Creators using FirstTap' },
						{ n: '2.4M', l: 'Links clicked monthly' },
						{ n: '4.9★', l: 'Average user rating' },
					].map((s) => (
						<div key={s.l}>
							<p
								className="mb-1 text-[40px] leading-none font-extrabold
									tracking-tight"
							>
								{s.n}
							</p>
							<p className="text-sm text-muted-foreground">{s.l}</p>
						</div>
					))}
				</div>
			</section>

			{/* Features Section */}
			<section
				className="flex w-full items-center justify-center bg-background py-16
					lg:py-24"
			>
				<div className="container flex flex-col items-center px-4">
					<div className="mb-14 text-center">
						<div
							className="mx-auto mb-6 inline-flex w-max items-center gap-1.5
								rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1
								text-[11px] font-bold tracking-[0.07em] text-primary uppercase"
						>
							Features
						</div>
						<h2
							className="mb-4 text-4xl font-extrabold tracking-tight
								lg:text-5xl"
						>
							Everything you need to
							<br />
							stand out online
						</h2>
						<p className="text-base font-medium text-muted-foreground">
							Built for creators, professionals, and everyone in between.
						</p>
					</div>
					<div
						className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2
							lg:grid-cols-3"
					>
						{features.map((f) => (
							<div
								className="rounded-2xl bg-secondary p-6 transition-all
									duration-200 hover:-translate-y-1 hover:shadow-lg"
								key={f.title}
							>
								<div className="mb-3.5 text-[28px]">{f.icon}</div>
								<h3 className="mb-2 text-[17px] font-bold tracking-tight">
									{f.title}
								</h3>
								<p
									className="text-[13px] leading-relaxed font-light
										text-muted-foreground"
								>
									{f.desc}
								</p>
							</div>
						))}
					</div>
					<div className="mt-9 text-center">
						<Button
							asChild
							variant="outline"
						>
							<Link href="/features">See everything we offer →</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Showcase Section */}
			<section
				className="flex w-full items-center justify-center overflow-hidden
					bg-foreground py-16 lg:py-24 dark:bg-secondary"
			>
				<div className="container flex flex-col items-center px-4">
					<div className="mb-14 text-center">
						<div
							className="mx-auto mb-6 inline-flex w-max items-center gap-1.5
								rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1
								text-[11px] font-bold tracking-[0.07em] text-primary uppercase"
						>
							Your Profile
						</div>
						<h2
							className="mb-4 text-4xl font-extrabold tracking-tight text-white
								lg:text-5xl"
						>
							Your profile, <span className="text-primary">your style</span>
						</h2>
						<p className="text-base font-light text-white/50">
							Customize every detail. Dark, light, bold, minimal — it&apos;s all
							yours.
						</p>
					</div>
					<div className="relative flex items-end justify-center gap-6">
						<div
							className="transition-transform duration-300 hover:-translate-y-2"
						>
							<Image
								alt="Dark screen"
								height={300}
								loading="eager"
								src="/mockups/blank_4.png"
								style={{ height: 'auto', width: '200px' }}
								width={200}
							/>
						</div>
						<div
							className="-mb-4 transition-transform duration-300
								hover:-translate-y-2"
						>
							<Image
								alt="Dark screen"
								height={300}
								loading="eager"
								src="/mockups/blank_6.png"
								style={{ height: 'auto', width: '200px' }}
								width={200}
							/>
						</div>
						<div
							className="pointer-events-none absolute inset-0 rounded-full
								bg-[radial-gradient(ellipse,rgba(163,227,20,0.05),transparent_70%)]
								blur-3xl"
						/>
						<div
							className="-mb-6 transition-transform duration-300
								hover:-translate-y-2"
						>
							<Image
								alt="Dark screen"
								height={300}
								loading="eager"
								src="/mockups/blank_5.png"
								style={{ height: 'auto', width: '200px' }}
								width={200}
							/>
						</div>
						<div
							className="-mb-4 transition-transform duration-300
								hover:-translate-y-2"
						>
							<Image
								alt="Dark screen"
								height={300}
								loading="eager"
								src="/mockups/blank_10.png"
								style={{ height: 'auto', width: '200px' }}
								width={200}
							/>
						</div>
						<div
							className="transition-transform duration-300 hover:-translate-y-2"
						>
							<Image
								alt="Sand screen"
								height={300}
								loading="eager"
								src="/mockups/blank_8.png"
								style={{ height: 'auto', width: '200px' }}
								width={200}
							/>
						</div>
					</div>
					<p className="mt-12 text-sm text-white/30">
						Choose from dozens of themes or build your own from scratch.
					</p>
				</div>
			</section>

			{/* How-it-works Section */}
			<section
				className="flex w-full items-center justify-center bg-background py-16
					lg:py-24"
			>
				<div className="container flex flex-col items-center px-4">
					<div className="mb-14 text-center">
						<div
							className="mx-auto mb-6 inline-flex w-max items-center gap-1.5
								rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1
								text-[11px] font-bold tracking-[0.07em] text-primary uppercase"
						>
							How it works
						</div>
						<h2
							className="mb-3 text-4xl font-extrabold tracking-tight
								lg:text-5xl"
						>
							Up and running <br />
							in <span className="text-primary">3 steps</span>
						</h2>
					</div>
					<div
						className="grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2
							lg:grid-cols-3"
					>
						{steps.map((s) => (
							<div key={s.n}>
								<p
									className="mb-1.5 text-[72px] leading-none font-extrabold
										text-primary/15"
								>
									{s.n}
								</p>
								<h3 className="mb-2.5 text-xl font-bold tracking-tight">
									{s.title}
								</h3>
								<p
									className="text-base/relaxed font-light text-muted-foreground"
								>
									{s.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section
				className="flex w-full items-center justify-center bg-secondary py-16
					lg:py-24"
			>
				<div className="container flex flex-col px-4">
					<div className="mb-14 text-center">
						<div
							className="mx-auto mb-6 inline-flex w-max items-center gap-1.5
								rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1
								text-[11px] font-bold tracking-[0.07em] text-primary uppercase"
						>
							Pricing
						</div>
						<h2
							className="mb-2.5 text-4xl font-extrabold tracking-tight
								lg:text-5xl"
						>
							Simple, honest pricing
						</h2>
						<p className="text-base font-medium text-muted-foreground">
							Start free. Upgrade when you&apos;re ready. No surprises.
						</p>
					</div>
					<div
						className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4
							sm:grid-cols-2 lg:grid-cols-3"
					>
						{plans.map((plan) => (
							<div
								className={`rounded-[22px] p-7 ${
									plan.dark ?
										'border-2 border-primary bg-foreground dark:bg-muted'
									:	'bg-background'
								}`}
								key={plan.name}
							>
								{plan.badge && (
									<span
										className="mb-3.5 inline-block rounded-full bg-primary
											px-2.5 py-1 text-[10px] font-bold tracking-[0.07em]
											text-foreground uppercase"
									>
										{plan.badge}
									</span>
								)}
								<p
									className={`mb-1 text-[18px] font-bold tracking-tight
									${plan.dark ? 'text-white' : ''}`}
								>
									{plan.name}
								</p>
								<div className="mb-1 flex items-baseline gap-1">
									<span
										className={`text-[40px] leading-none font-extrabold
										tracking-tight ${plan.dark ? 'text-white' : ''}`}
									>
										{plan.price}
									</span>
									<span
										className={`text-[12px]
										${plan.dark ? 'text-white/40' : 'text-muted-foreground'}`}
									>
										{plan.sub}
									</span>
								</div>
								<hr
									className={`my-4 border-t
									${plan.dark ? 'border-white/10' : 'border-border'}`}
								/>
								{plan.features.map((f) => (
									<div
										className="mb-2.5 flex items-start gap-2"
										key={f}
									>
										<span className="mt-0.5 shrink-0 font-bold text-primary">
											✓
										</span>
										<span
											className={`text-sm/relaxed
											${plan.dark ? 'text-white/65' : ''}`}
										>
											{f}
										</span>
									</div>
								))}
								<Button
									asChild
									className="mt-5 w-full"
									variant={plan.dark ? 'default' : 'outline'}
								>
									<Link href={plan.href}>{plan.cta}</Link>
								</Button>
							</div>
						))}
					</div>
					<p className="mt-5 text-center text-[12px] text-muted-foreground">
						<Link
							className="font-semibold text-primary hover:underline"
							href="/pricing"
						>
							Compare all features →
						</Link>
					</p>
				</div>
			</section>

			{/* Reviews Section */}
			<section
				className="flex w-full items-center justify-center bg-background py-16
					lg:py-24"
			>
				<div className="container flex flex-col items-center self-stretch px-4">
					<div className="mb-14 space-y-4 text-center">
						<Tag>Reviews</Tag>

						<Heading>Loved by the community</Heading>

						<p className="text-base font-medium text-muted-foreground">
							Creators of all kinds use FirstTap to share their world.
						</p>
					</div>

					<div
						className="relative flex h-125 w-full flex-col items-center
							justify-center overflow-hidden"
					>
						<Marquee
							className="[--duration:20s]"
							pauseOnHover
						>
							{firstRow.map((review) => (
								<div
									className="flex w-100 flex-col justify-between rounded-2xl
										border border-border bg-secondary p-7"
									key={review.name}
								>
									<div>
										<div className="mb-4 flex gap-1">
											{Array.from({ length: review.stars }).map((_, i) => (
												<Star
													className="size-4 fill-primary text-primary"
													key={i}
												/>
											))}
										</div>

										<p
											className="mb-6 text-[15px] leading-[1.7]
												text-foreground/80"
										>
											&ldquo;{review.quote}&rdquo;
										</p>
									</div>

									<div className="flex items-center gap-3">
										<div
											className={`flex size-10 shrink-0 items-center
											justify-center rounded-full text-sm font-bold
											${review.color}`}
										>
											{review.initial}
										</div>

										<div>
											<p className="text-[14px] font-semibold">{review.name}</p>
											<p className="text-[12px] text-muted-foreground">
												{review.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</Marquee>

						<Marquee
							className="[--duration:20s]"
							pauseOnHover
							reverse
						>
							{secondRow.map((review) => (
								<div
									className="flex w-100 flex-col justify-between rounded-2xl
										border border-border bg-secondary p-7"
									key={review.name}
								>
									<div>
										<div className="mb-4 flex gap-1">
											{Array.from({ length: review.stars }).map((_, i) => (
												<Star
													className="size-4 fill-primary text-primary"
													key={i}
												/>
											))}
										</div>

										<p
											className="mb-6 text-[15px] leading-[1.7]
												text-foreground/80"
										>
											&ldquo;{review.quote}&rdquo;
										</p>
									</div>

									<div className="flex items-center gap-3">
										<div
											className={`flex size-10 shrink-0 items-center
											justify-center rounded-full text-sm font-bold
											${review.color}`}
										>
											{review.initial}
										</div>

										<div>
											<p className="text-[14px] font-semibold">{review.name}</p>
											<p className="text-[12px] text-muted-foreground">
												{review.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</Marquee>
						<div
							className="pointer-events-none absolute inset-y-0 left-0 w-1/4
								bg-linear-to-r from-background"
						/>
						<div
							className="pointer-events-none absolute inset-y-0 right-0 w-1/4
								bg-linear-to-l from-background"
						/>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section
				className="flex w-full items-center justify-center bg-foreground py-16
					lg:py-24 dark:bg-secondary"
			>
				<div className="container flex flex-col items-center self-stretch px-4">
					<div className="mb-14 text-center">
						<div
							className="mx-auto mb-6 inline-flex w-max items-center gap-1.5
								rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1
								text-[11px] font-bold tracking-[0.07em] text-primary uppercase"
						>
							FAQ
						</div>

						<h2
							className="mb-2.5 text-4xl font-extrabold tracking-tight
								text-white lg:text-5xl"
						>
							Questions? Answered
						</h2>

						<p className="text-base font-medium text-white/40">
							Everything you need to know about FirstUp.
						</p>
					</div>

					<div className="w-full max-w-3xl">
						<Accordion
							className="w-full space-y-3"
							collapsible
							defaultValue="item-1"
							type="single"
						>
							{faqs.map(({ id, question, answer }) => (
								<AccordionItem
									className="overflow-hidden rounded-2xl border
										border-white/[0.07] bg-white/5 px-7
										data-[state=open]:bg-white/8"
									key={id}
									value={id}
								>
									<AccordionTrigger
										className="py-6 text-left hover:no-underline"
									>
										<span
											className="pr-4 text-base font-bold text-white lg:text-lg"
										>
											{question}
										</span>
									</AccordionTrigger>

									<AccordionContent
										className="pb-6 text-sm/relaxed text-white/55 lg:text-base"
									>
										{answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section
				className="relative flex w-full items-center justify-center
					overflow-hidden bg-primary px-8 py-16 text-center lg:py-24"
			>
				<div
					className="pointer-events-none absolute inset-0
						bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]"
				/>
				<div className="relative container px-4">
					<div className="mb-6 flex items-center justify-center gap-2">
						<Star
							className="size-6 fill-foreground text-foreground
								dark:fill-background dark:text-background"
						/>
						<Zap
							className="size-7 fill-foreground text-foreground
								dark:fill-background dark:text-background"
						/>
						<Star
							className="size-8 fill-foreground text-foreground
								dark:fill-background dark:text-background"
						/>
						<Zap
							className="size-7 -scale-y-100 fill-foreground text-foreground
								dark:fill-background dark:text-background"
						/>
						<Star
							className="size-6 fill-foreground text-foreground
								dark:fill-background dark:text-background"
						/>
					</div>
					<h2
						className="mb-4 text-4xl font-extrabold tracking-tight
							text-foreground lg:text-6xl dark:text-background"
					>
						Ready to make your
						<br />
						first tap count?
					</h2>
					<p
						className="mb-10 text-lg font-semibold text-foreground lg:text-xl
							dark:text-background/70"
					>
						Join thousands of creators sharing everything they are from one
						link.
					</p>
					<Link
						className="inline-block rounded-full bg-foreground px-10 py-5
							text-lg font-black text-primary shadow-xl transition-all
							hover:scale-105 hover:bg-black hover:shadow-2xl lg:px-14
							lg:text-xl dark:bg-background"
						href="/register"
					>
						Get started for free
					</Link>
					<p className="mt-4 text-sm text-foreground dark:text-background/70">
						Free forever · No credit card required
					</p>
				</div>
			</section>
		</div>
	);
}

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
