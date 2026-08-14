<script lang="ts">
	import ResponsiveServiceImage from '$lib/components/ResponsiveServiceImage.svelte';
	import type { ServiceImageSet } from '$lib/serviceMedia';
	import { serviceMedia } from '$lib/serviceMedia';
	import { services } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	interface Cell {
		href: string;
		area: string;
		photo?: ServiceImageSet;
		featured?: boolean;
	}

	// The composition: Požičovňa is the dominant red cell, Poradenstvo stays a
	// calm white cell with a watermark, the rest carry monochrome photos.
	const cells: Cell[] = [
		{
			href: '/services/cenova-ponuka',
			area: 'cenova',
			photo: serviceMedia['/services/cenova-ponuka']
		},
		{
			href: '/services/pozicovna-naradia',
			area: 'pozic',
			photo: serviceMedia['/services/pozicovna-naradia'],
			featured: true
		},
		{ href: '/services/doprava', area: 'doprava', photo: serviceMedia['/services/doprava'] },
		{ href: '/services/poradenstvo', area: 'porad', photo: serviceMedia['/services/poradenstvo'] },
		{
			href: '/services/stavbyveduci',
			area: 'stavby',
			photo: serviceMedia['/services/stavbyveduci']
		},
		{
			href: '/services/miesanie-farieb',
			area: 'farby',
			photo: serviceMedia['/services/miesanie-farieb']
		},
		{
			href: '/services/kontakty-na-remeselnikov',
			area: 'kontakty',
			photo: serviceMedia['/services/kontakty-na-remeselnikov']
		}
	];

	function service(href: string) {
		return services.find((s) => s.href === href);
	}
</script>

<svelte:head>
	<title>Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Okrem predaja stavebného materiálu ponúkame komplexné služby – poradenstvo, cenové ponuky, dopravu, požičovňu náradia aj kontakty na remeselníkov."
	/>
</svelte:head>

