<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import TwoColumn from '$lib/components/sections/TwoColumn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<svelte:head>
	<title>Knowledge Base - FINTEC</title>
	<meta name="description" content="Learn about observability concepts including SLO, SLI, and best practices for IT monitoring." />
</svelte:head>

<!-- Hero Section -->
<Hero
	subtitle="// Knowledge Base"
	title="Observability Insights & Best Practices"
	description="Educational resources to help you understand and implement effective monitoring strategies."
/>

<!-- Introduction -->
<TwoColumn
	label="// Learn"
	title="Understanding Observability"
	image="/images/kb/observability.jpg"
	imageAlt="Observability Concept"
	imagePosition="left"
	content="Observability is the ability to understand the internal state of a system by examining its outputs. It goes beyond traditional monitoring by providing context and insights that enable you to ask questions about your system you didn't even know to ask. Our knowledge base helps you master these concepts."
/>

<!-- SLO vs SLI -->
<section class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				SLO vs SLI
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				Understanding the building blocks of service level management
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- SLI -->
			<Card hover={true}>
				<div class="h-full">
					<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mb-6">
						<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4">SLI</h3>
					<h4 class="text-lg font-semibold text-[var(--text-primary)] mb-3">Service Level Indicator</h4>
					<p class="text-[var(--text-secondary)] mb-4">
						A carefully defined quantitative measure of some aspect of the level of service that is provided.
					</p>
					<ul class="space-y-2 text-[var(--text-secondary)]">
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#72117d] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>Request latency</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#72117d] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>Error rate</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#72117d] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>Throughput</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#72117d] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>Availability (uptime)</span>
						</li>
					</ul>
				</div>
			</Card>

			<!-- SLO -->
			<Card hover={true}>
				<div class="h-full">
					<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center mb-6">
						<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-[var(--text-primary)] mb-4">SLO</h3>
					<h4 class="text-lg font-semibold text-[var(--text-primary)] mb-3">Service Level Objective</h4>
					<p class="text-[var(--text-secondary)] mb-4">
						A target value or range of values for a service level that is measured by an SLI.
					</p>
					<ul class="space-y-2 text-[var(--text-secondary)]">
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>99.9% availability monthly</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>p95 latency &lt; 200ms</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>Error rate &lt; 0.1%</span>
						</li>
						<li class="flex items-start gap-2">
							<svg class="w-5 h-5 text-[#06b6d4] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span>1000 requests/second</span>
						</li>
					</ul>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- Best Practices -->
<section class="section bg-[var(--bg-secondary)]">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				Observability Best Practices
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				Key principles for effective monitoring
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
			<Card>
				<div class="flex items-start gap-4">
					<div class="w-10 h-10 rounded-lg bg-[#72117d] flex items-center justify-center flex-shrink-0">
						<span class="text-white font-bold">1</span>
					</div>
					<div>
						<h3 class="font-bold text-[var(--text-primary)] mb-2">Start with User Experience</h3>
						<p class="text-[var(--text-secondary)] text-sm">
							Measure what matters to your users, not just what's easy to measure.
						</p>
					</div>
				</div>
			</Card>

			<Card>
				<div class="flex items-start gap-4">
					<div class="w-10 h-10 rounded-lg bg-[#06b6d4] flex items-center justify-center flex-shrink-0">
						<span class="text-white font-bold">2</span>
					</div>
					<div>
						<h3 class="font-bold text-[var(--text-primary)] mb-2">Define Clear SLOs</h3>
						<p class="text-[var(--text-secondary)] text-sm">
							Establish measurable objectives that align with business goals.
						</p>
					</div>
				</div>
			</Card>

			<Card>
				<div class="flex items-start gap-4">
					<div class="w-10 h-10 rounded-lg bg-[#72117d] flex items-center justify-center flex-shrink-0">
						<span class="text-white font-bold">3</span>
					</div>
					<div>
						<h3 class="font-bold text-[var(--text-primary)] mb-2">Use Meaningful SLIs</h3>
						<p class="text-[var(--text-secondary)] text-sm">
							Choose indicators that accurately reflect service performance and reliability.
						</p>
					</div>
				</div>
			</Card>

			<Card>
				<div class="flex items-start gap-4">
					<div class="w-10 h-10 rounded-lg bg-[#06b6d4] flex items-center justify-center flex-shrink-0">
						<span class="text-white font-bold">4</span>
					</div>
					<div>
						<h3 class="font-bold text-[var(--text-primary)] mb-2">Monitor Continuously</h3>
						<p class="text-[var(--text-secondary)] text-sm">
							Maintain real-time visibility to detect and respond to issues quickly.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-br from-[#72117d] to-[#9333ea] relative overflow-hidden">
	<div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px;"></div>

	<div class="container relative z-10 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Need Help Implementing Observability?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
			Our experts can help you design and implement a monitoring strategy tailored to your needs.
		</p>
		<a href="/contact" class="inline-flex items-center gap-2 bg-white text-[#72117d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
			Talk to an Expert
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</a>
	</div>
</section>
