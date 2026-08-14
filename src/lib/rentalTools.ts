import demolitionPhoto from '$lib/assets/rental/hilti-demolition.jpg';
// Official Hilti product shots — usable under the company's distribution
// agreement as a licensed Hilti supplier. Only models whose photo really is
// the tool we rent; discontinued ones wait for our own photos (issue #2).
import productTe3000 from '$lib/assets/rental/hilti/te-3000-avr.png';
import productTe1000 from '$lib/assets/rental/hilti/te-1000-avr.png';
import productTe500 from '$lib/assets/rental/hilti/te-500-avr.png';
import productTe70 from '$lib/assets/rental/hilti/te-70.png';
import productAg230 from '$lib/assets/rental/hilti/ag-230.png';
import productDsh700 from '$lib/assets/rental/hilti/dsh-700-x.png';
// Manufacturer photos of the tool in use, for the detail-page hero.
import useTe3000 from '$lib/assets/rental/hilti/te-3000-avr-use.jpg';
import useTe1000 from '$lib/assets/rental/hilti/te-1000-avr-use.jpg';
import useTe500 from '$lib/assets/rental/hilti/te-500-avr-use.jpg';
import useTe70 from '$lib/assets/rental/hilti/te-70-use.jpg';
import useAg230 from '$lib/assets/rental/hilti/ag-230-use.jpg';
import useDsh700 from '$lib/assets/rental/hilti/dsh-700-x-use.jpg';
// Where Hilti no longer publishes the discontinued model, its successor's
// photo stands in — the page still names the model actually rented.
import productGx120 from '$lib/assets/rental/hilti/gx-120-me.png';
import productScw70 from '$lib/assets/rental/hilti/scw-70.png';
import productDcSe20 from '$lib/assets/rental/hilti/dc-se-20.png';
import productVc20 from '$lib/assets/rental/hilti/vc-20-ul.png';
import useGx120 from '$lib/assets/rental/hilti/gx-120-me-use.jpg';
import useScw70 from '$lib/assets/rental/hilti/scw-70-use.jpg';
import useDcSe20 from '$lib/assets/rental/hilti/dc-se-20-use.jpg';
import cuttingPhoto from '$lib/assets/rental/hilti-cutting.jpg';
import toolsPhoto from '$lib/assets/gallery/IMG_2228.jpg';

export interface RentalTool {
	slug: string;
	/** Substring used to link the catalogue list item to this page. */
	match: string;
	name: string;
	model: string;
	category: string;
	lead: string;
	uses: string[];
	specs: string[];
	/** Official Hilti Slovakia product page. */
	hiltiUrl: string;
	/**
	 * Set when this model is discontinued and `hiltiUrl` points at its
	 * successor — the page says so rather than pretending it is the same tool.
	 */
	hiltiSuccessor?: string;
	/** Manufacturer photo of the tool in use — fills the detail-page hero. */
	useImage?: string;
	/** Official Hilti product shot, shown as a miniature beside the model. */
	productImage?: string;
	/** YouTube id of the manufacturer's instructional video, if one exists. */
	youtubeId?: string;
	image: string;
	/**
	 * The company's own Hilti photo of this tool, catalogued on Google Drive
	 * (content/google-drive-image-catalogue.jsonl). Swap `image` for it once the
	 * archive is pulled locally — see issue #2.
	 */
	drivePhotoId: string;
}

