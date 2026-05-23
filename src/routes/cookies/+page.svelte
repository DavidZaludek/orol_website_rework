<script lang="ts">
	import { contact } from '$lib/site';
</script>

<svelte:head>
	<title>Cookies – Stavebniny Orol</title>
	<meta
		name="description"
		content="Informácie o cookies a podobných technológiách, ktoré používame na webe Stavebniny Orol."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Cookies</h1>
		<p class="hero-lead">
			Informácie o cookies a podobných technológiách, ktoré používame na tejto stránke.
		</p>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<div class="todo">
			<strong>TODO:</strong> Doplniť konkrétny zoznam cookies podľa toho, aké služby (analytika,
			marketing, formuláre) sa nakoniec na stránke použijú. Aktuálne stránka nepoužíva vlastné
			cookies; cookies nastavuje iba poskytovateľ hostingu Cloudflare.
		</div>

		<h2>1. Čo sú cookies</h2>
		<p>
			Cookies sú malé textové súbory, ktoré sa ukladajú vo Vašom prehliadači pri návšteve webovej
			stránky. Stránke umožňujú zapamätať si informácie o Vašej návšteve, napríklad jazyk
			alebo nastavenia. Vďaka tomu môže byť ďalšia návšteva jednoduchšia a stránka pre Vás
			užitočnejšia.
		</p>

		<h2>2. Aké cookies používame</h2>
		<p>
			Stránka <strong>stavebninyorol.sk</strong> v súčasnosti nepoužíva vlastné cookies na účely
			analytiky ani marketingu. Cookies nastavuje iba poskytovateľ hostingu (Cloudflare) na
			zabezpečenie prevádzky a ochrany pred útokmi.
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
			Cookies môžete kedykoľvek spravovať alebo vymazať priamo vo Vašom prehliadači. Postup pre
			najpoužívanejšie prehliadače:
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
		<p>
			Pri zakázaní nevyhnutných cookies môže byť obmedzená funkčnosť stránky.
		</p>

		<h2>4. Kontakt</h2>
		<p>
			V prípade otázok ohľadom cookies nás kontaktujte na e-maile
			<a href={contact.emailHref}>{contact.email}</a>.
		</p>

		<h2>5. Účinnosť</h2>
		<p class="todo-inline">TODO: doplniť dátum účinnosti zásad pre cookies.</p>
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

	.body-section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		background-color: var(--color-white);
	}

	.todo {
		margin: 0 0 2.5rem;
		padding: 1rem 1.25rem;
		background-color: #fff8e1;
		border-left: 4px solid var(--color-warning);
		border-radius: var(--radius-sm);
		font-size: 0.95rem;
		color: var(--color-iron);
	}

	.todo-inline {
		padding: 0.6rem 0.9rem;
		background-color: #fff8e1;
		border-left: 3px solid var(--color-warning);
		border-radius: var(--radius-sm);
		font-size: 0.9rem;
		font-style: italic;
		color: var(--color-iron);
	}

	h2 {
		margin: 2.5rem 0 1rem;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-brand-dark);
	}

	h3 {
		margin: 1.5rem 0 0.75rem;
		font-size: var(--font-size-h3);
		font-weight: 700;
		color: var(--color-iron);
	}

	p {
		margin: 0 0 1rem;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-on-light);
	}

	ul {
		margin: 0 0 1rem;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	ul li {
		font-size: 1rem;
		color: var(--text-on-light);
		line-height: 1.65;
	}

	ul li::marker {
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
		border-bottom: 1px solid var(--border-default);
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
		border-radius: var(--radius-sm);
	}

	a {
		color: var(--color-brand-primary);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: var(--color-brand-hover);
	}
</style>
