<script lang="ts">
	import heroPhoto from '$lib/assets/services/kontakty-na-remeselnikov.jpg';
	import { contact } from '$lib/site';
	import { serviceIcons } from '$lib/icons';
	import { reveal } from '$lib/reveal';

	const icon = serviceIcons['/services/kontakty-na-remeselnikov'] ?? [];

	const tradeCategories = [
		{
			name: 'Stavitelia a stavebné firmy',
			description: 'Hrubá stavba, omietky, zatepľovanie, kompletné dodávky rodinných domov na kľúč.'
		},
		{
			name: 'Murári a betonári',
			description: 'Murovanie, debnenie, betonáže, oporné múry a základové dosky.'
		},
		{
			name: 'Tesári a pokrývači',
			description:
				'Krovy, drevené konštrukcie, krytiny – plech, škridla, šindel, klampiarske práce.'
		},
		{
			name: 'Kúrenári, inštalatéri a elektrikári',
			description: 'Rozvody vody, kúrenia, plynu a elektroinštalácie vrátane revíznych správ.'
		},
		{
			name: 'Sadrokartonisti a maliari',
			description: 'Suchá výstavba, podhľady, maliarske a natieračské práce, dekoratívne stierky.'
		},
		{
			name: 'Obkladači a podlahári',
			description: 'Keramické obklady a dlažby, liate podlahy, drevené a vinylové podlahy.'
		},
		{
			name: 'Stolári, zámočníci a živnostníci',
			description: 'Interiérové dvere, kuchyne, vstavané skrine, kovové konštrukcie, brány a ploty.'
		},
		{
			name: 'Architekti a projektanti',
			description:
				'Architektonické štúdie, projektové dokumentácie pre stavebné povolenie aj realizáciu.'
		}
	] as const;

	const steps = [
		'Povedzte nám, akú prácu potrebujete spraviť a v akom rozsahu.',
		'Z našej siete odporúčame remeselníkov, ktorí majú voľnú kapacitu a robia kvalitne v danej profesii.',
		'Kontakt si od nás vypýtate – zvyšok dohadujete priamo s remeselníkom.'
	];
</script>

<svelte:head>
	<title>Kontakty na remeselníkov – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Odporúčame overených staviteľov, živnostníkov, remeselníkov a architektov z regiónu Liptov."
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
			<span class="eyebrow">Služby · Remeselníci</span>
			<h1 class="hero-title hero-title--long">
				Kontakty na staviteľov, živnostníkov,
				<span class="hero-accent">remeselníkov a architektov.</span>
			</h1>
			<p class="hero-lead">
				Za viac ako 25 rokov pôsobenia v regióne sme si vybudovali sieť spoľahlivých remeselníkov,
				ktorých prácu poznáme. Radi Vás s nimi prepojíme – či už hľadáte celú stavebnú firmu alebo
				iba šikovného murára na drobnú úpravu.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
				<a href="/contact" class="btn btn--ghost">Kontaktné údaje</a>
			</div>
		</div>
		<div class="hero-media">
			<div class="photo-frame">
				<img src={heroPhoto} alt="Remeselníci pri práci na stavbe" />
				<span class="photo-caption">Viac ako 25 rokov v regióne</span>
			</div>
		</div>
	</div>
</section>

<!-- Trades -->
<section class="section section--blueprint">
	<div class="container">
		<header class="section-head" data-reveal {@attach reveal()}>
			<div>
				<span class="eyebrow">Profesie</span>
				<h2 class="section-title">Aké profesie odporúčame</h2>
			</div>
		</header>
		<div class="trade-grid">
			{#each tradeCategories as trade, i (trade.name)}
				<div class="trade-card" data-reveal {@attach reveal(Math.min(i * 45, 270))}>
					<h3 class="trade-name">{trade.name}</h3>
					<p class="trade-text">{trade.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Steps + note -->
<section class="section">
	<div class="container split-grid">
		<div data-reveal {@attach reveal()}>
			<span class="eyebrow">Postup</span>
			<h2 class="section-title section-title--sm">Ako Vám pomôžeme</h2>
			<ol class="steps">
				{#each steps as step, i (step)}
					<li>
						<span class="step-no">{i + 1}</span>
						<p class="step-text">{step}</p>
					</li>
				{/each}
			</ol>
		</div>
		<div data-reveal {@attach reveal(120)}>
			<p class="note">
				<strong>Upozornenie:</strong> Odporúčaní remeselníci nie sú zamestnancami Stavebnín Orol – ide
				o nezávislých živnostníkov a firmy. Za kvalitu ich práce, cenu a dodržanie termínu zodpovedajú
				výlučne oni sami.
			</p>
		</div>
	</div>
</section>

<!-- CTA band -->
<section class="cta-band">
	<div class="container cta-inner">
		<h2 class="cta-title">Hľadáte remeselníka?</h2>
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

	.hero-title--long {
		font-size: var(--font-size-display-lg);
		line-height: 1.05;
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

	/* Trade grid */
	.trade-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 0.85rem;
	}

	.trade-card {
		padding: 1.25rem 1.4rem;
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
	}

	.trade-card::before {
		content: '';
		display: block;
		width: 24px;
		height: 3px;
		background-color: var(--color-brand-primary);
		margin-bottom: 0.75rem;
	}

	.trade-name {
		margin: 0 0 0.35rem;
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-iron);
	}

	.trade-text {
		margin: 0;
		font-size: var(--font-size-small);
		line-height: 1.6;
		color: var(--text-muted);
	}

	/* Split section */
	.split-grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: clamp(2rem, 5vw, 4.5rem);
		align-items: start;
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
		margin: 0;
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