export const rentalTools: RentalTool[] = [
	{
		slug: 'te-3000-avr',
		match: 'TE 3000-AVR',
		name: 'Búracie kladivo Hilti TE 3000-AVR',
		model: 'TE 3000-AVR',
		category: 'Búranie a vŕtanie',
		lead: 'Najvýkonnejšie búracie kladivo v našej požičovni. Nahrádza ťažkú demolačnú techniku tam, kde sa s ňou nedá dostať – búranie betónových podláh, základov a priečok.',
		uses: [
			'Búranie betónových podláh a základových dosiek',
			'Demolácia priečok a nosných konštrukcií',
			'Práce, pri ktorých menšie kladivo už nestačí'
		],
		specs: ['Hmotnosť 27,1 kg', 'Energia jedného úderu 85 J', 'Upínanie TE-H (Hilti HEX 28)'],
		hiltiUrl:
			'https://www.hilti.sk/c/CLS_POWER_TOOLS_7124/CLS_DEMOLITION_HAMMER_BREAKER_SUB_7124/CLS_DEMOLITION_HAMMER_BREAKER_7124/r11668382',
		useImage: useTe3000,
		productImage: productTe3000,
		image: demolitionPhoto,
		drivePhotoId: '1aV97iMhaHhLyiNLlQTr1u3WWE8HrLbsd'
	},
	{
		slug: 'te-1000-avr',
		match: 'TE 1000-AVR',
		name: 'Búracie kladivo Hilti TE 1000-AVR',
		model: 'TE 1000-AVR',
		category: 'Búranie a vŕtanie',
		lead: 'Univerzálne búracie kladivo pre podlahy a menšie demolácie. Dobrý pomer výkonu a hmotnosti pri práci v interiéri.',
		uses: [
			'Odstraňovanie dlažby, poterov a mazanín',
			'Búranie priečok a otvorov v murive',
			'Práca v interiéri, kde je dôležitá manipulovateľnosť'
		],
		specs: ['Hmotnosť 12,5 kg', 'Energia jedného úderu 26 J', 'Upínanie TE-S'],
		hiltiUrl:
			'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_DEMOLITION_HAMMER_BREAKER_SUB_7125/r9672135',
		useImage: useTe1000,
		productImage: productTe1000,
		image: demolitionPhoto,
		drivePhotoId: '14DpneincikbA4FmGZdZSyLX2-8srf1w-'
	},
	{
		slug: 'te-500-avr',
		match: 'TE 500-AVR',
		name: 'Sekacie kladivo Hilti TE 500-AVR',
		model: 'TE 500-AVR',
		category: 'Búranie a vŕtanie',
		lead: 'Ľahšie sekacie kladivo na presnú prácu – drážky, otvory a odstraňovanie obkladov bez zbytočného zaťaženia okolitých konštrukcií.',
		uses: [
			'Sekanie drážok pre rozvody',
			'Odstraňovanie obkladov a omietok',
			'Menšie búracie práce v interiéri'
		],
		specs: ['Hmotnosť 6,3 kg', 'Energia jedného úderu 8,5 J', 'Upínanie TE-Y (SDS Max)'],
		hiltiUrl:
			'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_DEMOLITION_HAMMER_BREAKER_SUB_7125/r7770032',
		useImage: useTe500,
		productImage: productTe500,
		image: demolitionPhoto,
		drivePhotoId: '1HLrGCBzTwgqa25JkTQKsfN89hIT748vX'
	},
	{
		slug: 'te-70',
		match: 'TE 70',
		name: 'Kombinované kladivo Hilti TE 70',
		model: 'TE 70-ATC/AVR',
		category: 'Búranie a vŕtanie',
		lead: 'Kombinované kladivo na vŕtanie veľkých priemerov aj sekanie. Jeden stroj pre prestupy, kotvenie aj búracie práce.',
		uses: [
			'Vŕtanie prestupov a otvorov väčších priemerov',
			'Kotvenie do betónu',
			'Sekacie práce bez výmeny stroja'
		],
		specs: ['Hmotnosť 10 kg', 'Energia jedného úderu 14,5 J', 'Vŕtanie 12 – 150 mm, SDS Max'],
		hiltiUrl: 'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_ROTARY_HAMMERS_7125/r6851673',
		useImage: useTe70,
		productImage: productTe70,
		image: demolitionPhoto,
		drivePhotoId: '1svCRkVX_xMlOgodLADC0FvOiW1FbZKBx'
	},
	{
		slug: 'gx-120-me',
		match: 'GX 120-ME',
		name: 'Plynový vsadzovací prístroj Hilti GX 120-ME',
		model: 'GX 120-ME',
		category: 'Montáž a inštalácie',
		lead: 'Plynová klincovačka na rýchle kotvenie do betónu a ocele bez predvŕtavania – ideálna pri montáži profilov a rozvodov.',
		uses: [
			'Kotvenie sadrokartónových profilov',
			'Uchytenie elektroinštalácie a rozvodov',
			'Rýchla montáž bez predvŕtavania'
		],
		specs: ['Hmotnosť 3,99 kg', 'Klince 14 – 39 mm', 'Zásobník na 40 klincov'],
		hiltiUrl:
			'https://www.hilti.sk/c/CLS_DIRECT_FASTENING/CLS_DX_TOOLS2/CLS_DX_TOOLS2_GAS/r4410162',
		hiltiSuccessor: 'GX 3-ME',
		useImage: useGx120,
		productImage: productGx120,
		image: demolitionPhoto,
		drivePhotoId: '146i_uACiwQUx9eZc-XeBaQ3cLR7UOZWc'
	},
	{
		slug: 'ag-230',
		match: 'AG230',
		name: 'Uhlová brúska Hilti AG 230',
		model: 'AG 230-27DB',
		category: 'Rezanie a brúsenie',
		lead: 'Veľká uhlová brúska na rezanie betónu, tehly a ocele. Kotúč 230 mm zvládne aj hrubšie prierezy.',
		uses: [
			'Rezanie betónu, tehál a dlažby',
			'Delenie ocelových profilov a výstuže',
			'Brúsenie a čistenie povrchov'
		],
		specs: ['Príkon 2 400 W', 'Kotúč 230 mm, hĺbka rezu 68 mm', 'Hmotnosť 6,5 kg'],
		hiltiUrl: 'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_GRINDERS_SANDERS_7125/r6118333',
		useImage: useAg230,
		productImage: productAg230,
		image: cuttingPhoto,
		drivePhotoId: '1IcljW0w_0Q8EplTd5HippRcw05mq7m45'
	},
	{
		slug: 'scw-70',
		match: 'SCW 70',
		name: 'Okružná píla Hilti SCW 70',
		model: 'SCW 70',
		category: 'Rezanie a brúsenie',
		lead: 'Okružná píla na drevo, dosky a debnenie. Presné rovné rezy s vodiacou lištou priamo na stavbe.',
		uses: [
			'Rezanie krovov, dosiek a debnenia',
			'Práca na streche a v priestoroch bez elektriny',
			'Presné rovné rezy s vodiacou lištou'
		],
		specs: ['Kotúč 190 mm', 'Hĺbka rezu 70 mm', 'Vodiaca lišta pre presné rezy'],
		hiltiUrl: 'https://www.hilti.cz/c/CLS_POWER_TOOLS_7125/CLS_SAWS_7125/r5485',
		youtubeId: 'jkGcumfLU0A',
		useImage: useScw70,
		productImage: productScw70,
		image: cuttingPhoto,
		drivePhotoId: '1tt_gBDyUeqC5eP71HVs5l3DjQY3AWhEG'
	},
	{
		slug: 'dsh-700-x',
		match: 'DSH 700-X',
		name: 'Rozbrusovacia píla Hilti DSH 700-X',
		model: 'DSH 700-X',
		category: 'Rezanie a brúsenie',
		lead: 'Benzínová rozbrusovacia píla na hlboké rezy v betóne a asfalte. Pracuje bez prípojky elektriny priamo na stavbe.',
		uses: [
			'Rezanie betónu, asfaltu a obrubníkov',
			'Delenie dlažby a betónových tvárnic',
			'Práca v teréne bez prístupu k elektrine'
		],
		specs: ['Kotúč 350 mm', 'Hĺbka rezu 125 mm', 'Mokré aj suché rezanie'],
		hiltiUrl: 'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_CONCRETE_SAWS_7125/r13340236',
		useImage: useDsh700,
		productImage: productDsh700,
		image: cuttingPhoto,
		drivePhotoId: '1tt_gBDyUeqC5eP71HVs5l3DjQY3AWhEG'
	},
	{
		slug: 'dc-se-20',
		match: 'DC-SE20',
		name: 'Drážkovací stroj Hilti DC-SE 20 DLX',
		model: 'DC-SE 20 DLX',
		category: 'Rezanie a brúsenie',
		lead: 'Drážkovačka na čisté drážky pre elektroinštaláciu a rozvody v murive a betóne, s odsávaním prachu.',
		uses: [
			'Drážky pre elektroinštaláciu a vodu',
			'Rezanie v tehle, betóne a pórobetóne',
			'Práca s odsávaním – menej prachu v interiéri'
		],
		specs: ['Kotúč 150 mm', 'Drážka do 50 × 50 mm', 'Hmotnosť 7,6 kg'],
		hiltiUrl: 'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_CONCRETE_SAWS_7125/r6703894',
		hiltiSuccessor: 'DCH 150-SL',
		useImage: useDcSe20,
		productImage: productDcSe20,
		image: cuttingPhoto,
		drivePhotoId: '1kVH9LeK5n7hqJ2Fbg5Y1OZRiqg8n78Jv'
	},
	{
		slug: 'vc-20-ul',
		match: 'VC 20-UL',
		name: 'Univerzálny vysávač Hilti VC 20-UL',
		model: 'VC 20-UL',
		category: 'Meranie a čistenie',
		lead: 'Priemyselný vysávač na mokré aj suché vysávanie. Pripája sa priamo k náradiu a udrží stavbu bez prachu.',
		uses: [
			'Odsávanie prachu priamo pri náradí',
			'Vysávanie mokrých aj suchých nečistôt',
			'Upratanie stavby po búracích prácach'
		],
		specs: ['Kapacita nádoby 21 l', 'Trieda prašnosti L', 'Sací výkon 74 l/s'],
		hiltiUrl:
			'https://www.hilti.cz/c/CLS_DUST_WATER_MANAGEMENT/CLS_CONSTRUCTION_VACUUMS_DUST_EXTRACTORS/r21748816',
		hiltiSuccessor: 'VC 20L-X',
		productImage: productVc20,
		image: toolsPhoto,
		drivePhotoId: '1c51CYIRzoSs5GRWV-GgKlLgEw_SiIlo_'
	}
];

