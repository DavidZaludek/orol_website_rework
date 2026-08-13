<script lang="ts">
	import heroPhoto from '$lib/assets/services/miesanie-farieb.jpg';
	import { contact } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const icon = serviceIcons['/services/miesanie-farieb'] ?? [];

	const products = [
		'Interiérové farby – disperzné, latexové, umývateľné',
		'Fasádne farby – silikónové, silikátové, akrylátové',
		'Tenkovrstvové omietky pre fasády a zatepľovacie systémy',
		'Lazúry, oleje a laky na drevo',
		'Špeciálne nátery – antikorózne, žiaruvzdorné, na betón'
	];

	const swatchbooks = [
		'RAL Classic, RAL Design',
		'NCS (Natural Color System)',
		'Vzorkovníky výrobcov – Baumit, Caparol, Weber, JUB, Primalex a ďalšie',
		'Vlastná vzorka, ktorú prinesiete – látka, plast, kúsok starého náteru'
	];

	const steps = [
		'Vyberte si požadovaný odtieň zo vzorkovníka u nás na predajni alebo si ho pripravte vopred (kód odtieňa, vzorkovník).',
		'Povedzte nám, akú farbu chcete tónovať a v akom množstve – navrhneme vhodný produkt a balenie.',
		'Tónovanie štandardne trvá niekoľko minút a farbu si odnášate hneď so sebou.'
	];
</script>

