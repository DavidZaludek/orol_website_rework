<script lang="ts">
	import { contact } from '$lib/site';

	type Supplier = { name: string; logo: string; href: string };

	const suppliers: Supplier[] = [];
</script>

<svelte:head>
	<title>Okná – Produkty – Stavebniny Orol</title>
	<meta
		name="description"
		content="Plastové, hliníkové aj drevené okná, dvere a strešné okná na mieru vrátane zamerania a montáže."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/products" class="back-link">← Späť na produkty</a>
		<h1>Okná</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Okná a dvere na mieru od overených slovenských a európskych výrobcov. Zabezpečíme
			zameranie, výrobu aj odbornú montáž vrátane zapracovania ostení a finálnej úpravy.
		</p>

		<h2>Ponúkame</h2>
		<ul class="bullets">
			<li>Plastové okná v rôznych profilových systémoch</li>
			<li>Hliníkové okná a fasádne systémy</li>
			<li>Drevené a drevohliníkové okná</li>
			<li>Vchodové a interiérové dvere</li>
			<li>Strešné okná a svetlovody</li>
			<li>Parapety, žalúzie, sieťky proti hmyzu</li>
		</ul>

		<h2>Naši dodávatelia</h2>
		<p class="suppliers-note">
			Spolupracujeme so slovenskými aj európskymi výrobcami okien. Konkrétny profilový systém,
			zasklenie aj farbu prispôsobíme Vašim požiadavkám a architektúre domu.
		</p>

		{#if suppliers.length > 0}
			<ul class="supplier-grid">
				{#each suppliers as supplier (supplier.name)}
					<li>
						<a
							href={supplier.href}
							class="supplier-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={supplier.logo}
								alt={supplier.name}
								class="supplier-logo"
								loading="lazy"
							/>
						</a>
					</li>
				{/each}
			</ul>
		{/if}

		<div class="cta-box">
			<p class="cta-text">Záujem o okná alebo dvere?</p>
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

	.suppliers-note {
		margin: 0;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-muted);
		font-style: italic;
	}

	.supplier-grid {
		list-style: none;
		margin: 1.5rem 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 1rem;
	}

	.supplier-link {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 80px;
		padding: 1rem;
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.supplier-link:hover {
		border-color: var(--color-brand-primary);
		box-shadow: var(--shadow-card);
	}

	.supplier-logo {
		max-width: 100%;
		max-height: 50px;
		object-fit: contain;
		display: block;
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
