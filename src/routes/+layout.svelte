<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
	import '../styles/global.css';

	let { children } = $props();

	onMount(() => {
		// Initialize theme on app load
		theme.init();
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
	<title>FINTEC - Observability as a Service</title>
	<meta name="description" content="FINTEC provides actionable insights and data-driven decision making. AI-powered monitoring for complete visibility into your network, cloud, and applications." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />

	<MobileMenu />
</div>
