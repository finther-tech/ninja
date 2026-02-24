<script lang="ts">
	import { navigation } from '$lib/stores/navigation';
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
	<div class="container py-12">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- Company Info -->
			<div class="md:col-span-1">
				<img
					src="/fintec-logo.svg"
					alt="FINTEC"
					class="h-8 w-auto mb-4 brightness-0 dark:brightness-100"
				/>
				<p class="text-[var(--text-secondary)] text-sm">
					Observability as a Service. Transform your IT infrastructure with actionable insights
					and AI-powered monitoring.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="font-semibold text-[var(--text-primary)] mb-4">Quick Links</h3>
				<ul class="space-y-2">
					{#each navigation.navItems.slice(0, 4) as item}
						<li>
							<a
								href={item.href}
								class="text-[var(--text-secondary)] hover:text-[#72117d] transition-colors text-sm"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- More Links -->
			<div>
				<h3 class="font-semibold text-[var(--text-primary)] mb-4">Resources</h3>
				<ul class="space-y-2">
					{#each navigation.navItems.slice(4) as item}
						<li>
							<a
								href={item.href}
								class="text-[var(--text-secondary)] hover:text-[#72117d] transition-colors text-sm"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="font-semibold text-[var(--text-primary)] mb-4">Contact</h3>
				<address class="not-italic text-[var(--text-secondary)] text-sm space-y-2">
					<p>Level 6, Ho Hup Tower</p>
					<p>No. 1, Persiaran Jalil 1</p>
					<p>57000 Kuala Lumpur, Malaysia</p>
					<a href="mailto:info@finther.my" class="hover:text-[#72117d] transition-colors">
						info@finther.my
					</a>
				</address>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="mt-12 pt-8 border-t border-[var(--border-primary)] flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-[var(--text-tertiary)] text-sm">
				© {currentYear} FINTEC. All rights reserved.
			</p>
			<div class="flex items-center gap-6 text-sm">
				<a
					href="/privacy"
					class="text-[var(--text-secondary)] hover:text-[#72117d] transition-colors"
				>
					Privacy Policy
				</a>
				<a
					href="/terms"
					class="text-[var(--text-secondary)] hover:text-[#72117d] transition-colors"
				>
					Terms of Service
				</a>
			</div>
		</div>
	</div>
</footer>
