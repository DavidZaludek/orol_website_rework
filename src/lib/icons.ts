// Hand-drawn pictograms (24×24 stroke paths) — one per product category and
// service, shared by the homepage compositions and the index pages.
//
// The artwork lives in `$lib/assets/icons/*.svg` and is compiled into Svelte
// components by @poppanator/sveltekit-svg (`?component`): rendered inline the
// paths keep `stroke="currentColor"`, so CSS still colours them. An `<img>`
// would isolate the file and render every icon black.

import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

import hrubaStavba from '$lib/assets/icons/category-hruba-stavba.svg?component';
import sucheZmesy from '$lib/assets/icons/category-suche-zmesy-malty-omietky.svg?component';
import tepelneIzolacie from '$lib/assets/icons/category-tepelne-izolacie.svg?component';
import farby from '$lib/assets/icons/category-fasadne-a-interierove-farby.svg?component';
import stresneKrytiny from '$lib/assets/icons/category-stresne-krytiny.svg?component';
import hydroizolacia from '$lib/assets/icons/category-hydroizolacia.svg?component';
import stavebnaChemia from '$lib/assets/icons/category-stavebna-chemia.svg?component';
import dlazby from '$lib/assets/icons/category-dlazby-betonove-tvarnice.svg?component';
import betonarskaOcel from '$lib/assets/icons/category-betonarska-ocel.svg?component';
import oknaDvere from '$lib/assets/icons/category-okna-a-dvere.svg?component';
import kanalizacia from '$lib/assets/icons/category-kanalizacia-voda-sanita.svg?component';
import naradie from '$lib/assets/icons/category-naradie-a-doplnky.svg?component';

import poradenstvo from '$lib/assets/icons/service-poradenstvo.svg?component';
import stavbyveduci from '$lib/assets/icons/service-stavbyveduci.svg?component';
import cenovaPonuka from '$lib/assets/icons/service-cenova-ponuka.svg?component';
import doprava from '$lib/assets/icons/service-doprava.svg?component';
import pozicovna from '$lib/assets/icons/service-pozicovna-naradia.svg?component';
import miesanieFarieb from '$lib/assets/icons/service-miesanie-farieb.svg?component';
import remeselnici from '$lib/assets/icons/service-kontakty-na-remeselnikov.svg?component';

export type IconComponent = Component<SVGAttributes<SVGSVGElement>>;

export const categoryIcons: Record<string, IconComponent> = {
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

export const serviceIcons: Record<string, IconComponent> = {
	'/services/poradenstvo': poradenstvo,
	'/services/stavbyveduci': stavbyveduci,
	'/services/cenova-ponuka': cenovaPonuka,
	'/services/doprava': doprava,
	'/services/pozicovna-naradia': pozicovna,
	'/services/miesanie-farieb': miesanieFarieb,
	'/services/kontakty-na-remeselnikov': remeselnici
};
