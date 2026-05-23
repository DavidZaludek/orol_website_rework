<script lang="ts">
	import { contact } from '$lib/site';
</script>

<svelte:head>
	<title>Doprava materiálu – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Doprava stavebného materiálu vlastnými vozidlami s hydraulickou rukou priamo na stavbu."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/services" class="back-link">← Späť na služby</a>
		<h1>Doprava materiálu</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Stavebný materiál Vám dovezieme priamo na stavbu vlastnými vozidlami. Vozový park nám
			umožňuje pružne reagovať na malé aj veľké objednávky – od pár vriec až po kamión paliet.
		</p>

		<h2>Vozový park</h2>
		<ul class="bullets">
			<li>Nákladné vozidlá s hydraulickou rukou pre samostatnú vykládku paliet</li>
			<li>Sklápače pre sypké materiály – piesok, štrk, betónová zmes</li>
			<li>Dodávky pre menšie zákazky a expresné dodanie</li>
		</ul>

		<h2>Oblasť dopravy</h2>
		<p>
			Štandardne zabezpečujeme dopravu v rámci Liptovského Mikuláša a okolitých obcí. Po dohode
			Vám materiál dovezieme aj do vzdialenejších lokalít v rámci celého Žilinského kraja
			a susediacich okresov.
		</p>

		<h2>Cena dopravy</h2>
		<ul class="bullets">
			<li>Cena sa odvíja od vzdialenosti, váhy nákladu a použitého vozidla</li>
			<li>Pri väčších objednávkach materiálu vieme dopravu výrazne zvýhodniť</li>
			<li>Presnú cenu Vám uvedieme v cenovej ponuke alebo telefonicky</li>
		</ul>

		<h2>Ako si dopravu objednať</h2>
		<ol class="steps">
			<li>Pri objednávke materiálu uveďte adresu stavby a preferovaný termín dodania.</li>
			<li>Skontrolujeme dostupnosť vozidla a potvrdíme termín závozu.</li>
			<li>Vodič Vás vopred kontaktuje pred príchodom na stavbu.</li>
		</ol>

		<div class="cta-box">
			<p class="cta-text">Objednať dopravu</p>
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

	.body-section p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.75;
		color: var(--text-on-light);
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
