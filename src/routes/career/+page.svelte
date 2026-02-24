<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import TwoColumn from '$lib/components/sections/TwoColumn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<svelte:head>
	<title>Careers - FINTEC</title>
	<meta name="description" content="Join FINTEC and build a career in IT observability and network performance monitoring." />
</svelte:head>

<!-- Hero Section -->
<Hero
	subtitle="// Career"
	title="Build Your Career with FINTEC"
	description="Join a team passionate about helping organizations achieve complete IT observability."
/>

<!-- Why Join Us -->
<TwoColumn
	label="// Why FINTEC"
	title="Grow Your Expertise in Observability"
	image="/images/career/team.jpg"
	imageAlt="FINTEC Team Collaboration"
	imagePosition="left"
	content="At FINTEC, you'll work with cutting-edge technologies in IT observability and network performance monitoring. We believe in continuous learning and provide opportunities to work with enterprise clients across diverse industries. Our collaborative environment encourages knowledge sharing and professional growth."
/>

<!-- Our Values -->
<section class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				Our Values
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				The principles that define our culture
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
			<Card hover={true}>
				<div class="text-center">
					<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl font-bold text-white">F</span>
					</div>
					<h3 class="font-bold text-[var(--text-primary)] text-sm">Focus</h3>
				</div>
			</Card>

			<Card hover={true}>
				<div class="text-center">
					<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl font-bold text-white">I</span>
					</div>
					<h3 class="font-bold text-[var(--text-primary)] text-sm">Integrity</h3>
				</div>
			</Card>

			<Card hover={true}>
				<div class="text-center">
					<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl font-bold text-white">N</span>
					</div>
					<h3 class="font-bold text-[var(--text-primary)] text-sm">Nurture</h3>
				</div>
			</Card>

			<Card hover={true}>
				<div class="text-center">
					<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#72117d] flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl font-bold text-white">T</span>
					</div>
					<h3 class="font-bold text-[var(--text-primary)] text-sm">Trust</h3>
				</div>
			</Card>

			<Card hover={true}>
				<div class="text-center">
					<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#a855f7] flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl font-bold text-white">E</span>
					</div>
					<h3 class="font-bold text-[var(--text-primary)] text-sm">Excellence</h3>
				</div>
			</Card>

			<Card hover={true}>
				<div class="text-center">
					<div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl font-bold text-white">C</span>
					</div>
					<h3 class="font-bold text-[var(--text-primary)] text-sm">Commitment</h3>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- What We Offer -->
<section class="section bg-[var(--bg-secondary)]">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				What We Offer
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				Benefits of being part of the FINTEC team
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-3">Continuous Learning</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Training and certifications in the latest observability technologies.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-3">Career Growth</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Clear career paths and opportunities for advancement.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-3">Collaborative Culture</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Work with experienced professionals who share knowledge freely.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#72117d] flex items-center justify-center mb-6">
					<svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-3">Diverse Projects</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Work with clients across various industries and technologies.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- Open Positions -->
<section class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				Join Our Team
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				We're always looking for talented individuals passionate about observability
			</p>
		</div>

		<div class="max-w-2xl mx-auto">
			<Card hover={true} class="text-center p-8">
				<svg class="w-16 h-16 text-[#72117d] mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
				<h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">
					We Want to Hear From You
				</h3>
				<p class="text-[var(--text-secondary)] mb-6">
					Even if you don't see a specific opening that matches your skills, we're always interested in connecting with talented professionals who share our passion.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 bg-gradient-to-r from-[#72117d] to-[#9333ea] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
				>
					Send Us Your Resume
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
			</Card>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-br from-[#72117d] to-[#9333ea] relative overflow-hidden">
	<div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px;"></div>

	<div class="container relative z-10 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to Take the Next Step?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
			Let's start a conversation about your future at FINTEC.
		</p>
		<a href="/contact" class="inline-flex items-center gap-2 bg-white text-[#72117d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
			Contact Us
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</a>
	</div>
</section>
