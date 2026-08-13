<script lang="ts">
	import { contact } from '$lib/site';
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>Cookies – Stavebniny Orol</title>
	<meta
		name="description"
		content="Informácie o cookies a podobných technológiách, ktoré používame na webe Stavebniny Orol."
	/>
</svelte:head>

<section class="section" aria-label="Cookies">
	<div class="comp">
		<div class="comp-row comp-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Právne informácie</span>
				<h1 class="section-title">Cookies</h1>
				<p class="head-note">
					Informácie o cookies a podobných technológiách, ktoré používame na tejto stránke.
				</p>
			</header>
			<div class="acc acc--yellow" aria-hidden="true"></div>
			<div class="acc acc--blue acc--sm" aria-hidden="true"></div>
		</div>

		<div class="comp-row">
			<div class="prose-cell" data-reveal {@attach reveal(100)}>
				<div class="prose">
					<div class="todo">
						<strong>TODO:</strong> Doplniť konkrétny zoznam cookies podľa toho, aké služby (analytika,
						marketing, formuláre) sa nakoniec na stránke použijú. Aktuálne stránka nepoužíva vlastné cookies;
						cookies nastavuje iba poskytovateľ hostingu Cloudflare.
					</div>

					<h2>1. Čo sú cookies</h2>
					<p>
						Cookies sú malé textové súbory, ktoré sa ukladajú vo Vašom prehliadači pri návšteve
						webovej stránky. Stránke umožňujú zapamätať si informácie o Vašej návšteve, napríklad
						jazyk alebo nastavenia. Vďaka tomu môže byť ďalšia návšteva jednoduchšia a stránka pre
						Vás užitočnejšia.
					</p>

					<h2>2. Aké cookies používame</h2>
					<p>
						Stránka <strong>stavebninyorol.sk</strong> v súčasnosti nepoužíva vlastné cookies na účely
						analytiky ani marketingu. Cookies nastavuje iba poskytovateľ hostingu (Cloudflare) na zabezpečenie
						prevádzky a ochrany pred útokmi.
					</p>

					<h3>Nevyhnutné cookies</h3>
					<table class="cookies-table">
						<thead>
							<tr>
								<th>Názov</th>
								<th>Účel</th>
								<th>Poskytovateľ</th>
								<th>Doba trvania</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>__cf_bm</code></td>
								<td>Ochrana pred botmi</td>
								<td>Cloudflare</td>
								<td>30 minút</td>
							</tr>
							<tr>
								<td><code>cf_clearance</code></td>
								<td>Overenie ľudského návštevníka</td>
								<td>Cloudflare</td>
								<td>30 dní</td>
							</tr>
						</tbody>
					</table>

					<p class="todo-inline">
						TODO: ak v budúcnosti pridáte Plausible / Umami / Google Analytics / Meta Pixel, doplniť
						tieto cookies do samostatnej kategórie a — pri marketingových cookies — aktivovať cookie
						banner s možnosťou súhlasu.
					</p>

					<h2>3. Ako spravovať cookies</h2>
					<p>
						Cookies môžete kedykoľvek spravovať alebo vymazať priamo vo Vašom prehliadači. Postup
						pre najpoužívanejšie prehliadače:
					</p>
					<ul>
						<li>
							<a
								href="https://support.google.com/chrome/answer/95647"
								target="_blank"
								rel="noopener noreferrer">Google Chrome</a
							>
						</li>
						<li>
							<a
								href="https://support.mozilla.org/sk/kb/cookies-informacie-o-vasich-aktivitach-internete"
								target="_blank"
								rel="noopener noreferrer">Mozilla Firefox</a
							>
						</li>
						<li>
							<a
								href="https://support.apple.com/sk-sk/guide/safari/sfri11471/mac"
								target="_blank"
								rel="noopener noreferrer">Safari</a
							>
						</li>
						<li>
							<a
								href="https://support.microsoft.com/sk-sk/microsoft-edge"
								target="_blank"
								rel="noopener noreferrer">Microsoft Edge</a
							>
						</li>
					</ul>
					<p>Pri zakázaní nevyhnutných cookies môže byť obmedzená funkčnosť stránky.</p>

					<h2>4. Kontakt</h2>
					<p>
						V prípade otázok ohľadom cookies nás kontaktujte na e-maile
						<a href={contact.emailHref}>{contact.email}</a>.
					</p>

					<h2>5. Účinnosť</h2>
					<p class="todo-inline">TODO: doplniť dátum účinnosti zásad pre cookies.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 0 0 var(--space-section-y-end);
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

	/* ===== Composition canvas ===== */
	.comp {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.comp-row {
		display: flex;
		gap: 5px;
	}

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
		max-width: 60ch;
		line-height: 1.55;
	}

	/* Accent cells */
	.acc {
		flex: 0 0 90px;
	}

	.acc--sm {
		flex: 0 0 44px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	.acc--blue {
		background-color: var(--color-accent-blue);
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

	/* ===== Prose cell ===== */
	.prose-cell {
		flex: 1 1 auto;
		min-width: 0;
		background-color: var(--color-white);
		padding: clamp(2.25rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem);
	}

	.prose {
		max-width: var(--container-prose);
		margin-inline: auto;
	}

	.todo {
		margin: 0 0 2.5rem;
		padding: 1rem 1.25rem;
		background-color: var(--color-chalk);
		border-left: 3px solid var(--color-accent-yellow);
		font-size: 0.95rem;
		color: var(--color-iron);
	}

	.todo-inline {
		padding: 0.6rem 0.9rem;
		background-color: var(--color-chalk);
		border-left: 3px solid var(--color-accent-yellow);
		font-size: 0.9rem;
		font-style: italic;
		color: var(--color-iron);
	}

	.prose h2 {
		margin: 2.5rem 0 1rem;
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
	}

	.prose h3 {
		margin: 1.5rem 0 0.75rem;
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-iron);
	}

	.prose p {
		margin: 0 0 1rem;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-on-light);
	}

	.prose ul {
		margin: 0 0 1rem;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.prose ul li {
		font-size: 1rem;
		color: var(--text-on-light);
		line-height: 1.65;
	}

	.prose ul li::marker {
		color: var(--color-brand-primary);
	}

	.cookies-table {
		width: 100%;
		border-collapse: collapse;
		margin: 0 0 1.5rem;
		font-size: 0.95rem;
	}

	.cookies-table th,
	.cookies-table td {
		text-align: left;
		padding: 0.6rem 0.85rem;
		border-bottom: 1px solid var(--color-mist);
	}

	.cookies-table th {
		font-weight: 700;
		color: var(--color-iron);
		background-color: var(--color-chalk);
	}

	.cookies-table td code {
		font-size: 0.85rem;
		background-color: var(--color-chalk);
		padding: 0.1rem 0.4rem;
	}

	.prose a {
		color: var(--color-brand-primary);
		text-decoration: none;
		font-weight: 600;
	}

	.prose a:hover {
		text-decoration: underline;
		color: var(--color-brand-hover);
	}

	/* ===== Mobile ===== */
	@media (max-width: 800px) {
		.comp {
			gap: 4px;
			padding: 4px;
		}

		.comp-row {
			flex-direction: column;
			gap: 4px;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.prose-cell {
			padding: 1.6rem 1.2rem 1.9rem;
		}

		.acc,
		.acc--sm {
			flex: none;
			min-height: 22px;
		}
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