<section class="section" aria-label="Služby">
	<div class="canvas">
		<header class="head-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Služby</span>
			<h1 class="section-title">Viac než predajňa</h1>
			<p class="head-note">
				Okrem predaja stavebného materiálu Vám ponúkame aj komplexné služby, ktoré uľahčia
				realizáciu Vašej stavby od prvého nákresu až po odovzdanie.
			</p>
		</header>
		<div class="acc acc--head" aria-hidden="true"></div>

		{#each cells as cell, i (cell.href)}
			{@const s = service(cell.href)}
			{#if s}
				<a
					href={cell.href}
					class="cell cell--{cell.area}"
					class:cell--featured={cell.featured}
					class:cell--photo={cell.photo !== undefined}
					data-reveal
					{@attach reveal(Math.min(i * 60, 300))}
				>
					{#if cell.photo}
						<ResponsiveServiceImage
							media={cell.photo}
							fit="cover"
							alt=""
							class="cell-bg"
							loading="eager"
						/>
					{:else}
						<svg class="cell-watermark" viewBox="0 0 24 24" aria-hidden="true">
							{#each serviceIcons[cell.href] ?? [] as d (d)}
								<path {d} />
							{/each}
						</svg>
					{/if}
					<span class="cell-chip" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							{#each serviceIcons[cell.href] ?? [] as d (d)}
								<path {d} />
							{/each}
						</svg>
					</span>
					<span class="cell-body">
						<span class="cell-title">{s.short}</span>
						<span class="cell-desc">{s.description}</span>
						<span class="cell-more">
							{cell.featured ? 'Pozrieť ponuku náradia →' : 'Zistiť viac →'}
						</span>
					</span>
				</a>
			{/if}
		{/each}

		<div class="acc acc--yellow" aria-hidden="true"></div>
		<div class="acc acc--blue" aria-hidden="true"></div>
		<div class="acc acc--red" aria-hidden="true"></div>
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
		grid-area: head;
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

	/* ===== Mondrian canvas ===== */
	.canvas {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto minmax(380px, auto) minmax(300px, auto) minmax(280px, auto);
		grid-template-areas:
			'head    head    head    head    head    head    head    head    head    hacc    hacc    hacc'
			'cenova  cenova  cenova  cenova  cenova  pozic   pozic   pozic   pozic   pozic   pozic   pozic'
			'doprava doprava doprava doprava bacc    porad   porad   porad   porad   stavby  stavby  stavby'
			'yacc    farby   farby   farby   farby   farby   kontakty kontakty kontakty kontakty kontakty racc';
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	/* ===== Service cells ===== */
	.cell {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-width: 0;
		padding: clamp(1.3rem, 2.5vw, 2rem);
		background-color: var(--color-white);
		text-decoration: none;
	}

	.cell--cenova {
		grid-area: cenova;
	}
	.cell--pozic {
		grid-area: pozic;
	}
	.cell--doprava {
		grid-area: doprava;
	}
	.cell--porad {
		grid-area: porad;
	}
	.cell--stavby {
		grid-area: stavby;
	}
	.cell--farby {
		grid-area: farby;
	}
	.cell--kontakty {
		grid-area: kontakty;
	}

	/* Monochrome photo backdrop — regains color on hover. */
	.cell :global(.cell-bg) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		filter: grayscale(100%) contrast(1.06) brightness(0.98);
		transition:
			filter var(--transition-medium),
			transform var(--transition-medium);
	}

	@media (hover: hover) {
		.cell:hover :global(.cell-bg) {
			filter: grayscale(0%) contrast(1.02);
		}
	}

	/* White scrim keeps the text zone readable over the photo. */
	.cell--photo::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(255, 255, 255, 0.96) 0%,
			rgba(255, 255, 255, 0.84) 30%,
			rgba(255, 255, 255, 0) 65%
		);
		pointer-events: none;
	}

	/* Icon chip — a small white cell pinned top-left, its own Mondrian block. */
	.cell-chip {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		background-color: var(--color-white);
	}

	.cell-chip svg {
		width: 26px;
		height: 26px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 1.7;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.cell-body {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.45rem;
	}

	.cell-title {
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
	}

	.cell-desc {
		max-width: 52ch;
		font-size: var(--font-size-small);
		line-height: 1.6;
		color: var(--text-muted);
	}

	.cell-more {
		margin-top: 0.35rem;
		font-size: var(--font-size-small);
		font-weight: 700;
		color: var(--color-brand-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color var(--transition-fast);
	}

	.cell:hover .cell-more {
		color: var(--color-brand-hover);
	}

	/* Poradenstvo — the calm white cell with a ghost watermark. */
	.cell-watermark {
		position: absolute;
		right: -1.5rem;
		top: 50%;
		transform: translateY(-50%);
		width: 180px;
		height: 180px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 0.7;
		stroke-linecap: round;
		stroke-linejoin: round;
		opacity: 0.16;
		pointer-events: none;
	}

	/* ===== Featured — Požičovňa as the dominant red cell ===== */
	.cell--featured {
		background-color: var(--color-brand-primary);
	}

	.cell--featured :global(.cell-bg) {
		filter: grayscale(100%) contrast(1.05) brightness(0.95);
		mix-blend-mode: multiply;
		opacity: 0.9;
	}

	@media (hover: hover) {
		.cell--featured:hover :global(.cell-bg) {
			/* The red cell stays red — the photo just leans closer. */
			filter: grayscale(100%) contrast(1.05) brightness(1);
		}
	}

	.cell--featured::after {
		background: linear-gradient(
			to top,
			rgba(140, 26, 16, 0.95) 0%,
			rgba(140, 26, 16, 0.72) 32%,
			rgba(140, 26, 16, 0) 68%
		);
	}

	.cell--featured .cell-chip svg {
		stroke: var(--color-brand-primary);
	}

	.cell--featured .cell-title {
		font-size: var(--font-size-display-lg);
		color: var(--color-white);
	}

	.cell--featured .cell-desc {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1rem;
	}

	.cell--featured .cell-more {
		color: var(--color-white);
	}

	.cell--featured:hover .cell-more {
		color: var(--color-white);
		text-decoration-thickness: 2px;
	}

	/* ===== Accent cells ===== */
	.acc {
		min-width: 0;
	}

	.acc--head {
		grid-area: hacc;
		background-color: var(--color-accent-yellow);
	}

	.acc--yellow {
		grid-area: yacc;
		background-color: var(--color-accent-yellow);
	}

	.acc--blue {
		grid-area: bacc;
		background-color: var(--color-accent-blue);
	}

	.acc--red {
		grid-area: racc;
		background-color: var(--color-brand-primary);
	}

	/* ===== Mobile: the composition stacks ===== */
	@media (max-width: 800px) {
		.canvas {
			display: flex;
			flex-direction: column;
			gap: 4px;
			padding: 4px;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.cell {
			min-height: 220px;
			padding: 1.25rem 1rem 1.3rem;
		}

		.cell--featured {
			min-height: 300px;
		}

		.cell-watermark {
			width: 130px;
			height: 130px;
			right: -1rem;
		}

		/* Stacked cells put text higher up — the scrim has to reach it. */
		.cell--photo::after {
			background: linear-gradient(
				to top,
				rgba(255, 255, 255, 0.96) 0%,
				rgba(255, 255, 255, 0.88) 55%,
				rgba(255, 255, 255, 0.08) 92%
			);
		}

		.cell--featured::after {
			background: linear-gradient(
				to top,
				rgba(140, 26, 16, 0.95) 0%,
				rgba(140, 26, 16, 0.8) 55%,
				rgba(140, 26, 16, 0.08) 92%
			);
		}

		.acc {
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

		.cell :global(.cell-bg) {
			transition: none;
		}
	}
</style>
