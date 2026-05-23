import { getAllPromotions } from '$lib/promotions';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return { promotions: getAllPromotions() };
};
