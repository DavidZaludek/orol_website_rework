import { marked } from 'marked';

export interface PromotionMeta {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	image: string;
	validUntil: string;
}

export interface Promotion extends PromotionMeta {
	html: string;
}

const files = import.meta.glob('./promotions/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { data: {}, content: raw };

	const data: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const colon = line.indexOf(':');
		if (colon === -1) continue;
		const key = line.slice(0, colon).trim();
		const value = line
			.slice(colon + 1)
			.trim()
			.replace(/^["']|["']$/g, '');
		data[key] = value;
	}

	return { data, content: match[2] };
}

function slugFromPath(path: string): string {
	return path.replace('./promotions/', '').replace('.md', '');
}

export function getAllPromotions(): PromotionMeta[] {
	return Object.entries(files)
		.map(([path, raw]) => {
			const { data } = parseFrontmatter(raw);
			return {
				slug: slugFromPath(path),
				draft: data.draft === 'true',
				title: data.title ?? '',
				date: data.date ?? '',
				excerpt: data.excerpt ?? '',
				image: data.image ?? '',
				validUntil: data.validUntil ?? ''
			};
		})
		.filter((promo) => !promo.draft)
		.map(({ draft: _draft, ...promo }) => promo)
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPromotion(slug: string): Promotion | undefined {
	const entry = Object.entries(files).find(([path]) => slugFromPath(path) === slug);
	if (!entry) return undefined;

	const { data, content } = parseFrontmatter(entry[1]);
	if (data.draft === 'true') return undefined;
	return {
		slug,
		title: data.title ?? '',
		date: data.date ?? '',
		excerpt: data.excerpt ?? '',
		image: data.image ?? '',
		validUntil: data.validUntil ?? '',
		html: marked(content) as string
	};
}