<svelte:head>
	<title>Miešanie farieb – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Tónovanie interiérových a fasádnych farieb a omietok podľa vzorkovníkov RAL, NCS a ďalších."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<a href="/services" class="back-link">← Späť na služby</a>
			<svg class="hero-icon" viewBox="0 0 24 24" aria-hidden="true">
				{#each icon as d (d)}<path {d} />{/each}
			</svg>
			<span class="eyebrow">Služby · Tónovanie</span>
			<h1 class="hero-title">Miešanie <span class="hero-accent">farieb.</span></h1>
			<p class="hero-lead">
				Priamo na predajni Vám natónujeme farby a omietky do akéhokoľvek odtieňa. Pracujeme s
				profesionálnym tónovacím systémom, ktorý zaručuje presné a stále výsledky aj pri
				doobjednávke neskôr.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
				<a href="/contact" class="btn btn--ghost">Kontaktné údaje</a>
			</div>
		</div>
		<div class="hero-media">
			<div class="photo-frame">
				<img
					src={heroPhoto}
					alt="Tónovanie farieb na profesionálnom tónovacom systéme na predajni Stavebnín Orol"
				/>
				<span class="photo-caption">Presné a stále výsledky</span>
			</div>
		</div>
	</div>
</section>

<!-- Products -->
<section class="section section--blueprint">
	<div class="container">
		<header class="section-head" data-reveal {@attach reveal()}>
			<div>
				<span class="eyebrow">Ponuka</span>
				<h2 class="section-title">Čo tónujeme</h2>
			</div>
		</header>
		<ul class="check-grid">
			{#each products as item, i (item)}
				<li data-reveal {@attach reveal(Math.min(i * 45, 270))}>
					<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
					{item}
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Swatchbooks + steps -->
<section class="section">
	<div class="container">
		<div class="split-grid">
			<div data-reveal {@attach reveal()}>
				<span class="eyebrow">Vzorkovníky</span>
				<h2 class="section-title section-title--sm">Podľa akých vzorkovníkov</h2>
				<ul class="conditions">
					{#each swatchbooks as condition (condition)}
						<li>{condition}</li>
					{/each}
				</ul>
			</div>
			<div data-reveal {@attach reveal(120)}>
				<span class="eyebrow">Postup</span>
				<h2 class="section-title section-title--sm">Ako si farbu nechať natónovať</h2>
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
		<p class="note" data-reveal {@attach reveal(200)}>
			<strong>Tip:</strong> Pri väčších plochách odporúčame natónovať si celé množstvo naraz z jednej
			šarže – aj minimálne rozdiely medzi šaržami môžu byť na stene viditeľné.
		</p>
	</div>
</section>

<!-- CTA band -->
<section class="cta-band">
	<div class="container cta-inner">
		<h2 class="cta-title">Príďte si po farbu</h2>
		<div class="cta-actions">
			<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
			<a href="/contact" class="btn btn--light">Kontaktné údaje</a>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
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

	.section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
	}

	.section--blueprint {
		background-color: var(--color-chalk);
		background-image:
			linear-gradient(to right, rgba(30, 32, 34, 0.045) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(30, 32, 34, 0.045) 1px, transparent 1px);
		background-size: 36px 36px;
	}

	.section-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2.5rem;
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

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 1.75rem;
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		text-decoration: none;
		border-radius: var(--radius-sm);
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast),
			color var(--transition-fast),
			transform var(--transition-fast);
	}

	.btn:hover {
		transform: translateY(-2px);
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

	.btn--light {
		border: 2px solid var(--color-white);
		color: var(--color-white);
	}

	.btn--light:hover {
		border-color: var(--color-brand-hover);
		color: var(--color-brand-hover);
	}

	/* Scroll reveal */
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

	/* Hero */
	.hero {
		padding: clamp(2.5rem, 6vw, 4.5rem) 0 clamp(2.5rem, 5vw, 4rem);
		border-bottom: 1px solid var(--border-default);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}

	.hero-copy {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.1rem;
	}

	.back-link {
		font-size: var(--font-size-small);
		font-weight: 600;
		color: var(--text-muted);
		text-decoration: none;
	}

	.back-link:hover {
		color: var(--color-brand-primary);
	}

	.hero-icon {
		width: 34px;
		height: 34px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 1.7;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.hero-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-xl);
		font-weight: 700;
		line-height: 0.95;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		color: var(--color-iron);
	}

	.hero-accent {
		color: var(--color-brand-primary);
	}

	.hero-lead {
		margin: 0;
		max-width: 50ch;
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

	.photo-frame {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius-sm);
		aspect-ratio: 4 / 3;
	}

	.photo-frame::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 5px;
		background: var(--mondrian-rule);
		z-index: 2;
	}

	.photo-frame img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%) contrast(1.08) brightness(0.97);
	}

	.photo-frame::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, rgba(192, 40, 28, 0.34) 0%, rgba(30, 32, 34, 0.5) 100%);
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.photo-caption {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
		background-color: var(--color-iron);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 0.5rem 1rem;
	}

	/* Check grid */
	.check-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 0.85rem;
	}

	.check-grid li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 1.1rem 1.25rem;
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		font-weight: 500;
		line-height: 1.5;
		color: var(--color-steel);
	}

	.check-grid svg {
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

	/* Split section */
	.split-grid {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: clamp(2rem, 5vw, 4.5rem);
		align-items: start;
	}

	.conditions {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.conditions li {
		position: relative;
		padding-left: 1.2rem;
		font-size: var(--font-size-small);
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-steel);
	}

	.conditions li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 0.5rem;
		height: 3px;
		background-color: var(--color-brand-primary);
	}

	.steps {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.steps li {
		display: grid;
		grid-template-columns: 56px 1fr;
		gap: 1.1rem;
		padding: 1.15rem 0;
		border-bottom: 1px solid var(--border-default);
	}

	.steps li:last-child {
		border-bottom: 0;
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

	/* Note */
	.note {
		margin: 2.75rem 0 0;
		max-width: 780px;
		padding: 1.1rem 1.3rem;
		background-color: var(--color-chalk);
		border-left: 4px solid var(--color-brand-primary);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-small);
		line-height: 1.65;
		color: var(--color-steel);
	}

	.note strong {
		color: var(--color-iron);
	}

	/* CTA band */
	.cta-band {
		position: relative;
		background-color: var(--color-iron);
		padding: 3rem 0;
	}

	.cta-band::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 6px;
		background: var(--mondrian-rule);
	}

	.cta-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
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
		gap: 0.85rem;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.hero-grid {
			grid-template-columns: 1fr;
		}

		.hero-media {
			order: -1;
		}

		.photo-frame {
			aspect-ratio: 16 / 9;
		}

		.split-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.btn {
			transition: none;
		}
	}
</style>
