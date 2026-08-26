import { error } from '@sveltejs/kit';
import { allRentalTools } from '$lib/rentalTools';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => allRentalTools.map((tool) => ({ slug: tool.slug }));

export const load: PageLoad = ({ params }) => {
	const tool = allRentalTools.find((t) => t.slug === params.slug);
	if (!tool) error(404, 'Náradie nenájdené');

	const related = allRentalTools.filter((t) => t.slug !== tool.slug).slice(0, 4);
	return { tool, related };
};
