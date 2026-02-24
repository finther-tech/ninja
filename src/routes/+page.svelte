<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import TwoColumn from '$lib/components/sections/TwoColumn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<!-- Hero Section -->
<Hero
	subtitle="Observability as a Service"
	title="Transform Your IT Infrastructure with"
	description="We enable companies with actionable insights and data-driven decision making. AI-powered monitoring for complete visibility into your network, cloud, and applications."
	primaryCta={{ text: 'Get Started', href: '/contact' }}
	secondaryCta={{ text: 'Learn More', href: '/services' }}
/>

<!-- What We Do Section -->
<section class="section bg-[var(--bg-secondary)]">
	<div class="container">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<p class="text-[#72117d] dark:text-[#a855f7] font-semibold text-sm uppercase tracking-wide mb-4">
				// What We Do
			</p>
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
				End-to-End Observability for Your Organization
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mb-6">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Actionable Insights</h3>
				<p class="text-[var(--text-secondary)]">
					FINTEC provides actionable insights across your network, cloud, and applications with
					real-time performance monitoring.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center mb-6">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">AI-Powered Analysis</h3>
				<p class="text-[var(--text-secondary)]">
					Our advisors are fluent in APM, NPM and EUEM, leveraging AI to help you achieve
					unparalleled visibility and optimize performance.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center mb-6">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Expert Guidance</h3>
				<p class="text-[var(--text-secondary)]">
					From defining a tooling strategy to embedding new processes, our team helps you take
					your observability initiatives to the next level.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- Services Preview -->
<TwoColumn
	label="// Our Services"
	title="Observability & Advisory Services"
	image="/images/about/First_Image-1024x638.jpg"
	imageAlt="Observability Dashboard"
	imagePosition="left"
	content="We are a team of qualified and industry certified network engineers providing
	professional services on customer IT operation and Technology. Our services include
	reporting, monitoring, consulting and advisory services for your network and applications."
	cta={{ text: 'Explore Services', href: '/services' }}
/>

<!-- About Teaser -->
<TwoColumn
	label="// About Us"
	title="Experience. Execution. Excellence."
	image="/images/info-1024x1024.png"
	imageAlt="FINTEC Team"
	imagePosition="right"
	content="Founded in late 2009, we are a boutique value-added distributor of innovative IT
	solutions focusing on business application performance delivery. We help organizations
	achieve observability and visibility to optimize, control and accelerate their complex
	IT environments."
	cta={{ text: 'Learn More About Us', href: '/about' }}
/>

<!-- Partner Logos -->
<section class="section py-16 bg-[var(--bg-primary)]">
	<div class="container">
		<div class="text-center mb-12">
			<p class="text-[var(--text-tertiary)] font-semibold text-sm uppercase tracking-wide">
				Trusted Technology Partners
			</p>
		</div>

		<div
			class="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
		>
			<img
				src="/images/services/accedian-1.png"
				alt="Accedian"
				class="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
			/>
			<img
				src="/images/services/aternity-1.png"
				alt="Aternity"
				class="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
			/>
			<img
				src="/images/services/datadog-1.png"
				alt="Datadog"
				class="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
			/>
			<img
				src="/images/services/kentik.png"
				alt="Kentik"
				class="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
			/>
			<img
				src="/images/services/New_Relic-5-600x200.png"
				alt="New Relic"
				class="h-8 md:h-10 w-auto hover:scale-110 transition-transform"
			/>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-br from-[#72117d] to-[#9333ea] relative overflow-hidden">
	<!-- Background pattern -->
	<div
		class="absolute inset-0 opacity-10"
		style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px;"
	></div>

	<div class="container relative z-10 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to Transform Your Observability?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
			Let's discuss how we can help you achieve complete visibility into your IT infrastructure.
		</p>
		<Button href="/contact" variant="secondary" size="lg">
			Get in Touch
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg>
		</Button>
	</div>
</section>
