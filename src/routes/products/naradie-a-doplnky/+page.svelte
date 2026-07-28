<script lang="ts">
	import { contact } from '$lib/site';

	import dedraLogo from '$lib/assets/logos/Dedra.jpg';
	import fischerLogo from '$lib/assets/logos/Fischer.svg';
	import hermanLogo from '$lib/assets/logos/Herman.svg';
	import hiltiLogo from '$lib/assets/logos/Hilti.svg';
	import levelysLogo from '$lib/assets/logos/Levelys.svg';
	import makitaLogo from '$lib/assets/logos/Makita.svg';
	import milwaukeeLogo from '$lib/assets/logos/Milwaukee.svg';
	import solaLogo from '$lib/assets/logos/Sola.svg';
	import storchLogo from '$lib/assets/logos/Storch.svg';
	import wuerthLogo from '$lib/assets/logos/Wuerth.svg';

	type Supplier = { name: string; logo: string; href: string };

	const suppliers: Supplier[] = [
		{ name: 'Makita', logo: makitaLogo, href: 'https://www.makita.sk' },
		{ name: 'Milwaukee', logo: milwaukeeLogo, href: 'https://www.milwaukeetool.eu' },
		{ name: 'Hilti', logo: hiltiLogo, href: 'https://www.hilti.sk' },
		{ name: 'Würth', logo: wuerthLogo, href: 'https://www.wurth.sk' },
		{ name: 'Fischer', logo: fischerLogo, href: 'https://www.fischer-sk.sk' },
		{ name: 'Dedra', logo: dedraLogo, href: 'https://www.dedra.pl' },
		{ name: 'Herman', logo: hermanLogo, href: 'https://www.herman.sk' },
		{ name: 'Sola', logo: solaLogo, href: 'https://www.sola.at' },
		{ name: 'Storch', logo: storchLogo, href: 'https://www.storch.sk' },
		{ name: 'Levelys', logo: levelysLogo, href: 'https://www.levelys.sk' }
	];
	const marqueeRepeat = Math.ceil(10 / suppliers.length);
	const supplierTrack = Array.from({ length: marqueeRepeat * 2 }, () => suppliers).flat();
</script>

<svelte:head>
	<title>Náradie a doplnky – Produkty – Stavebniny Orol</title>
	<meta
		name="description"
		content="Ručné aj elektrické náradie, murárske pomôcky, spojovací materiál a ochranné pracovné prostriedky."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/products" class="back-link">← Späť na produkty</a>
		<h1>Náradie a doplnky</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Náradie a doplnkový sortiment pre profesionálne aj svojpomocné použitie. Máme na sklade
			osvedčené značky pre každodennú prácu na stavbe aj pri rekonštrukciách.
		</p>

		<h2>Ponúkame</h2>
		<ul class="bullets">
			<li>Ručné náradie – kladivá, skrutkovače, kliešte, vodováhy, meradlá</li>
			<li>Murárske náradie – lopaty, fúriky, hladidlá, vedrá, miešacie nadstavce</li>
			<li>Elektrické náradie – vŕtačky, brúsky, píly a príslušenstvo</li>
			<li>Spojovací materiál – skrutky, klince, hmoždinky, kotvy</li>
			<li>Ochranné pracovné prostriedky – rukavice, prilby, okuliare, respirátory</li>
			<li>Lepiace pásky, krycie fólie a spotrebný materiál</li>
		</ul>

		<h2>Naši dodávatelia</h2>
		<p class="suppliers-note">
			Skladom držíme výrobky od značiek, ktoré sú overené remeselníkmi a stavbármi. Konkrétny
			produkt Vám radi odporučíme podľa typu práce a požiadaviek.
		</p>

		<div class="suppliers-marquee">
			<div class="suppliers-track">
				{#each supplierTrack as supplier, i (i)}
					<a
						href={supplier.href}
						class="supplier-item"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={supplier.name}
						aria-hidden={i >= supplierTrack.length / 2 ? 'true' : undefined}
						tabindex={i >= supplierTrack.length / 2 ? -1 : 0}
					>
						<img src={supplier.logo} alt={supplier.name} loading="lazy" />
					</a>
				{/each}
			</div>
		</div>

		<div class="cta-box">
			<p class="cta-text">Záujem o náradie alebo doplnky?</p>
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

	.suppliers-marquee {
		margin-top: 1.5rem;
		overflow: hidden;
	}

	.suppliers-track {
		display: flex;
		width: max-content;
		animation: scroll-right 25s linear infinite;
	}

	@keyframes scroll-right {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}

	.suppliers-marquee:hover .suppliers-track {
		animation-play-state: paused;
	}

	.supplier-item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 2.5rem;
		padding: 0.75rem 1.5rem;
		width: 200px;
		height: 100px;
		flex-shrink: 0;
		border-radius: var(--radius-md);
		transition:
			filter var(--transition-fast),
			opacity var(--transition-fast),
			transform var(--transition-fast);
		filter: grayscale(100%);
		opacity: 0.7;
	}

	.supplier-item:hover,
	.supplier-item:focus-visible {
		filter: grayscale(0);
		opacity: 1;
		transform: scale(1.05);
	}

	.supplier-item img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		display: block;
	}

	@media (prefers-reduced-motion: reduce) {
		.suppliers-track {
			animation: none;
		}
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
