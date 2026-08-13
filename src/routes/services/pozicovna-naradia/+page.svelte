<script lang="ts">
	import gearPhoto from '$lib/assets/gallery/IMG_2228.jpg';
	import { contact } from '$lib/site';
	import { reveal } from '$lib/reveal';

	const gear = [
		'Stavebné miešačky a kontinuálne miešačky na omietky',
		'Búracie a vŕtacie kladivá, uhlové brúsky',
		'Vibračné dosky, ubíjadlá a stavebné valce',
		'Lešenárske systémy a pojazdné lešenia',
		'Stavebné vysávače a odsávače prachu',
		'Laserové nivelačky a meracie prístroje',
		'Brúsky na betón, rezačky dlažby, pílky na drevo'
	];

	const steps = [
		{
			title: 'Overte dostupnosť',
			text: 'Zavolajte nám alebo sa zastavte na predajni a overte dostupnosť konkrétneho kusa.'
		},
		{
			title: 'Rezervácia a prevzatie',
			text: 'Rezervujeme Vám náradie na vybraný termín – pri vyzdvihnutí podpíšete jednoduchú zmluvu o prenájme.'
		},
		{
			title: 'Vrátenie a záloha',
			text: 'Po skončení prenájmu vraciate náradie a obdržíte vratnú zálohu späť.'
		}
	];

	const conditions = [
		'Prenájom na hodiny, deň, víkend alebo týždeň',
		'Pri preberaní platíte vratnú zálohu vo výške podľa typu náradia',
		'Predložte občiansky preukaz a ďalší doklad totožnosti',
		'Náradie vraciate vyčistené a v stave, v akom ste ho prevzali'
	];
</script>

<svelte:head>
	<title>Požičovňa náradia – Stavebniny Orol</title>
	<meta
		name="description"
		content="Prenájom stavebného a remeselníckeho náradia v Liptovskom Mikuláši – miešačky, lešenia, búracie kladivá, vibračné dosky a ďalšie. Servisované a pripravené na použitie."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<a href="/#sluzby" class="back-link">← Späť na služby</a>
			<span class="eyebrow">Služby · Prenájom</span>
			<h1 class="hero-title">Požičovňa <span class="hero-accent">náradia.</span></h1>
			<p class="hero-lead">
				Krátkodobý aj dlhodobý prenájom kvalitného stavebného a remeselníckeho náradia. Náradie
				pravidelne servisujeme, takže si môžete byť istí, že každý kus je pripravený na okamžité
				použitie.
			</p>
			<div class="hero-actions">
				<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
				<a href="/contact" class="btn btn--ghost">Kde nás nájdete</a>
			</div>
		</div>
		<div class="hero-media">
			<div class="photo-frame hero-photo">
				<img
					src={gearPhoto}
					alt="Stena s náradím pripraveným na prenájom v predajni Stavebnín Orol"
				/>
				<span class="photo-caption">Servisované · pripravené na použitie</span>
			</div>
		</div>
	</div>
</section>

<!-- Gear offering -->
<section class="section section--blueprint">
	<div class="container">
		<header class="section-head" data-reveal {@attach reveal()}>
			<div>
				<span class="eyebrow">Ponuka</span>
				<h2 class="section-title">Čo si u nás požičiate</h2>
			</div>
			<p class="section-note">
				Konkrétne typy a aktuálnu dostupnosť radi upresníme telefonicky alebo na predajni.
			</p>
		</header>
		<ul class="gear-grid">
			{#each gear as item, i (item)}
				<li data-reveal {@attach reveal(Math.min(i * 45, 270))}>
					<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
					{item}
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Steps + conditions -->
<section class="section">
	<div class="container split-grid">
		<div data-reveal {@attach reveal()}>
			<span class="eyebrow">Postup</span>
			<h2 class="section-title section-title--sm">Ako to funguje</h2>
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
		<div data-reveal {@attach reveal(120)}>
			<span class="eyebrow">Podmienky</span>
			<h2 class="section-title section-title--sm">Podmienky prenájmu</h2>
			<ul class="conditions">
				{#each conditions as condition (condition)}
					<li>{condition}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- CTA band -->
<section class="cta-band">
	<div class="container cta-inner">
		<div>
			<h2 class="cta-title">Overiť dostupnosť náradia</h2>
			<p class="cta-sub">Zavolajte nám alebo napíšte – rezervácia trvá pár minút.</p>
		</div>
		<div class="cta-actions">
			<a href={contact.phoneHref} class="btn btn--primary">{contact.phone}</a>
			<a href={contact.emailHref} class="btn btn--light">{contact.email}</a>
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

	.section-note {
		margin: 0;
		max-width: 34ch;
		text-align: right;
		font-size: var(--font-size-small);
		color: var(--text-muted);
		line-height: 1.55;
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
		text-transform: none;
		letter-spacing: 0.02em;
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

	/* Gear grid */
	.gear-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 0.85rem;
	}

	.gear-grid li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 1.1rem 1.25rem;
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		font-weight: 500;
		line-height: 1.5;
		color: var(--color-steel);
	}

	.gear-grid svg {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		margin-top: 0.15rem;
		fill: none;
		stroke: var(--color-brand-primary);
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* Steps + conditions */
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
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-iron);
		margin-bottom: 0.25rem;
	}

	.step-text {
		margin: 0;
		font-size: var(--font-size-small);
		line-height: 1.6;
		color: var(--text-muted);
	}

	.conditions {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.conditions li {
		position: relative;
		padding-left: 1.2rem;
		font-size: var(--font-size-small);
		font-weight: 500;
		line-height: 1.55;
		color: var(--color-steel);
	}

	.conditions li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.55em;
		width: 0.5rem;
		height: 3px;
		background-color: var(--color-brand-primary);
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

	@media (max-width: 640px) {
		.section-head {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.section-note {
			text-align: left;
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
