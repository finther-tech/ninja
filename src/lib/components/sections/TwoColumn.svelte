<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';

	interface Props {
		label?: string;
		title?: string;
		content?: string;
		image?: string;
		imageAlt?: string;
		imagePosition?: 'left' | 'right';
		cta?: { text: string; href: string };
		reverseOnMobile?: boolean;
	}

	let {
		label = '',
		title = '',
		content = '',
		image = '',
		imageAlt = '',
		imagePosition = 'right',
		cta,
		reverseOnMobile = false
	}: Props = $props();

	const isImageLeft = $derived(() => imagePosition === 'left');
</script>

<section class="section {isImageLeft() ? '' : 'bg-[var(--bg-secondary)]'}">
	<div class="container">
		<div
			class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center {reverseOnMobile
				? 'lg:flex-row-reverse'
				: ''} {isImageLeft() ? 'lg:grid-flow-dense' : ''}"
		>
			<!-- Image Column -->
			<div class="{isImageLeft() ? 'lg:order-1' : 'lg:order-2'}">
				{#if image}
					<div class="relative">
						<img
							src={image}
							alt={imageAlt || title}
							class="w-full h-auto rounded-2xl shadow-2xl"
							loading="lazy"
						/>
						<!-- Purple glow effect -->
						<div
							class="absolute -inset-4 bg-gradient-to-r from-[#72117d]/20 to-[#06b6d4]/20 rounded-2xl -z-10 blur-xl -translate-y-2"
						></div>
					</div>
				{/if}
			</div>

			<!-- Content Column -->
			<div class="{isImageLeft() ? 'lg:order-2' : 'lg:order-1'}">
				{#if label}
					<p
						class="text-[#72117d] dark:text-[#a855f7] font-semibold text-sm uppercase tracking-wide mb-4"
					>
						{label}
					</p>
				{/if}

				{#if title}
					<h2 class="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
						{title}
					</h2>
				{/if}

				{#if content}
					<div class="prose prose-lg text-[var(--text-secondary)] mb-8">
						{@html content}
					</div>
				{/if}

				{#if cta}
					<Button href={cta.href} variant={isImageLeft() ? 'primary' : 'outline'}>
						{cta.text}
					</Button>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.prose :global(p) {
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	.prose :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
