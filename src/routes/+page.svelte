<script lang="ts">
	import baumitLogo from '$lib/assets/logos/Baumit.jpg';
	import bramacLogo from '$lib/assets/logos/Bramac.jpg';
	import brittermLogo from '$lib/assets/logos/britterm-logo-hr.png';
	import ceresitLogo from '$lib/assets/logos/Ceresit.jpg';
	import chyzbetLogo from '$lib/assets/logos/Chyzbet.png';
	import dechtochemaLogo from '$lib/assets/logos/Dechtochema.png';
	import fakroLogo from '$lib/assets/logos/Fakro.png';
	import hasoftLogo from '$lib/assets/logos/Hasoft.png';
	import heluzLogo from '$lib/assets/logos/Heluz.jpg';
	import henkelLogo from '$lib/assets/logos/henkel-logo-standalone-svg.svg';
	import isoverLogo from '$lib/assets/logos/Isover.png';
	import keramikaSoukupLogo from '$lib/assets/logos/Keramika soukup.jpg';
	import knaufLogo from '$lib/assets/logos/Knauf.png';
	import kreiselLogo from '$lib/assets/logos/Kreisel.png';
	import bauwebLogo from '$lib/assets/logos/logo.BauWebOnduline.svg';
	import polifarbeLogo from '$lib/assets/logos/polifarbe.png';
	import porfixLogo from '$lib/assets/logos/Porfix.png';
	import ravenLogo from '$lib/assets/logos/Raven.png';
	import rigipsLogo from '$lib/assets/logos/rigips-logo (1).png';
	import rotoLogo from '$lib/assets/logos/roto-logo-CZ-CS.webp';
	import sikaLogo from '$lib/assets/logos/Sika_NoClaim_pos_rgb_mobile.webp';
	import soudalLogo from '$lib/assets/logos/soudal.jpg';
	import weberLogo from '$lib/assets/logos/Weber_Logo_RGB_0.png';
	import wienerbergerLogo from '$lib/assets/logos/wienerberger_logo_horizontal.svg';
	import xellaLogo from '$lib/assets/logos/xella-log-rgb.png';

	let { data } = $props();

	let newsIndex = $state(0);
	let promoIndex = $state(0);

	$effect(() => {
		if (data.posts.length <= 1) return;
		const id = setInterval(() => {
			newsIndex = (newsIndex + 1) % data.posts.length;
		}, 6000);
		return () => clearInterval(id);
	});

	$effect(() => {
		if (data.promotions.length <= 1) return;
		const id = setInterval(() => {
			promoIndex = (promoIndex + 1) % data.promotions.length;
		}, 5500);
		return () => clearInterval(id);
	});

	function formatDate(value: string): string {
		return new Date(value).toLocaleDateString('sk-SK', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	const partners = [
		{ name: 'Baumit', logo: baumitLogo, href: 'https://www.baumit.sk' },
		{ name: 'Bauweb', logo: bauwebLogo, href: 'https://www.bauweb.sk' },
		{ name: 'Bramac', logo: bramacLogo, href: 'https://www.bramac.sk' },
		{ name: 'Britterm', logo: brittermLogo, href: 'https://www.britterm.sk' },
		{ name: 'Ceresit', logo: ceresitLogo, href: 'https://www.ceresit.sk' },
		{ name: 'Chyžbet', logo: chyzbetLogo, href: 'https://www.chyzbet.sk' },
		{ name: 'Dechtochema', logo: dechtochemaLogo, href: 'https://www.dechtochema.sk' },
		{ name: 'Fakro', logo: fakroLogo, href: 'https://www.fakro.sk' },
		{ name: 'Hasoft', logo: hasoftLogo, href: 'https://www.hasoft.sk' },
		{ name: 'Heluz', logo: heluzLogo, href: 'https://www.heluz.sk' },
		{ name: 'Henkel', logo: henkelLogo, href: 'https://www.henkel.sk' },
		{ name: 'Isover', logo: isoverLogo, href: 'https://www.isover.sk' },
		{ name: 'Keramika Soukup', logo: keramikaSoukupLogo, href: 'https://www.keramikasoukup.cz' },
		{ name: 'Knauf', logo: knaufLogo, href: 'https://www.knauf.sk' },
		{ name: 'Kreisel', logo: kreiselLogo, href: 'https://www.kreisel.sk' },
		{ name: 'Polifarbe', logo: polifarbeLogo, href: 'https://www.polifarbe.hu/' },
		{ name: 'Porfix', logo: porfixLogo, href: 'https://www.porfix.sk' },
		{ name: 'Raven', logo: ravenLogo, href: 'https://www.raven.sk' },
		{ name: 'Rigips', logo: rigipsLogo, href: 'https://www.rigips.sk' },
		{ name: 'Roto', logo: rotoLogo, href: 'https://www.roto-frank.com/cs-cz/dst' },
		{ name: 'Sika', logo: sikaLogo, href: 'https://svk.sika.com' },
		{ name: 'Soudal', logo: soudalLogo, href: 'https://www.soudal.sk' },
		{ name: 'Weber', logo: weberLogo, href: 'https://sk.weber' },
		{ name: 'Wienerberger', logo: wienerbergerLogo, href: 'https://www.wienerberger.sk' },
		{ name: 'Xella', logo: xellaLogo, href: 'https://www.xella.sk' }
	] as const;
	const partnerTrack = [...partners, ...partners];
</script>

<svelte:head>
	<title>Stavebniny Orol – stavebný materiál a služby</title>
	<meta
		name="description"
		content="Stavebniny Orol – kompletný sortiment stavebného materiálu, poradenstvo, doprava a ďalšie služby pre Vašu stavbu."
	/>
</svelte:head>

<!-- 1. Promo rotator -->
{#if data.promotions.length > 0}
	<section class="promo-rotator" aria-label="Aktuálne akcie">
		<div class="promo-stage">
			{#each data.promotions as promo, i (promo.slug)}
				<a
					href="/promotions/{promo.slug}"
					class="promo-slide"
					class:active={i === promoIndex}
					aria-hidden={i !== promoIndex ? 'true' : undefined}
					tabindex={i === promoIndex ? 0 : -1}
				>
					<img src={promo.image} alt={promo.title} class="promo-image" loading={i === 0 ? 'eager' : 'lazy'} />
					<div class="promo-overlay">
						<div class="container promo-overlay-inner">
							<span class="promo-eyebrow">Akcia</span>
							<h2 class="promo-title">{promo.title}</h2>
							{#if promo.excerpt}
								<p class="promo-excerpt">{promo.excerpt}</p>
							{/if}
							{#if promo.validUntil}
								<p class="promo-valid">Platí do <strong>{formatDate(promo.validUntil)}</strong></p>
							{/if}
							<span class="promo-cta">Zobraziť akciu →</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
		{#if data.promotions.length > 1}
			<div class="promo-dots" role="tablist" aria-label="Prepínač akcií">
				{#each data.promotions as promo, i (promo.slug)}
					<button
						type="button"
						class="promo-dot"
						class:active={i === promoIndex}
						role="tab"
						aria-selected={i === promoIndex}
						aria-label={`Akcia ${i + 1}: ${promo.title}`}
						onclick={() => (promoIndex = i)}
					></button>
				{/each}
			</div>
		{/if}
	</section>
{/if}

<!-- 1.5 Quote + Order CTAs -->
<section class="home-ctas" aria-label="Cenová ponuka a objednávka">
	<div class="container home-ctas-inner">
		<a href="/quote" class="home-cta home-cta--primary">
			<span class="home-cta-title">Cenová ponuka</span>
			<span class="home-cta-sub">Nezáväzná kalkulácia šitá na mieru Vašej stavby.</span>
		</a>
		<a href="/order" class="home-cta home-cta--secondary">
			<span class="home-cta-title">Objednávkový formulár</span>
			<span class="home-cta-sub">Objednajte materiál priamo online – pripravíme ho k odberu.</span>
		</a>
	</div>
</section>

<!-- 2. Products / Services split -->
<section class="split" aria-label="Hlavné sekcie">
	<a href="/products" class="split-tile split-tile--products">
		<div class="split-inner">
			<h2 class="split-title">Produkty</h2>
			<p class="split-text">
				Hrubá stavba, izolácie, omietky, strešné krytiny, farby, okná a ďalšie kategórie stavebného
				materiálu.
			</p>
			<span class="split-cta">
				Pozrieť produkty
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</span>
		</div>
	</a>
	<a href="/services" class="split-tile split-tile--services">
		<div class="split-inner">
			<h2 class="split-title">Služby</h2>
			<p class="split-text">
				Poradenstvo, vypracovanie cenovej ponuky, doprava materiálu, požičovňa náradia, miešanie
				farieb a kontakty na remeselníkov.
			</p>
			<span class="split-cta">
				Pozrieť služby
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="20"
					height="20"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<line x1="5" y1="12" x2="19" y2="12"></line>
					<polyline points="12 5 19 12 12 19"></polyline>
				</svg>
			</span>
		</div>
	</a>
</section>

<!-- 3. News rotator -->
{#if data.posts.length > 0}
	<section class="news-rotator" aria-label="Aktuality">
		<div class="container">
			<header class="rotator-header">
				<h2 class="rotator-heading">Aktuality</h2>
				<a href="/news" class="rotator-link">Všetky aktuality →</a>
			</header>
			<div class="rotator-stage">
				{#each data.posts as post, i (post.slug)}
					<article
						class="rotator-slide"
						class:active={i === newsIndex}
						aria-hidden={i !== newsIndex ? 'true' : undefined}
					>
						<a href="/news/{post.slug}" class="rotator-card" tabindex={i === newsIndex ? 0 : -1}>
							<img src={post.image} alt={post.title} class="rotator-image" loading="lazy" />
							<div class="rotator-body">
								<time class="rotator-date" datetime={post.date}>{formatDate(post.date)}</time>
								<h3 class="rotator-title">{post.title}</h3>
								<p class="rotator-excerpt">{post.excerpt}</p>
								<span class="rotator-cta">Čítať viac →</span>
							</div>
						</a>
					</article>
				{/each}
			</div>
			{#if data.posts.length > 1}
				<div class="rotator-dots" role="tablist" aria-label="Prepínač aktualít">
					{#each data.posts as post, i (post.slug)}
						<button
							type="button"
							class="rotator-dot"
							class:active={i === newsIndex}
							role="tab"
							aria-selected={i === newsIndex}
							aria-label={`Aktualita ${i + 1}: ${post.title}`}
							onclick={() => (newsIndex = i)}
						></button>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}

<!-- 4. Partners marquee -->
<section class="partners-marquee" aria-label="Naši partneri">
	<div class="container">
		<h2 class="partners-heading">Naši partneri</h2>
	</div>
	<div class="partners-track">
		{#each partnerTrack as partner, i (i)}
			<a
				href={partner.href}
				class="partner-item"
				target="_blank"
				rel="noopener noreferrer"
				aria-label={partner.name}
				aria-hidden={i >= partners.length ? 'true' : undefined}
				tabindex={i >= partners.length ? -1 : 0}
			>
				<img src={partner.logo} alt={partner.name} loading="lazy" />
			</a>
		{/each}
	</div>
</section>

<style>
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	/* ---- 1. Promo rotator ---- */
	.promo-rotator {
		position: relative;
		background-color: var(--color-iron);
		overflow: hidden;
	}

	.promo-stage {
		position: relative;
		width: 100%;
		aspect-ratio: 21 / 9;
		max-height: 540px;
		min-height: 340px;
	}

	.promo-slide {
		position: absolute;
		inset: 0;
		display: block;
		text-decoration: none;
		color: var(--text-on-dark);
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.7s ease,
			visibility 0s linear 0.7s;
	}

	.promo-slide.active {
		opacity: 1;
		visibility: visible;
		transition:
			opacity 0.7s ease,
			visibility 0s linear 0s;
	}

	.promo-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.promo-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.5) 35%,
			rgba(0, 0, 0, 0.15) 70%,
			rgba(0, 0, 0, 0) 100%
		);
		display: flex;
		align-items: flex-end;
	}

	.promo-overlay-inner.container {
		max-width: none;
		margin: 0;
		padding-inline: clamp(1.5rem, 5vw, 4.5rem);
	}

	.promo-overlay-inner {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		max-width: 640px;
		padding-block: 2rem 4rem;
	}

	.promo-eyebrow {
		display: inline-block;
		align-self: flex-start;
		background-color: var(--color-brand-primary);
		color: var(--text-on-dark);
		font-size: var(--font-size-xs);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		padding: 0.35rem 0.75rem;
		border-radius: var(--radius-sm);
	}

	.promo-title {
		margin: 0.25rem 0 0;
		font-size: var(--font-size-h1);
		font-weight: 800;
		line-height: 1.15;
		letter-spacing: 0.01em;
	}

	.promo-excerpt {
		margin: 0;
		font-size: var(--font-size-body);
		line-height: 1.6;
		color: var(--color-concrete);
		max-width: 52ch;
	}

	.promo-valid {
		margin: 0.25rem 0 0;
		font-size: var(--font-size-small);
		color: var(--color-concrete);
	}

	.promo-cta {
		margin-top: 0.75rem;
		font-size: var(--font-size-small);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-on-dark);
	}

	.promo-slide:hover .promo-cta {
		color: var(--color-brand-hover);
	}

	.promo-dots {
		position: absolute;
		bottom: 1.5rem;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		gap: 0.85rem;
		z-index: 2;
	}

	.promo-dot {
		width: 72px;
		height: 12px;
		border: 2px solid rgba(255, 255, 255, 0.6);
		border-radius: 999px;
		background-color: rgba(0, 0, 0, 0.35);
		cursor: pointer;
		padding: 0;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.promo-dot:hover {
		background-color: rgba(255, 255, 255, 0.85);
		border-color: var(--color-white);
		transform: scale(1.08);
	}

	.promo-dot.active {
		background-color: var(--color-brand-primary);
		border-color: var(--color-brand-primary);
	}

	.promo-dot:focus-visible {
		outline: 2px solid var(--color-white);
		outline-offset: 3px;
	}

	@media (max-width: 720px) {
		.promo-stage {
			aspect-ratio: 4 / 5;
			max-height: none;
		}

		.promo-overlay-inner {
			padding-block: 1.5rem 4.5rem;
		}

		.promo-title {
			font-size: clamp(1.5rem, 6vw, 2.2rem);
		}
	}

	/* ---- 1.5 Home CTAs ---- */
	.home-ctas {
		background-color: var(--color-chalk);
		padding: var(--space-section-y) 0;
	}

	.home-ctas-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.home-cta {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.75rem 2rem;
		border-radius: var(--radius-md);
		text-decoration: none;
		border: 1px solid transparent;
		box-shadow: var(--shadow-card);
		transition:
			transform var(--transition-fast),
			box-shadow var(--transition-fast),
			background-color var(--transition-fast);
	}

	.home-cta:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-card-hover);
	}

	.home-cta--primary {
		background-color: var(--color-brand-primary);
		color: var(--color-white);
	}

	.home-cta--primary:hover {
		background-color: var(--color-brand-hover);
	}

	.home-cta--secondary {
		background-color: var(--color-iron);
		color: var(--color-white);
	}

	.home-cta--secondary:hover {
		background-color: var(--color-brand-primary);
	}

	.home-cta-title {
		font-size: var(--font-size-h3);
		font-weight: 800;
		letter-spacing: 0.01em;
	}

	.home-cta-sub {
		font-size: var(--font-size-small);
		line-height: 1.5;
		opacity: 0.92;
	}

	@media (max-width: 720px) {
		.home-ctas-inner {
			grid-template-columns: 1fr;
		}
	}

	/* ---- 2. Products / Services split ---- */
	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.split-tile {
		position: relative;
		display: block;
		padding: 5rem 2.5rem 4rem;
		min-height: 360px;
		text-decoration: none;
		color: var(--text-on-dark);
		overflow: hidden;
		transition: background-color var(--transition-fast);
	}

	.split-tile--products {
		background-color: var(--color-brand-primary);
	}

	.split-tile--services {
		background-color: var(--color-iron);
	}

	.split-tile::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 100%);
		pointer-events: none;
		transition: opacity var(--transition-fast);
	}

	.split-tile:hover {
		background-color: var(--color-brand-hover);
	}

	.split-tile:hover::after {
		opacity: 0.6;
	}

	.split-inner {
		position: relative;
		z-index: 1;
		max-width: 480px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		height: 100%;
		justify-content: flex-start;
	}

	.split-title {
		margin: 0;
		font-size: var(--font-size-h1);
		font-weight: 800;
		letter-spacing: 0.01em;
	}

	.split-text {
		margin: 0;
		font-size: var(--font-size-body);
		line-height: 1.6;
		color: var(--color-concrete);
		max-width: 44ch;
	}

	.split-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.75rem;
		font-size: var(--font-size-small);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.split-cta svg {
		transition: transform var(--transition-fast);
	}

	.split-tile:hover .split-cta svg {
		transform: translateX(4px);
	}

	@media (max-width: 720px) {
		.split {
			grid-template-columns: 1fr;
		}

		.split-tile {
			min-height: 260px;
			padding: 3rem 1.75rem;
		}
	}

	/* ---- 3. News rotator ---- */
	.news-rotator {
		background-color: var(--color-chalk);
		padding: var(--space-section-y) 0;
	}

	.rotator-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.rotator-heading {
		margin: 0;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-iron);
	}

	.rotator-link {
		font-size: var(--font-size-small);
		font-weight: 600;
		color: var(--color-brand-primary);
		text-decoration: none;
	}

	.rotator-link:hover {
		text-decoration: underline;
		color: var(--color-brand-hover);
	}

	.rotator-stage {
		position: relative;
		min-height: 340px;
	}

	.rotator-slide {
		position: absolute;
		inset: 0;
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.6s ease,
			visibility 0s linear 0.6s;
	}

	.rotator-slide.active {
		opacity: 1;
		visibility: visible;
		transition:
			opacity 0.6s ease,
			visibility 0s linear 0s;
	}

	.rotator-card {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		background-color: var(--color-white);
		border-radius: var(--radius-lg);
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		box-shadow: var(--shadow-card);
		min-height: 340px;
		transition: box-shadow var(--transition-fast);
	}

	.rotator-card:hover {
		box-shadow: var(--shadow-card-hover);
	}

	.rotator-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.rotator-body {
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.6rem;
	}

	.rotator-date {
		font-size: var(--font-size-xs);
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.rotator-title {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-iron);
		line-height: 1.3;
	}

	.rotator-excerpt {
		margin: 0;
		font-size: var(--font-size-body);
		color: var(--text-muted);
		line-height: 1.6;
	}

	.rotator-cta {
		margin-top: 0.5rem;
		font-size: var(--font-size-small);
		font-weight: 600;
		color: var(--color-brand-primary);
	}

	.rotator-card:hover .rotator-cta {
		color: var(--color-brand-hover);
	}

	.rotator-dots {
		display: flex;
		justify-content: center;
		gap: 0.6rem;
		margin-top: 1.75rem;
	}

	.rotator-dot {
		width: 10px;
		height: 10px;
		border: none;
		border-radius: 50%;
		background-color: var(--color-mist);
		cursor: pointer;
		padding: 0;
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.rotator-dot:hover {
		background-color: var(--color-slate);
	}

	.rotator-dot.active {
		background-color: var(--color-brand-primary);
		transform: scale(1.25);
	}

	@media (max-width: 720px) {
		.rotator-card {
			grid-template-columns: 1fr;
			min-height: 0;
		}

		.rotator-image {
			aspect-ratio: 16 / 9;
			height: auto;
		}

		.rotator-body {
			padding: 1.5rem 1.5rem 2rem;
		}

		.rotator-stage {
			min-height: 460px;
		}

		.rotator-title {
			font-size: 1.25rem;
		}
	}

	/* ---- 4. Partners marquee ---- */
	.partners-marquee {
		background-color: var(--color-white);
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		overflow: hidden;
	}

	.partners-heading {
		margin: 0 0 2rem;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-iron);
		text-align: center;
	}

	.partners-track {
		display: flex;
		width: max-content;
		animation: scroll-right 50s linear infinite;
	}

	@keyframes scroll-right {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}

	.partners-marquee:hover .partners-track {
		animation-play-state: paused;
	}

	.partner-item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 2.5rem;
		padding: 0.75rem 1.5rem;
		width: 200px;
		height: 100px;
		flex-shrink: 0;
		border-radius: var(--radius-md);
		transition:
			filter var(--transition-fast),
			opacity var(--transition-fast),
			transform var(--transition-fast);
		filter: grayscale(100%);
		opacity: 0.7;
	}

	.partner-item:hover,
	.partner-item:focus-visible {
		filter: grayscale(0);
		opacity: 1;
		transform: scale(1.05);
	}

	.partner-item img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		display: block;
	}

	@media (prefers-reduced-motion: reduce) {
		.partners-track {
			animation: none;
		}

		.promo-slide,
		.rotator-slide {
			transition: none;
		}
	}
</style>
