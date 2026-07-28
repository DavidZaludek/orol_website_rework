<script lang="ts">
	import ownerPhoto from '$lib/assets/koloman_zaludek.jpg';
</script>

<svelte:head>
	<title>O nás – Stavebniny Orol</title>
	<meta
		name="description"
		content="Zoznámte sa so spoločnosťou Stavebniny Orol s.r.o. – predaj stavebného materiálu v Liptovskom Mikuláši od roku 1998."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container">
		<h1>O nás</h1>
	</div>
</section>

<!-- Owner letter -->
<section class="letter-section">
	<div class="container">
		<div class="letter-grid">
			<div class="letter-col">
				<p>Vážení zákazníci,</p>
				<p>
					Naša spoločnosť Stavebniny OROL s.r.o sa zaoberá predajom stavebného materiálu a
					doplnkovými službami, ktoré majú súvis so stavebnou činnosťou. Na trhu pôsobíme od roku
					1998. Výrobky našich dodávateľov slúžia dnes ľuďom po celej krajine, v mestách a obciach.
					O tom, že kvalita našej práce a pestrosť ponúkaných výrobkov spĺňajú najvyššie kritériá
					svedčí aj množstvo našich spokojných zákazníkov, ktorí sa k nám vždy radi vracajú.
				</p>
				<p>
					Od nášho vzniku sme získali veľa stálych zákazníkov a okruh klientov po celom Mikulášskom
					a Ružomberskom okrese.
				</p>
				<p>
					Nami dodávané murovacie materiály, lepidlá, omietky a ďalšie výrobky dnes môžete nájsť
					rovnako na priemyselných stavbách, obchodných supermarketoch ako aj na rodinných domoch v
					našich mestách ako aj v okolitých dedinách.
				</p>
				<p>
					Výrobky našich dodávateľov sa stali vďaka svojej kvalite, cenovej dostupnosti a technickej
					zdatnosti našich predajcov obľúbenými na trhu, o čom svedčí aj postavenie našej
					spoločnosti OROL s.r.o medzi ostatnými dodávateľmi stavebných materiálov nielen v okrese
					Lipt. Mikuláš, ale aj v celoslovenskom meradle.
				</p>
				<p>
					Ponúkané výrobky predstavujú širokú škálu výrobkov, ktoré ponúkame a dodávame až priamo k
					Vám. Nájdete u nás stavebné materiály, ktoré sme pre Vás pripravili na túto sezónu.
					Veríme, že si nájdete medzi nimi také produkty, ktoré Vám budú svojou kvalitou, vzhľadom a
					cenou najviac vyhovovať. Pri výbere materiálu sa isto budete riadiť podľa základných
					informácií, ktoré budú pri každom z našich tovarov a taktiež vizuálnou stránkou.
					Samozrejme, ak sa nebudete vedieť rozhodnúť, alebo budete potrebovať akúkoľvek pomoc,
					veľmi radi Vám poradíme pri Vašom výbere a rozhodovaní sa. Súčasťou našich služieb je aj
					možnosť konzultácií s pracovníkmi, ktorí dokážu navrhnúť pre Vás optimálne riešenie, či už
					pri hrubej stavbe, vnútornom interiéri alebo vonkajších úprav a oplotení. Ak by ste však
					chceli vidieť jednotlivé výrobky a materiály v použití, veľmi radi Vám jednotlivé
					realizácie ukážeme na jednotlivých stavbách prípadne fotodokumentáciách v rôznych
					variáciách.
				</p>
				<p>
					Veríme, že Vás náš tovar uspokojí, tak po kvalitatívnej, ako aj po estetickej stránke.
					Prajeme Vám veľa pohodlia a úspechov v stavbách postavených z materiálov dodaných
					spoločnosťou OROL s.r.o. Celkom určite Vaše rozhodnutie nebudete ľutovať.
				</p>
				<p>Navštívte nás na novej adrese kpt. Nálepku 2218 smerom na stavivá Garaj.</p>
				<p class="sign-off">Ing. Koloman ŽALÚDEK, Majiteľ spoločnosti OROL, spol. s r.o.</p>
			</div>

			<div class="photo-col">
				<img
					src={ownerPhoto}
					alt="Ing. Koloman Žalúdek, majiteľ spoločnosti Stavebniny Orol"
					class="owner-photo"
				/>
				<p class="owner-caption">
					<strong>Ing. Koloman ŽALÚDEK</strong><br />
					Majiteľ spoločnosti OROL, spol. s r.o.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Motto + Vision -->
<section class="mv-section">
	<div class="container">
		<div class="mv-grid">
			<div class="motto-col">
				<h2 class="section-heading">Naše motto</h2>
				<ul class="motto-list">
					<li class="motto-item">Spokojný zákazník je zárukou prosperity firmy.</li>
					<li class="motto-item">Prosperujúca firma je zárukou spokojnosti pracovníkov.</li>
					<li class="motto-item">
						Spokojný a aktívny pracovník je zárukou spokojnosti zákazníkov.
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	/* ---- Shared ---- */
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	.section-heading {
		margin: 0 0 2rem;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-brand-dark);
	}

	/* ---- Hero ---- */
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

	/* ---- Letter section ---- */
	.letter-section {
		padding: var(--space-section-y) 0;
		background-color: var(--color-white);
	}

	.letter-grid {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 3rem;
		align-items: start;
	}

	.photo-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.owner-photo {
		width: 100%;
		max-width: 320px;
		aspect-ratio: 3 / 4;
		object-fit: cover;
		border-radius: var(--radius-lg);
		display: block;
	}

	.owner-caption {
		margin: 0;
		text-align: center;
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.owner-caption strong {
		color: var(--text-on-light);
		font-size: 1rem;
	}

	.letter-col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.letter-col p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.75;
		color: var(--text-on-light);
	}

	.sign-off {
		margin-top: 0.5rem !important;
		font-style: italic;
		color: var(--text-muted) !important;
		font-size: 0.95rem !important;
	}

	/* ---- Motto + Vision section ---- */
	.mv-section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		background-color: var(--surface-alt);
	}

	.mv-grid {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.motto-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.motto-item {
		font-size: var(--font-size-body);
		font-style: italic;
		font-weight: 500;
		color: var(--text-on-light);
		line-height: 1.6;
		padding: 0.75rem 1.25rem 0.75rem 1.5rem;
		background-color: var(--color-white);
		border-radius: var(--radius-sm);
		border-left: 4px solid var(--color-brand-primary);
		box-shadow: var(--shadow-card);
	}

	/* ---- Responsive ---- */
	@media (max-width: 768px) {
		.letter-grid {
			grid-template-columns: 1fr;
		}

		.owner-photo {
			aspect-ratio: 1 / 1;
			max-width: 220px;
		}
	}
</style>
