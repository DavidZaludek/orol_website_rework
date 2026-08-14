<script lang="ts">
	import { company, contact } from '$lib/site';
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>Ochrana osobných údajov – Stavebniny Orol</title>
	<meta
		name="description"
		content="Informácie o spracúvaní osobných údajov v spoločnosti Stavebniny Orol podľa GDPR a zákona 18/2018 Z. z."
	/>
</svelte:head>

<section class="section" aria-label="Ochrana osobných údajov">
	<div class="comp">
		<div class="comp-row comp-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Právne informácie</span>
				<h1 class="section-title">Ochrana osobných údajov</h1>
				<p class="head-note">
					Informácie o spracúvaní osobných údajov podľa nariadenia GDPR (EÚ 2016/679) a zákona č.
					18/2018 Z. z. o ochrane osobných údajov.
				</p>
			</header>
			<div class="acc acc--yellow" aria-hidden="true"></div>
			<div class="acc acc--blue acc--sm" aria-hidden="true"></div>
		</div>

		<div class="comp-row">
			<div class="prose-cell" data-reveal {@attach reveal(100)}>
				<div class="prose">
					<div class="todo">
						<strong>TODO:</strong> Doplniť záväzný právny text. Návrh štruktúry je nižšie — každý oddiel
						obsahuje zoznam údajov, ktoré treba doplniť pred publikovaním.
					</div>

					<h2>1. Prevádzkovateľ</h2>
					<p>
						Prevádzkovateľom v zmysle GDPR je spoločnosť <strong>{company.legalName}</strong>, IČO
						{company.ico}, DIČ {company.dic}, IČ DPH {company.icDph}, so sídlom {contact.address
							.street},
						{contact.address.city}.
					</p>
					<p class="todo-inline">
						TODO: doplniť údaje o zápise v obchodnom registri (okresný súd, oddiel, vložka),
						prípadne meno štatutárneho zástupcu.
					</p>

					<h2>2. Kontakt vo veciach ochrany osobných údajov</h2>
					<p>
						Vo veciach ochrany osobných údajov nás kontaktujte na e-maile
						<a href={contact.emailHref}>{contact.email}</a> alebo telefonicky na
						<a href={contact.phoneHref}>{contact.phone}</a>.
					</p>
					<p class="todo-inline">
						TODO: rozhodnúť, či má spoločnosť určenú zodpovednú osobu (DPO). Pre menšieho obchodníka
						zvyčajne nie je povinná — v tom prípade napísať „Spoločnosť nemá určenú zodpovednú
						osobu."
					</p>

					<h2>3. Účely a právne základy spracúvania</h2>
					<p class="todo-inline">
						TODO: vymenovať jednotlivé účely a k nim právny základ. Príklady:
					</p>
					<ul>
						<li>
							<strong>Vybavenie cenovej ponuky / kontaktný formulár</strong> — právny základ:
							predzmluvné vzťahy / oprávnený záujem; doba uchovávania: <em>doplniť</em>.
						</li>
						<li>
							<strong>Vystavenie faktúry a vedenie účtovníctva</strong> — právny základ: zákonná povinnosť;
							doba uchovávania: 10 rokov.
						</li>
						<li>
							<strong>Marketing a newsletter</strong> — právny základ: súhlas dotknutej osoby; doba uchovávania:
							do odvolania súhlasu.
						</li>
						<li>
							<strong>Prevádzka webovej stránky</strong> — IP adresa, informácie o prehliadači; právny
							základ: oprávnený záujem na bezpečnosti a štatistike návštevnosti.
						</li>
					</ul>

					<h2>4. Kategórie osobných údajov</h2>
					<p>
						Spracúvame najmä: meno a priezvisko, telefónne číslo, e-mailovú adresu, adresu stavby,
						fakturačné údaje a obsah Vašej požiadavky.
					</p>

					<h2>5. Príjemcovia údajov</h2>
					<p class="todo-inline">TODO: doplniť konkrétnych sprostredkovateľov a tretie strany.</p>
					<ul>
						<li>
							Poskytovateľ hostingu — <strong>Cloudflare, Inc.</strong> (USA, štandardné zmluvné doložky).
						</li>
						<li>
							Poskytovateľ e-mailových služieb — <em
								>TODO: doplniť (napr. Resend, Mailgun, Google Workspace)</em
							>.
						</li>
						<li>Účtovná firma / externý účtovník — <em>TODO: doplniť meno a sídlo</em>.</li>
						<li>Orgány verejnej moci v rozsahu zákonných povinností.</li>
					</ul>

					<h2>6. Prenos do tretích krajín</h2>
					<p>
						Vzhľadom na využívanie služby Cloudflare môže dochádzať k prenosu údajov do USA. Prenos
						je zabezpečený štandardnými zmluvnými doložkami schválenými Európskou komisiou.
					</p>

					<h2>7. Doba uchovávania</h2>
					<p class="todo-inline">
						TODO: doplniť konkrétne doby uchovávania pre každý účel (napr. žiadosti o cenovú ponuku
						— 6 mesiacov, marketingový súhlas — do odvolania, účtovné doklady — 10 rokov).
					</p>

					<h2>8. Vaše práva</h2>
					<p>Ako dotknutá osoba máte právo:</p>
					<ul>
						<li>požadovať prístup k Vašim osobným údajom,</li>
						<li>požadovať ich opravu alebo vymazanie,</li>
						<li>požadovať obmedzenie spracúvania,</li>
						<li>namietať proti spracúvaniu,</li>
						<li>na prenosnosť údajov,</li>
						<li>odvolať súhlas (ak je spracúvanie na ňom založené),</li>
						<li>
							podať sťažnosť dozornému orgánu — <a
								href="https://dataprotection.gov.sk"
								target="_blank"
								rel="noopener noreferrer">Úrad na ochranu osobných údajov SR</a
							>.
						</li>
					</ul>

					<h2>9. Automatizované rozhodovanie</h2>
					<p>
						Pri spracúvaní Vašich údajov nepoužívame profilovanie ani automatizované rozhodovanie.
					</p>

					<h2>10. Účinnosť</h2>
					<p class="todo-inline">TODO: doplniť dátum účinnosti zásad.</p>
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
	/* Hidden only while the reveal script is armed (see app.html) — a
	   blocked bundle can never leave content permanently invisible. */
	:global(html[data-reveal-ready]) [data-reveal] {
		opacity: 0;
		transform: translateY(18px);
		transition:
			opacity var(--transition-reveal),
			transform var(--transition-reveal);
		transition-delay: var(--reveal-delay, 0ms);
	}

	:global(html[data-reveal-ready]) [data-reveal]:global(.is-revealed) {
		opacity: 1;
		transform: none;
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
