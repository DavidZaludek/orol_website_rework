<script lang="ts">
	const services = [
		{
			href: '/services/poradenstvo',
			title: 'Poradenstvo',
			description:
				'Odborné poradenstvo pri výbere stavebných materiálov, technológií a riešení pre hrubú stavbu, interiér aj exteriér.'
		},
		{
			href: '/services/stavbyveduci',
			title: 'Stavbyvedúci',
			description:
				'Sprostredkovanie skúsených stavbyvedúcich s certifikátom, ktorí dohliadnu na priebeh stavby a dodržiavanie technologických postupov.'
		},
		{
			href: '/services/cenova-ponuka',
			title: 'Vypracovanie cenovej ponuky',
			description:
				'Bezplatné vypracovanie podrobnej cenovej ponuky na materiál podľa Vášho výkazu výmer alebo projektovej dokumentácie.'
		},
		{
			href: '/services/doprava',
			title: 'Doprava materiálu',
			description:
				'Doprava stavebného materiálu priamo na stavbu vlastnými vozidlami s hydraulickou rukou v rámci celého regiónu.'
		},
		{
			href: '/services/pozicovna-naradia',
			title: 'Požičovňa náradia',
			description:
				'Krátkodobý aj dlhodobý prenájom stavebného a remeselníckeho náradia – miešačky, lešenia, búracie kladivá a ďalšie.'
		},
		{
			href: '/services/miesanie-farieb',
			title: 'Miešanie farieb',
			description:
				'Tónovanie interiérových aj fasádnych farieb a omietok podľa vzorkovníkov RAL, NCS a ďalších priamo na predajni.'
		},
		{
			href: '/services/kontakty-na-remeselnikov',
			title: 'Kontakty na staviteľov, živnostníkov, remeselníkov a architektov',
			description:
				'Odporúčame overených odborníkov z regiónu – murárov, tesárov, klampiarov, kúrenárov, architektov a ďalších remeselníkov.'
		}
	] as const;
</script>

<svelte:head>
	<title>Služby – Stavebniny Orol</title>
	<meta
		name="description"
		content="Prehľad služieb Stavebniny Orol – poradenstvo, doprava materiálu, požičovňa náradia, miešanie farieb a ďalšie."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Služby</h1>
		<p class="hero-lead">
			Okrem predaja stavebného materiálu Vám ponúkame aj komplexné služby, ktoré uľahčia
			realizáciu Vašej stavby od prvého nákresu až po odovzdanie.
		</p>
	</div>
</section>

<section class="list-section">
	<div class="container">
		<ol class="service-list">
			{#each services as service, i (service.href)}
				<li class="service-item">
					<a href={service.href} class="service-card">
						<span class="service-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
						<div class="service-body">
							<h2 class="service-title">{service.title}</h2>
							<p class="service-description">{service.description}</p>
						</div>
						<span class="service-arrow" aria-hidden="true">
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

	.service-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.service-card {
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

	.service-card:hover {
		transform: translateX(4px);
		box-shadow: var(--shadow-card-hover);
		border-left-color: var(--color-brand-hover);
	}

	.service-index {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--color-brand-primary);
		font-variant-numeric: tabular-nums;
		letter-spacing: 0.05em;
	}

	.service-body {
		min-width: 0;
	}

	.service-title {
		margin: 0 0 0.35rem;
		font-size: var(--font-size-h3);
		font-weight: 700;
		color: var(--color-iron);
		line-height: 1.3;
	}

	.service-description {
		margin: 0;
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.service-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-brand-primary);
		transition: transform var(--transition-fast);
	}

	.service-card:hover .service-arrow {
		transform: translateX(4px);
		color: var(--color-brand-hover);
	}

	@media (max-width: 600px) {
		.service-card {
			grid-template-columns: auto 1fr;
			gap: 1rem;
			padding: 1.25rem 1.25rem;
		}

		.service-arrow {
			display: none;
		}

		.service-title {
			font-size: 1.1rem;
		}
	}
</style>
