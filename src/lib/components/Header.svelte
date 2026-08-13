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
	let activeSection = $state('');

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

	// Scroll-spy: on the homepage, highlight the nav link of the section in view.
	$effect(() => {
		if (page.url.pathname !== '/') {
			activeSection = '';
			return;
		}

		const ids = navLinks
			.map((l) => l.href)
			.filter((href) => href.startsWith('/#'))
			.map((href) => href.slice(2));
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);
		if (sections.length === 0) return;

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			// A slim horizontal band ~1/3 down the viewport decides the active section.
			{ rootMargin: '-30% 0px -65% 0px' }
		);
		for (const el of sections) io.observe(el);
		return () => io.disconnect();
	});

	function isActive(href: string): boolean {
		if (href.startsWith('/#')) {
			return activeSection === href.slice(2);
		}
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

		<!-- Persistent CTA — red cell -->
		<a href="/quote" class="desktop-cta">Cenová ponuka</a>

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
				<div class="mobile-index-links">
					<a href="/quote" class="mobile-index-link mobile-index-link--cta" onclick={closeMenu}>
						Cenová ponuka →
					</a>
					<a href="/products" class="mobile-index-link" onclick={closeMenu}>Všetky produkty →</a>
					<a href="/services" class="mobile-index-link" onclick={closeMenu}>Všetky služby →</a>
				</div>
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
		/* The iron ground shows through cell gaps as the Mondrian grid lines. */
		background-color: var(--color-iron);
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
		align-items: stretch;
		justify-content: space-between;
		height: 72px;
		gap: 5px;
		padding-bottom: 5px;
	}

	/* ---- Brand — red cell ---- */
	.brand {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0 clamp(1rem, 3vw, 2rem);
		background-color: var(--color-brand-primary);
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

	/* ---- Desktop nav — white cell ---- */
	.desktop-nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 0.25rem;
		flex: 1;
		background-color: var(--color-white);
		padding: 0 1.25rem;
	}

	.nav-link {
		position: relative;
		padding: 0.45rem 0.85rem;
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-steel);
		text-decoration: none;
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
		color: var(--color-brand-primary);
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

	/* ---- Persistent CTA — red cell ---- */
	.desktop-cta {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		padding: 0 clamp(1rem, 2.5vw, 1.75rem);
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		text-decoration: none;
		white-space: nowrap;
		transition: background-color var(--transition-fast);
	}

	.desktop-cta:hover {
		background-color: var(--color-brand-hover);
	}

	/* ---- Desktop contact — white cell ---- */
	.desktop-contact {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
		background-color: var(--color-white);
		padding: 0 clamp(1rem, 2.5vw, 1.75rem);
	}

	.phone {
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--color-iron);
		text-decoration: none;
		letter-spacing: 0.04em;
		white-space: nowrap;
		transition: color var(--transition-fast);
		font-variant-numeric: tabular-nums;
	}

	.phone:hover {
		color: var(--color-brand-primary);
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
		color: var(--color-steel);
		text-decoration: none;
		transition: color var(--transition-fast);
		line-height: 1;
	}

	.social-link:hover {
		color: var(--color-brand-primary);
	}

	/* ---- Hamburger — red cell ---- */
	.hamburger {
		display: none;
		background-color: var(--color-brand-primary);
		border: none;
		color: var(--color-white);
		cursor: pointer;
		padding: 0 1.2rem;
		line-height: 1;
		transition: background-color var(--transition-fast);
		flex-shrink: 0;
	}

	.hamburger:hover {
		background-color: var(--color-brand-hover);
	}

	/* ---- Mobile menu — white cell ---- */
	.mobile-menu {
		background-color: var(--color-white);
		border-top: 5px solid var(--color-iron);
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
		color: var(--color-steel);
		text-decoration: none;
		border-left: 3px solid transparent;
		transition:
			color var(--transition-fast),
			border-color var(--transition-fast),
			background-color var(--transition-fast);
	}

	.mobile-nav-link:hover {
		color: var(--color-brand-primary);
		background-color: var(--color-chalk);
		border-left-color: var(--color-brand-hover);
	}

	.mobile-nav-link.active {
		color: var(--color-brand-primary);
		border-left-color: var(--color-brand-primary);
		background-color: rgba(192, 40, 28, 0.06);
	}

	.mobile-index-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5px;
		margin-top: 0.85rem;
	}

	.mobile-index-link {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 0.5rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-align: center;
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.mobile-index-link:hover {
		background-color: var(--color-brand-hover);
	}

	/* The quote CTA spans the full drawer width above the two index links. */
	.mobile-index-link--cta {
		grid-column: 1 / -1;
		font-size: 1.05rem;
	}

	.mobile-contact {
		border-top: 1px solid var(--border-default);
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.mobile-phone {
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-iron);
		text-decoration: none;
		letter-spacing: 0.04em;
		transition: color var(--transition-fast);
	}

	.mobile-phone:hover {
		color: var(--color-brand-primary);
	}

	.mobile-social {
		display: flex;
		gap: 1.25rem;
	}

	.mobile-social .social-link {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--color-steel);
	}

	/* ---- Dynamic collapse (JS sets .compact when content would overflow) ---- */
	.header-inner.compact .desktop-nav,
	.header-inner.compact .desktop-cta,
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
		.desktop-cta,
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
