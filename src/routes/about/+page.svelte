<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import TwoColumn from '$lib/components/sections/TwoColumn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<!-- Hero Section -->
<Hero
	subtitle="// About Us"
	title="Experience. Execution. Excellence."
	description="Founded in late 2009, we are a boutique value-added distributor of innovative IT solutions focusing on business application performance delivery."
/>

<!-- Story Section -->
<section class="section">
	<div class="container">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
					Our Story
				</h2>
				<div class="w-20 h-1 bg-gradient-to-r from-[#72117d] to-[#06b6d4] mx-auto"></div>
			</div>

			<p class="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
				FINTEC was founded in late 2009 with a clear vision: to help organizations achieve
				complete observability and visibility into their complex IT environments. As a boutique
				value-added distributor, we specialize in business application performance delivery.
			</p>

			<p class="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
				Our team of qualified and industry-certified network engineers provides professional
				services spanning customer IT operations and technology. We deliver comprehensive
				solutions including reporting, monitoring, consulting, and advisory services for your
				network and applications.
			</p>

			<p class="text-lg text-[var(--text-secondary)] leading-relaxed">
				We help organizations optimize, control, and accelerate their IT infrastructure
				through actionable insights and data-driven decision making.
			</p>
		</div>
	</div>
</section>

<!-- Values Section -->
<section class="section bg-[var(--bg-secondary)]">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				Our Values
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				The principles that guide everything we do
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Excellence</h3>
				<p class="text-[var(--text-secondary)]">
					We deliver exceptional quality in everything we do, from technical solutions to
					customer service.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Partnership</h3>
				<p class="text-[var(--text-secondary)]">
					We build lasting relationships with our clients and partners, working together to
					achieve shared success.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">Innovation</h3>
				<p class="text-[var(--text-secondary)]">
					We stay at the forefront of technology, bringing innovative solutions that drive
					digital transformation.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- Team Image Section -->
<TwoColumn
	label="// Our Team"
	title="Expert Guidance Every Step of the Way"
	image="/images/about/Second_Image.png"
	imageAlt="FINTEC Team at work"
	imagePosition="left"
	content="Our advisors are fluent in APM, NPM and EUEM, leveraging AI to help you achieve unparalleled visibility and optimize performance. From defining a tooling strategy to embedding new processes, our team helps you take your observability initiatives to the next level."
/>

<!-- CTA Section -->
<section class="section bg-gradient-to-br from-[#72117d] to-[#9333ea] relative overflow-hidden">
	<div
		class="absolute inset-0 opacity-10"
		style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px;"
	></div>

	<div class="container relative z-10 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to Work Together?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
			Let's discuss how FINTEC can help transform your observability strategy.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center gap-2 bg-white text-[#72117d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
		>
			Get in Touch
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M14 5l7 7m0 0l-7 7m7-7H3"
				/>
			</svg>
		</a>
	</div>
</section>
