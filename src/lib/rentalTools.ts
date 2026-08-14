import demolitionPhoto from '$lib/assets/rental/hilti-demolition.jpg';
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
		image: demolitionPhoto,
		drivePhotoId: '1svCRkVX_xMlOgodLADC0FvOiW1FbZKBx'
	},
	{
		slug: 'te-7',
		match: 'TE 7',
		name: 'Vŕtacie kladivo Hilti TE 7',
		model: 'TE 7',
		category: 'Búranie a vŕtanie',
		lead: 'Ľahké vŕtacie kladivo na bežné montážne práce – kotvenie, vŕtanie do betónu a tehly pri rekonštrukciách.',
		uses: [
			'Vŕtanie do betónu, tehly a kameňa',
			'Kotvenie konštrukcií a zariaďovacích predmetov',
			'Montážne práce na stavbe aj v domácnosti'
		],
		specs: ['Hmotnosť 3,1 kg', 'Príkon 850 W', 'Vŕtanie 4 – 28 mm, SDS-Plus'],
		hiltiUrl: 'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_ROTARY_HAMMERS_7125/r5269167',
		hiltiSuccessor: 'TE 3-M',
		image: demolitionPhoto,
		drivePhotoId: '1j61JyAM7BbYa7fd-ONUUXcpUk56FjQst'
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
		image: cuttingPhoto,
		drivePhotoId: '1IcljW0w_0Q8EplTd5HippRcw05mq7m45'
	},
	{
		slug: 'sc-70w-a22',
		match: 'SC 70W-A22',
		name: 'Akumulátorová okružná píla Hilti SC 70W-A22',
		model: 'SC 70W-A22',
		category: 'Rezanie a brúsenie',
		lead: 'Akumulátorová okružná píla na drevo a dosky. Bez kábla sa dá pracovať aj na streche alebo v priestoroch bez prípojky.',
		uses: [
			'Rezanie krovov, dosiek a debnenia',
			'Práca na streche a v priestoroch bez elektriny',
			'Presné rovné rezy s vodiacou lištou'
		],
		specs: ['Kotúč 190 mm, hĺbka rezu 70 mm', 'Hmotnosť 4,02 kg', 'Akumulátorová platforma 22 V'],
		hiltiUrl: 'https://www.hilti.sk/c/CLS_POWER_TOOLS_7125/CLS_SAWS_7125/r21975965',
		hiltiSuccessor: 'SC 30WR-22',
		youtubeId: 'jkGcumfLU0A',
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
		image: cuttingPhoto,
		drivePhotoId: '1tt_gBDyUeqC5eP71HVs5l3DjQY3AWhEG'
	},
	{
		slug: 'dc-se-20',
		match: 'DC-SE20',
		name: 'Drážkovací stroj Hilti DC-SE 20',
		model: 'DC-SE 20',
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
		image: cuttingPhoto,
		drivePhotoId: '1kVH9LeK5n7hqJ2Fbg5Y1OZRiqg8n78Jv'
	},
	{
		slug: 'vc-40-ul',
		match: 'VC 40-UL',
		name: 'Univerzálny vysávač Hilti VC 40-UL',
		model: 'VC 40-UL',
		category: 'Meranie a čistenie',
		lead: 'Priemyselný vysávač na mokré aj suché vysávanie. Pripája sa priamo k náradiu a udrží stavbu bez prachu.',
		uses: [
			'Odsávanie prachu priamo pri náradí',
			'Vysávanie mokrých aj suchých nečistôt',
			'Upratanie stavby po búracích prácach'
		],
		specs: ['Trieda prachu L, nádoba 30 l', 'Hmotnosť 14,4 kg', 'Zásuvka pre náradie 1 200 W'],
		hiltiUrl:
			'https://www.hilti.sk/c/CLS_DUST_WATER_MANAGEMENT/CLS_CONSTRUCTION_VACUUMS_DUST_EXTRACTORS/r21748819',
		hiltiSuccessor: 'VC 40L-X',
		image: toolsPhoto,
		drivePhotoId: '1c51CYIRzoSs5GRWV-GgKlLgEw_SiIlo_'
	}
];

export function toolForItem(item: string): RentalTool | undefined {
	return rentalTools.find((t) => item.includes(t.match));
}
