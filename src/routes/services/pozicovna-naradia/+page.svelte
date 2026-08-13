<script lang="ts">
	import demolitionPhoto from '$lib/assets/rental/hilti-demolition.jpg';
	import cuttingPhoto from '$lib/assets/rental/hilti-cutting.jpg';
	import installationPhoto from '$lib/assets/rental/installation-welder.jpg';
	import masonryPhoto from '$lib/assets/rental/masonry-saw.jpg';
	import measuringPhoto from '$lib/assets/rental/measuring-level.jpg';
	import mixingPhoto from '$lib/assets/rental/mixing-plastering.jpg';
	import scaffoldingPhoto from '$lib/assets/rental/scaffolding.jpg';
	import seasonalPhoto from '$lib/assets/rental/seasonal-log-splitter.jpg';
	import { contact } from '$lib/site';
	import { reveal } from '$lib/reveal';

	const categories = [
		{
			title: 'Búranie a vŕtanie',
			image: demolitionPhoto,
			alt: 'Hilti búracie kladivo pri práci',
			items: [
				'Hilti TE 3000-AVR, TE 1000-AVR a TE 500-AVR',
				'Kombinované kladivo Hilti TE 70',
				'Vŕtacie kladivo Hilti TE 7',
				'Plynový vsadzovací prístroj Hilti GX 120-ME'
			]
		},
		{
			title: 'Rezanie a brúsenie',
			image: cuttingPhoto,
			alt: 'Ručná okružná a rozbrusovacia píla Hilti',
			items: [
				'Uhlová brúska Hilti AG230',
				'Okružná píla Hilti SC 70W-A22',
				'Rozbrusovacia píla Hilti DSH 700-X',
				'Drážkovací stroj Hilti DC-SE20',
				'Brúska na betón Bosch'
			]
		},
		{
			title: 'Miešanie a betón',
			image: mixingPhoto,
			alt: 'Strojová omietačka pripravená na použitie',
			items: [
				'Miešačky s objemom 120 a 145 litrov',
				'Strojová omietačka RITMO',
				'Miešadlo na samonivelačný poter',
				'Vibrátor a vibračné kladivo na betón',
				'Vibračný stôl'
			]
		},
		{
			title: 'Murivo a dlažba',
			image: masonryPhoto,
			alt: 'Stolová píla Lissmac na rezanie tehál',
			items: [
				'Stolová píla Lissmac na tehly',
				'Mechanická rezačka zámkovej dlažby',
				'Rezačky obkladov a dlažby',
				'Ručná píla na pórobetón Ytong'
			]
		},
		{
			title: 'Meranie a čistenie',
			image: measuringPhoto,
			alt: 'Optický nivelačný prístroj Sokkia K2',
			items: [
				'Optický nivelačný prístroj Sokkia K2',
				'Merač vlhkosti v murive',
				'Univerzálny vysávač Hilti VC 40-UL',
				'Vysokotlakový čistič Kärcher'
			]
		},
		{
			title: 'Lešenie a manipulácia',
			image: scaffoldingPhoto,
			alt: 'Oceľové stavebné lešenie osadené na dome',
			items: [
				'Trubkové a oceľové lešenie GRAF',
				'Stavebný výťah',
				'Ručný hydraulický paletový vozík'
			]
		},
		{
			title: 'Montáž a inštalácie',
			image: installationPhoto,
			alt: 'Zváračka na plastové PPR potrubie',
			items: ['Zváračka na plastové PPR potrubie']
		},
		{
			title: 'Sezónna technika',
			image: seasonalPhoto,
			alt: 'Štiepačka dreva s tlakom štrnásť ton',
			items: ['Štiepačka dreva s tlakom 14 ton', 'Snehová fréza Honda']
		}
	];

	const steps = [
		{
			title: 'Overte dostupnosť',
			text: 'Zavolajte nám alebo sa zastavte na predajni. Podľa práce Vám odporučíme vhodný stroj a overíme voľný termín.'
		},
		{
			title: 'Rezervácia a prevzatie',
			text: 'Náradie Vám rezervujeme. Pri prevzatí podpíšete zmluvu o prenájme a vysvetlíme Vám bezpečné používanie.'
		},
		{
			title: 'Vrátenie a záloha',
			text: 'Po skončení prenájmu vrátite náradie vyčistené a po kontrole Vám vrátime zálohu.'
		}
	];

	const conditions = [
		'Krátkodobý aj dlhodobý prenájom podľa typu stroja',
		'Výška vratnej zálohy závisí od zapožičaného náradia',
		'Pri prevzatí je potrebný občiansky preukaz a ďalší doklad totožnosti',
		'Náradie sa vracia vyčistené a v stave, v akom ste ho prevzali'
	];
