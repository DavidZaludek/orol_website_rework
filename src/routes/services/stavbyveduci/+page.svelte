<script lang="ts">
	import ResponsiveServiceImage from '$lib/components/ResponsiveServiceImage.svelte';
	import { serviceMedia } from '$lib/serviceMedia';
	import { contact } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const icon = serviceIcons['/services/stavbyveduci'] ?? [];
	const heroPhoto = serviceMedia['/services/stavbyveduci'];

	const duties = [
		'Odborné vedenie realizácie stavby v súlade s projektovou dokumentáciou',
		'Dodržiavanie technologických postupov a platných STN noriem',
		'Vedenie stavebného denníka a komunikácia so stavebným úradom',
		'Kontrola kvality vykonaných prác a použitých materiálov',
		'Dodržiavanie predpisov BOZP a ochrany životného prostredia na stavbe',
		'Súčinnosť pri kolaudačnom konaní'
	];

	const steps = [
		'Opíšete nám rozsah stavby, lokalitu a predpokladaný harmonogram.',
		'Z našej databázy spolupracujúcich stavbyvedúcich vyberieme tých, ktorí majú voľnú kapacitu a skúsenosť s podobným typom stavby.',
		'Dohodnete si s nimi rozsah služby, cenu a podmienky priamo.'
	];
</script>

<svelte:head>
	<title>Stavbyvedúci – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Sprostredkovanie certifikovaných stavbyvedúcich pre dohľad nad stavbou."
	/>
</svelte:head>

<section class="section" aria-label="Stavbyvedúci">
	<!-- 1. Hero composition — photo left, copy spans the right flank -->
	<div class="canvas hero-canvas">
		<div class="copy-cell" data-reveal {@attach reveal()}>
			<a href="/services" class="back-link">← Späť na služby</a>
			<span class="eyebrow">Služby · Sprostredkovanie</span>
			<h1 class="hero-title">Stavby<span class="hero-accent">vedúci.</span></h1>
			<p class="hero-lead">
				Sprostredkujeme Vám overených stavbyvedúcich s odbornou spôsobilosťou podľa zákona č.
				138/1992 Zb., ktorí prevezmú zodpovednosť za odborné vedenie stavby od základov až po
				kolaudáciu.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
				<a href="/contact" class="btn btn--ghost">Kontaktné údaje</a>
			</div>
		</div>
		<div class="photo-cell" data-reveal {@attach reveal(80)}>
			<ResponsiveServiceImage
				media={heroPhoto}
				alt="Dokončený moderný rodinný dom ako výsledok riadenej realizácie stavby"
				loading="eager"
				fetchpriority="high"
			/>
			<span class="chip" aria-hidden="true">
				<svg viewBox="0 0 24 24"
					>{#each icon as d (d)}<path {d} />{/each}</svg
				>
			</span>
		</div>
		<div class="fact-cell" data-reveal {@attach reveal(140)}>Od základov až po kolaudáciu</div>
		<div class="acc acc--hy" aria-hidden="true"></div>
		<div class="acc acc--hb" aria-hidden="true"></div>
	</div>

	<!-- 2. Duties + legislation composition -->
	<div class="canvas duties-canvas">
		<header class="head-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Rozsah</span>
			<h2 class="section-title">Čo stavbyvedúci zabezpečí</h2>
		</header>
		<div class="acc acc--dy" aria-hidden="true"></div>
		<div class="duties-cell" data-reveal {@attach reveal(80)}>
			<ul class="check-list">
				{#each duties as item (item)}
					<li>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div class="legis-cell" data-reveal {@attach reveal(160)}>
			<span class="eyebrow eyebrow--light">Legislatíva</span>
			<h2 class="section-title section-title--sm section-title--light">
				Kedy je stavbyvedúci povinný
			</h2>
			<p class="legis-text">
				Podľa stavebného zákona je výkon stavbyvedúceho povinný pri všetkých stavbách, ktoré
				vyžadujú stavebné povolenie – teda pri väčšine rodinných domov, prístavbách, nadstavbách a
				väčších rekonštrukciách. Pri jednoduchých a drobných stavbách stačí stavebný dozor.
			</p>
		</div>
	</div>

	<!-- 3. Steps composition -->
	<div class="canvas steps-canvas">
		<div class="acc acc--sr" aria-hidden="true"></div>
		<div class="steps-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Postup</span>
			<h2 class="section-title section-title--sm">Ako Vás prepojíme</h2>
			<ol class="steps">
				{#each steps as step, i (step)}
					<li>
						<span class="step-no">{i + 1}</span>
						<p class="step-text">{step}</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>

	<!-- 4. CTA composition -->
	<div class="canvas cta-canvas">
		<div class="cta-cell" data-reveal {@attach reveal()}>
			<h2 class="cta-title">Hľadáte stavbyvedúceho?</h2>
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

	.eyebrow--light {
		color: var(--color-white);
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

	.section-title--light {
		color: var(--color-white);
	}

	/* ===== Canvases — iron ground, cells paint themselves ===== */
	.canvas {
		display: grid;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	/* ===== 1. Hero — photo left, copy right ===== */
	.hero-canvas {
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: minmax(430px, auto) 96px;
		grid-template-areas:
			'photo photo photo photo photo photo copy copy copy copy copy copy'
			'hy    hy    fact  fact  fact  hb    copy copy copy copy copy copy';
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

	/* ===== 2. Duties + legislation ===== */
	.duties-canvas {
		grid-template-columns: repeat(12, 1fr);
	}

	.head-cell {
		grid-column: span 9;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	.duties-cell {
		grid-column: span 7;
		min-width: 0;
		padding: clamp(1.75rem, 3.5vw, 2.75rem);
		background-color: var(--color-white);
	}

	.check-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.check-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.85rem 0;
		border-bottom: 1px solid var(--border-default);
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-steel);
	}

	.check-list li:first-child {
		padding-top: 0;
	}

	.check-list li:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.check-list svg {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		margin-top: 0.15rem;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.legis-cell {
		grid-column: span 5;
		min-width: 0;
		padding: clamp(1.75rem, 3.5vw, 2.75rem);
		background-color: var(--color-iron);
		color: var(--color-white);
	}

	.legis-text {
		margin: 0;
		font-size: var(--font-size-body);
		line-height: 1.75;
		color: var(--color-concrete);
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

	.acc--dy {
		grid-column: span 3;
		background-color: var(--color-accent-yellow);
	}

	.acc--sr {
		grid-column: span 2;
		background-color: var(--color-brand-primary);
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
			grid-template-rows: minmax(380px, auto) 88px;
		}

		.duties-cell {
			grid-column: span 12;
		}

		.legis-cell {
			grid-column: span 12;
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

		.duties-cell,
		.legis-cell,
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
