<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		class?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		className = '',
		children,
			...restProps
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72117d] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

	const variants: Record<string, string> = {
		primary:
			'bg-gradient-to-r from-[#72117d] via-[#a855f7] to-[#9333ea] text-white hover:shadow-lg hover:shadow-[#72117d]/30 hover:-translate-y-0.5',
		secondary:
			'bg-[#06b6d4] text-white hover:bg-[#0891b2] hover:shadow-lg hover:shadow-[#06b6d4]/30 hover:-translate-y-0.5',
		outline: 'border-2 border-[#72117d] text-[#72117d] hover:bg-[#72117d] hover:text-white',
		ghost: 'text-[var(--text-secondary)] hover:text-[#72117d] hover:bg-[var(--bg-secondary)]'
	};

	const sizes: Record<string, string> = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const classes = $derived(
		() => `${base} ${variants[variant]} ${sizes[size]} ${className}`
	);
</script>

{#if href}
	<a {href} class={classes()} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<button class={classes()} {...restProps}>
		{@render children?.()}
	</button>
{/if}
