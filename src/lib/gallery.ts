import shopAisle from '$lib/assets/gallery/curated/predajna-01-ulicka.jpg?url';
import shopAisleThumb from '$lib/assets/gallery/curated/thumbs/predajna-01-ulicka.jpg?url';
import shopChemistry from '$lib/assets/gallery/curated/predajna-02-stavebna-chemia.jpg?url';
import shopChemistryThumb from '$lib/assets/gallery/curated/thumbs/predajna-02-stavebna-chemia.jpg?url';
import shopTools from '$lib/assets/gallery/curated/predajna-03-rucne-naradie.jpg?url';
import shopToolsThumb from '$lib/assets/gallery/curated/thumbs/predajna-03-rucne-naradie.jpg?url';
import shopFinishing from '$lib/assets/gallery/curated/predajna-04-dokoncovacie-naradie.jpg?url';
import shopFinishingThumb from '$lib/assets/gallery/curated/thumbs/predajna-04-dokoncovacie-naradie.jpg?url';
import yardEntrance from '$lib/assets/gallery/curated/areal-01-vstup.jpg?url';
import yardEntranceThumb from '$lib/assets/gallery/curated/thumbs/areal-01-vstup.jpg?url';
import yardDelivery from '$lib/assets/gallery/curated/areal-02-vlastna-doprava.jpg?url';
import yardDeliveryThumb from '$lib/assets/gallery/curated/thumbs/areal-02-vlastna-doprava.jpg?url';
import yardPallets from '$lib/assets/gallery/curated/areal-03-sklad-paliet.jpg?url';
import yardPalletsThumb from '$lib/assets/gallery/curated/thumbs/areal-03-sklad-paliet.jpg?url';
import yardLane from '$lib/assets/gallery/curated/areal-04-manipulacna-plocha.jpg?url';
import yardLaneThumb from '$lib/assets/gallery/curated/thumbs/areal-04-manipulacna-plocha.jpg?url';
import yardCrane from '$lib/assets/gallery/curated/areal-05-hydraulicka-ruka.jpg?url';
import yardCraneThumb from '$lib/assets/gallery/curated/thumbs/areal-05-hydraulicka-ruka.jpg?url';
import projectHouse from '$lib/assets/gallery/curated/realizacia-01-dom-oranzova-strecha.jpg?url';
import projectHouseThumb from '$lib/assets/gallery/curated/thumbs/realizacia-01-dom-oranzova-strecha.jpg?url';
import projectMountain from '$lib/assets/gallery/curated/realizacia-02-drevena-horska-budova.jpg?url';
import projectMountainThumb from '$lib/assets/gallery/curated/thumbs/realizacia-02-drevena-horska-budova.jpg?url';
import projectModern from '$lib/assets/gallery/curated/realizacia-03-moderny-dom.jpg?url';
import projectModernThumb from '$lib/assets/gallery/curated/thumbs/realizacia-03-moderny-dom.jpg?url';
import projectCabins from '$lib/assets/gallery/curated/realizacia-04-rekreacne-domceky.jpg?url';
import projectCabinsThumb from '$lib/assets/gallery/curated/thumbs/realizacia-04-rekreacne-domceky.jpg?url';
import projectGazebo from '$lib/assets/gallery/curated/realizacia-05-dreveny-altanok.jpg?url';
import projectGazeboThumb from '$lib/assets/gallery/curated/thumbs/realizacia-05-dreveny-altanok.jpg?url';
import projectFloor from '$lib/assets/gallery/curated/realizacia-06-podlaharske-prace.jpg?url';
import projectFloorThumb from '$lib/assets/gallery/curated/thumbs/realizacia-06-podlaharske-prace.jpg?url';

export type GalleryCategory = 'shop' | 'yard' | 'projects';
export type GalleryFilter = GalleryCategory | 'all';

export type GalleryPhoto = {
	src: string;
	thumb: string;
	title: string;
	alt: string;
	category: GalleryCategory;
	width: number;
	height: number;
	driveId: string;
};

export type GalleryGroup = {
	category: GalleryCategory;
	index: string;
	label: string;
	title: string;
	description: string;
	photos: GalleryPhoto[];
};

