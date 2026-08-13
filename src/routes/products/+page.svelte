<script lang="ts">
	import { products } from '$lib/site';
	import { partners } from '$lib/partners';
	import { categoryIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	// Rows of four — desktop rows flex-expand the hovered tile; below 700px
	// they flatten into a vertical list.
	const bentoRows = [products.slice(0, 4), products.slice(4, 8), products.slice(8, 12)];

	const partnerLogoByName = new Map<string, string>(partners.map((p) => [p.name, p.logo]));
	const supplierLogos: Record<string, { name: string; logo: string }[]> = Object.fromEntries(
		products.map((p) => [
			p.href,
			p.suppliers
				.map((name: string) => ({ name, logo: partnerLogoByName.get(name) }))
				.filter((s): s is { name: string; logo: string } => s.logo !== undefined)
		])
	);
</script>

<svelte:head>
	<title>Produkty – Stavebniny Orol</title>
	<meta
		name="description"
		content="Kompletný sortiment stavebného materiálu pre rodinné domy, rekonštrukcie aj väčšie stavby – 12 kategórií od overených dodávateľov."
	/>
</svelte:head>

<section class="section" aria-label="Produkty">
	<div class="bento">
		<div class="bento-row bento-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Sortiment</span>
				<h1 class="section-title">Produkty</h1>
				<p class="head-note">
					Kompletný sortiment stavebného materiálu pre rodinné domy, rekonštrukcie aj väčšie stavby.
					Pozrite si jednotlivé kategórie a overených dodávateľov, s ktorými spolupracujeme.
				</p>
			</header>
			<a href="/quote" class="head-link-cell">Cenová ponuka →</a>
			<div class="head-acc head-acc--yellow" aria-hidden="true"></div>
		</div>
		{#each bentoRows as row, r (r)}
			<div class="bento-row">
				{#each row as product, c (product.href)}
					{@const i = r * 4 + c}
					<a href={product.href} class="tile" data-reveal {@attach reveal(Math.min(i * 45, 360))}>
						{#if categoryIcons[product.href]}
							<svg class="tile-icon" viewBox="0 0 24 24" aria-hidden="true">
								{#each categoryIcons[product.href] as d (d)}
									<path {d} />
								{/each}
							</svg>
							<svg class="tile-watermark" viewBox="0 0 24 24" aria-hidden="true">
								{#each categoryIcons[product.href] as d (d)}
									<path {d} />
								{/each}
							</svg>
						{/if}
						<span class="tile-label">{product.title}</span>
						<span class="tile-desc">{product.description}</span>
						{#if supplierLogos[product.href].length > 0}
							{@const logos = supplierLogos[product.href]}
							<span
								class="tile-logo-slot"
								aria-hidden="true"
								style="--marquee-t: {Math.max(logos.length * 3, 8)}s"
							>
								<span class="tile-logo-track">
									{#each [...logos, ...logos] as s, li (li)}
										<img src={s.logo} alt="" class="tile-logo-item" loading="lazy" />
									{/each}
								</span>
							</span>
							<span class="tile-logos-all" aria-hidden="true">
								{#each logos as s (s.name)}
									<img src={s.logo} alt="" class="tile-logo-mini" loading="lazy" />
								{/each}
							</span>
							<span class="visually-hidden">Značky: {product.suppliers.join(', ')}</span>
						{/if}
						<svg class="tile-arrow" viewBox="0 0 24 24" aria-hidden="true">
							<line x1="5" y1="12" x2="19" y2="12" />
							<polyline points="12 5 19 12 12 19" />
						</svg>
					</a>
				{/each}
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

	.head-link-cell {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		text-align: center;
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.head-link-cell:hover {
		background-color: var(--color-brand-hover);
	}

	.head-acc {
		flex: 0 0 110px;
	}

	.head-acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	/* ===== Scroll reveal ===== */
	@media (scripting: enabled) {
		[data-reveal] {
			opacity: 0;
			transform: translateY(18px);
			transition:
				opacity var(--transition-reveal),
				transform var(--transition-reveal);
			transition-delay: var(--reveal-delay, 0ms);
		}

		[data-reveal]:global(.is-revealed) {
			opacity: 1;
			transform: none;
		}
	}

	/* ===== Bento composition ===== */
	.bento {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.bento-row {
		display: flex;
		gap: 5px;
	}

	.tile {
		position: relative;
		flex: 1 1 0;
		min-width: 0;
		height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 3.25rem 1.2rem 1.1rem;
		background-color: var(--color-white);
		text-decoration: none;
		overflow: hidden;
		transition:
			flex-grow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			background-color var(--transition-fast),
			opacity var(--transition-reveal) var(--reveal-delay, 0ms),
			transform var(--transition-reveal) var(--reveal-delay, 0ms);
	}

	.tile:hover {
		flex-grow: 3.2;
		background-color: var(--color-chalk);
	}

	.tile-desc {
		position: relative;
		z-index: 1;
		margin-top: 0.35rem;
		padding-right: 2rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: var(--text-muted);
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		transition:
			max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.3s ease 0.12s;
	}

	.tile:hover .tile-desc {
		max-height: 3.2em;
		opacity: 1;
	}

	.tile-label {
		position: relative;
		z-index: 1;
		font-family: var(--font-display);
		font-size: 1.3rem;
		font-weight: 600;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
		padding-right: 2rem;
	}

	.tile-logo-slot {
		position: relative;
		z-index: 1;
		margin-top: 0.5rem;
		height: 22px;
		width: calc(100% - 2.25rem);
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
	}

	.tile-logo-track {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		width: max-content;
		height: 100%;
		animation: scroll-right var(--marquee-t, 18s) linear infinite;
	}

	@keyframes scroll-right {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}

	.tile-logo-item {
		height: 18px;
		max-width: 84px;
		object-fit: contain;
		filter: grayscale(100%) contrast(1.15);
		opacity: 0.7;
	}

	.tile:hover .tile-logo-slot {
		display: none;
	}

	.tile-logos-all {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem 0.9rem;
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition:
			max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.3s ease 0.12s;
	}

	.tile:hover .tile-logos-all {
		margin-top: 0.6rem;
		max-height: 6em;
		opacity: 1;
	}

	.tile-logo-mini {
		height: 22px;
		max-width: 96px;
		object-fit: contain;
	}

	.tile-arrow {
		position: absolute;
		right: 1rem;
		bottom: 1.1rem;
		z-index: 1;
		width: 20px;
		height: 20px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 2.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: transform var(--transition-fast);
	}

	.tile:hover .tile-arrow {
		transform: translateX(4px);
	}

	.tile-icon {
		position: absolute;
		top: 1rem;
		left: 1.15rem;
		z-index: 1;
		width: 26px;
		height: 26px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 1.7;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.tile-watermark {
		position: absolute;
		right: -16px;
		bottom: -18px;
		width: 120px;
		height: 120px;
		fill: none;
		stroke: var(--color-mist);
		stroke-width: 0.6;
		stroke-linecap: round;
		stroke-linejoin: round;
		opacity: 0.9;
		pointer-events: none;
		transition: stroke var(--transition-fast);
	}

	.tile:hover .tile-watermark {
		stroke: color-mix(in srgb, var(--color-brand-primary) 30%, var(--color-white));
	}

	/* ===== Mobile: vertical list rows ===== */
	@media (max-width: 700px) {
		.bento {
			gap: 4px;
			padding: 4px;
		}

		.bento-row {
			display: contents;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.head-link-cell {
			padding: 0.9rem;
		}

		.head-acc {
			flex: none;
			min-height: 24px;
		}

		.tile {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 0.8rem;
			height: auto;
			min-height: 58px;
			padding: 0.75rem 0.9rem;
		}

		.tile:hover {
			flex-grow: 1;
		}

		.tile-icon {
			position: static;
			width: 22px;
			height: 22px;
			flex-shrink: 0;
		}

		.tile-watermark,
		.tile-desc,
		.tile-logos-all {
			display: none;
		}

		.tile-label {
			flex: 1;
			padding-right: 0;
			font-size: 1.05rem;
		}

		.tile:hover .tile-logo-slot {
			display: block;
		}

		.tile-logo-slot {
			margin: 0;
			height: 16px;
			width: 76px;
			flex-shrink: 0;
		}

		.tile-logo-item {
			height: 14px;
			max-width: 64px;
		}

		.tile-arrow {
			position: static;
			width: 18px;
			height: 18px;
			flex-shrink: 0;
		}
	}

	@media (max-width: 360px) {
		.tile-logo-slot {
			display: none;
		}
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.tile,
		.tile-desc {
			transition: none;
		}

		.tile-logo-track {
			animation: none;
		}
	}
</style>
