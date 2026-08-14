<script lang="ts">
	import prodHruba from '$lib/assets/products/hruba-stavba-generated.jpg';
	import prodZmesy from '$lib/assets/products/suche-zmesy-malty-omietky-generated.jpg';
	import prodIzolacie from '$lib/assets/products/tepelne-izolacie-generated.jpg';
	import prodFarby from '$lib/assets/products/fasadne-a-interierove-farby-generated.jpg';
	import prodKrytiny from '$lib/assets/products/stresne-krytiny-generated.jpg';
	import prodHydroizolacia from '$lib/assets/products/hydroizolacia-generated.jpg';
	import prodChemia from '$lib/assets/products/stavebna-chemia-generated.jpg';
	import prodDlazby from '$lib/assets/products/dlazby-betonove-tvarnice-generated.jpg';
	import prodOcel from '$lib/assets/products/betonarska-ocel-generated.jpg';
	import prodOkna from '$lib/assets/products/okna-a-dvere-generated.jpg';
	import prodSanita from '$lib/assets/products/kanalizacia-voda-sanita-generated.jpg';
	import prodNaradie from '$lib/assets/products/naradie-a-doplnky-generated.jpg';

	import { products } from '$lib/site';
	import { partners } from '$lib/partners';
	import { categoryIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const photos: Record<string, string> = {
		'/products/hruba-stavba': prodHruba,
		'/products/suche-zmesy-malty-omietky': prodZmesy,
		'/products/tepelne-izolacie': prodIzolacie,
		'/products/fasadne-a-interierove-farby': prodFarby,
		'/products/stresne-krytiny': prodKrytiny,
		'/products/hydroizolacia': prodHydroizolacia,
		'/products/stavebna-chemia': prodChemia,
		'/products/dlazby-betonove-tvarnice': prodDlazby,
		'/products/betonarska-ocel': prodOcel,
		'/products/okna-a-dvere': prodOkna,
		'/products/kanalizacia-voda-sanita': prodSanita,
		'/products/naradie-a-doplnky': prodNaradie
	};

	const partnerByName = new Map(partners.map((p) => [p.name, p]));
	const supplierLogos: Record<string, { name: string; logo: string; light?: boolean }[]> =
		Object.fromEntries(
			products.map((p) => [
				p.href,
				p.suppliers
					.map((name: string) => partnerByName.get(name))
					.filter((s) => s !== undefined)
					.map((s) => ({ name: s.name, logo: s.logo, light: s.light }))
			])
		);

	const accentCycle = ['yellow', 'blue', 'red'] as const;
</script>

<svelte:head>
	<title>Produkty – Stavebniny Orol</title>
	<meta
		name="description"
		content="Kompletný sortiment stavebného materiálu pre rodinné domy, rekonštrukcie aj väčšie stavby – 12 kategórií od overených dodávateľov."
	/>
</svelte:head>

<section class="section" aria-label="Produkty">
	<div class="flow">
		<div class="flow-row flow-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Sortiment</span>
				<h1 class="section-title">Produkty</h1>
				<p class="head-note">
					Kompletný sortiment stavebného materiálu pre rodinné domy, rekonštrukcie aj väčšie stavby.
					Pozrite si jednotlivé kategórie a overených dodávateľov, s ktorými spolupracujeme.
				</p>
			</header>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		{#each products as product, i (product.href)}
			<div class="flow-row" class:flow-row--reverse={i % 2 === 1}>
				{#if photos[product.href]}
					<div class="flow-photo" data-reveal {@attach reveal()}>
						<img src={photos[product.href]} alt="" loading={i < 2 ? undefined : 'lazy'} />
					</div>
				{:else}
					<div class="flow-photo flow-photo--mark" data-reveal {@attach reveal()}>
						<svg viewBox="0 0 24 24" aria-hidden="true">
							{#each categoryIcons[product.href] ?? [] as d (d)}
								<path {d} />
							{/each}
						</svg>
					</div>
				{/if}
				<div class="flow-body" data-reveal {@attach reveal(100)}>
					<svg class="flow-icon" viewBox="0 0 24 24" aria-hidden="true">
						{#each categoryIcons[product.href] ?? [] as d (d)}
							<path {d} />
						{/each}
					</svg>
					<h2 class="flow-title">{product.title}</h2>
					<p class="flow-desc">{product.description}</p>
					{#if supplierLogos[product.href].length > 0}
						<div class="flow-brands" aria-hidden="true">
							{#each supplierLogos[product.href] as s (s.name)}
								<img src={s.logo} alt="" class:logo-chip={s.light} loading="lazy" />
							{/each}
						</div>
						<span class="visually-hidden">Značky: {product.suppliers.join(', ')}</span>
					{/if}
					<a href={product.href} class="flow-link">Zistiť viac →</a>
				</div>
				<div class="acc acc--{accentCycle[i % accentCycle.length]}" aria-hidden="true"></div>
			</div>
		{/each}
	</div>
</section>

<style>
	.section {
		padding: 0 0 var(--space-section-y-end);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: var(--color-brand-primary);
	}

	.eyebrow::before {
		content: '';
		width: 24px;
		height: 3px;
		background-color: var(--color-brand-primary);
	}

	.section-title {
		margin: 0.35rem 0 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-lg);
		font-weight: 700;
		line-height: 1.02;
		text-transform: uppercase;
		letter-spacing: 0.015em;
		color: var(--color-iron);
	}

	.head-cell {
		flex: 4 1 0;
		min-width: 0;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	.head-note {
		margin: 0.6rem 0 0;
		font-size: var(--font-size-small);
		color: var(--text-muted);
		max-width: 60ch;
		line-height: 1.55;
	}

	/* ===== Scroll reveal ===== */
	/* Hidden only while the reveal script is armed (see app.html) — a
	   blocked bundle can never leave content permanently invisible. */
	:global(html[data-reveal-ready]) [data-reveal] {
		opacity: 0;
		transform: translateY(18px);
		transition:
			opacity var(--transition-reveal),
			transform var(--transition-reveal);
		transition-delay: var(--reveal-delay, 0ms);
	}

	:global(html[data-reveal-ready]) [data-reveal]:global(.is-revealed) {
		opacity: 1;
		transform: none;
	}

	/* ===== Flow canvas ===== */
	.flow {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.flow-row {
		display: flex;
		gap: 5px;
	}

	.flow-row--reverse {
		flex-direction: row-reverse;
	}

	.flow-photo {
		flex: 5 1 0;
		min-width: 0;
		position: relative;
		overflow: hidden;
		min-height: 280px;
		background-color: var(--color-white);
	}

	.flow-photo img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: grayscale(100%) contrast(1.08) brightness(0.97);
	}

	.flow-photo::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, rgba(192, 40, 28, 0.24) 0%, rgba(30, 32, 34, 0.35) 100%);
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	/* Photo-less categories: the pictogram as a large watermark cell */
	.flow-photo--mark {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-chalk);
	}

	.flow-photo--mark::after {
		display: none;
	}

	.flow-photo--mark svg {
		width: 140px;
		height: 140px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 0.8;
		stroke-linecap: round;
		stroke-linejoin: round;
		opacity: 0.55;
	}

	.flow-body {
		flex: 6 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.8rem;
		padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3.5rem);
		background-color: var(--color-white);
	}

	.flow-icon {
		width: 34px;
		height: 34px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 1.7;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.flow-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
	}

	.flow-desc {
		margin: 0;
		max-width: 58ch;
		font-size: 1rem;
		line-height: 1.65;
		color: var(--text-muted);
	}

	.flow-brands {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem 1.1rem;
		margin-top: 0.25rem;
	}

	.flow-brands img {
		height: 22px;
		max-width: 96px;
		object-fit: contain;
	}

	.flow-link {
		font-size: var(--font-size-small);
		font-weight: 700;
		color: var(--color-brand-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color var(--transition-fast);
	}

	.flow-link:hover {
		color: var(--color-brand-hover);
	}

	/* Accent cells */
	.acc {
		flex: 0 0 90px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	.acc--blue {
		background-color: var(--color-accent-blue);
	}

	.acc--red {
		background-color: var(--color-brand-primary);
	}

	/* ===== Mobile: bands stack ===== */
	@media (max-width: 800px) {
		.flow {
			gap: 4px;
			padding: 4px;
		}

		.flow-row,
		.flow-row--reverse {
			flex-direction: column;
			gap: 4px;
		}

		.flow-row--head {
			flex-direction: column;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.flow-photo {
			min-height: 180px;
		}

		.flow-photo--mark {
			min-height: 120px;
		}

		.flow-photo--mark svg {
			width: 90px;
			height: 90px;
		}

		.flow-body {
			padding: 1.4rem 1.2rem 1.6rem;
		}

		.acc {
			flex: none;
			min-height: 22px;
		}
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
