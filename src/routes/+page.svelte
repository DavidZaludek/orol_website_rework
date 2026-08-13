<script lang="ts">
	import heroPhoto from '$lib/assets/gallery/IMG_8605.jpg';
	import brickPhoto from '$lib/assets/gallery/IMG_2264.jpg';
	import steelSitePhoto from '$lib/assets/gallery/IMG_3214.jpg';
	import screedPhoto from '$lib/assets/gallery/IMG_3239.jpg';
	import toolsPhoto from '$lib/assets/gallery/IMG_2228.jpg';
	import ownerPhoto from '$lib/assets/koloman_zaludek.jpg';

	import svcCenova from '$lib/assets/services/cenova-ponuka.jpg';
	import svcDoprava from '$lib/assets/services/doprava.jpg';
	import svcPoradenstvo from '$lib/assets/services/poradenstvo.jpg';
	import svcStavbyveduci from '$lib/assets/services/stavbyveduci.jpg';
	import svcFarby from '$lib/assets/services/miesanie-farieb.jpg';
	import svcRemeselnici from '$lib/assets/services/kontakty-na-remeselnikov.jpg';

	import prodHruba from '$lib/assets/products/hruba-stavba-generated.jpg';
	import prodZmesy from '$lib/assets/products/suche-zmesy-malty-omietky-generated.jpg';
	import prodIzolacie from '$lib/assets/products/tepelne-izolacie-generated.jpg';
	import prodFarby from '$lib/assets/products/fasadne-a-interierove-farby-generated.jpg';
	import prodKrytiny from '$lib/assets/products/stresne-krytiny-generated.jpg';
	import prodHydroizolacia from '$lib/assets/products/hydroizolacia-generated.jpg';
	import prodChemia from '$lib/assets/products/stavebna-chemia-generated.jpg';
	import prodDlazby from '$lib/assets/products/dlazby-betonove-tvarnice-generated.jpg';
	import prodOcel from '$lib/assets/products/betonarska-ocel-generated.jpg';
	import prodOkna from '$lib/assets/products/okna-a-dvere-generated.jpg';
	import prodSanita from '$lib/assets/products/kanalizacia-voda-sanita-generated.jpg';
	import prodNaradie from '$lib/assets/products/naradie-a-doplnky-generated.jpg';

	import { fade } from 'svelte/transition';
	import { company, contact, products, services } from '$lib/site';
	import { reveal } from '$lib/reveal';
	import { partners } from '$lib/partners';
	import { categoryIcons, serviceIcons } from '$lib/icons';

	// Požičovňa náradia is the featured service; the main offer row follows.
	const featuredService = services.find((s) => s.href === '/services/pozicovna-naradia');
	const mainServiceOrder = [
		'/services/cenova-ponuka',
		'/services/doprava',
		'/services/poradenstvo',
		'/services/stavbyveduci'
	];
	const mainServices = mainServiceOrder
		.map((href) => services.find((s) => s.href === href))
		.filter((s): s is (typeof services)[number] => s !== undefined);
	const secondaryServices = services.filter(
		(s) => s.href !== '/services/pozicovna-naradia' && !mainServiceOrder.includes(s.href)
	);

	// Monochrome background photos for the service tiles (own photos from the
	// old site's gallery).
	const serviceBg: Record<string, string> = {
		'/services/cenova-ponuka': svcCenova,
		'/services/doprava': svcDoprava,
		'/services/poradenstvo': svcPoradenstvo,
		'/services/stavbyveduci': svcStavbyveduci,
		'/services/miesanie-farieb': svcFarby,
		'/services/kontakty-na-remeselnikov': svcRemeselnici
	};

	const productBg: Record<string, string> = {
		'/products/hruba-stavba': prodHruba,
		'/products/suche-zmesy-malty-omietky': prodZmesy,
		'/products/tepelne-izolacie': prodIzolacie,
		'/products/fasadne-a-interierove-farby': prodFarby,
		'/products/stresne-krytiny': prodKrytiny,
		'/products/hydroizolacia': prodHydroizolacia,
		'/products/stavebna-chemia': prodChemia,
		'/products/dlazby-betonove-tvarnice': prodDlazby,
		'/products/betonarska-ocel': prodOcel,
		'/products/okna-a-dvere': prodOkna,
		'/products/kanalizacia-voda-sanita': prodSanita,
		'/products/naradie-a-doplnky': prodNaradie
	};

	let { data } = $props();

	let promoIndex = $state(0);
	let heroIndex = $state(0);

	const heroSlides = [
		{
			src: heroPhoto,
			caption: 'Vlastná doprava až na stavbu',
			alt: 'Nákladné auto Stavebnín Orol s hydraulickou rukou pri vykládke materiálu'
		},
		{
			src: brickPhoto,
			caption: 'Tehly a murovací materiál',
			alt: 'Vzorky tehál a murovacieho materiálu pred predajňou'
		},
		{
			src: steelSitePhoto,
			caption: 'Od základov po strechu',
			alt: 'Betonárska výstuž pripravená na stavbe'
		},
		{
			src: screedPhoto,
			caption: 'Materiál, ktorý stavia',
			alt: 'Strojové hladenie betónového poteru'
		}
	];

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(() => {
			heroIndex = (heroIndex + 1) % heroSlides.length;
		}, 5000);
		return () => clearInterval(id);
	});

	$effect(() => {
		if (data.promotions.length <= 1) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const id = setInterval(() => {
			promoIndex = (promoIndex + 1) % data.promotions.length;
		}, 5000);
		return () => clearInterval(id);
	});

	function formatDate(value: string): string {
		return new Date(value).toLocaleDateString('sk-SK', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	// Bento rows of four — on desktop the hovered tile flex-expands within its
	// row; below 700px the rows flatten into one horizontal snap carousel.
	const bentoRows = [products.slice(0, 4), products.slice(4, 8), products.slice(8, 12)];

	const heroHighlights = [
		'Doprava s hydraulickou rukou',
		'Miešanie farieb na počkanie',
		'Požičovňa náradia',
		'Bezplatná cenová ponuka'
	];

	// Cycling supplier logos per category tile, resolved from the partner list.
	const partnerByName = new Map(partners.map((p) => [p.name, p]));
	const supplierLogos: Record<string, { name: string; logo: string; light?: boolean }[]> =
		Object.fromEntries(
			products.map((p) => [
				p.href,
				p.suppliers
					.map((name: string) => partnerByName.get(name))
					.filter((s) => s !== undefined)
					.map((s) => ({ name: s.name, logo: s.logo, light: s.light }))
			])
		);

	const stats = [
		{ value: company.foundedYear, label: 'rok založenia' },
		{ value: products.length, label: 'kategórií materiálu' },
		{ value: partners.length, label: 'partnerských značiek' },
		{ value: services.length, label: 'služieb pre stavebníkov' }
	];

	const motto =
		'Spokojný zákazník je zárukou prosperity firmy. Prosperujúca firma je zárukou spokojnosti pracovníkov. Spokojný a aktívny pracovník je zárukou spokojnosti zákazníkov.';
</script>

<svelte:head>
	<title>Stavebniny Orol – stavebný materiál a služby</title>
	<meta
		name="description"
		content="Stavebniny Orol – kompletný sortiment stavebného materiálu, poradenstvo, doprava a ďalšie služby pre Vašu stavbu."
	/>
</svelte:head>

<!-- 1. Hero — Mondrian composition -->
<section class="hero" aria-label="Stavebniny Orol">
	<div class="hero-mondrian">
		<div class="hero-copy cell">
			<span class="eyebrow">Stavebniny · Liptovský Mikuláš</span>
			<h1 class="hero-title">
				Všetko pre<br />vašu <span class="hero-accent">stavbu.</span>
			</h1>
			<p class="hero-lead">
				Kompletný sortiment stavebného materiálu, odborné poradenstvo a vlastná doprava s
				hydraulickou rukou priamo na vašu stavbu.
			</p>
			<div class="hero-actions">
				<a href="/quote" class="btn btn--primary">Cenová ponuka</a>
				<a href={contact.phoneHref} class="btn btn--ghost">{contact.phone}</a>
			</div>
			<ul class="hero-highlights">
				{#each heroHighlights as item (item)}
					<li>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div class="hero-media cell">
			{#each heroSlides as slide, i (slide.src)}
				<img
					src={slide.src}
					alt={slide.alt}
					class="hero-photo-img"
					class:active={i === heroIndex}
					fetchpriority={i === 0 ? 'high' : undefined}
					loading={i === 0 ? undefined : 'lazy'}
					aria-hidden={i !== heroIndex ? 'true' : undefined}
				/>
			{/each}
			{#key heroIndex}
				<span class="hero-photo-caption" in:fade={{ duration: 300, delay: 450 }}>
					{heroSlides[heroIndex].caption}
				</span>
			{/key}
		</div>
		<div class="hero-acc hero-acc--yellow cell" aria-hidden="true"></div>
		<div class="hero-acc hero-acc--white cell" aria-hidden="true"></div>
		<div class="hero-acc hero-acc--red cell" aria-hidden="true"></div>
		<div class="hero-acc hero-acc--white2 cell" aria-hidden="true"></div>
		<div class="hero-acc hero-acc--blue cell" aria-hidden="true"></div>
	</div>
</section>

<!-- 2. Promo ticker -->
{#if data.promotions.length > 0}
	<section class="ticker" id="akcie" aria-label="Aktuálne akcie">
		<div class="container ticker-inner">
			<span class="ticker-chip">Akcia</span>
			{#key promoIndex}
				<a href="/promotions/{data.promotions[promoIndex].slug}" class="ticker-item">
					<strong>{data.promotions[promoIndex].title}</strong>
					{#if data.promotions[promoIndex].validUntil}
						<span class="ticker-valid">
							platí do {formatDate(data.promotions[promoIndex].validUntil)}
						</span>
					{/if}
				</a>
			{/key}
			<a href="/promotions" class="ticker-all">Všetky akcie →</a>
		</div>
	</section>
{/if}

<!-- 3. Services -->
<section class="section section--blueprint" id="sluzby" aria-label="Služby">
	<div class="services-grid">
		<div class="services-row services-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Služby</span>
				<h2 class="section-title">Viac než predajňa</h2>
			</header>
			<a href="/services" class="head-link-cell">Všetky služby →</a>
			<div class="head-acc head-acc--yellow" aria-hidden="true"></div>
		</div>
		{#if featuredService}
			<a href={featuredService.href} class="featured-cell" data-reveal {@attach reveal()}>
				<img src={toolsPhoto} alt="" class="featured-photo" loading="lazy" />
				<div class="featured-body">
					<svg class="featured-icon" viewBox="0 0 24 24" aria-hidden="true">
						{#each serviceIcons[featuredService.href] ?? [] as d (d)}
							<path {d} />
						{/each}
					</svg>
					<span class="featured-title">{featuredService.short}</span>
					<p class="featured-desc">{featuredService.description}</p>
					<span class="featured-cta">Pozrieť ponuku náradia →</span>
				</div>
			</a>
		{/if}
		<div class="services-row">
			{#each mainServices as service, i (service.href)}
				<a href={service.href} class="tile" data-reveal {@attach reveal(Math.min(i * 50, 300))}>
					{#if serviceBg[service.href]}
						<img src={serviceBg[service.href]} alt="" class="tile-bg" loading="lazy" />
					{/if}
					{#if serviceIcons[service.href]}
						<svg class="tile-icon" viewBox="0 0 24 24" aria-hidden="true">
							{#each serviceIcons[service.href] ?? [] as d (d)}
								<path {d} />
							{/each}
						</svg>
						{#if !serviceBg[service.href]}
							<svg class="tile-watermark" viewBox="0 0 24 24" aria-hidden="true">
								{#each serviceIcons[service.href] ?? [] as d (d)}
									<path {d} />
								{/each}
							</svg>
						{/if}
					{/if}
					<span class="tile-label">{service.short}</span>
					<span class="tile-desc">{service.description}</span>
					<svg class="tile-arrow" viewBox="0 0 24 24" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			{/each}
		</div>
		<div class="services-row">
			{#each secondaryServices as service, i (service.href)}
				<a href={service.href} class="tile" data-reveal {@attach reveal(Math.min(i * 50, 300))}>
					{#if serviceBg[service.href]}
						<img src={serviceBg[service.href]} alt="" class="tile-bg" loading="lazy" />
					{/if}
					{#if serviceIcons[service.href]}
						<svg class="tile-icon" viewBox="0 0 24 24" aria-hidden="true">
							{#each serviceIcons[service.href] ?? [] as d (d)}
								<path {d} />
							{/each}
						</svg>
						{#if !serviceBg[service.href]}
							<svg class="tile-watermark" viewBox="0 0 24 24" aria-hidden="true">
								{#each serviceIcons[service.href] ?? [] as d (d)}
									<path {d} />
								{/each}
							</svg>
						{/if}
					{/if}
					<span class="tile-label">{service.short}</span>
					<span class="tile-desc">{service.description}</span>
					<svg class="tile-arrow" viewBox="0 0 24 24" aria-hidden="true">
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</a>
			{/each}
			<div class="service-accent service-accent--yellow" aria-hidden="true"></div>
			<div class="service-accent service-accent--blue" aria-hidden="true"></div>
		</div>
	</div>
</section>

<!-- 4. Category bento -->
<section class="section" id="sortiment" aria-label="Sortiment">
	<div class="bento">
		<div class="bento-row bento-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Sortiment</span>
				<h2 class="section-title">Materiál na celú stavbu</h2>
				<p class="head-note">Od základov po strechu – 12 kategórií pod jednou strechou.</p>
			</header>
			<a href="/products" class="head-link-cell">Všetky produkty →</a>
			<div class="head-acc head-acc--yellow" aria-hidden="true"></div>
		</div>
		{#each bentoRows as row, r (r)}
			<div class="bento-row">
				{#each row as product, c (product.href)}
					{@const i = r * 4 + c}
					<a href={product.href} class="tile" data-reveal {@attach reveal(Math.min(i * 45, 360))}>
						<img src={productBg[product.href]} alt="" class="tile-bg" loading="lazy" />
						{#if categoryIcons[product.href]}
							<svg class="tile-icon" viewBox="0 0 24 24" aria-hidden="true">
								{#each categoryIcons[product.href] as d (d)}
									<path {d} />
								{/each}
							</svg>
						{/if}
						<span class="tile-label">{product.title}</span>
						<span class="tile-desc">{product.description}</span>
						{#if supplierLogos[product.href].length > 0}
							{@const logos = supplierLogos[product.href]}
							<span
								class="tile-logo-slot"
								aria-hidden="true"
								style="--marquee-t: {Math.max(logos.length * 3, 8)}s"
							>
								<span class="tile-logo-track">
									{#each [...logos, ...logos] as s, li (li)}
										<img
											src={s.logo}
											alt=""
											class="tile-logo-item"
											class:logo-chip={s.light}
											loading="lazy"
										/>
									{/each}
								</span>
							</span>
							<span class="tile-logos-all" aria-hidden="true">
								{#each logos as s (s.name)}
									<img
										src={s.logo}
										alt=""
										class="tile-logo-mini"
										class:logo-chip={s.light}
										loading="lazy"
									/>
								{/each}
							</span>
							<span class="visually-hidden">Značky: {product.suppliers.join(', ')}</span>
						{/if}
						<svg class="tile-arrow" viewBox="0 0 24 24" aria-hidden="true">
							<line x1="5" y1="12" x2="19" y2="12" />
							<polyline points="12 5 19 12 12 19" />
						</svg>
					</a>
				{/each}
			</div>
		{/each}
	</div>
</section>

<!-- 5. Stats band -->
<section class="stats" aria-label="Stavebniny Orol v číslach">
	<div class="container">
		<div class="stats-grid">
			{#each stats as stat, i (stat.label)}
				<div class="stat" data-reveal {@attach reveal(i * 80)}>
					<span class="stat-value">{stat.value}</span>
					<span class="stat-label">{stat.label}</span>
				</div>
			{/each}
			<div class="stat-acc stat-acc--yellow" aria-hidden="true"></div>
			<div class="stat-acc stat-acc--red" aria-hidden="true"></div>
			<div class="stat-acc stat-acc--blue" aria-hidden="true"></div>
		</div>
	</div>
</section>

<!-- 6. O nás -->
<section class="section" id="o-nas" aria-label="O nás">
	<div class="container about-grid">
		<div class="about-copy" data-reveal {@attach reveal()}>
			<span class="eyebrow">O nás</span>
			<h2 class="section-title">Na trhu od roku {company.foundedYear}</h2>
			<p class="about-text">
				Stavebniny OROL predávajú stavebný materiál a poskytujú doplnkové služby pre stavebníkov od
				roku {company.foundedYear}. Za ten čas sme si získali stálych zákazníkov po celom
				Mikulášskom a Ružomberskom okrese – naše materiály nájdete na rodinných domoch aj
				priemyselných stavbách.
			</p>
			<blockquote class="motto">{motto}</blockquote>
			<a href="/about" class="section-link">Celý príbeh →</a>
		</div>
		<div class="about-media" data-reveal {@attach reveal(120)}>
			<div class="photo-frame photo-frame--portrait about-photo">
				<img
					src={ownerPhoto}
					alt="Ing. Koloman Žalúdek, majiteľ spoločnosti Stavebniny Orol"
					loading="lazy"
				/>
				<span class="hero-photo-caption">Ing. Koloman Žalúdek · Majiteľ</span>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	/* ===== Shared vocabulary ===== */
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

	/* Section headers live inside the compositions as their own cells. */
	.head-cell {
		flex: 4 1 0;
		min-width: 0;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	.head-note {
		margin: 0.6rem 0 0;
		font-size: var(--font-size-small);
		color: var(--text-muted);
		max-width: 44ch;
		line-height: 1.55;
	}

	.head-link-cell {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		text-align: center;
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.head-link-cell:hover {
		background-color: var(--color-brand-hover);
	}

	.head-acc {
		flex: 0 0 110px;
	}

	.head-acc--yellow {
		background-color: var(--color-accent-yellow);
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

	.section-link {
		flex-shrink: 0;
		font-weight: 600;
		font-size: var(--font-size-small);
		color: var(--color-brand-primary);
		text-decoration: none;
	}

	.section-link:hover {
		color: var(--color-brand-hover);
		text-decoration: underline;
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

	/* ===== Section anchors ===== */
	section[id] {
		/* Mondrian header: 72px cells + 5px grid line + 7px breathing room */
		scroll-margin-top: 84px;
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

	/* ===== 1. Hero — Mondrian composition ===== */
	.hero-mondrian {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-areas:
			'copy copy copy copy copy copy copy photo photo photo photo photo'
			'copy copy copy copy copy copy copy photo photo photo photo photo'
			'yell yell white white red red red red red white2 white2 blue';
		gap: 5px;
		padding-bottom: 5px;
		background-color: var(--color-iron);
	}

	.hero-mondrian .cell {
		background-color: var(--color-white);
	}

	.hero-copy {
		grid-area: copy;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25rem;
		padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 5vw, 5rem);
	}

	.hero-media {
		grid-area: photo;
		position: relative;
		overflow: hidden;
		min-height: 320px;
	}

	.hero-photo-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%) contrast(1.08) brightness(0.97);
		opacity: 0;
		transition: opacity 0.8s ease;
	}

	.hero-photo-img.active {
		opacity: 1;
	}

	.hero-media::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, rgba(192, 40, 28, 0.28) 0%, rgba(30, 32, 34, 0.4) 100%);
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.hero-acc {
		min-height: 44px;
	}

	.hero-acc--yellow {
		grid-area: yell;
	}

	.hero-mondrian .hero-acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	.hero-acc--white {
		grid-area: white;
	}

	.hero-acc--red {
		grid-area: red;
	}

	.hero-mondrian .hero-acc--red {
		background-color: var(--color-brand-primary);
	}

	.hero-acc--white2 {
		grid-area: white2;
	}

	.hero-acc--blue {
		grid-area: blue;
	}

	.hero-mondrian .hero-acc--blue {
		background-color: var(--color-accent-blue);
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
		max-width: 46ch;
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

	.hero-highlights {
		list-style: none;
		margin: 1rem 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, auto);
		gap: 0.55rem 2rem;
	}

	.hero-highlights li {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		font-size: var(--font-size-small);
		font-weight: 500;
		color: var(--color-steel);
	}

	.hero-highlights svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.hero-media {
		min-width: 0;
	}

	.photo-frame {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius-sm);
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

	.hero-photo-caption {
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

	@media (prefers-reduced-motion: no-preference) {
		.hero-copy > *,
		.hero-media {
			animation: hero-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) backwards;
		}

		.hero-copy > :nth-child(2) {
			animation-delay: 0.06s;
		}
		.hero-copy > :nth-child(3) {
			animation-delay: 0.12s;
		}
		.hero-copy > :nth-child(4) {
			animation-delay: 0.18s;
		}
		.hero-copy > :nth-child(5) {
			animation-delay: 0.24s;
		}
		.hero-media {
			animation-delay: 0.2s;
		}
	}

	@keyframes hero-in {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
	}

	/* ===== 2. Promo ticker ===== */
	.ticker {
		background-color: var(--color-iron);
	}

	.ticker-inner {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-block: 0.7rem;
		min-height: 3.1rem;
	}

	.ticker-chip {
		flex-shrink: 0;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		padding: 0.25rem 0.7rem;
		border-radius: var(--radius-sm);
	}

	.ticker-item {
		display: inline-flex;
		align-items: baseline;
		gap: 0.75rem;
		min-width: 0;
		color: var(--color-white);
		text-decoration: none;
		font-size: var(--font-size-small);
	}

	.ticker-item strong {
		font-weight: 600;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.ticker-item:hover strong {
		text-decoration: underline;
	}

	.ticker-valid {
		flex-shrink: 0;
		color: var(--color-concrete);
		font-size: var(--font-size-xs);
	}

	.ticker-all {
		flex-shrink: 0;
		margin-left: auto;
		color: var(--color-concrete);
		font-size: var(--font-size-xs);
		font-weight: 600;
		text-decoration: none;
	}

	.ticker-all:hover {
		color: var(--color-white);
	}

	/* ===== 3. Category bento — Mondrian composition ===== */
	.bento {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.bento-row {
		display: flex;
		gap: 5px;
	}

	.tile {
		position: relative;
		flex: 1 1 0;
		min-width: 0;
		height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		/* Top padding reserves the icon zone so expanded content never overlaps it. */
		padding: 3.25rem 1.2rem 1.1rem;
		background-color: var(--color-white);
		text-decoration: none;
		overflow: hidden;
		transition:
			flex-grow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			background-color var(--transition-fast),
			opacity var(--transition-reveal) var(--reveal-delay, 0ms),
			transform var(--transition-reveal) var(--reveal-delay, 0ms);
	}

	.tile:hover {
		flex-grow: 3.2;
		background-color: var(--color-chalk);
	}

	/* The row with the hovered tile grows taller, so the selected tile
	   expands on both axes while the composition stays gap-sealed. */
	@media (hover: hover) {
		.bento-row:has(.tile:hover) .tile,
		.services-row:has(.tile:hover) .tile {
			height: 312px;
		}
	}

	/* Monochrome photo backdrop for tiles that carry one */
	.tile-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%) contrast(1.05);
		opacity: 0.16;
		transition:
			opacity var(--transition-medium),
			filter var(--transition-medium),
			transform var(--transition-medium);
	}

	/* The selected tile's photo regains full color. */
	.tile:hover .tile-bg {
		opacity: 0.45;
		filter: grayscale(0%) contrast(1.02);
		transform: scale(1.03);
	}

	/* White scrim under the text zone keeps copy readable over the colored photo. */
	.tile::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		background: linear-gradient(
			to top,
			rgba(255, 255, 255, 0.94) 0%,
			rgba(255, 255, 255, 0.8) 42%,
			rgba(255, 255, 255, 0) 80%
		);
		opacity: 0;
		transition: opacity var(--transition-medium);
		pointer-events: none;
	}

	.tile:hover::after {
		opacity: 1;
	}

	.tile-desc {
		position: relative;
		z-index: 1;
		margin-top: 0.35rem;
		padding-right: 2rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: var(--text-muted);
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		transition:
			max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.3s ease 0.12s;
	}

	.tile:hover .tile-desc {
		max-height: 3.2em;
		opacity: 1;
	}

	.tile-label {
		position: relative;
		z-index: 1;
		font-family: var(--font-display);
		font-size: 1.3rem;
		font-weight: 600;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
		padding-right: 2rem;
	}

	.tile-logo-slot {
		position: relative;
		z-index: 1;
		margin-top: 0.5rem;
		height: 22px;
		width: calc(100% - 2.25rem);
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
	}

	.tile-logo-track {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		width: max-content;
		height: 100%;
		animation: scroll-right var(--marquee-t, 18s) linear infinite;
	}

	.tile-logo-item {
		height: 18px;
		max-width: 84px;
		object-fit: contain;
		filter: grayscale(100%) contrast(1.15);
		opacity: 0.7;
	}

	/* On hover the expanded tile swaps the cycling logo for the full brand row. */
	.tile:hover .tile-logo-slot {
		display: none;
	}

	.tile-logos-all {
		position: relative;
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem 0.9rem;
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition:
			max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.3s ease 0.12s;
	}

	.tile:hover .tile-logos-all {
		margin-top: 0.6rem;
		max-height: 6em;
		opacity: 1;
	}

	.tile-logo-mini {
		height: 22px;
		max-width: 96px;
		object-fit: contain;
	}

	.tile-arrow {
		position: absolute;
		right: 1rem;
		bottom: 1.1rem;
		z-index: 1;
		width: 20px;
		height: 20px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 2.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: transform var(--transition-fast);
	}

	.tile-icon {
		position: absolute;
		top: 1rem;
		left: 1.15rem;
		z-index: 1;
		width: 26px;
		height: 26px;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 1.7;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.tile:hover .tile-arrow {
		transform: translateX(4px);
	}

	.tile-watermark {
		position: absolute;
		right: -16px;
		bottom: -18px;
		width: 120px;
		height: 120px;
		fill: none;
		stroke: var(--color-mist);
		stroke-width: 0.6;
		stroke-linecap: round;
		stroke-linejoin: round;
		opacity: 0.9;
		pointer-events: none;
		transition: stroke var(--transition-fast);
	}

	.tile:hover .tile-watermark {
		stroke: color-mix(in srgb, var(--color-brand-primary) 30%, var(--color-white));
	}

	/* Mobile: plain vertical list — icon, name, cycling brand logo, arrow. */
	@media (max-width: 700px) {
		.bento {
			flex-direction: column;
			gap: 4px;
			padding: 4px;
		}

		.bento-row {
			display: contents;
		}

		.tile {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 0.8rem;
			height: auto;
			min-height: 58px;
			padding: 0.75rem 0.9rem;
		}

		.tile:hover {
			flex-grow: 1;
		}

		.tile-icon {
			position: static;
			width: 22px;
			height: 22px;
			flex-shrink: 0;
		}

		.tile-watermark,
		.tile-desc,
		.tile-logos-all,
		.tile-bg {
			display: none;
		}

		.tile-label {
			flex: 1;
			padding-right: 0;
			font-size: 1.05rem;
		}

		.tile:hover .tile-logo-slot {
			display: block;
		}

		.tile-logo-slot {
			margin: 0;
			height: 16px;
			width: 76px;
			flex-shrink: 0;
		}

		.tile-logo-item {
			height: 14px;
			max-width: 64px;
		}

		.tile-arrow {
			position: static;
			width: 18px;
			height: 18px;
			flex-shrink: 0;
		}
	}

	@media (max-width: 360px) {
		.tile-logo-slot {
			display: none;
		}
	}

	/* ===== 4. Services — Mondrian composition with hover-expanding rows ===== */
	.services-grid {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.services-row {
		display: flex;
		gap: 5px;
	}

	.service-accent {
		flex: 1 1 0;
	}

	.service-accent--yellow {
		background-color: var(--color-accent-yellow);
	}

	.service-accent--blue {
		background-color: var(--color-accent-blue);
	}

	@media (max-width: 700px) {
		.services-grid {
			gap: 4px;
			padding: 4px;
		}

		.services-row {
			display: contents;
		}

		.service-accent {
			flex: none;
			min-height: 24px;
		}
	}

	/* Featured service: Požičovňa náradia — the red cell of the composition */
	.featured-cell {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: stretch;
		min-height: 210px;
		background-color: var(--color-brand-primary);
		text-decoration: none;
		transition:
			background-color var(--transition-fast),
			opacity var(--transition-reveal) var(--reveal-delay, 0ms),
			transform var(--transition-reveal) var(--reveal-delay, 0ms);
	}

	.featured-cell:hover {
		background-color: var(--color-brand-hover);
	}

	.featured-body {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.6rem;
		padding: 1.9rem;
		max-width: 58%;
	}

	.featured-icon {
		width: 32px;
		height: 32px;
		fill: none;
		stroke: var(--color-white);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.featured-title {
		font-family: var(--font-display);
		font-size: 1.65rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		line-height: 1.1;
		color: var(--color-white);
	}

	.featured-desc {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.88);
	}

	.featured-cta {
		margin-top: 0.25rem;
		font-size: var(--font-size-small);
		font-weight: 700;
		color: var(--color-white);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.featured-photo {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 48%;
		object-fit: cover;
		filter: grayscale(100%) contrast(1.05);
		opacity: 0.75;
		mask-image: linear-gradient(to left, #000 65%, transparent);
		-webkit-mask-image: linear-gradient(to left, #000 65%, transparent);
	}

	@media (max-width: 700px) {
		.featured-body {
			max-width: 100%;
			padding: 1.4rem;
		}

		.featured-photo {
			opacity: 0.25;
			width: 70%;
		}
	}

	/* ===== 5. Stats — Mondrian composition ===== */
	.stats {
		background-color: var(--color-iron);
		padding: 3rem 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.stat {
		grid-column: span 2;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		background-color: var(--color-white);
		padding: 1.4rem 1.5rem;
	}

	.stat-value {
		font-family: var(--font-display);
		font-size: clamp(2.4rem, 4vw, 3.4rem);
		font-weight: 700;
		line-height: 1;
		color: var(--color-brand-primary);
		font-variant-numeric: tabular-nums;
	}

	.stat-label {
		font-size: var(--font-size-small);
		color: var(--text-muted);
	}

	.stat-acc {
		min-height: 48px;
	}

	.stat-acc--yellow {
		grid-column: span 2;
		background-color: var(--color-accent-yellow);
	}

	.stat-acc--red {
		grid-column: span 1;
		background-color: var(--color-brand-primary);
	}

	.stat-acc--blue {
		grid-column: span 1;
		background-color: var(--color-accent-blue);
	}

	@media (max-width: 1000px) and (min-width: 701px) {
		.stats-grid {
			grid-template-columns: repeat(4, 1fr);
		}

		.stat {
			grid-column: span 2;
		}

		.stat-acc--yellow {
			grid-column: span 2;
		}
	}

	@media (max-width: 700px) {
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 4px;
			padding: 4px;
		}

		.stat {
			grid-column: auto;
		}

		.stat-acc--yellow {
			grid-column: 1 / -1;
			min-height: 26px;
		}

		.stat-acc--red,
		.stat-acc--blue {
			display: none;
		}
	}

	/* ===== 6. News ===== */
	/* ===== 6. O nás ===== */
	.about-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}

	.about-copy {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.1rem;
	}

	.about-text {
		margin: 0;
		max-width: 56ch;
		line-height: 1.7;
		color: var(--text-muted);
	}

	.motto {
		margin: 0.25rem 0 0;
		padding: 0.9rem 1.25rem;
		border-left: 3px solid var(--color-brand-primary);
		background-color: var(--color-chalk);
		max-width: 54ch;
		font-size: var(--font-size-small);
		font-weight: 500;
		font-style: italic;
		line-height: 1.7;
		color: var(--color-steel);
	}

	.photo-frame--portrait::after {
		background: linear-gradient(160deg, rgba(192, 40, 28, 0.16) 0%, rgba(30, 32, 34, 0.32) 100%);
	}

	.about-photo {
		aspect-ratio: 3 / 4;
		max-width: 380px;
		margin-left: auto;
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr;
		}

		.about-photo {
			margin-left: 0;
			max-width: none;
			aspect-ratio: 4 / 3;
		}
	}

	/* ===== Responsive: hero ===== */
	@media (max-width: 900px) {
		.hero-mondrian {
			grid-template-columns: repeat(4, 1fr);
			grid-template-areas:
				'photo photo photo photo'
				'copy copy copy copy'
				'yell red red blue';
			gap: 4px;
			padding-bottom: 4px;
		}

		.hero-media {
			min-height: 220px;
		}

		.hero-acc--white,
		.hero-acc--white2 {
			display: none;
		}

		.hero-acc {
			min-height: 32px;
		}
	}

	@media (max-width: 640px) {
		.hero-highlights {
			grid-template-columns: 1fr;
		}

		.ticker-valid,
		.ticker-all {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.head-link-cell {
			padding: 0.9rem;
		}

		.head-acc {
			flex: none;
			min-height: 24px;
		}
	}

	/* ===== Mobile: stats composition runs edge to edge ===== */
	@media (max-width: 700px) {
		.stats-grid {
			margin-inline: calc(-1 * var(--container-px));
		}
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.tile-logo-track {
			animation: none;
		}

		.tile,
		.tile-desc,
		.btn {
			transition: none;
		}
	}
</style>
