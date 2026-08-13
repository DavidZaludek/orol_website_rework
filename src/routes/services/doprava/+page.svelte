<script lang="ts">
	import heroPhoto from '$lib/assets/services/doprava.jpg';
	import { contact } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const icon = serviceIcons['/services/doprava'] ?? [];

	const fleet = [
		'Nákladné vozidlá s hydraulickou rukou pre samostatnú vykládku paliet',
		'Sklápače pre sypké materiály – piesok, štrk, betónová zmes',
		'Dodávky pre menšie zákazky a expresné dodanie'
	];

	const pricing = [
		'Cena sa odvíja od vzdialenosti, váhy nákladu a použitého vozidla',
		'Pri väčších objednávkach materiálu vieme dopravu výrazne zvýhodniť',
		'Presnú cenu Vám uvedieme v cenovej ponuke alebo telefonicky'
	];

	const steps = [
		'Pri objednávke materiálu uveďte adresu stavby a preferovaný termín dodania.',
		'Skontrolujeme dostupnosť vozidla a potvrdíme termín závozu.',
		'Vodič Vás vopred kontaktuje pred príchodom na stavbu.'
	];
</script>

<svelte:head>
	<title>Doprava materiálu – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Doprava stavebného materiálu vlastnými vozidlami s hydraulickou rukou priamo na stavbu."
	/>
</svelte:head>