</script>

<svelte:head>
	<title>Požičovňa stavebného náradia – Stavebniny Orol</title>
	<meta
		name="description"
		content="Prenájom stavebného náradia v Liptovskom Mikuláši – búracie kladivá, píly, miešačky, omietačky, lešenie, meracia technika a ďalšie vybavenie."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<a href="/#sluzby" class="back-link">← Späť na služby</a>
			<span class="eyebrow">Služby · Prenájom</span>
			<h1 class="hero-title">Náradie, ktoré <span class="hero-accent">odvedie robotu.</span></h1>
			<p class="hero-lead">
				Od búracieho kladiva po lešenie. Požičajte si profesionálne vybavenie na jeden deň,
				víkend alebo dlhšie — bez toho, aby ste ho museli kupovať.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">Overiť dostupnosť</a>
				<a href="/contact" class="btn btn--ghost">Kde nás nájdete</a>
			</div>
			<p class="hero-availability">
				<span aria-hidden="true"></span> Aktuálnu dostupnosť potvrdíme telefonicky
			</p>
		</div>
		<div class="hero-media" data-reveal {@attach reveal(80)}>
			<img src={demolitionPhoto} alt="Hilti búracie kladivo z požičovne Stavebnín Orol" />
			<div class="hero-stamp" aria-hidden="true">
				<strong>30+</strong>
				<span>druhov<br />vybavenia</span>
			</div>
		</div>
	</div>
</section>

