<script lang="ts">
	const products = [
		{
			href: '/products/hruba-stavba',
			title: 'Hrubá stavba',
			description:
				'Tehly, tvárnice, preklady, cement, vápno a všetko potrebné pre hrubú stavbu rodinného domu aj väčších objektov.'
		},
		{
			href: '/products/suche-zmesy-malty-omietky',
			title: 'Suché zmesy, malty a omietky',
			description:
				'Murovacie a omietkové zmesi, lepidlá, samonivelačné stierky a špeciálne malty pre interiér aj exteriér.'
		},
		{
			href: '/products/tepelne-izolacie',
			title: 'Tepelné izolácie',
			description:
				'Polystyrény, minerálne vlny a izolácie pre fasády, strechy, podlahy aj stropy vrátane systémových doplnkov.'
		},
		{
			href: '/products/fasadne-a-interierove-farby',
			title: 'Fasádne omietky, fasádne a interiérové farby',
			description:
				'Tenkovrstvové fasádne omietky, fasádne aj interiérové farby, penetrácie a tónovanie priamo na predajni.'
		},
		{
			href: '/products/stresne-krytiny',
			title: 'Strešné krytiny',
			description:
				'Pálené aj betónové škridly, plechové krytiny, asfaltové šindle a kompletný systém doplnkov.'
		},
		{
			href: '/products/hydroizolacia',
			title: 'Hydroizolácia',
			description:
				'Asfaltové pásy, fólie a tekuté hydroizolácie pre základy, ploché strechy, balkóny a kúpeľne.'
		},
		{
			href: '/products/stavebna-chemia',
			title: 'Stavebná chémia',
			description:
				'Stavebná chémia – PU peny, silikóny, tmely, lepidlá, prípravky proti vlhkosti aj plesniam.'
		},
		{
			href: '/products/dlazby-betonove-tvarnice',
			title: 'Dlažby a betónové tvárnice',
			description:
				'Zámková dlažba, obrubníky, plotové tvárnice a betónové prvky pre exteriér a záhradnú architektúru.'
		},
		{
			href: '/products/betonarska-ocel',
			title: 'Betonárska oceľ',
			description:
				'Betonárska výstuž, kari siete, strmienky a viazací drôt pre základy, stropy aj armovanie konštrukcií.'
		},
		{
			href: '/products/okna',
			title: 'Okná',
			description:
				'Plastové, hliníkové aj drevené okná, dvere a strešné okná na mieru – vrátane zamerania a montáže.'
		},
		{
			href: '/products/kanalizacia-voda-sanita',
			title: 'Kanalizácia, voda a sanita',
			description:
				'Rúry a tvarovky pre kanalizáciu a vodovod, šachty, žumpy a sanitárne vybavenie kúpeľne.'
		},
		{
			href: '/products/naradie-a-doplnky',
			title: 'Náradie a doplnky',
			description:
				'Ručné aj elektrické náradie, murárske pomôcky, spojovací materiál a ochranné pracovné prostriedky.'
		}
	] as const;
</script>

<svelte:head>
	<title>Produkty – Stavebniny Orol</title>
	<meta
		name="description"
		content="Prehľad sortimentu Stavebniny Orol – hrubá stavba, izolácie, omietky, strechy, farby, okná a ďalšie kategórie stavebného materiálu."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Produkty</h1>
		<p class="hero-lead">
			Kompletný sortiment stavebného materiálu pre rodinné domy, rekonštrukcie aj väčšie stavby.
			Pozrite si jednotlivé kategórie a overených dodávateľov, s ktorými spolupracujeme.
		</p>
	</div>
</section>

<section class="list-section">
	<div class="container">
		<ol class="product-list">
			{#each products as product, i (product.href)}
				<li class="product-item">
					<a href={product.href} class="product-card">
						<span class="product-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
						<div class="product-body">
							<h2 class="product-title">{product.title}</h2>
							<p class="product-description">{product.description}</p>
						</div>
						<span class="product-arrow" aria-hidden="true">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</span>
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	.hero {
		background-color: var(--color-brand-dark);
		padding: var(--space-hero-y) 0;
	}

	.hero h1 {
		margin: 0;
		font-size: var(--font-size-h1);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
	}

	.hero-lead {
		margin: 0.75rem 0 0;
		font-size: var(--font-size-body);
		line-height: 1.7;
		color: var(--color-concrete);
		max-width: 60ch;
	}

	.list-section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		background-color: var(--color-white);
	}

	.product-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.product-card {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem 1.75rem;
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-left: 4px solid var(--color-brand-primary);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		box-shadow: var(--shadow-card);
		transition:
			transform var(--transition-fast),
			box-shadow var(--transition-fast),
			border-color var(--transition-fast);
	}

	.product-card:hover {
		transform: translateX(4px);
		box-shadow: var(--shadow-card-hover);
		border-left-color: var(--color-brand-hover);
	}

	.product-index {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--color-brand-primary);
		font-variant-numeric: tabular-nums;
		letter-spacing: 0.05em;
	}

	.product-body {
		min-width: 0;
	}

	.product-title {
		margin: 0 0 0.35rem;
		font-size: var(--font-size-h3);
		font-weight: 700;
		color: var(--color-iron);
		line-height: 1.3;
	}

	.product-description {
		margin: 0;
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.product-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-brand-primary);
		transition: transform var(--transition-fast);
	}

	.product-card:hover .product-arrow {
		transform: translateX(4px);
		color: var(--color-brand-hover);
	}

	@media (max-width: 600px) {
		.product-card {
			grid-template-columns: auto 1fr;
			gap: 1rem;
			padding: 1.25rem 1.25rem;
		}

		.product-arrow {
			display: none;
		}

		.product-title {
			font-size: 1.1rem;
		}
	}
</style>
