<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal } from '$lib/reveal';

	let { data } = $props();

	function formatDate(value: string): string {
		return new Date(value).toLocaleDateString('sk-SK', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	const accentCycle = ['yellow', 'blue', 'red'] as const;
</script>

<svelte:head>
	<title>Akcie – Stavebniny Orol</title>
	<meta name="description" content="Aktuálne akcie a zľavy v Stavebninách Orol." />
</svelte:head>

<section class="section" aria-label="Akcie">
	<div class="flow">
		<div class="flow-row flow-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Akcie</span>
				<h1 class="section-title">Akcie</h1>
				<p class="head-note">Aktuálne akcie a zľavy v Stavebninách Orol.</p>
			</header>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		{#if data.promotions.length === 0}
			<div class="flow-row">
				<p class="empty-cell">Žiadne aktuálne akcie</p>
			</div>
		{:else}
			{#each data.promotions as promotion, i (promotion.slug)}
				<article class="flow-row" class:flow-row--reverse={i % 2 === 1}>
					<a
						href={resolve('/promotions/[slug]', { slug: promotion.slug })}
						class="flow-photo"
						tabindex="-1"
						aria-hidden="true"
						data-reveal
						{@attach reveal()}
					>
						<img src={promotion.image} alt={promotion.title} loading={i < 2 ? undefined : 'lazy'} />
					</a>
					<div class="flow-body" data-reveal {@attach reveal(100)}>
						<time class="band-date" datetime={promotion.date}>
							{formatDate(promotion.date)}
						</time>
						<h2 class="band-title">{promotion.title}</h2>
						<p class="band-excerpt">{promotion.excerpt}</p>
						{#if promotion.validUntil}
							<p class="band-valid">
								Platí do <strong>{formatDate(promotion.validUntil)}</strong>
							</p>
						{/if}
						<a href={resolve('/promotions/[slug]', { slug: promotion.slug })} class="band-link"
							>Čítať viac →</a
						>
					</div>
					<div class="acc acc--{accentCycle[i % accentCycle.length]}" aria-hidden="true"></div>
				</article>
			{/each}
		{/if}
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
		line-height: 1.02;
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

	.head-note {
		margin: 0.6rem 0 0;
		font-size: var(--font-size-small);
		color: var(--text-muted);
		max-width: 60ch;
		line-height: 1.55;
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

	.flow-row--reverse {
		flex-direction: row-reverse;
	}

	.empty-cell {
		flex: 1 1 0;
		margin: 0;
		padding: 3rem 1.5rem;
		background-color: var(--color-white);
		text-align: center;
		color: var(--text-muted);
		font-size: 1rem;
	}

	/* Promo thumbnails keep their natural color — no grayscale, no overlay. */
	.flow-photo {
		flex: 5 1 0;
		min-width: 0;
		position: relative;
		overflow: hidden;
		min-height: 300px;
		background-color: var(--color-white);
	}

	.flow-photo img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.flow-body {
		flex: 6 1 0;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.8rem;
		padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3.5rem);
		background-color: var(--color-white);
	}

	.band-date {
		font-size: var(--font-size-xs);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
	}

	.band-title {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
	}

	.band-excerpt {
		margin: 0;
		max-width: 58ch;
		font-size: 1rem;
		line-height: 1.65;
		color: var(--text-muted);
	}

	/* Validity chip — red block, square-cornered like every cell. */
	.band-valid {
		margin: 0;
		padding: 0.35rem 0.75rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.band-valid strong {
		font-weight: 700;
	}

	.band-link {
		font-size: var(--font-size-small);
		font-weight: 700;
		color: var(--color-brand-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color var(--transition-fast);
	}

	.band-link:hover {
		color: var(--color-brand-hover);
	}

	/* Accent cells */
	.acc {
		flex: 0 0 90px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	.acc--blue {
		background-color: var(--color-accent-blue);
	}

	.acc--red {
		background-color: var(--color-brand-primary);
	}

	/* ===== Mobile: bands stack ===== */
	@media (max-width: 800px) {
		.flow {
			gap: 4px;
			padding: 4px;
		}

		.flow-row,
		.flow-row--reverse {
			flex-direction: column;
			gap: 4px;
		}

		.flow-row--head {
			flex-direction: column;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.flow-photo {
			min-height: 0;
			aspect-ratio: 16 / 9;
		}

		.flow-body {
			padding: 1.4rem 1.2rem 1.6rem;
		}

		.acc {
			flex: none;
			min-height: 22px;
		}
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