<section class="section section--catalogue" id="ponuka">
	<div class="container">
		<header class="section-head" data-reveal {@attach reveal()}>
			<div>
				<span class="eyebrow">Čo si požičiate</span>
				<h2 class="section-title">Vybavenie podľa práce</h2>
			</div>
			<p class="section-note">
				Ponuka vychádza z nášho vybavenia. Konkrétny model a voľný termín si overte pred
				príchodom.
			</p>
		</header>

		<div class="equipment-grid">
			{#each categories as category, i (category.title)}
				<article class="equipment-card" data-reveal {@attach reveal(Math.min(i * 45, 225))}>
					<div class="equipment-image">
						<img src={category.image} alt={category.alt} loading="lazy" />
						<span>{String(i + 1).padStart(2, '0')}</span>
					</div>
					<div class="equipment-copy">
						<h3>{category.title}</h3>
						<ul>
							{#each category.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>

		<div class="catalogue-note" data-reveal {@attach reveal()}>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 9v4m0 4h.01M10.3 3.7 2.4 17.4A2 2 0 0 0 4.1 20h15.8a2 2 0 0 0 1.7-2.6L13.7 3.7a2 2 0 0 0-3.4 0Z" /></svg>
			<p>
				Nenašli ste presne to, čo potrebujete? <a href={contact.phoneHref}>Zavolajte nám na {contact.phone}</a>
				— ponuka a dostupnosť vybavenia sa priebežne menia.
			</p>
		</div>
	</div>
</section>

<section class="section section--process">
	<div class="container split-grid">
		<div data-reveal {@attach reveal()}>
			<span class="eyebrow">Postup</span>
			<h2 class="section-title section-title--sm">Tri kroky a môžete pracovať</h2>
			<ol class="steps">
				{#each steps as step, i (step.title)}
					<li>
						<span class="step-no">{i + 1}</span>
						<div>
							<span class="step-title">{step.title}</span>
							<p class="step-text">{step.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
		<div class="conditions-panel" data-reveal {@attach reveal(120)}>
			<span class="eyebrow eyebrow--light">Podmienky</span>
			<h2 class="section-title section-title--sm section-title--light">Čo potrebujete pri prevzatí</h2>
			<ul class="conditions">
				{#each conditions as condition (condition)}
					<li>{condition}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="cta-band">
	<div class="container cta-inner">
		<div>
			<h2 class="cta-title">Povedzte nám, čo idete robiť</h2>
			<p class="cta-sub">Pomôžeme vybrať správny stroj a overíme jeho dostupnosť.</p>
		</div>
		<div class="cta-actions">
			<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
			<a href={contact.emailHref} class="btn btn--light">Napísať e-mail</a>
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
		background-color: currentColor;
	}

	.eyebrow--light {
		color: var(--color-white);
	}

	.section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
	}

	.section-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		margin-bottom: 2.75rem;
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

	.section-title--light {
		color: var(--color-white);
	}

	.section-note {
		margin: 0;
		max-width: 39ch;
		text-align: right;
		font-size: var(--font-size-small);
		color: var(--text-muted);
		line-height: 1.55;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.85rem 1.5rem;
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.07em;
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

	.btn:focus-visible,
	.back-link:focus-visible,
	.catalogue-note a:focus-visible {
		outline: 3px solid var(--color-brand-hover);
		outline-offset: 3px;
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

	.hero {
		padding: clamp(2.5rem, 6vw, 5rem) 0;
		border-bottom: 1px solid var(--border-default);
		background-image:
			linear-gradient(to right, rgba(30, 32, 34, 0.04) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(30, 32, 34, 0.04) 1px, transparent 1px);
		background-size: 42px 42px;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.02fr 0.98fr;
		gap: clamp(2.5rem, 6vw, 5rem);
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

	.hero-title {
		margin: 0;
		max-width: 12ch;
		font-family: var(--font-display);
		font-size: var(--font-size-display-xl);
		font-weight: 700;
		line-height: 0.92;
		text-transform: uppercase;
		letter-spacing: 0.005em;
		color: var(--color-iron);
	}

	.hero-accent {
		color: var(--color-brand-primary);
	}

	.hero-lead {
		margin: 0;
		max-width: 54ch;
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

	.hero-availability {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin: 0.15rem 0 0;
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--text-muted);
	}

	.hero-availability span {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		background: var(--color-brand-primary);
		box-shadow: 0 0 0 4px rgba(192, 40, 28, 0.12);
	}

	.hero-media {
		position: relative;
		min-height: 570px;
		border-radius: var(--radius-sm);
		overflow: hidden;
		background: var(--color-iron);
		box-shadow: 22px 22px 0 var(--color-brand-primary);
	}

	.hero-media::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		background: linear-gradient(180deg, transparent 55%, rgba(30, 32, 34, 0.48));
		pointer-events: none;
	}

	.hero-media img {
		display: block;
		width: 100%;
		height: 100%;
		min-height: 570px;
		object-fit: cover;
	}

	.hero-stamp {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		z-index: 2;
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.8rem 1rem;
		background: var(--color-iron);
		color: var(--color-white);
		font-family: var(--font-display);
		text-transform: uppercase;
	}

	.hero-stamp strong {
		font-size: 2.5rem;
		line-height: 0.9;
		color: var(--color-brand-hover);
	}

	.hero-stamp span {
		font-size: 0.72rem;
		line-height: 1.05;
		letter-spacing: 0.1em;
	}

	.section--catalogue {
		background: var(--color-chalk);
	}

	.equipment-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.equipment-card {
		display: grid;
		grid-template-columns: minmax(150px, 0.72fr) minmax(0, 1.28fr);
		min-height: 330px;
		background: var(--color-white);
		border: 1px solid var(--border-default);
		border-top: 4px solid var(--color-iron);
		border-radius: var(--radius-sm);
		overflow: hidden;
		transition:
			transform var(--transition-fast),
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.equipment-card:hover {
		transform: translateY(-4px);
		border-top-color: var(--color-brand-primary);
		box-shadow: 0 12px 30px rgba(30, 32, 34, 0.09);
	}

	.equipment-image {
		position: relative;
		min-height: 100%;
		overflow: hidden;
		background: var(--color-concrete);
	}

	.equipment-image::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 65%, rgba(30, 32, 34, 0.5));
		pointer-events: none;
	}

	.equipment-image img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 400ms ease;
	}

	.equipment-card:hover .equipment-image img {
		transform: scale(1.025);
	}

	.equipment-image span {
		position: absolute;
		left: 0.75rem;
		bottom: 0.5rem;
		z-index: 1;
		font-family: var(--font-display);
		font-size: 2.1rem;
		font-weight: 700;
		color: var(--color-white);
	}

	.equipment-copy {
		padding: 1.55rem 1.4rem 1.35rem;
	}

	.equipment-copy h3 {
		margin: 0 0 1rem;
		font-family: var(--font-display);
		font-size: 1.45rem;
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
	}

	.equipment-copy ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	.equipment-copy li {
		position: relative;
		padding-left: 1rem;
		font-size: 0.87rem;
		line-height: 1.42;
		color: var(--color-steel);
	}

	.equipment-copy li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.58em;
		width: 0.45rem;
		height: 2px;
		background: var(--color-brand-primary);
	}

	.catalogue-note {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1.25rem;
		padding: 1.1rem 1.25rem;
		background: var(--color-iron);
		color: var(--color-white);
	}

	.catalogue-note svg {
		width: 24px;
		height: 24px;
		flex: 0 0 auto;
		fill: none;
		stroke: var(--color-brand-hover);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.catalogue-note p {
		margin: 0;
		font-size: var(--font-size-small);
		line-height: 1.5;
	}

	.catalogue-note a {
		color: var(--color-white);
		font-weight: 700;
		text-decoration-color: var(--color-brand-hover);
		text-underline-offset: 3px;
	}

	.section--process {
		background: var(--color-white);
	}

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

	.step-title {
		display: block;
		margin-bottom: 0.25rem;
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-iron);
	}

	.step-text {
		margin: 0;
		font-size: var(--font-size-small);
		line-height: 1.6;
		color: var(--text-muted);
	}

	.conditions-panel {
		position: relative;
		padding: clamp(1.75rem, 4vw, 3rem);
		background: var(--color-iron);
		color: var(--color-white);
	}

	.conditions-panel::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 6px;
		background: var(--mondrian-rule);
	}

	.conditions {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.conditions li {
		position: relative;
		padding: 0 0 1rem 1.35rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.14);
		font-size: var(--font-size-small);
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-concrete);
	}

	.conditions li:last-child {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.conditions li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 0.55rem;
		height: 3px;
		background-color: var(--color-brand-hover);
	}

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

	.cta-sub {
		margin: 0.35rem 0 0;
		font-size: var(--font-size-small);
		color: var(--color-concrete);
	}

	.cta-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
	}

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

	@media (max-width: 1000px) {
		.equipment-card {
			grid-template-columns: 1fr;
		}

		.equipment-image {
			min-height: 270px;
		}
	}

	@media (max-width: 900px) {
		.hero-grid,
		.split-grid {
			grid-template-columns: 1fr;
		}

		.hero-media {
			min-height: 460px;
			box-shadow: 12px 12px 0 var(--color-brand-primary);
		}

		.hero-media img {
			min-height: 460px;
		}

		.split-grid {
			gap: 3rem;
		}
	}

	@media (max-width: 700px) {
		.section-head {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.section-note {
			text-align: left;
		}

		.equipment-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.hero-actions {
			width: 100%;
			flex-direction: column;
		}

		.hero-actions .btn {
			width: 100%;
		}

		.hero-media,
		.hero-media img {
			min-height: 390px;
		}

		.hero-stamp {
			right: 0.6rem;
			bottom: 0.6rem;
		}

		.equipment-card {
			min-height: 0;
		}

		.equipment-image {
			min-height: 240px;
		}

		.catalogue-note {
			align-items: flex-start;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.btn,
		.equipment-card,
		.equipment-image img {
			transition: none;
		}
	}
</style>
