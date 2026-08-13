import { products } from '$lib/site';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return products.map((product) => ({ slug: product.href.replace('/products/', '') }));
};

export const load: PageLoad = ({ params }) => {
	const product = products.find((p) => p.href === `/products/${params.slug}`);
	if (!product) error(404, 'Kategória nenájdená');
	return { product };
};
