<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		description?: string;
		primaryCta?: { text: string; href: string };
		secondaryCta?: { text: string; href: string };
		background?: 'gradient' | 'image' | 'solid';
		children?: Snippet;
	}

	let {
		subtitle = '',
		description = '',
		primaryCta,
		secondaryCta,
		background = 'gradient',
		children
	}: Props = $props();
</script>

<section
	class="relative min-h-screen flex items-center justify-center overflow-hidden {background ===
		'gradient'
		? 'bg-[var(--bg-primary)]'
		: ''}"
>
	<!-- Animated gradient mesh background -->
	{#if background === 'gradient'}
		<div
			class="absolute inset-0 opacity-50 animate-mesh pointer-events-none"
			style="background: radial-gradient(ellipse at 20% 20%, rgba(114, 17, 125, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);"
		></div>
		<!-- Grid pattern overlay -->
		<div
			class="absolute inset-0 pointer-events-none opacity-30"
			style="background-image: linear-gradient(rgba(114, 17, 125, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(114, 17, 125, 0.03) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);"
		></div>
	{/if}

	<!-- Content -->
	<div class="relative z-10 container text-center">
		{#if subtitle}
			<p class="text-[#72117d] dark:text-[#a855f7] font-semibold text-sm md:text-base tracking-wide uppercase mb-4">
				{subtitle}
			</p>
		{/if}

		{#if children}
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
				<span class="text-gradient">{@render children()}</span>
			</h1>
		{/if}

		{#if description}
			<p class="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
				{description}
			</p>
		{/if}

		<!-- CTAs -->
		{#if primaryCta || secondaryCta}
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				{#if primaryCta}
					<Button href={primaryCta.href} size="lg">
						{primaryCta.text}
						<svg
							class="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</Button>
				{/if}
				{#if secondaryCta}
					<Button href={secondaryCta.href} variant="outline" size="lg">
						{secondaryCta.text}
					</Button>
				{/if}
			</div>
		{/if}
	</div>
</section>

<style>
	@keyframes mesh {
		0%, 100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(2%, 2%) scale(1.02);
		}
		50% {
			transform: translate(-1%, 3%) scale(0.98);
		}
		75% {
			transform: translate(3%, -2%) scale(1.01);
		}
	}

	.animate-mesh {
		animation: mesh 20s ease-in-out infinite;
	}
</style>
