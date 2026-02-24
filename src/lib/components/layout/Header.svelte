<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import { navigation } from '$lib/stores/navigation';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/80 dark:bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[var(--border-primary)]'
		: 'bg-transparent'}"
>
	<div class="container">
		<nav class="flex items-center justify-between h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3">
				<img
					src="/fintec-logo.svg"
					alt="FINTEC"
					class="h-10 w-auto"
					width="120"
					height="40"
				/>
			</a>

			<!-- Desktop Navigation -->
			<ul class="hidden md:flex items-center gap-8">
				{#each navigation.navItems as item}
					<li>
						<a
							href={item.href}
							class="nav-link relative text-[var(--text-secondary)] hover:text-[#72117d] transition-colors duration-200 font-medium"
							class:text-[#72117d]={$page.url.pathname === item.href}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Right side: Theme toggle + Mobile menu button -->
			<div class="flex items-center gap-4">
				<!-- Theme Toggle -->
				<button
					aria-label="Toggle theme"
					onclick={() => theme.toggle()}
					class="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
				>
					{#if $theme === 'light'}
						<!-- Sun icon -->
						<svg
							class="w-5 h-5 text-[var(--text-secondary)]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{:else}
						<!-- Moon icon -->
						<svg
							class="w-5 h-5 text-[var(--text-secondary)]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>

				<!-- Mobile Menu Button -->
				<button
					aria-label="Toggle menu"
					class="md:hidden p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
					onclick={() => navigation.toggle()}
				>
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</nav>
	</div>
</header>

<style>
	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, #72117d 0%, #a855f7 100%);
		transition: width 0.3s ease;
	}

	.nav-link:hover::after,
	.nav-link:global([data-current='true'])::after {
		width: 100%;
	}
</style>
