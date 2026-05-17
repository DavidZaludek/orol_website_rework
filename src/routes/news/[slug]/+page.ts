import { getAllPosts, getPost } from '$lib/posts';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getAllPosts().map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Aktualita nenájdená');
	return { post };
};
