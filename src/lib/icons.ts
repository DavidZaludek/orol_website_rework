// Hand-drawn pictograms (24×24 stroke paths) — one per product category and
// service, shared by the homepage compositions and the index pages.

export const categoryIcons: Record<string, string[]> = {
	'/products/hruba-stavba': ['M3 6h18v12H3z', 'M3 12h18', 'M9 6v6', 'M15 6v6', 'M12 12v6'],
	'/products/suche-zmesy-malty-omietky': ['M3 12l7-7 7 7-7 7z', 'M17 12h4'],
	'/products/tepelne-izolacie': [
		'M3 8c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0',
		'M3 13c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0',
		'M3 18c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0'
	],
	'/products/fasadne-a-interierove-farby': ['M3 4h14v6H3z', 'M20 5v4h-8v3', 'M12 12v8'],
	'/products/stresne-krytiny': ['M2 12L12 3l10 9', 'M5 13v7h14v-7', 'M17 7V4h3v3'],
	'/products/hydroizolacia': ['M12 2.7l4.24 4.24a6 6 0 1 1-8.48 0z', 'M3 17h18', 'M3 21h18'],
	'/products/stavebna-chemia': ['M5 8h14v13H5z', 'M8 8V4h5v4', 'M9 13h6v4H9z'],
	'/products/dlazby-betonove-tvarnice': [
		'M3 3h8v8H3z',
		'M13 3h8v8h-8z',
		'M3 13h8v8H3z',
		'M13 13h8v8h-8z'
	],
	'/products/betonarska-ocel': [
		'M3 6h18',
		'M3 12h18',
		'M3 18h18',
		'M6 3v18',
		'M12 3v18',
		'M18 3v18'
	],
	'/products/okna-a-dvere': ['M4 4h16v16H4z', 'M12 4v16', 'M4 12h16'],
	'/products/kanalizacia-voda-sanita': ['M4 5h7a6 6 0 0 1 6 6v8', 'M4 10h5a2 2 0 0 1 2 2v7'],
	'/products/naradie-a-doplnky': ['M3 21l8-8', 'M9 8l4-4 7 7-4 4z']
};

export const serviceIcons: Record<string, string[]> = {
	'/services/poradenstvo': ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
	'/services/stavbyveduci': [
		'M2 19h20',
		'M4 19v-2a8 8 0 0 1 4.6-7.24',
		'M20 19v-2a8 8 0 0 0-4.6-7.24',
		'M9.5 5.5a2.5 2.5 0 0 1 5 0V11h-5z'
	],
	'/services/cenova-ponuka': [
		'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
		'M14 2v6h6',
		'M9 13h6',
		'M9 17h4'
	],
	'/services/doprava': [
		'M1 5h14v11H1z',
		'M15 9h4l4 4v3h-8V9z',
		'M5.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
		'M18.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'
	],
	'/services/pozicovna-naradia': [
		'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
	],
	'/services/miesanie-farieb': ['M12 2.7l5.66 5.65a8 8 0 1 1-11.31 0z'],
	'/services/kontakty-na-remeselnikov': [
		'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
		'M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
		'M23 21v-2a4 4 0 0 0-3-3.87',
		'M16 3.13a4 4 0 0 1 0 7.75'
	]
};

// Rental-tool pictograms, keyed by tool slug. Used where the manufacturer's
// product shot cannot be used because the model is discontinued and Hilti now
// serves the successor's photo — an honest icon beats a photo of another tool.
export const toolIcons: Record<string, string[]> = {
	// Rotary hammer: body, D-handle, chuck and bit.
	'te-7': ['M4 9h9v6H4z', 'M4 15v3', 'M13 11h3v2h-3z', 'M16 12h5', 'M8 9V6h4v3'],
	// Gas nailer: body with angled magazine and nose.
	'gx-120-me': ['M5 6h10v7H5z', 'M15 8h3v3h-3z', 'M18 9.5h3', 'M7 13l-2 6', 'M9 13l-2 6'],
	// Circular saw: blade, base plate and handle.
	'sc-70w-a22': ['M9 12a5 5 0 1 1 10 0', 'M4 17h17', 'M9 7V4h4v3', 'M14 12h-1'],
	// Wall chaser: twin discs cutting a wall line.
	'dc-se-20': ['M8 13a4.5 4.5 0 1 1 9 0', 'M6.5 13a6 6 0 1 1 12 0', 'M3 20h18', 'M12 4v3'],
	// Vacuum: canister, hose and wheels.
	'vc-20-ul': ['M5 9h11v10H5z', 'M16 12c3 0 4-2 4-4V6', 'M7 19v2', 'M14 19v2', 'M8 5h5v4H8z']
};
