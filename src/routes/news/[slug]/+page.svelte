<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal } from '$lib/reveal';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} – Stavebniny Orol</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<section class="section" aria-label={data.post.title}>
	<div class="flow">
		<div class="flow-row flow-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<time class="eyebrow" datetime={data.post.date}>
					{new Date(data.post.date).toLocaleDateString('sk-SK', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					})}
				</time>
				<h1 class="section-title">{data.post.title}</h1>
			</header>
			<a href={resolve('/news')} class="head-link-cell">← Všetky aktuality</a>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		<!-- Editorial cover keeps its natural color — no grayscale, no overlay. -->
		<div class="flow-row">
			<div class="cover-cell" data-reveal {@attach reveal(100)}>
				<img src={data.post.image} alt={data.post.title} class="cover-image" loading="eager" />
			</div>
		</div>

		<div class="flow-row">
			<div class="prose-cell" data-reveal {@attach reveal()}>
				<div class="prose">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -- marked() output over .md files in this repo, compiled at build time by $lib/posts; no runtime input reaches it -->
					{@html data.post.html}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 0 0 var(--space-section-y-end);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: var(--color-brand-primary);
	}

	.eyebrow::before {
		content: '';
		width: 24px;
		height: 3px;
		background-color: var(--color-brand-primary);
	}

	.section-title {
		margin: 0.35rem 0 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-lg);
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.015em;
		color: var(--color-iron);
	}

	.head-cell {
		flex: 4 1 0;
		min-width: 0;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	.head-link-cell {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		text-align: center;
		text-decoration: none;
		transition: background-color var(--transition-fast);
	}

	.head-link-cell:hover {
		background-color: var(--color-brand-hover);
	}

	/* ===== Scroll reveal ===== */
	/* Hidden only while the reveal script is armed (see app.html) — a
	   blocked bundle can never leave content permanently invisible. */
	:global(html[data-reveal-ready]) [data-reveal] {
		opacity: 0;
		transform: translateY(18px);
		transition:
			opacity var(--transition-reveal),
			transform var(--transition-reveal);
		transition-delay: var(--reveal-delay, 0ms);
	}

	:global(html[data-reveal-ready]) [data-reveal]:global(.is-revealed) {
		opacity: 1;
		transform: none;
	}

	/* ===== Flow canvas ===== */
	.flow {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.flow-row {
		display: flex;
		gap: 5px;
	}

	/* ===== Cover cell ===== */
	.cover-cell {
		flex: 1 1 0;
		min-width: 0;
		position: relative;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		max-height: 520px;
		background-color: var(--color-white);
	}

	.cover-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* ===== Prose cell ===== */
	.prose-cell {
		flex: 1 1 0;
		min-width: 0;
		background-color: var(--color-white);
		padding: clamp(2rem, 4vw, 3.5rem) var(--container-px) var(--space-section-y);
	}

	.prose {
		max-width: var(--container-prose);
		margin-inline: auto;
		line-height: 1.8;
		color: var(--text-on-light);
		font-size: 1rem;
	}

	.prose :global(h2) {
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-brand-dark);
		margin: 2rem 0 0.75rem;
		line-height: 1.1;
	}

	.prose :global(h3) {
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-brand-dark);
		margin: 1.75rem 0 0.6rem;
		line-height: 1.15;
	}

	.prose :global(p) {
		margin: 0 0 1.25rem;
	}

	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 1.25rem;
		padding-left: 1.5rem;
	}

	.prose :global(li) {
		margin-bottom: 0.4rem;
		line-height: 1.7;
	}

	.prose :global(strong) {
		font-weight: 700;
		color: var(--color-iron);
	}

	.prose :global(a) {
		color: var(--color-brand-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color var(--transition-fast);
	}

	.prose :global(a:hover) {
		color: var(--color-brand-hover);
	}

	.prose :global(blockquote) {
		margin: 1.5rem 0;
		padding: 0.75rem 1.25rem;
		border-left: 4px solid var(--color-brand-primary);
		background-color: var(--color-chalk);
		color: var(--text-muted);
		font-style: italic;
	}

	.prose :global(img) {
		max-width: 100%;
		height: auto;
		display: block;
		margin: 1.5rem 0;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid var(--color-mist);
		margin: 2rem 0;
	}

	/* ===== Mobile: bands stack ===== */
	@media (max-width: 800px) {
		.flow {
			gap: 4px;
			padding: 4px;
		}

		.flow-row,
		.flow-row--head {
			flex-direction: column;
			gap: 4px;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.head-link-cell {
			padding: 0.9rem;
		}

		.prose-cell {
			padding: 1.6rem var(--container-px) 2.5rem;
		}

		.acc {
			flex: none;
			min-height: 22px;
		}
	}

	/* Accent cells */
	.acc {
		flex: 0 0 90px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