export function toolForItem(item: string): RentalTool | undefined {
	return rentalTools.find((t) => item.includes(t.match));
}

/**
 * Job-first navigation: people arrive knowing the work they need done, not the
 * model they want. Each entry maps a job to the machines that do it — a tool
 * can appear under several jobs.
 */
export interface ToolJob {
	id: string;
	label: string;
	hint: string;
	slugs: string[];
}

export const toolJobs: ToolJob[] = [
	{
		id: 'buranie',
		label: 'Búram',
		hint: 'Priečky, podlahy, základy',
		slugs: ['te-3000-avr', 'te-1000-avr', 'te-500-avr', 'dsh-700-x']
	},
	{
		id: 'vrtanie',
		label: 'Vŕtam',
		hint: 'Otvory, prestupy, kotvenie',
		slugs: ['te-70', 'te-3000-avr']
	},
	{
		id: 'rezanie',
		label: 'Režem',
		hint: 'Betón, tehla, dlažba, drevo',
		slugs: ['dsh-700-x', 'ag-230', 'scw-70']
	},
	{
		id: 'drazky',
		label: 'Robím drážky',
		hint: 'Elektrina, voda, kúrenie',
		slugs: ['dc-se-20', 'te-500-avr']
	},
	{
		id: 'montaz',
		label: 'Montujem',
		hint: 'Profily, rozvody, kotvenie',
		slugs: ['gx-120-me']
	},
	{
		id: 'cistenie',
		label: 'Odsávam prach',
		hint: 'Čistenie počas aj po práci',
		slugs: ['vc-20-ul']
	}
];

export function toolsForJob(jobId: string): RentalTool[] {
	if (jobId === 'all') return rentalTools;
	const job = toolJobs.find((j) => j.id === jobId);
	if (!job) return rentalTools;
	return job.slugs
		.map((s) => rentalTools.find((t) => t.slug === s))
		.filter((t): t is RentalTool => t !== undefined);
}
