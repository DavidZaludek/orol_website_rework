import { getAllPromotions, getPromotion } from '$lib/promotions';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getAllPromotions().map((promotion) => ({ slug: promotion.slug }));
};

export const load: PageLoad = ({ params }) => {
	const promotion = getPromotion(params.slug);
	if (!promotion) error(404, 'Akcia nenájdená');
	return { promotion };
};
