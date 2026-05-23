import { getAllPosts } from '$lib/posts';
import { getAllPromotions } from '$lib/promotions';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		posts: getAllPosts(),
		promotions: getAllPromotions()
	};
};
