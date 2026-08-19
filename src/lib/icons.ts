// Hand-drawn pictograms (24×24 stroke paths) — one per product category and
// service, shared by the homepage compositions and the index pages.
//
// The artwork lives in `$lib/assets/icons/*.svg` and is imported as raw markup
// rather than as an image URL: inlined into the DOM the paths keep
// `stroke="currentColor"`, so CSS still colours them. An `<img>` would isolate
// the file and render every icon black.

import hrubaStavba from '$lib/assets/icons/category-hruba-stavba.svg?raw';
import sucheZmesy from '$lib/assets/icons/category-suche-zmesy-malty-omietky.svg?raw';
import tepelneIzolacie from '$lib/assets/icons/category-tepelne-izolacie.svg?raw';
import farby from '$lib/assets/icons/category-fasadne-a-interierove-farby.svg?raw';
import stresneKrytiny from '$lib/assets/icons/category-stresne-krytiny.svg?raw';
import hydroizolacia from '$lib/assets/icons/category-hydroizolacia.svg?raw';
import stavebnaChemia from '$lib/assets/icons/category-stavebna-chemia.svg?raw';
import dlazby from '$lib/assets/icons/category-dlazby-betonove-tvarnice.svg?raw';
import betonarskaOcel from '$lib/assets/icons/category-betonarska-ocel.svg?raw';
import oknaDvere from '$lib/assets/icons/category-okna-a-dvere.svg?raw';
import kanalizacia from '$lib/assets/icons/category-kanalizacia-voda-sanita.svg?raw';
import naradie from '$lib/assets/icons/category-naradie-a-doplnky.svg?raw';

import poradenstvo from '$lib/assets/icons/service-poradenstvo.svg?raw';
import stavbyveduci from '$lib/assets/icons/service-stavbyveduci.svg?raw';
import cenovaPonuka from '$lib/assets/icons/service-cenova-ponuka.svg?raw';
import doprava from '$lib/assets/icons/service-doprava.svg?raw';
import pozicovna from '$lib/assets/icons/service-pozicovna-naradia.svg?raw';
import miesanieFarieb from '$lib/assets/icons/service-miesanie-farieb.svg?raw';
import remeselnici from '$lib/assets/icons/service-kontakty-na-remeselnikov.svg?raw';

export const categoryIcons: Record<string, string> = {
	'/products/hruba-stavba': hrubaStavba,
	'/products/suche-zmesy-malty-omietky': sucheZmesy,
	'/products/tepelne-izolacie': tepelneIzolacie,
	'/products/fasadne-a-interierove-farby': farby,
	'/products/stresne-krytiny': stresneKrytiny,
	'/products/hydroizolacia': hydroizolacia,
	'/products/stavebna-chemia': stavebnaChemia,
	'/products/dlazby-betonove-tvarnice': dlazby,
	'/products/betonarska-ocel': betonarskaOcel,
	'/products/okna-a-dvere': oknaDvere,
	'/products/kanalizacia-voda-sanita': kanalizacia,
	'/products/naradie-a-doplnky': naradie
};

export const serviceIcons: Record<string, string> = {
	'/services/poradenstvo': poradenstvo,
	'/services/stavbyveduci': stavbyveduci,
	'/services/cenova-ponuka': cenovaPonuka,
	'/services/doprava': doprava,
	'/services/pozicovna-naradia': pozicovna,
	'/services/miesanie-farieb': miesanieFarieb,
	'/services/kontakty-na-remeselnikov': remeselnici
};
