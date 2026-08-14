<script lang="ts">
	import ResponsiveServiceImage from '$lib/components/ResponsiveServiceImage.svelte';
	import { serviceMedia } from '$lib/serviceMedia';
	import { contact } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const icon = serviceIcons['/services/poradenstvo'] ?? [];
	const heroPhoto = serviceMedia['/services/poradenstvo'];

	const topics = [
		'Výber muriva, omietok, lepidiel a izolácií pre konkrétny účel',
		'Skladba zatepľovacieho systému (ETICS) podľa normy',
		'Strešné a hydroizolačné systémy',
		'Sadrokartónové konštrukcie a suchá výstavba',
		'Maliarske a fasádne farby, vrátane vhodných penetrácií',
		'Náhrada pôvodne navrhnutého materiálu cenovo alebo technicky výhodnejším'
	];

	const steps = [
		'Prinesiete projektovú dokumentáciu, výkaz výmer alebo nám stručne opíšete zámer.',
		'Spoločne prejdeme jednotlivé časti stavby a navrhneme materiál vrátane systémových riešení od overených výrobcov.',
		'Na požiadanie pripravíme aj cenovú ponuku, prípadne sprostredkujeme remeselníka, ktorý prácu zrealizuje.'
	];
</script>

<svelte:head>
	<title>Poradenstvo – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Odborné poradenstvo pri výbere stavebných materiálov, technológií a systémových riešení."
	/>
</svelte:head>

