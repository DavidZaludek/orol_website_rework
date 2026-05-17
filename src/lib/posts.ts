import { marked } from 'marked';

export interface PostMeta {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	image: string;
}

export interface Post extends PostMeta {
	html: string;
}

const files = import.meta.glob('./posts/*.md', {
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
		const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
		data[key] = value;
	}

	return { data, content: match[2] };
}

function slugFromPath(path: string): string {
	return path.replace('./posts/', '').replace('.md', '');
}

export function getAllPosts(): PostMeta[] {
	return Object.entries(files)
		.map(([path, raw]) => {
			const { data } = parseFrontmatter(raw);
			return {
				slug: slugFromPath(path),
				title: data.title ?? '',
				date: data.date ?? '',
				excerpt: data.excerpt ?? '',
				image: data.image ?? ''
			};
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
	const entry = Object.entries(files).find(([path]) => slugFromPath(path) === slug);
	if (!entry) return undefined;

	const { data, content } = parseFrontmatter(entry[1]);
	return {
		slug,
		title: data.title ?? '',
		date: data.date ?? '',
		excerpt: data.excerpt ?? '',
		image: data.image ?? '',
		html: marked(content) as string
	};
}
