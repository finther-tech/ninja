<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import TwoColumn from '$lib/components/sections/TwoColumn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<svelte:head>
	<title>Services - FINTEC</title>
	<meta name="description" content="FINTEC provides comprehensive IT observability and network performance monitoring services." />
</svelte:head>

<!-- Hero Section -->
<Hero
	subtitle="// Services"
	title="Comprehensive Observability Solutions"
	description="We deliver end-to-end services that help you achieve complete visibility into your IT infrastructure."
/>

<!-- Services Overview -->
<TwoColumn
	label="// What We Offer"
	title="Professional Services & Solutions"
	image="/images/services/observability.jpg"
	imageAlt="IT Observability Dashboard"
	imagePosition="right"
	content="FINTEC offers a comprehensive suite of services designed to help organizations optimize their IT operations. From initial assessment to implementation and ongoing support, we ensure you get the most out of your observ investments. Our team of certified engineers brings deep expertise across APM, NPM, and EUEM technologies."
/>

<!-- Service Areas -->
<section class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				Our Service Areas
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				Comprehensive solutions for modern IT challenges
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">APM Solutions</h3>
				<p class="text-[var(--text-secondary)]">
					Application Performance Monitoring to ensure your applications run at peak efficiency.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">NPM Solutions</h3>
				<p class="text-[var(--text-secondary)]">
					Network Performance Monitoring for complete visibility into your network infrastructure.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">EUEM Solutions</h3>
				<p class="text-[var(--text-secondary)]">
					End User Experience Monitoring to deliver optimal digital experiences.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#72117d] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Consulting</h3>
				<p class="text-[var(--text-secondary)]">
					Expert advisory services to define and execute your observability strategy.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0891b2] to-[#06b6d4] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Implementation</h3>
				<p class="text-[var(--text-secondary)]">
					Professional deployment and configuration of monitoring solutions.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Support</h3>
				<p class="text-[var(--text-secondary)]">
					Ongoing support and maintenance to ensure continuous optimal performance.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-br from-[#72117d] to-[#9333ea] relative overflow-hidden">
	<div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px;"></div>

	<div class="container relative z-10 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to Optimize Your IT Operations?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
			Let's discuss how FINTEC can help transform your observability strategy.
		</p>
		<a href="/contact" class="inline-flex items-center gap-2 bg-white text-[#72117d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
			Get in Touch
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</a>
	</div>
</section>
