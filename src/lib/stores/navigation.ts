import { writable, derived } from 'svelte/store';

export interface NavItem {
	href: string;
	label: string;
}

export interface MobileMenuState {
	isOpen: boolean;
}

const mobileMenuState = writable<MobileMenuState>({ isOpen: false });

export const navigation = {
	navItems: [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About Us' },
		{ href: '/services', label: 'Services' },
		{ href: '/aws', label: 'AWS' },
		{ href: '/knowledge-base', label: 'Knowledge Base' },
		{ href: '/career', label: 'Career' },
		{ href: '/contact', label: 'Contact' }
	] as const satisfies readonly NavItem[],

	get isOpen() {
		return derived(mobileMenuState, ($state) => $state.isOpen);
	},

	open() {
		mobileMenuState.set({ isOpen: true });
		document.body.style.overflow = 'hidden';
	},

	close() {
		mobileMenuState.set({ isOpen: false });
		document.body.style.overflow = '';
	},

	toggle() {
		const state = { isOpen: !document.body.style.overflow };
		if (state.isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		mobileMenuState.set(state);
	}
};
