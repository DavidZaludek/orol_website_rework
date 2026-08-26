<script lang="ts">
	import ownerPhoto from '$lib/assets/koloman_zaludek_no_text.jpg';
	import { reveal } from '$lib/reveal';

	// The motto is a loop: customer feeds the firm, the firm feeds the staff,
	// the staff feed the customer. Split by whose side each claim is about.
	const mottoParts = [
		{ label: 'Zákazník', text: 'Spokojný zákazník je zárukou prosperity firmy.' },
		{ label: 'Firma', text: 'Prosperujúca firma je zárukou spokojnosti pracovníkov.' },
		{ label: 'Pracovník', text: 'Spokojný a aktívny pracovník je zárukou spokojnosti zákazníkov.' }
	];
</script>

<svelte:head>
	<title>O nás – Stavebniny Orol</title>
	<meta
		name="description"
		content="Zoznámte sa so spoločnosťou Stavebniny Orol s.r.o. – predaj stavebného materiálu v Liptovskom Mikuláši od roku 1998."
	/>
</svelte:head>

<section class="section" aria-label="O nás">
	<div class="story">
		<div class="story-row story-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">O nás</span>
				<h1 class="section-title">O nás</h1>
				<p class="head-note">
					Predaj stavebného materiálu a doplnkové služby v Liptovskom Mikuláši od roku 1998.
				</p>
			</header>
			<a href="/contact" class="head-link-cell">Kontaktujte nás →</a>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		<!-- Owner letter -->
		<div class="story-row">
			<div class="letter-cell" data-reveal {@attach reveal()}>
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

			<figure class="photo-cell" data-reveal {@attach reveal(120)}>
				<div class="photo-media">
					<img
						src={ownerPhoto}
						alt="Ing. Koloman Žalúdek, majiteľ spoločnosti Stavebniny Orol"
						width="200"
						height="269"
						loading="lazy"
					/>
				</div>
				<figcaption class="photo-caption">Ing. Koloman Žalúdek · Majiteľ</figcaption>
			</figure>

			<div class="acc acc--blue" aria-hidden="true"></div>
		</div>

		<!-- Motto -->
		<div class="story-row">
			<div class="motto-head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Naše motto</span>
			</div>
			<div class="acc acc--red" aria-hidden="true"></div>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		<div class="story-row">
			{#each mottoParts as part, i (part.label)}
				<div class="motto-cell" data-reveal {@attach reveal(i * 90)}>
					<span class="motto-label">{part.label}</span>
					<blockquote class="motto">{part.text}</blockquote>
				</div>
			{/each}
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

	/* ===== Story canvas ===== */
	.story {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.story-row {
		display: flex;
		gap: 5px;
	}

	/* Owner letter — white prose cell at a readable measure */
	.letter-cell {
		flex: 7 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem);
		background-color: var(--color-white);
	}

	/* The measure stays at 62ch and the prose stays left-aligned; auto side
	   margins centre that column in the white cell instead of letting it hug
	   the left edge with all the slack on the right. */
	.letter-cell p {
		width: 100%;
		margin: 0 auto;
		max-width: 62ch;
		font-size: 1rem;
		line-height: 1.65;
		color: var(--color-iron);
	}

	.letter-cell .sign-off {
		margin-top: 0.5rem;
		margin-inline: auto;
		font-style: italic;
		font-size: 0.95rem;
		color: var(--text-muted);
	}

	/* Owner photo — a self-contained portrait card, independent of the letter height. */
	.photo-cell {
		flex: 0 1 clamp(280px, 30vw, 420px);
		width: clamp(280px, 30vw, 420px);
		min-width: 0;
		align-self: flex-start;
		margin: 0;
		overflow: hidden;
		background-color: var(--color-iron);
	}

	.photo-media {
		position: relative;
		overflow: hidden;
		background-color: var(--color-onyx);
	}

	.photo-media img {
		display: block;
		width: 100%;
		height: auto;
		filter: grayscale(100%) contrast(1.08) brightness(0.97);
	}

	.photo-media::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, rgba(192, 40, 28, 0.16) 0%, rgba(30, 32, 34, 0.32) 100%);
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.photo-caption {
		display: block;
		background-color: var(--color-iron);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 0.5rem 1rem;
	}

	/* Motto — the label band above the three claims */
	.motto-head-cell {
		flex: 8 1 0;
		min-width: 0;
		display: flex;
		align-items: center;
		padding: 1.1rem clamp(1.25rem, 3vw, 2.5rem);
		background-color: var(--color-white);
	}

	/* One claim per cell, equal width, side by side. */
	.motto-cell {
		flex: 1 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.9rem;
		padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2.5rem) 2rem;
		background-color: var(--color-white);
	}

	/* Names whose side of the loop this claim is about. */
	.motto-label {
		font-family: var(--font-display);
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--color-brand-primary);
	}

	.motto {
		margin: 0;
		padding: 0.9rem 1.25rem;
		border-left: 3px solid var(--color-brand-primary);
		background-color: var(--color-chalk);
		font-size: var(--font-size-small);
		font-weight: 500;
		font-style: italic;
		line-height: 1.7;
		color: var(--color-steel);
	}

	/* Accent cells */
	.acc {
		flex: 0 0 90px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	.acc--blue {
		background-color: var(--color-accent-blue);
	}

	.acc--red {
		background-color: var(--color-brand-primary);
	}

	/* ===== Mobile: bands stack ===== */
	@media (max-width: 800px) {
		.story {
			gap: 4px;
			padding: 4px;
		}

		.story-row {
			flex-direction: column;
			gap: 4px;
		}

		.motto-head-cell {
			padding: 1rem;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.head-link-cell {
			padding: 0.9rem;
		}

		.letter-cell {
			padding: 1.4rem 1.2rem 1.6rem;
		}

		.photo-cell {
			flex: none;
			width: 100%;
		}

		.motto-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.acc {
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
