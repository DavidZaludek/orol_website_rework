<script lang="ts">
	import toolsPhoto from '$lib/assets/gallery/IMG_2228.jpg';
	import svcCenova from '$lib/assets/services/cenova-ponuka.jpg';
	import svcDoprava from '$lib/assets/services/doprava.jpg';
	import svcPoradenstvo from '$lib/assets/services/poradenstvo.jpg';
	import svcStavbyveduci from '$lib/assets/services/stavbyveduci.jpg';
	import svcFarby from '$lib/assets/services/miesanie-farieb.jpg';
	import svcRemeselnici from '$lib/assets/services/kontakty-na-remeselnikov.jpg';

	import { services } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const photos: Record<string, string> = {
		'/services/cenova-ponuka': svcCenova,
		'/services/doprava': svcDoprava,
		'/services/poradenstvo': svcPoradenstvo,
		'/services/stavbyveduci': svcStavbyveduci,
		'/services/pozicovna-naradia': toolsPhoto,
		'/services/miesanie-farieb': svcFarby,
		'/services/kontakty-na-remeselnikov': svcRemeselnici
	};

	// Presentation order: the main offer first, the featured rental as the
	// red band in the middle, supporting services after.
	const order = [
		'/services/cenova-ponuka',
		'/services/doprava',
		'/services/poradenstvo',
		'/services/stavbyveduci',
		'/services/pozicovna-naradia',
		'/services/miesanie-farieb',
		'/services/kontakty-na-remeselnikov'
	];
	const flow = order
		.map((href) => services.find((s) => s.href === href))
		.filter((s): s is (typeof services)[number] => s !== undefined);

	const accentCycle = ['yellow', 'blue', 'red'] as const;
</script>

<svelte:head>
	<title>Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Okrem predaja stavebného materiálu ponúkame komplexné služby – poradenstvo, cenové ponuky, dopravu, požičovňu náradia aj kontakty na remeselníkov."
	/>
</svelte:head>

<section class="section" aria-label="Služby">
	<div class="flow">
		<div class="flow-row flow-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Služby</span>
				<h1 class="section-title">Viac než predajňa</h1>
				<p class="head-note">
					Okrem predaja stavebného materiálu Vám ponúkame aj komplexné služby, ktoré uľahčia
					realizáciu Vašej stavby od prvého nákresu až po odovzdanie.
				</p>
			</header>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		{#each flow as service, i (service.href)}
			{@const featured = service.href === '/services/pozicovna-naradia'}
			<div class="flow-row" class:flow-row--reverse={i % 2 === 1}>
				<div class="flow-photo" data-reveal {@attach reveal()}>
					<img src={photos[service.href]} alt="" loading={i < 2 ? undefined : 'lazy'} />
				</div>
				<div class="flow-body" class:flow-body--red={featured} data-reveal {@attach reveal(100)}>
					<svg class="flow-icon" viewBox="0 0 24 24" aria-hidden="true">
						{#each serviceIcons[service.href] ?? [] as d (d)}
							<path {d} />
						{/each}
					</svg>
					<h2 class="flow-title">{service.short}</h2>
					<p class="flow-desc">{service.description}</p>
					<a href={service.href} class="flow-link">Zistiť viac →</a>
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
		min-height: 300px;
		background-color: var(--color-white);
	}

	.flow-photo img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
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

	.flow-body {
		flex: 6 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.8rem;
		padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem);
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

	/* Featured band — Požičovňa náradia as the red cell */
	.flow-body--red {
		background-color: var(--color-brand-primary);
	}

	.flow-body--red .flow-icon {
		stroke: var(--color-white);
	}

	.flow-body--red .flow-title {
		color: var(--color-white);
	}

	.flow-body--red .flow-desc {
		color: rgba(255, 255, 255, 0.88);
	}

	.flow-body--red .flow-link {
		color: var(--color-white);
	}

	.flow-body--red .flow-link:hover {
		color: var(--color-white);
		text-decoration-thickness: 2px;
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
			min-height: 190px;
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