<section class="section" aria-label="Doprava materiálu">
	<!-- 1. Hero composition — photo carries the left flank -->
	<div class="canvas hero-canvas">
		<div class="copy-cell" data-reveal {@attach reveal()}>
			<a href="/services" class="back-link">← Späť na služby</a>
			<span class="eyebrow">Služby · Vlastné vozidlá</span>
			<h1 class="hero-title">Doprava <span class="hero-accent">materiálu.</span></h1>
			<p class="hero-lead">
				Stavebný materiál Vám dovezieme priamo na stavbu vlastnými vozidlami. Vozový park nám
				umožňuje pružne reagovať na malé aj veľké objednávky – od pár vriec až po kamión paliet.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
				<a href="/contact" class="btn btn--ghost">Kontaktné údaje</a>
			</div>
		</div>
		<div class="photo-cell" data-reveal {@attach reveal(80)}>
			<img
				src={heroPhoto}
				alt="Nákladné vozidlo Stavebnín Orol s hydraulickou rukou pri vykládke materiálu"
			/>
			<span class="chip" aria-hidden="true">
				<svg viewBox="0 0 24 24"
					>{#each icon as d (d)}<path {d} />{/each}</svg
				>
			</span>
		</div>
		<div class="fact-cell" data-reveal {@attach reveal(140)}>Od pár vriec až po kamión paliet</div>
		<div class="acc acc--hy" aria-hidden="true"></div>
		<div class="acc acc--hb" aria-hidden="true"></div>
	</div>

	<!-- 2. Fleet composition -->
	<div class="canvas fleet-canvas">
		<header class="head-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Vozidlá</span>
			<h2 class="section-title">Vozový park</h2>
		</header>
		<div class="acc acc--fy" aria-hidden="true"></div>
		{#each fleet as item, i (item)}
			<div class="fleet-cell" data-reveal {@attach reveal(Math.min(i * 80, 240))}>
				<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
				<p>{item}</p>
			</div>
		{/each}
	</div>

	<!-- 3. Area + pricing + steps composition -->
	<div class="canvas info-canvas">
		<div class="area-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Oblasť</span>
			<h2 class="section-title section-title--sm">Oblasť dopravy</h2>
			<p class="area-text">
				Štandardne zabezpečujeme dopravu v rámci Liptovského Mikuláša a okolitých obcí. Po dohode
				Vám materiál dovezieme aj do vzdialenejších lokalít v rámci celého Žilinského kraja a
				susediacich okresov.
			</p>
		</div>
		<div class="pricing-cell" data-reveal {@attach reveal(120)}>
			<span class="eyebrow eyebrow--light">Cena</span>
			<h2 class="section-title section-title--sm section-title--light">Cena dopravy</h2>
			<ul class="conditions">
				{#each pricing as condition (condition)}
					<li>{condition}</li>
				{/each}
			</ul>
		</div>
		<div class="steps-cell" data-reveal {@attach reveal()}>
			<span class="eyebrow">Postup</span>
			<h2 class="section-title section-title--sm">Ako si dopravu objednať</h2>
			<ol class="steps">
				{#each steps as step, i (step)}
					<li>
						<span class="step-no">{i + 1}</span>
						<p class="step-text">{step}</p>
					</li>
				{/each}
			</ol>
		</div>
		<div class="acc acc--ib" aria-hidden="true"></div>
	</div>

	<!-- 4. CTA composition -->
	<div class="canvas cta-canvas">
		<div class="cta-cell" data-reveal {@attach reveal()}>
			<h2 class="cta-title">Objednať dopravu</h2>
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
		grid-template-rows: minmax(430px, auto) 104px;
		grid-template-areas:
			'photo photo photo photo photo copy copy copy copy copy copy copy'
			'photo photo photo photo photo fact fact fact fact hy   hy   hb';
	}

	.copy-cell {
		grid-area: copy;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 1.1rem;
		padding: clamp(1.75rem, 3.5vw, 3.25rem);
		background-color: var(--color-white);
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
		max-width: 12ch;
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

	.photo-cell img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%) contrast(1.06) brightness(0.98);
		transition:
			filter var(--transition-medium),
			transform var(--transition-medium);
	}

	@media (hover: hover) {
		.photo-cell:hover img {
			filter: grayscale(0%) contrast(1.02);
			transform: scale(1.02);
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

	/* ===== 2. Fleet ===== */
	.fleet-canvas {
		grid-template-columns: repeat(12, 1fr);
	}

	.head-cell {
		grid-column: span 9;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	.fleet-cell {
		grid-column: span 4;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		min-height: 150px;
		padding: 1.4rem 1.5rem 1.5rem;
		background-color: var(--color-white);
	}

	.fleet-cell svg {
		width: 22px;
		height: 22px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.fleet-cell p {
		margin: 0;
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-steel);
	}

	/* ===== 3. Area + pricing + steps ===== */
	.info-canvas {
		grid-template-columns: repeat(12, 1fr);
	}

	.area-cell {
		grid-column: span 5;
		min-width: 0;
		padding: clamp(1.75rem, 3.5vw, 2.75rem);
		background-color: var(--color-white);
	}

	.area-text {
		margin: 0;
		max-width: 52ch;
		font-size: var(--font-size-body);
		line-height: 1.75;
		color: var(--color-steel);
	}

	.pricing-cell {
		grid-column: span 7;
		min-width: 0;
		padding: clamp(1.75rem, 3.5vw, 2.75rem);
		background-color: var(--color-iron);
		color: var(--color-white);
	}

	.conditions {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.conditions li {
		position: relative;
		padding: 0 0 1rem 1.35rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.14);
		font-size: var(--font-size-small);
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-concrete);
	}

	.conditions li:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.conditions li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 0.55rem;
		height: 3px;
		background-color: var(--color-brand-hover);
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

	.acc--fy {
		grid-column: span 3;
		background-color: var(--color-accent-yellow);
	}

	.acc--ib {
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
			grid-template-rows: minmax(380px, auto) 96px;
		}

		.fleet-cell {
			grid-column: span 12;
			min-height: 0;
			flex-direction: row;
			align-items: flex-start;
		}

		.area-cell {
			grid-column: span 12;
		}

		.pricing-cell {
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

		.fleet-cell {
			padding: 1.2rem 1rem 1.3rem;
		}

		.area-cell,
		.pricing-cell,
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
		.photo-cell img {
			transition: none;
		}
	}
</style>