<section class="section" aria-label="Poradenstvo">
	<!-- 1. Hero composition — full-height photo on the right -->
	<div class="canvas hero-canvas">
		<div class="copy-cell" data-reveal {@attach reveal()}>
			<a href="/services" class="back-link">← Späť na služby</a>
			<span class="eyebrow">Služby · Výber materiálu</span>
			<h1 class="hero-title">Poradenstvo<span class="hero-accent">.</span></h1>
			<p class="hero-lead">
				Naši pracovníci s viacročnou praxou v stavebníctve Vám radi pomôžu vybrať správny materiál,
				technológiu aj systémové riešenie pre Váš projekt – či už ide o rodinný dom, rekonštrukciu,
				priemyselnú stavbu alebo drobnú úpravu interiéru.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
				<a href="/contact" class="btn btn--ghost">Kontaktné údaje</a>
			</div>
		</div>
		<div class="photo-cell" data-reveal {@attach reveal(80)}>
			<ResponsiveServiceImage
				media={heroPhoto}
				alt="Poradenstvo pri výbere stavebného materiálu na predajni Stavebnín Orol"
				loading="eager"
				fetchpriority="high"
			/>
			<span class="chip" aria-hidden="true">
				<svg viewBox="0 0 24 24"
					>{#each icon as d (d)}<path {d} />{/each}</svg
				>
			</span>
		</div>
		<div class="fact-cell" data-reveal {@attach reveal(140)}>Viacročná prax v stavebníctve</div>
		<div class="acc acc--hy" aria-hidden="true"></div>
		<div class="acc acc--hb" aria-hidden="true"></div>
	</div>

	<!-- 2. Topics composition -->
	<div class="canvas topics-canvas">
		<header class="head-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Rozsah</span>
			<h2 class="section-title">S čím Vám poradíme</h2>
		</header>
		<div class="acc acc--ry" aria-hidden="true"></div>
		<div class="topics-cell" data-reveal {@attach reveal(80)}>
			<ul class="topic-list">
				{#each topics as item (item)}
					<li>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- 3. Steps composition -->
	<div class="canvas steps-canvas">
		<div class="steps-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Postup</span>
			<h2 class="section-title section-title--sm">Ako to prebieha</h2>
			<ol class="steps">
				{#each steps as step, i (step)}
					<li>
						<span class="step-no">{i + 1}</span>
						<p class="step-text">{step}</p>
					</li>
				{/each}
			</ol>
		</div>
		<div class="acc acc--pb" aria-hidden="true"></div>
	</div>

	<!-- 4. CTA composition -->
	<div class="canvas cta-canvas">
		<div class="cta-cell" data-reveal {@attach reveal()}>
			<h2 class="cta-title">Potrebujete poradiť?</h2>
			<div class="cta-actions">
				<a href={contact.phoneHref} class="cta-phone">{contact.phone}</a>
				<a href="/contact" class="cta-link">Kontaktné údaje</a>
			</div>
		</div>
		<div class="acc acc--ty" aria-hidden="true"></div>
	</div>
</section>

<style>
	.section {
		padding: 0 0 var(--space-section-y-end);
		display: flex;
		flex-direction: column;
		gap: var(--space-section-y-end, 4rem);
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
		background-color: currentColor;
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

	.section-title--sm {
		font-size: var(--font-size-display-md);
		margin-bottom: 1.5rem;
	}

	/* ===== Canvases — iron ground, cells paint themselves ===== */
	.canvas {
		display: grid;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	/* ===== 1. Hero ===== */
	.hero-canvas {
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: minmax(420px, auto) 100px;
		grid-template-areas:
			'copy copy copy copy copy copy copy photo photo photo photo photo'
			'fact fact fact fact hy   hy   hb   photo photo photo photo photo';
	}

	.copy-cell {
		grid-area: copy;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1.1rem;
		padding: clamp(1.75rem, 3.5vw, 3.25rem);
		background-color: #111315;
	}

	.back-link {
		font-size: var(--font-size-small);
		font-weight: 600;
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--color-brand-primary);
	}

	.hero-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-xl);
		font-weight: 700;
		line-height: 0.92;
		text-transform: uppercase;
		letter-spacing: 0.005em;
		color: var(--color-iron);
	}

	.hero-accent {
		color: var(--color-brand-primary);
	}

	.hero-lead {
		margin: 0;
		max-width: 54ch;
		font-size: 1.05rem;
		line-height: 1.65;
		color: var(--text-muted);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 0.25rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 1.5rem;
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.07em;
		text-decoration: none;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast);
	}

	.btn:focus-visible,
	.back-link:focus-visible,
	.cta-phone:focus-visible,
	.cta-link:focus-visible {
		outline: 3px solid var(--color-brand-hover);
		outline-offset: 3px;
	}

	.btn--primary {
		background-color: var(--color-brand-primary);
		color: var(--color-white);
	}

	.btn--primary:hover {
		background-color: var(--color-brand-hover);
	}

	.btn--ghost {
		border: 2px solid var(--color-iron);
		color: var(--color-iron);
	}

	.btn--ghost:hover {
		border-color: var(--color-brand-primary);
		color: var(--color-brand-primary);
	}

	.photo-cell {
		grid-area: photo;
		position: relative;
		overflow: hidden;
		min-width: 0;
		background-color: var(--color-white);
	}

	.photo-cell :global(img) {
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
		.photo-cell:hover :global(img) {
			filter: grayscale(0%) contrast(1.02);
		}
	}

	.chip {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		background-color: var(--color-white);
	}

	.chip svg {
		width: 26px;
		height: 26px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 1.7;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.fact-cell {
		grid-area: fact;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 1rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: clamp(1rem, 1.5vw, 1.25rem);
		font-weight: 700;
		line-height: 1.1;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	/* ===== 2. Topics ===== */
	.topics-canvas {
		grid-template-columns: repeat(12, 1fr);
	}

	.head-cell {
		grid-column: span 9;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	/* One cell, one list — items don't get cells of their own. */
	.topics-cell {
		grid-column: span 12;
		background-color: var(--color-white);
		padding: clamp(1.25rem, 3vw, 2.25rem) clamp(1.25rem, 3vw, 2.5rem);
	}

	.topic-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: clamp(2rem, 5vw, 4.5rem);
	}

	.topic-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.7rem;
		padding: 0.8rem 0;
		border-bottom: 1px solid var(--border-default);
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-steel);
	}

	.topic-list li:nth-last-child(-n + 2) {
		border-bottom: 0;
	}

	.topic-list svg {
		width: 22px;
		height: 22px;
		flex: 0 0 auto;
		margin-top: 0.1em;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* ===== 3. Steps ===== */
	.steps-canvas {
		grid-template-columns: repeat(12, 1fr);
	}

	.steps-cell {
		grid-column: span 10;
		min-width: 0;
		padding: clamp(1.75rem, 3.5vw, 3rem);
		background-color: var(--color-white);
	}

	.steps {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		max-width: 780px;
	}

	.steps li {
		display: grid;
		grid-template-columns: 56px 1fr;
		gap: 1.1rem;
		padding: 1.15rem 0;
		border-bottom: 1px solid var(--border-default);
	}

	.steps li:first-child {
		padding-top: 0;
	}

	.steps li:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.step-no {
		font-family: var(--font-display);
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 1;
		color: var(--color-brand-primary);
		font-variant-numeric: tabular-nums;
	}

	.step-text {
		margin: 0;
		padding-top: 0.45rem;
		font-size: var(--font-size-body);
		line-height: 1.65;
		color: var(--color-steel);
	}

	/* ===== 4. CTA ===== */
	.cta-canvas {
		grid-template-columns: repeat(12, 1fr);
	}

	.cta-cell {
		grid-column: span 10;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3.5rem);
		background-color: var(--color-brand-primary);
	}

	.cta-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-white);
	}

	.cta-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.5rem;
	}

	.cta-phone {
		font-family: var(--font-display);
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 700;
		letter-spacing: 0.04em;
		color: var(--color-white);
		text-decoration: none;
		font-variant-numeric: tabular-nums;
	}

	.cta-phone:hover {
		text-decoration: underline;
	}

	.cta-link {
		font-size: var(--font-size-small);
		font-weight: 700;
		color: var(--color-white);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.cta-link:hover {
		text-decoration-thickness: 2px;
	}

	/* ===== Accent cells ===== */
	.acc {
		min-width: 0;
	}

	.acc--hy {
		grid-area: hy;
		background-color: var(--color-accent-yellow);
	}

	.acc--hb {
		grid-area: hb;
		background-color: var(--color-accent-blue);
	}

	.acc--ry {
		grid-column: span 3;
		background-color: var(--color-accent-yellow);
	}

	.acc--pb {
		grid-column: span 2;
		background-color: var(--color-accent-blue);
	}

	.acc--ty {
		grid-column: span 2;
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

	/* ===== Responsive ===== */
	@media (max-width: 1000px) {
		.hero-canvas {
			grid-template-rows: minmax(380px, auto) 92px;
		}
	}

	@media (max-width: 800px) {
		.canvas {
			display: flex;
			flex-direction: column;
			gap: 4px;
			padding: 4px;
		}

		.section {
			gap: 2.5rem;
		}

		.copy-cell {
			padding: 1.5rem 1rem 1.6rem;
		}

		.photo-cell {
			min-height: 300px;
		}

		.fact-cell {
			padding: 1rem;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.topic-list {
			grid-template-columns: 1fr;
		}

		.topic-list li:nth-last-child(-n + 2) {
			border-bottom: 1px solid var(--border-default);
		}

		.topic-list li:last-child {
			border-bottom: 0;
		}

		.steps-cell {
			padding: 1.5rem 1.2rem 1.6rem;
		}

		.cta-cell {
			padding: 1.75rem 1.2rem 1.9rem;
		}

		.acc {
			min-height: 22px;
		}
	}

	@media (max-width: 560px) {
		.hero-actions {
			width: 100%;
			flex-direction: column;
		}

		.hero-actions .btn {
			width: 100%;
		}
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.btn,
		.photo-cell :global(img) {
			transition: none;
		}
	}
</style>
