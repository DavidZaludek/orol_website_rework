<script lang="ts">
	import { contact } from '$lib/site';
</script>

<svelte:head>
	<title>Požičovňa náradia – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Prenájom stavebného a remeselníckeho náradia – miešačky, lešenia, búracie kladivá a ďalšie."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/services" class="back-link">← Späť na služby</a>
		<h1>Požičovňa náradia</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Krátkodobý aj dlhodobý prenájom kvalitného stavebného a remeselníckeho náradia. Náradie
			pravidelne servisujeme, takže si môžete byť istí, že každý kus je pripravený na okamžité
			použitie.
		</p>

		<h2>Čo si u nás môžete požičať</h2>
		<ul class="bullets">
			<li>Stavebné miešačky a kontinuálne miešačky na omietky</li>
			<li>Búracie a vŕtacie kladivá, uhlové brúsky</li>
			<li>Vibračné dosky, ubíjadlá a stavebné valce</li>
			<li>Lešenárske systémy a pojazdné lešenia</li>
			<li>Stavebné vysávače a odsávače prachu</li>
			<li>Laserové nivelačky a meracie prístroje</li>
			<li>Brúsky na betón, rezačky dlažby, pílky na drevo</li>
		</ul>

		<h2>Podmienky prenájmu</h2>
		<ul class="bullets">
			<li>Prenájom na hodiny, deň, víkend alebo týždeň</li>
			<li>Pri preberaní platíte vratnú zálohu vo výške podľa typu náradia</li>
			<li>Predložte občiansky preukaz a ďalší doklad totožnosti</li>
			<li>Náradie vraciate vyčistené a v stave, v akom ste ho prevzali</li>
		</ul>

		<h2>Ako si náradie požičať</h2>
		<ol class="steps">
			<li>Zavolajte nám alebo sa zastavte na predajni a overte dostupnosť konkrétneho kusa.</li>
			<li>
				Rezervujeme Vám náradie na vybraný termín – pri vyzdvihnutí si prevezmete náradie a
				podpíšete jednoduchú zmluvu o prenájme.
			</li>
			<li>Po skončení prenájmu vraciate náradie a obdržíte vratnú zálohu späť.</li>
		</ol>

		<div class="cta-box">
			<p class="cta-text">Overiť dostupnosť náradia</p>
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
		font-size: var(--font-size-h1-compact);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
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
		margin: 2.5rem 0 1rem;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-brand-dark);
	}

	.bullets {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.bullets li {
		font-size: 1rem;
		color: var(--text-on-light);
		line-height: 1.65;
	}

	.bullets li::marker {
		color: var(--color-brand-primary);
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
</style>
