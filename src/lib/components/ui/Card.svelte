<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'glass' | 'bordered';
		hover?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let {
		variant = 'default',
		hover = true,
		className = '',
		children,
		...restProps
	}: Props = $props();

	const base = 'rounded-xl transition-all duration-300';

	const variants: Record<string, string> = {
		default:
			'bg-[var(--bg-card)] border border-[var(--border-primary)] p-6',
		glass: 'bg-[var(--bg-primary)]/80 backdrop-blur-md border border-[var(--border-primary)] p-6',
		bordered: 'bg-transparent border-2 border-[var(--border-primary)] p-6'
	};

	const hoverClass = $derived(
		hover
			? 'hover:border-[#72117d] hover:shadow-[0_4px_30px_rgba(114,17,125,0.15)] hover:-translate-y-1'
			: ''
	);

	const classes = $derived(
		() => `${base} ${variants[variant]} ${hoverClass} ${className}`
	);
</script>

<div class={classes()} {...restProps}>
	{@render children?.()}
</div>
