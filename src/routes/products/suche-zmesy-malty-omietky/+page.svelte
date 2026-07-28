<script lang="ts">
	import { contact } from '$lib/site';

	import baumitLogo from '$lib/assets/logos/Baumit.jpg';
	import cemixLogo from '$lib/assets/logos/Cemix.svg';
	import knaufLogo from '$lib/assets/logos/Knauf.png';
	import kreiselLogo from '$lib/assets/logos/Kreisel.png';
	import rigipsLogo from '$lib/assets/logos/Rigips.png';
	import sakretLogo from '$lib/assets/logos/Sakret.png';
	import weberLogo from '$lib/assets/logos/Weber.png';

	type Supplier = { name: string; logo: string; href: string };

	const suppliers: Supplier[] = [
		{ name: 'Kreisel', logo: kreiselLogo, href: 'https://www.kreisel.sk' },
		{ name: 'Weber', logo: weberLogo, href: 'https://sk.weber' },
		{ name: 'Baumit', logo: baumitLogo, href: 'https://www.baumit.sk' },
		{ name: 'Knauf', logo: knaufLogo, href: 'https://www.knauf.sk' },
		{ name: 'Rigips', logo: rigipsLogo, href: 'https://www.rigips.sk' },
		{ name: 'Cemix', logo: cemixLogo, href: 'https://www.cemix.sk' },
		{ name: 'Sakret', logo: sakretLogo, href: 'https://www.sakret.sk' }
	];
	const marqueeRepeat = Math.ceil(10 / suppliers.length);
	const supplierTrack = Array.from({ length: marqueeRepeat * 2 }, () => suppliers).flat();
</script>

<svelte:head>
	<title>Suché zmesy, malty a omietky – Produkty – Stavebniny Orol</title>
	<meta
		name="description"
		content="Murovacie a omietkové zmesi, lepidlá, samonivelačné stierky a špeciálne malty pre interiér aj exteriér."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<a href="/products" class="back-link">← Späť na produkty</a>
		<h1>Suché zmesy, malty a omietky</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<p class="lead">
			Široký výber suchých zmesí pre profesionálov aj domácich majstrov – od jednoduchých murovacích
			mált cez vnútorné a vonkajšie omietky až po samonivelačné stierky a sanačné systémy.
		</p>

		<h2>Ponúkame</h2>
		<ul class="bullets">
			<li>Murovacie malty a tenkovrstvové malty na brúsené tehly</li>
			<li>Vnútorné vápennocementové a sadrové omietky</li>
			<li>Lepidlá na obklady, dlažby a veľkoformátové dosky</li>
			<li>Samonivelačné podlahové stierky</li>
			<li>Sanačné a reprofilačné malty</li>
			<li>Špárovacie hmoty a flexibilné lepidlá</li>
		</ul>

		<h2>Naši dodávatelia</h2>
		<p class="suppliers-note">
			Skladom držíme zmesi od overených výrobcov pôsobiacich na slovenskom trhu. Konkrétne značky a
			balenia Vám radi odporučíme podľa typu podkladu a aplikácie.
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
			<p class="cta-text">Záujem o suché zmesi?</p>
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
