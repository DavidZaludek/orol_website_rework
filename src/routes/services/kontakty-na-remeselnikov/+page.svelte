<script lang="ts">
	import { contact } from '$lib/site';

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
</script>

<svelte:head>
	<title>Kontakty na remeselníkov – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Odporúčame overených staviteľov, živnostníkov, remeselníkov a architektov z regiónu Liptov."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/services" class="back-link">← Späť na služby</a>
		<h1>Kontakty na staviteľov, živnostníkov, remeselníkov a architektov</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Za viac ako 25 rokov pôsobenia v regióne sme si vybudovali sieť spoľahlivých remeselníkov,
			ktorých prácu poznáme. Radi Vás s nimi prepojíme – či už hľadáte celú stavebnú firmu alebo iba
			šikovného murára na drobnú úpravu.
		</p>

		<h2>Aké profesie odporúčame</h2>
		<div class="trades-grid">
			{#each tradeCategories as trade (trade.name)}
				<div class="trade-card">
					<h3 class="trade-name">{trade.name}</h3>
					<p class="trade-description">{trade.description}</p>
				</div>
			{/each}
		</div>

		<h2>Ako Vám pomôžeme</h2>
		<ol class="steps">
			<li>Povedzte nám, akú prácu potrebujete spraviť a v akom rozsahu.</li>
			<li>
				Z našej siete odporúčame remeselníkov, ktorí majú voľnú kapacitu a robia kvalitne v danej
				profesii.
			</li>
			<li>Kontakt si od nás vypýtate – zvyšok dohadujete priamo s remeselníkom.</li>
		</ol>

		<p class="note">
			<strong>Upozornenie:</strong> Odporúčaní remeselníci nie sú zamestnancami Stavebnín Orol – ide o
			nezávislých živnostníkov a firmy. Za kvalitu ich práce, cenu a dodržanie termínu zodpovedajú výlučne
			oni sami.
		</p>

		<div class="cta-box">
			<p class="cta-text">Hľadáte remeselníka?</p>
			<div class="cta-actions">
				<a href={contact.phoneHref} class="cta-button primary">{contact.phone}</a>
				<a href="/contact" class="cta-button secondary">Kontaktné údaje</a>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: var(--container-narrow);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	.hero {
		background-color: var(--color-brand-dark);
		padding: var(--space-hero-y-compact) 0 var(--space-hero-y);
	}

	.back-link {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--color-brand-hover);
	}

	.hero h1 {
		margin: 0;
		font-size: clamp(1.5rem, 3.5vw, 2.25rem);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
		line-height: 1.25;
	}

	.body-section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		background-color: var(--color-white);
	}

	.lead {
		margin: 0 0 2.5rem;
		font-size: 1.1rem;
		line-height: 1.75;
		color: var(--text-on-light);
	}

	h2 {
		margin: 2.5rem 0 1.25rem;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-brand-dark);
	}

	.trades-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.trade-card {
		padding: 1.25rem 1.4rem;
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-left: 3px solid var(--color-brand-primary);
		border-radius: var(--radius-sm);
	}

	.trade-name {
		margin: 0 0 0.4rem;
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--color-iron);
	}

	.trade-description {
		margin: 0;
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.steps {
		margin: 0;
		padding-left: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.steps li {
		font-size: 1rem;
		color: var(--text-on-light);
		line-height: 1.65;
	}

	.steps li::marker {
		font-weight: 700;
		color: var(--color-brand-primary);
	}

	.note {
		margin: 2rem 0 0;
		padding: 1rem 1.25rem;
		background-color: var(--surface-alt);
		border-radius: var(--radius-sm);
		font-size: 0.9rem;
		line-height: 1.65;
		color: var(--text-on-light);
	}

	.cta-box {
		margin-top: 3rem;
		padding: 1.75rem 1.75rem;
		background-color: var(--surface-alt);
		border-left: 4px solid var(--color-brand-primary);
		border-radius: var(--radius-sm);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.cta-text {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--color-iron);
	}

	.cta-actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.cta-button {
		display: inline-block;
		padding: 0.65rem 1.25rem;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: var(--radius-sm);
		transition:
			background-color var(--transition-fast),
			color var(--transition-fast);
	}

	.cta-button.primary {
		background-color: var(--color-brand-primary);
		color: var(--color-white);
	}

	.cta-button.primary:hover {
		background-color: var(--color-brand-hover);
	}

	.cta-button.secondary {
		background-color: transparent;
		color: var(--color-brand-primary);
		border: 1px solid var(--color-brand-primary);
	}

	.cta-button.secondary:hover {
		background-color: var(--color-brand-primary);
		color: var(--color-white);
	}

	@media (max-width: 700px) {
		.trades-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
