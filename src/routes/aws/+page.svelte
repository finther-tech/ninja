<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import TwoColumn from '$lib/components/sections/TwoColumn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<svelte:head>
	<title>AWS Solutions - FINTEC</title>
	<meta name="description" content="FINTEC provides AWS observability and monitoring solutions for cloud infrastructure." />
</svelte:head>

<!-- Hero Section -->
<Hero
	subtitle="// AWS"
	title="Cloud Observability at Scale"
	description="Monitor and optimize your AWS infrastructure with comprehensive observability solutions."
/>

<!-- AWS Overview -->
<TwoColumn
	label="// AWS Monitoring"
	title="Complete Visibility into Your Cloud Infrastructure"
	image="/images/aws/cloud-monitoring.jpg"
	imageAlt="AWS Cloud Infrastructure"
	imagePosition="left"
	content="AWS provides powerful cloud services, but achieving complete visibility requires the right tools and expertise. FINTEC helps organizations implement robust monitoring strategies across their entire AWS ecosystem, from EC2 and Lambda to RDS and beyond. Our solutions ensure you can proactively identify and resolve issues before they impact your users."
/>

<!-- Use Cases -->
<section class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
				AWS Use Cases
			</h2>
			<p class="text-[var(--text-secondary)] max-w-2xl mx-auto">
				Common challenges we help solve
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#ffb84d] flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-2">EC2 Monitoring</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Monitor compute instances with detailed metrics on CPU, memory, disk I/O, and network performance.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#ffb84d] flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-2">Lambda Observability</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Track serverless function performance, invocations, errors, and cold starts in real-time.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#ffb84d] flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-2">RDS Performance</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Monitor database connections, query performance, and storage metrics for optimal performance.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#ffb84d] flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-2">API Gateway</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Track API calls, latency, error rates, and integration performance across your APIs.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#ffb84d] flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-2">S3 Monitoring</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Monitor storage usage, request metrics, and data transfer for your object storage.
				</p>
			</Card>

			<Card hover={true}>
				<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff9900] to-[#ffb84d] flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-lg font-bold text-[var(--text-primary)] mb-2">Security Monitoring</h3>
				<p class="text-[var(--text-secondary)] text-sm">
					Detect anomalies, security threats, and compliance issues across your AWS environment.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- Benefits -->
<TwoColumn
	label="// Why Choose Us"
	title="Partner with FINTEC for AWS Observability"
	image="/images/aws/partner.jpg"
	imageAlt="FINTEC AWS Partnership"
	imagePosition="right"
	content="With years of experience helping organizations implement AWS monitoring solutions, our team understands the unique challenges of cloud observability. We provide end-to-end support from assessment and design to implementation and ongoing optimization, ensuring you get maximum value from your AWS investment."
/>

<!-- CTA Section -->
<section class="section bg-gradient-to-br from-[#72117d] to-[#9333ea] relative overflow-hidden">
	<div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 40px 40px;"></div>

	<div class="container relative z-10 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Optimize Your AWS Monitoring
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
			Let's discuss how we can help you achieve complete visibility into your AWS infrastructure.
		</p>
		<a href="/contact" class="inline-flex items-center gap-2 bg-white text-[#72117d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
			Get Started
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
			</svg>
		</a>
	</div>
</section>
