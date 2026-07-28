<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/orol_loga/orol_logo_all_white_with_text.svg';
	import logoMark from '$lib/assets/orol_loga/orol_all_white.svg';
	import { navLinks, contact, socials } from '$lib/site';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';
	import MenuIcon from './icons/MenuIcon.svelte';
	import CloseIcon from './icons/CloseIcon.svelte';

	let menuOpen = $state(false);
	let compact = $state(false);
	let hidden = $state(false);

	$effect(() => {
		let lastY = window.scrollY;

		const onScroll = () => {
			const y = window.scrollY;
			// Always show near the very top; keep visible while the mobile menu is open.
			if (y < 80 || menuOpen) {
				hidden = false;
			} else if (y > lastY) {
				hidden = true; // scrolling down → hide
			} else if (y < lastY) {
				hidden = false; // scrolling up → show
			}
			lastY = y;
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function isActive(href: string): boolean {
		if (href === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(href);
	}

	function closeMenu() {
		menuOpen = false;
	}

	function observeOverflow(el: HTMLElement) {
		let naturalWidth = 0;
		let isCompact = false;

		const measure = () => {
			if (!isCompact) {
				naturalWidth = el.scrollWidth;
			}
			if (naturalWidth > 0) {
				const shouldCompact = el.clientWidth < naturalWidth;
				if (shouldCompact !== isCompact) {
					isCompact = shouldCompact;
					compact = shouldCompact;
				}
			}
		};

		measure();
		document.fonts?.ready.then(measure);

		const ro = new ResizeObserver(measure);
		ro.observe(el);
		return () => ro.disconnect();
	}
</script>

<header class:hidden>
	<div class="header-inner" class:compact {@attach observeOverflow}>
		<!-- Logo + Site name -->
		<a href="/" class="brand" onclick={closeMenu}>
			<img src={logo} alt="Stavebniny Orol logo" class="logo logo-full" />
			<img src={logoMark} alt="" aria-hidden="true" class="logo logo-mark" />
		</a>

		<!-- Desktop navigation -->
		<nav class="desktop-nav" aria-label="Hlavná navigácia">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="nav-link"
					class:active={isActive(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Desktop contact + social -->
		<div class="desktop-contact">
			<a href={contact.phoneHref} class="phone">{contact.phone}</a>
			<div class="social-links">
				<a
					href={socials.instagram}
					class="social-link"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<InstagramIcon size={22} />
				</a>
				<a
					href={socials.facebook}
					class="social-link"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<FacebookIcon size={22} />
				</a>
			</div>
		</div>

		<!-- Hamburger button (mobile) -->
		<button
			class="hamburger"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
		>
			{#if menuOpen}
				<CloseIcon />
			{:else}
				<MenuIcon />
			{/if}
		</button>
	</div>

	<!-- Mobile drawer -->
	{#if menuOpen}
		<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobilné menu">
			<nav aria-label="Mobilná navigácia">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="mobile-nav-link"
						class:active={isActive(link.href)}
						aria-current={isActive(link.href) ? 'page' : undefined}
						onclick={closeMenu}
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="mobile-contact">
				<a href={contact.phoneHref} class="mobile-phone">{contact.phone}</a>
				<div class="mobile-social">
					<a
						href={socials.instagram}
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						onclick={closeMenu}
					>
						<InstagramIcon size={24} />
						Instagram
					</a>
					<a
						href={socials.facebook}
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						onclick={closeMenu}
					>
						<FacebookIcon size={24} />
						Facebook
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: var(--z-header);
		background-color: var(--color-brand-dark);
		color: var(--text-on-dark);
		/* Never let header content push the page wider than the viewport
		   (e.g. before the overflow-observer switches to the hamburger). */
		overflow-x: hidden;
		/* Hide on scroll-down, reveal on scroll-up. */
		transition: transform 0.3s ease;
	}

	header.hidden {
		transform: translateY(-100%);
	}

	@media (prefers-reduced-motion: reduce) {
		header {
			transition: none;
		}
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--container-wide);
		margin: 0 auto;
		padding: 0 var(--container-px);
		height: 80px;
		gap: 1.5rem;
	}

	/* ---- Brand ---- */
	.brand {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		text-decoration: none;
		/* Allowed to shrink so the logo can never push the hamburger off-screen. */
		min-width: 0;
		flex: 0 1 auto;
		overflow: hidden;
	}

	.logo {
		/* ============================================================
		   HEADER LOGO SCALING — adjust this value to resize the logo.

		   Responsive order as the header narrows:
		     1. logo shrinks 40px → 24px (reaches its floor around 750px)
		     2. desktop nav collapses into the hamburger (~768px / on overflow)
		     3. logo swaps to the icon-only mark (below 420px)
		   ============================================================ */
		height: clamp(24px, 3.2vw, 40px);
		width: auto;
		display: block;
		/* Never wider than the space the flex row leaves for the brand. */
		max-width: 100%;
		object-fit: contain;
		object-position: left center;
	}

	/* Narrow viewports show the icon-only mark instead of the logo with text. */
	.logo-mark {
		display: none;
	}

	/* ---- Desktop nav ---- */
	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-left: auto;
	}

	.nav-link {
		position: relative;
		padding: 0.45rem 0.85rem;
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--text-on-dark);
		text-decoration: none;
		border-radius: 4px;
		transition: color var(--transition-fast);
		white-space: nowrap;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0.85rem;
		right: 0.85rem;
		height: 2px;
		background-color: var(--color-brand-primary);
		border-radius: 2px;
		transform: scaleX(0);
		transition: transform 0.18s ease;
	}

	.nav-link:hover {
		color: var(--color-brand-hover);
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	.nav-link.active {
		color: var(--color-brand-primary);
	}

	.nav-link.active::after {
		transform: scaleX(1);
	}

	/* ---- Desktop contact ---- */
	.desktop-contact {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	.phone {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-on-dark);
		text-decoration: none;
		letter-spacing: 0.02em;
		white-space: nowrap;
		transition: color var(--transition-fast);
	}

	.phone:hover {
		color: var(--color-brand-hover);
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
		line-height: 1;
	}

	.social-link:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Hamburger ---- */
	.hamburger {
		display: none;
		background: none;
		border: none;
		color: var(--text-on-dark);
		cursor: pointer;
		padding: 0.35rem;
		border-radius: 4px;
		line-height: 1;
		transition: color var(--transition-fast);
		flex-shrink: 0;
	}

	.hamburger:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Mobile menu ---- */
	.mobile-menu {
		background-color: var(--color-steel);
		border-top: 1px solid rgba(255, 255, 255, 0.07);
		padding: 1rem 1.5rem 1.5rem;
	}

	.mobile-menu nav {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		margin-bottom: 1.25rem;
	}

	.mobile-nav-link {
		display: block;
		padding: 0.65rem 0.75rem;
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-on-dark);
		text-decoration: none;
		border-radius: 4px;
		border-left: 3px solid transparent;
		transition:
			color var(--transition-fast),
			border-color var(--transition-fast),
			background-color var(--transition-fast);
	}

	.mobile-nav-link:hover {
		color: var(--color-brand-hover);
		background-color: rgba(255, 255, 255, 0.05);
		border-left-color: var(--color-brand-hover);
	}

	.mobile-nav-link.active {
		color: var(--color-brand-primary);
		border-left-color: var(--color-brand-primary);
		background-color: rgba(192, 40, 28, 0.1);
	}

	.mobile-contact {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.mobile-phone {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-on-dark);
		text-decoration: none;
		letter-spacing: 0.02em;
		transition: color var(--transition-fast);
	}

	.mobile-phone:hover {
		color: var(--color-brand-hover);
	}

	.mobile-social {
		display: flex;
		gap: 1.25rem;
	}

	.mobile-social .social-link {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--color-concrete);
	}

	/* ---- Dynamic collapse (JS sets .compact when content would overflow) ---- */
	.header-inner.compact .desktop-nav,
	.header-inner.compact .desktop-contact {
		display: none;
	}

	.header-inner.compact .hamburger {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* No-JS / very narrow fallback */
	@media (max-width: 1280px) {
		.desktop-nav,
		.desktop-contact {
			display: none;
		}

		.hamburger {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	/* ---- Logo swap — independent of the nav collapse above ---- */
	@media (max-width: 420px) {
		.header-inner {
			gap: 0.75rem;
		}

		.logo-full {
			display: none;
		}

		.logo-mark {
			display: block;
		}
	}
</style>
