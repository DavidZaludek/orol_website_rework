<script lang="ts">
	import { company, contact } from '$lib/site';
</script>

<svelte:head>
	<title>Ochrana osobných údajov – Stavebniny Orol</title>
	<meta
		name="description"
		content="Informácie o spracúvaní osobných údajov v spoločnosti Stavebniny Orol podľa GDPR a zákona 18/2018 Z. z."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Ochrana osobných údajov</h1>
		<p class="hero-lead">
			Informácie o spracúvaní osobných údajov podľa nariadenia GDPR (EÚ 2016/679) a zákona č.
			18/2018 Z. z. o ochrane osobných údajov.
		</p>
	</div>
</section>

<section class="body-section">
	<div class="container">
		<div class="todo">
			<strong>TODO:</strong> Doplniť záväzný právny text. Návrh štruktúry je nižšie — každý oddiel obsahuje
			zoznam údajov, ktoré treba doplniť pred publikovaním.
		</div>

		<h2>1. Prevádzkovateľ</h2>
		<p>
			Prevádzkovateľom v zmysle GDPR je spoločnosť <strong>{company.legalName}</strong>, IČO
			{company.ico}, DIČ {company.dic}, IČ DPH {company.icDph}, so sídlom {contact.address.street},
			{contact.address.city}.
		</p>
		<p class="todo-inline">
			TODO: doplniť údaje o zápise v obchodnom registri (okresný súd, oddiel, vložka), prípadne meno
			štatutárneho zástupcu.
		</p>

		<h2>2. Kontakt vo veciach ochrany osobných údajov</h2>
		<p>
			Vo veciach ochrany osobných údajov nás kontaktujte na e-maile
			<a href={contact.emailHref}>{contact.email}</a> alebo telefonicky na
			<a href={contact.phoneHref}>{contact.phone}</a>.
		</p>
		<p class="todo-inline">
			TODO: rozhodnúť, či má spoločnosť určenú zodpovednú osobu (DPO). Pre menšieho obchodníka
			zvyčajne nie je povinná — v tom prípade napísať „Spoločnosť nemá určenú zodpovednú osobu."
		</p>

		<h2>3. Účely a právne základy spracúvania</h2>
		<p class="todo-inline">TODO: vymenovať jednotlivé účely a k nim právny základ. Príklady:</p>
		<ul>
			<li>
				<strong>Vybavenie cenovej ponuky / kontaktný formulár</strong> — právny základ: predzmluvné
				vzťahy / oprávnený záujem; doba uchovávania: <em>doplniť</em>.
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
				<strong>Prevádzka webovej stránky</strong> — IP adresa, informácie o prehliadači; právny základ:
				oprávnený záujem na bezpečnosti a štatistike návštevnosti.
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
			Vzhľadom na využívanie služby Cloudflare môže dochádzať k prenosu údajov do USA. Prenos je
			zabezpečený štandardnými zmluvnými doložkami schválenými Európskou komisiou.
		</p>

		<h2>7. Doba uchovávania</h2>
		<p class="todo-inline">
			TODO: doplniť konkrétne doby uchovávania pre každý účel (napr. žiadosti o cenovú ponuku — 6
			mesiacov, marketingový súhlas — do odvolania, účtovné doklady — 10 rokov).
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
		<p>Pri spracúvaní Vašich údajov nepoužívame profilovanie ani automatizované rozhodovanie.</p>

		<h2>10. Účinnosť</h2>
		<p class="todo-inline">TODO: doplniť dátum účinnosti zásad.</p>
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

	a {
		color: var(--color-brand-primary);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: var(--color-brand-hover);
	}
</style>
