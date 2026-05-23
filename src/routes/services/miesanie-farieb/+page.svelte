<script lang="ts">
	import { contact } from '$lib/site';
</script>

<svelte:head>
	<title>Miešanie farieb – Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Tónovanie interiérových a fasádnych farieb a omietok podľa vzorkovníkov RAL, NCS a ďalších."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/services" class="back-link">← Späť na služby</a>
		<h1>Miešanie farieb</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Priamo na predajni Vám natónujeme farby a omietky do akéhokoľvek odtieňa. Pracujeme
			s profesionálnym tónovacím systémom, ktorý zaručuje presné a stále výsledky aj pri
			doobjednávke neskôr.
		</p>

		<h2>Čo tónujeme</h2>
		<ul class="bullets">
			<li>Interiérové farby – disperzné, latexové, umývateľné</li>
			<li>Fasádne farby – silikónové, silikátové, akrylátové</li>
			<li>Tenkovrstvové omietky pre fasády a zatepľovacie systémy</li>
			<li>Lazúry, oleje a laky na drevo</li>
			<li>Špeciálne nátery – antikorózne, žiaruvzdorné, na betón</li>
		</ul>

		<h2>Podľa akých vzorkovníkov</h2>
		<ul class="bullets">
			<li>RAL Classic, RAL Design</li>
			<li>NCS (Natural Color System)</li>
			<li>Vzorkovníky výrobcov – Baumit, Caparol, Weber, JUB, Primalex a ďalšie</li>
			<li>Vlastná vzorka, ktorú prinesiete – látka, plast, kúsok starého náteru</li>
		</ul>

		<h2>Ako si farbu nechať natónovať</h2>
		<ol class="steps">
			<li>
				Vyberte si požadovaný odtieň zo vzorkovníka u nás na predajni alebo si ho pripravte
				vopred (kód odtieňa, vzorkovník).
			</li>
			<li>
				Povedzte nám, akú farbu chcete tónovať a v akom množstve – navrhneme vhodný produkt
				a balenie.
			</li>
			<li>
				Tónovanie štandardne trvá niekoľko minút a farbu si odnášate hneď so sebou.
			</li>
		</ol>

		<p class="note">
			<strong>Tip:</strong> Pri väčších plochách odporúčame natónovať si celé množstvo naraz
			z jednej šarže – aj minimálne rozdiely medzi šaržami môžu byť na stene viditeľné.
		</p>

		<div class="cta-box">
			<p class="cta-text">Príďte si po farbu</p>
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

	.note {
		margin: 2rem 0 0;
		padding: 1rem 1.25rem;
		background-color: var(--surface-alt);
		border-radius: var(--radius-sm);
		font-size: 0.95rem;
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
</style>
