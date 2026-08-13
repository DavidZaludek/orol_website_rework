// Per-category detail copy for /products/[slug], extracted verbatim from the
// original static product pages. Suppliers live in `products` in `$lib/site`.

export type ProductDetail = {
	/** Lead paragraph shown in the head cell. */
	lead: string;
	/** "Ponúkame" checklist items. */
	bullets: string[];
	/** Availability note shown in the "Naši dodávatelia" cell. */
	note: string;
	/** CTA band title ("Záujem o …?"); falls back to "Záujem o materiál?". */
	cta?: string;
	/** `<meta name="description">` content carried over from the original page. */
	meta: string;
	/** Optional shorter `<title>` variant carried over from the original page. */
	metaTitle?: string;
};

export const productDetails: Record<string, ProductDetail> = {
	'hruba-stavba': {
		lead: 'Kompletný sortiment pre hrubú stavbu – od základov cez murivo až po stropy a preklady. Poradíme s výberom systému, ktorý sedí k Vášmu projektu, technologickým požiadavkám aj rozpočtu.',
		bullets: [
			'Tehly a tehlové bloky – klasické aj brúsené',
			'Pórobetónové tvárnice a systémové doplnky',
			'Preklady, stropy a stropné systémy',
			'Cement, vápno, riečny piesok a kamenivo',
			'Betónové zmesi vrátane suchých zmesí',
			'Komínové systémy'
		],
		note: 'Spolupracujeme s overenými slovenskými aj európskymi výrobcami. Konkrétne značky a aktuálnu dostupnosť radi upresníme na predajni alebo telefonicky.',
		cta: 'Záujem o materiál pre hrubú stavbu?',
		meta: 'Tehly, pórobetónové tvárnice, preklady, cement, vápno a všetko pre hrubú stavbu rodinného domu aj väčších objektov.'
	},
	'suche-zmesy-malty-omietky': {
		lead: 'Široký výber suchých zmesí pre profesionálov aj domácich majstrov – od jednoduchých murovacích mált cez vnútorné a vonkajšie omietky až po samonivelačné stierky a sanačné systémy.',
		bullets: [
			'Murovacie malty a tenkovrstvové malty na brúsené tehly',
			'Vnútorné vápennocementové a sadrové omietky',
			'Lepidlá na obklady, dlažby a veľkoformátové dosky',
			'Samonivelačné podlahové stierky',
			'Sanačné a reprofilačné malty',
			'Špárovacie hmoty a flexibilné lepidlá'
		],
		note: 'Skladom držíme zmesi od overených výrobcov pôsobiacich na slovenskom trhu. Konkrétne značky a balenia Vám radi odporučíme podľa typu podkladu a aplikácie.',
		cta: 'Záujem o suché zmesi?',
		meta: 'Murovacie a omietkové zmesi, lepidlá, samonivelačné stierky a špeciálne malty pre interiér aj exteriér.'
	},
	'tepelne-izolacie': {
		lead: 'Tepelné izolácie pre celý plášť budovy. Pomôžeme zostaviť skladbu zatepľovacieho systému ETICS podľa normy aj požiadaviek na energetickú hospodárnosť – od soklov cez fasádu až po strechu.',
		bullets: [
			'Fasádny polystyrén – EPS biely aj sivý (grafitový)',
			'XPS extrudovaný polystyrén pre sokle a spodné stavby',
			'Minerálne vlny – sklené aj kamenné, vo forme dosiek, roliek a lamiel',
			'Izolácie pre šikmé a ploché strechy',
			'Podlahové a kročajové izolácie',
			'Systémové doplnky – kotvy, lišty, sieťky, rohovníky, lepidlá'
		],
		note: 'Skladom držíme izolácie od popredných výrobcov pôsobiacich v Strednej Európe. Konkrétne značky, hrúbky a hodnoty λ Vám radi odporučíme podľa projektu.',
		cta: 'Záujem o tepelné izolácie?',
		meta: 'Fasádny polystyrén, XPS, minerálne vlny a izolácie pre strechy, podlahy aj stropy vrátane systémových doplnkov.'
	},
	'fasadne-a-interierove-farby': {
		lead: 'Kompletný systém pre povrchové úpravy fasády aj interiéru – od penetrácie cez omietku až po finálnu farbu. Farby tónujeme priamo na predajni podľa vzorkovníkov RAL, NCS aj vzorkovníkov výrobcov.',
		bullets: [
			'Tenkovrstvové fasádne omietky – silikón, silikát, akryl, minerálne',
			'Fasádne farby pre rôzne typy podkladov',
			'Interiérové farby – matné, oteruvzdorné, umývateľné',
			'Penetračné a základné nátery',
			'Dekoratívne stierky a benátske omietky',
			'Tónovanie podľa RAL, NCS a vzorkovníkov výrobcov'
		],
		note: 'Pracujeme s overenými značkami fasádnych systémov a farieb. Konkrétne výrobky a odtiene Vám radi navrhneme priamo na predajni vrátane natónovania na počkanie.',
		cta: 'Záujem o omietky alebo farby?',
		meta: 'Tenkovrstvové fasádne omietky, fasádne aj interiérové farby, penetrácie a tónovanie priamo na predajni.',
		metaTitle: 'Fasádne omietky a farby'
	},
	'stresne-krytiny': {
		lead: 'Strešné krytiny pre šikmé aj ploché strechy. Poradíme s výberom krytiny podľa sklonu strechy, architektúry domu aj rozpočtu, vrátane všetkých doplnkov a klampiarskych prvkov.',
		bullets: [
			'Pálené a betónové škridly',
			'Plechové strešné krytiny – poplastované, hliníkové, falcované',
			'Asfaltové šindle a pásy',
			'Strešné okná a svetlíky',
			'Žľaby, zvody a klampiarske prvky',
			'Strešné doplnky – snehové zábrany, lemovania, prestupy'
		],
		note: 'Spolupracujeme s renomovanými výrobcami strešných systémov. Konkrétne značky, modely a farby Vám radi navrhneme podľa typu strechy a požadovaného vzhľadu.',
		cta: 'Záujem o strešnú krytinu?',
		meta: 'Pálené aj betónové škridly, plechové krytiny, asfaltové šindle, žľaby a kompletný systém klampiarskych doplnkov.'
	},
	hydroizolacia: {
		lead: 'Hydroizolačné materiály pre celú stavbu – od základov po strechu. Vyberieme vhodné riešenie podľa typu konštrukcie, namáhania vodou aj dostupnosti pre svojpomocnú realizáciu.',
		bullets: [
			'Asfaltové modifikované pásy (SBS, APP)',
			'Hydroizolačné PVC a TPO fólie',
			'Tekuté hydroizolácie a stierkové izolácie',
			'Penetračné asfaltové nátery',
			'Bentonitové izolácie a doplnky',
			'Hydroizolačné systémy pod obklady a dlažby v kúpeľniach'
		],
		note: 'Skladom držíme hydroizolácie od renomovaných výrobcov. Konkrétne značky a typy pásov či fólií Vám radi odporučíme podľa konštrukcie a namáhania.',
		cta: 'Záujem o hydroizoláciu?',
		meta: 'Asfaltové pásy, fólie a tekuté hydroizolácie pre základy, ploché strechy, balkóny a kúpeľne.'
	},
	'stavebna-chemia': {
		lead: 'Stavebná chémia pre profesionálne aj svojpomocné použitie. Máme na sklade overené značky pre tesnenie, lepenie aj ošetrovanie konštrukcií.',
		bullets: [
			'PU peny – pištoľové aj trubičkové, montážne aj nízkoexpanzné',
			'Silikónové, akrylové a hybridné tmely',
			'Konštrukčné a montážne lepidlá',
			'Prípravky proti plesniam, riasam a vlhkosti',
			'Odformovacie prípravky a prísady do betónu',
			'Antikorózne nátery a chemické kotvy'
		],
		note: 'Skladom držíme výrobky od značiek, ktoré sú overené remeselníkmi a stavbármi. Konkrétny produkt Vám radi odporučíme podľa typu aplikácie a podkladu.',
		cta: 'Záujem o stavebnú chémiu?',
		meta: 'Stavebná chémia – PU peny, silikóny, tmely, lepidlá, prípravky proti vlhkosti aj plesniam.'
	},
	'dlazby-betonove-tvarnice': {
		lead: 'Betónové prvky pre exteriér – od zámkovej dlažby na príjazdové cesty cez obrubníky až po plotové systémy. Pomôžeme s výberom farby, formátu aj prislúchajúcich kladiacich materiálov.',
		bullets: [
			'Zámková dlažba – rôzne formáty, hrúbky a farby',
			'Veľkoplošná betónová dlažba pre terasy',
			'Cestné a parkové obrubníky',
			'Plotové štiepané tvárnice a stĺpiky',
			'Palisády, schody a oporné múry',
			'Drenážne a vsakovacie prvky'
		],
		note: 'Spolupracujeme so slovenskými výrobcami betónových prvkov. Ku všetkým produktom Vám pomôžeme zostaviť cenovú ponuku vrátane kladiaceho plánu a doplnkov.',
		cta: 'Záujem o dlažbu alebo tvárnice?',
		meta: 'Zámková dlažba, obrubníky, plotové tvárnice a betónové prvky pre exteriér a záhradnú architektúru.'
	},
	'betonarska-ocel': {
		lead: 'Betonárska oceľ pre všetky typy železobetónových konštrukcií – od pásových základov cez stropy až po monolitické steny. Na požiadanie zabezpečíme strihanie a ohýbanie výstuže podľa výkazu armovania.',
		bullets: [
			'Betonárska výstuž v tyčiach (rôzne priemery)',
			'Kari siete štandardných aj atypických rozmerov',
			'Strmienky a tvarované prvky',
			'Viazací drôt a dištančné prvky',
			'Profily a uholníky',
			'Strihanie a ohýbanie na mieru (po dohode)'
		],
		note: 'Betonársku oceľ odoberáme od overených hutníckych dodávateľov. Ku každej zákazke dodáme certifikát kvality a atestačný list.',
		cta: 'Záujem o betonársku oceľ?',
		meta: 'Betonárska výstuž, kari siete, strmienky a viazací drôt pre základy, stropy aj armovanie konštrukcií.'
	},
	'okna-a-dvere': {
		lead: 'Okná a dvere na mieru od overených slovenských a európskych výrobcov. Zabezpečíme zameranie, výrobu aj odbornú montáž vrátane zapracovania ostení a finálnej úpravy.',
		bullets: [
			'Plastové okná v rôznych profilových systémoch',
			'Hliníkové okná a fasádne systémy',
			'Drevené a drevohliníkové okná',
			'Vchodové a interiérové dvere',
			'Strešné okná a svetlovody',
			'Parapety, žalúzie, sieťky proti hmyzu'
		],
		note: 'Spolupracujeme so slovenskými aj európskymi výrobcami okien. Konkrétny profilový systém, zasklenie aj farbu prispôsobíme Vašim požiadavkám a architektúre domu.',
		cta: 'Záujem o okná alebo dvere?',
		meta: 'Plastové, hliníkové aj drevené okná, dvere a strešné okná na mieru vrátane zamerania a montáže.'
	},
	'kanalizacia-voda-sanita': {
		lead: 'Kompletný materiál pre vnútorné aj vonkajšie rozvody vody a kanalizácie. Pomôžeme s výberom systému od prípojky až po sanitu v kúpeľni, vrátane revíznych šácht a žúmp.',
		bullets: [
			'Kanalizačné rúry a tvarovky (PVC, KG, HT)',
			'Vodovodné rúry a tvarovky (PPR, PEX, meď)',
			'Revízne šachty, žumpy a vsakovacie nádrže',
			'Záhradné hadice, postrekovače a rozvody úžitkovej vody',
			'Sanitárna keramika – WC, umývadlá, sprchové vaničky',
			'Vodovodné batérie, sifóny a doplnky'
		],
		note: 'Spolupracujeme s overenými výrobcami inštalačných systémov a sanitárnej techniky. Konkrétne značky a typy Vám radi navrhneme podľa projektu a požadovaného komfortu.',
		cta: 'Záujem o inštalačný materiál?',
		meta: 'Rúry a tvarovky pre kanalizáciu a vodovod, šachty, žumpy a sanitárne vybavenie kúpeľne.'
	},
	'naradie-a-doplnky': {
		lead: 'Náradie a doplnkový sortiment pre profesionálne aj svojpomocné použitie. Máme na sklade osvedčené značky pre každodennú prácu na stavbe aj pri rekonštrukciách.',
		bullets: [
			'Ručné náradie – kladivá, skrutkovače, kliešte, vodováhy, meradlá',
			'Murárske náradie – lopaty, fúriky, hladidlá, vedrá, miešacie nadstavce',
			'Elektrické náradie – vŕtačky, brúsky, píly a príslušenstvo',
			'Spojovací materiál – skrutky, klince, hmoždinky, kotvy',
			'Ochranné pracovné prostriedky – rukavice, prilby, okuliare, respirátory',
			'Lepiace pásky, krycie fólie a spotrebný materiál'
		],
		note: 'Skladom držíme výrobky od značiek, ktoré sú overené remeselníkmi a stavbármi. Konkrétny produkt Vám radi odporučíme podľa typu práce a požiadaviek.',
		cta: 'Záujem o náradie alebo doplnky?',
		meta: 'Ručné aj elektrické náradie, murárske pomôcky, spojovací materiál a ochranné pracovné prostriedky.'
	}
};
