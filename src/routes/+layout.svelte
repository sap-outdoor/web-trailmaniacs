<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const closeMobileNav = (header: Element | null) => {
			header?.classList.remove('mobile-nav-open');
			header?.querySelector<HTMLButtonElement>('.navmenu-btn')?.setAttribute('aria-expanded', 'false');
		};

		const closeAllMobileNavs = () => {
			document.querySelectorAll('header.mobile-nav-open').forEach(closeMobileNav);
		};

		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement | null;
			const button = target?.closest<HTMLButtonElement>('.navmenu-btn');

			if (button) {
				const header = button.closest('header');
				const isOpen = header?.classList.toggle('mobile-nav-open') ?? false;

				button.type = 'button';
				button.setAttribute('aria-label', isOpen ? 'Zavřít menu' : 'Otevřít menu');
				button.setAttribute('aria-expanded', String(isOpen));
				return;
			}

			const openedHeader = target?.closest('header.mobile-nav-open');
			if (openedHeader && target?.closest('nav.links a, .cta-btn')) {
				closeMobileNav(openedHeader);
				return;
			}

			if (!target?.closest('header')) {
				closeAllMobileNavs();
			}
		};

		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeAllMobileNavs();
			}
		};

		document.querySelectorAll<HTMLButtonElement>('.navmenu-btn').forEach((button) => {
			button.type = 'button';
			button.setAttribute('aria-label', 'Otevřít menu');
			button.setAttribute('aria-expanded', 'false');
		});

		document.addEventListener('click', handleClick);
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

{@render children()}
