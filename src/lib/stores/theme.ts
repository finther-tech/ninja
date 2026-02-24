import { writable, type Writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function createThemeStore(): Writable<Theme> & {
	toggle: () => void;
	set: (theme: Theme) => void;
	init: () => void;
	update: (fn: (theme: Theme) => Theme) => void;
} {
	const { subscribe, set, update } = writable<Theme>('light');

	// Initialize theme from localStorage or system preference
	function init(): void {
		if (typeof window === 'undefined') return;

		const stored = localStorage.getItem('theme') as Theme | null;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme = stored || (prefersDark ? 'dark' : 'light');

		// Apply theme to document
		document.documentElement.setAttribute('data-theme', theme);

		set(theme);
	}

	// Toggle between light and dark
	function toggle(): void {
		update((current) => {
			const newTheme: Theme = current === 'light' ? 'dark' : 'light';

			// Save to localStorage
			if (typeof window !== 'undefined') {
				localStorage.setItem('theme', newTheme);
				// Apply to document
				document.documentElement.setAttribute('data-theme', newTheme);
			}

			return newTheme;
		});
	}

	// Override set to also update document
	function setTheme(theme: Theme): void {
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', theme);
			document.documentElement.setAttribute('data-theme', theme);
		}
		set(theme);
	}

	return {
		subscribe,
		set: setTheme,
		update,
		toggle,
		init
	};
}

export const theme = createThemeStore();