export const galleryGroups: GalleryGroup[] = [
	{
		category: 'shop',
		index: '01',
		label: 'Predajňa',
		title: 'Sortiment, ktorý si viete pozrieť zblízka',
		description:
			'Farby, stavebná chémia, ručné náradie aj drobný materiál sú prehľadne pripravené na osobný výber.',
		photos: [
			{
				src: shopAisle,
				thumb: shopAisleThumb,
				title: 'Interiér predajne',
				alt: 'Ulička s farbami, pracovnými rukavicami a drobným stavebným sortimentom.',
				category: 'shop',
				width: 960,
				height: 720,
				driveId: '1XE-C8OO2T6PGeASXMirlTTTAG231Ream'
			},
			{
				src: shopChemistry,
				thumb: shopChemistryThumb,
				title: 'Stavebná chémia',
				alt: 'Regál so stavebnou chémiou a ochrannými pomôckami.',
				category: 'shop',
				width: 960,
				height: 720,
				driveId: '1HvY6XNjj6CJ2aBlKRm4avCGnlFXhke2w'
			},
			{
				src: shopTools,
				thumb: shopToolsThumb,
				title: 'Ručné náradie',
				alt: 'Predajná stena s ručným náradím a kovovými profilmi.',
				category: 'shop',
				width: 960,
				height: 720,
				driveId: '1RVkgXV_Vz3Jhs6Qu5p-gDB0uz60Q79fY'
			},
			{
				src: shopFinishing,
				thumb: shopFinishingThumb,
				title: 'Dokončovacie náradie',
				alt: 'Hladidlá, špachtle a murárske náradie v predajni.',
				category: 'shop',
				width: 960,
				height: 720,
				driveId: '16o7H36-0M9mRNqvRime2v_K3Bho-69-l'
			}
		]
	},
	{
		category: 'yard',
		index: '02',
		label: 'Areál a sklad',
		title: 'Materiál na sklade, doprava po ruke',
		description:
			'Veľké zásoby, kryté skladovanie a vlastná doprava nám pomáhajú vybaviť malé nákupy aj celé stavby.',
		photos: [
			{
				src: yardEntrance,
				thumb: yardEntranceThumb,
				title: 'Vstup do areálu',
				alt: 'Vstup do areálu OROL Stavebniny s firemným označením.',
				category: 'yard',
				width: 960,
				height: 720,
				driveId: '1jkyCuGLt7vahjorou_bWSJDxE3bZCRBJ'
			},
			{
				src: yardDelivery,
				thumb: yardDeliveryThumb,
				title: 'Vlastná doprava',
				alt: 'Firemné vozidlo OROL v zastrešenom sklade medzi paletami materiálu.',
				category: 'yard',
				width: 960,
				height: 720,
				driveId: '1iQQpCzSbMSJBEUen4pR4MCZDwD9FItKr'
			},
			{
				src: yardPallets,
				thumb: yardPalletsThumb,
				title: 'Materiál na sklade',
				alt: 'Palety suchých zmesí a stavebného materiálu pripravené na odber.',
				category: 'yard',
				width: 960,
				height: 720,
				driveId: '1sC6jDubDkY-d1HvZvWGMBSlc92VXh-Sa'
			},
			{
				src: yardLane,
				thumb: yardLaneThumb,
				title: 'Manipulačná plocha',
				alt: 'Skladová cesta s paletami betónových výrobkov v areáli.',
				category: 'yard',
				width: 960,
				height: 720,
				driveId: '1e4AYrNnHb4DwwEBiXPN94EVcK8GDCYEP'
			},
			{
				src: yardCrane,
				thumb: yardCraneThumb,
				title: 'Vykládka hydraulickou rukou',
				alt: 'Firemné nákladné vozidlo OROL pri manipulácii s materiálom hydraulickou rukou.',
				category: 'yard',
				width: 960,
				height: 640,
				driveId: '18ys_NmJG33ZddHldYVV42yJ6b23G8jt5'
			}
		]
	},
	{
		category: 'projects',
		index: '03',
		label: 'Realizácie',
		title: 'Od materiálu k hotovému výsledku',
		description:
			'Výber rodinných domov, rekreačných objektov a dokončovacích prác, na ktorých sa náš materiál osvedčil.',
		photos: [
			{
				src: projectHouse,
				thumb: projectHouseThumb,
				title: 'Rodinný dom',
				alt: 'Dokončený rodinný dom s oranžovou strechou a upravenou záhradou.',
				category: 'projects',
				width: 960,
				height: 640,
				driveId: '1M-JqYg8d88NKkC0ndqDmDTnz29xLY_xl'
			},
			{
				src: projectMountain,
				thumb: projectMountainThumb,
				title: 'Horská budova',
				alt: 'Drevená horská budova s výraznou šikmou strechou.',
				category: 'projects',
				width: 960,
				height: 432,
				driveId: '15sNLOtFoiulObknjEtGPPeu-Dyw-NLJp'
			},
			{
				src: projectModern,
				thumb: projectModernThumb,
				title: 'Moderný dom',
				alt: 'Moderný biely rodinný dom v zeleni.',
				category: 'projects',
				width: 960,
				height: 432,
				driveId: '1UwoEy2s84QxmnGcbvy9quvoAjrlLB4ha'
			},
			{
				src: projectCabins,
				thumb: projectCabinsThumb,
				title: 'Rekreačné domčeky',
				alt: 'Rad farebných rekreačných domčekov pri spevnenej komunikácii.',
				category: 'projects',
				width: 960,
				height: 432,
				driveId: '1kax-R19enK_MZuT84yVKsqEKrKAboAsn'
			},
			{
				src: projectGazebo,
				thumb: projectGazeboThumb,
				title: 'Drevený altánok',
				alt: 'Drevený altánok zasadený do horského prostredia.',
				category: 'projects',
				width: 960,
				height: 432,
				driveId: '1bZl-0pwKEnbvDAT_7_3ttCCQihkysM-I'
			},
			{
				src: projectFloor,
				thumb: projectFloorThumb,
				title: 'Podlahárske práce',
				alt: 'Dokončovacie práce v interiéri s podlahovým strojom.',
				category: 'projects',
				width: 960,
				height: 432,
				driveId: '1GPZWm-O2pEAHlejFqVtglWJH08AljcsY'
			}
		]
	}
];

export const galleryPhotos = galleryGroups.flatMap((group) => group.photos);

export const galleryFilters: { id: GalleryFilter; label: string; count: number }[] = [
	{ id: 'all', label: 'Všetko', count: galleryPhotos.length },
	...galleryGroups.map((group) => ({
		id: group.category,
		label: group.label,
		count: group.photos.length
	}))
];
