<script lang="ts">
	import { navigation } from '$lib/stores/navigation';
	import { theme } from '$lib/stores/theme';
	import { navigation as nav } from '$lib/stores/navigation';
</script>

{#if nav.isOpen}
	<div
		class="fixed inset-0 z-50 bg-[var(--bg-primary)] md:hidden"
		role="dialog"
		aria-modal="true"
		onclick={() => navigation.close()}
	>
		<!-- Content -->
		<div class="p-6" onclick={(e) => e.stopPropagation()}>
			<!-- Header -->
			<div class="flex items-center justify-between mb-8">
				<img src="/fintec-logo.svg" alt="FINTEC" class="h-8 w-auto" />
				<button
					aria-label="Close menu"
					onclick={() => navigation.close()}
					class="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
				>
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Navigation Links -->
			<nav>
				<ul class="space-y-4">
					{#each navigation.navItems as item}
						<li>
							<a
								href={item.href}
								onclick={() => navigation.close()}
								class="block py-3 text-lg font-medium text-[var(--text-primary)] hover:text-[#72117d] transition-colors"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Theme Toggle -->
			<div class="pt-6 border-t border-[var(--border-primary)] mt-6">
				<button
					onclick={() => {
						theme.toggle();
					}}
					class="flex items-center gap-3 py-3 text-lg font-medium text-[var(--text-primary)]"
				>
					{#if $theme === 'light'}
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
						Switch to Dark Mode
					{:else}
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
						Switch to Light Mode
					{/if}
				</button>
			</div>
		</div>
	</div>
{/if}
