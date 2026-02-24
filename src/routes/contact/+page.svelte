<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Card from '$lib/components/ui/Card.svelte';
</script>

<svelte:head>
	<title>Contact - FINTEC</title>
	<meta name="description" content="Get in touch with FINTEC for IT observability and network performance monitoring solutions." />
</svelte:head>

<!-- Hero Section -->
<Hero
	subtitle="// Contact Us"
	title="Let's Start a Conversation"
	description="We're here to help you achieve complete IT observability. Reach out and let's discuss your needs."
/>

<!-- Contact Section -->
<section class="section">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<h2 class="text-2xl font-bold text-[var(--text-primary)] mb-6">Send Us a Message</h2>
				<form action="/contact" method="POST" class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-[var(--text-secondary)] mb-2">
							Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72117d] focus:ring-2 focus:ring-[#72117d]/20 outline-none transition-colors"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-[var(--text-secondary)] mb-2">
							Email *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72117d] focus:ring-2 focus:ring-[#72117d]/20 outline-none transition-colors"
							placeholder="your.email@company.com"
						/>
					</div>

					<div>
						<label for="company" class="block text-sm font-medium text-[var(--text-secondary)] mb-2">
							Company
						</label>
						<input
							type="text"
							id="company"
							name="company"
							class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72117d] focus:ring-2 focus:ring-[#72117d]/20 outline-none transition-colors"
							placeholder="Your company name"
						/>
					</div>

					<div>
						<label for="subject" class="block text-sm font-medium text-[var(--text-secondary)] mb-2">
							Subject *
						</label>
						<select
							id="subject"
							name="subject"
							required
							class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72117d] focus:ring-2 focus:ring-[#72117d]/20 outline-none transition-colors"
						>
							<option value="">Select a topic</option>
							<option value="general">General Inquiry</option>
							<option value="sales">Sales / Product Information</option>
							<option value="support">Technical Support</option>
							<option value="partnership">Partnership Opportunity</option>
							<option value="career">Career Opportunity</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-[var(--text-secondary)] mb-2">
							Message *
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="5"
							class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72117d] focus:ring-2 focus:ring-[#72117d]/20 outline-none transition-colors resize-none"
							placeholder="Tell us about your needs..."
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full bg-gradient-to-r from-[#72117d] to-[#9333ea] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
					>
						Send Message
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
						</svg>
					</button>
				</form>
			</div>

			<!-- Contact Info -->
			<div class="space-y-6">
				<h2 class="text-2xl font-bold text-[var(--text-primary)] mb-6">Get in Touch</h2>

				<Card hover={true}>
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#72117d] to-[#a855f7] flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h3 class="font-bold text-[var(--text-primary)] mb-1">Email Us</h3>
							<a href="mailto:info@finther.my" class="text-[#72117d] hover:underline">
								info@finther.my
							</a>
						</div>
					</div>
				</Card>

				<Card hover={true}>
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#0891b2] flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<h3 class="font-bold text-[var(--text-primary)] mb-1">Call Us</h3>
							<a href="tel:+60312345678" class="text-[#72117d] hover:underline">
								+60 3-1234 5678
							</a>
						</div>
					</div>
				</Card>

				<Card hover={true}>
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#72117d] to-[#06b6d4] flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<h3 class="font-bold text-[var(--text-primary)] mb-1">Visit Us</h3>
							<p class="text-[var(--text-secondary)]">
								Kuala Lumpur<br />
								Malaysia
							</p>
						</div>
					</div>
				</Card>

				<Card hover={true}>
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#72117d] flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 class="font-bold text-[var(--text-primary)] mb-1">Business Hours</h3>
							<p class="text-[var(--text-secondary)]">
								Monday - Friday: 9:00 AM - 6:00 PM<br />
								Saturday - Sunday: Closed
							</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="section">
	<div class="container">
		<div class="rounded-xl overflow-hidden shadow-lg">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8990940639!2d101.6868553!3d3.1408534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362d58f73c3d%3A0x6f3c3f3f3f3f3f3f!2sKuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
				width="100%"
				height="400"
				style="border: 0;"
				allowfullscreen
				loading="lazy"
				title="FINTEC Location"
			></iframe>
		</div>
	</div>
</section>
