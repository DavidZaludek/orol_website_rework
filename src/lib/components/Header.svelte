<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/assets/logo.png';
	import { navLinks, contact, socials } from '$lib/site';

	let menuOpen = $state(false);
	let compact = $state(false);

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

<header>
	<div class="header-inner" class:compact {@attach observeOverflow}>
		<!-- Logo + Site name -->
		<a href="/" class="brand" onclick={closeMenu}>
			<img src={logo} alt="Stavebniny Orol logo" class="logo" />
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
					<!-- Instagram icon -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
						<circle cx="12" cy="12" r="4"></circle>
						<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
					</svg>
				</a>
				<a
					href={socials.facebook}
					class="social-link"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<!-- Facebook icon -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
					</svg>
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
				<!-- X icon -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			{:else}
				<!-- Hamburger icon -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
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
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<circle cx="12" cy="12" r="4"></circle>
							<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
						</svg>
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
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
						</svg>
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
		flex-shrink: 0;
	}

	.logo {
		height: clamp(28px, 9vw, 60px);
		width: auto;
		display: block;
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
	@media (max-width: 768px) {
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
</style>
