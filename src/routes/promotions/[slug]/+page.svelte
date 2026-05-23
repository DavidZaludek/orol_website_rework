<script lang="ts">
	let { data } = $props();

	function formatDate(value: string): string {
		return new Date(value).toLocaleDateString('sk-SK', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.promotion.title} – Stavebniny Orol</title>
	<meta name="description" content={data.promotion.excerpt} />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container">
		<a href="/promotions" class="back-link">← Všetky akcie</a>
		<h1>{data.promotion.title}</h1>
	</div>
</section>

<!-- Content -->
<section class="content-section">
	<div class="container">
		<div class="meta">
			<time class="post-date" datetime={data.promotion.date}>
				{formatDate(data.promotion.date)}
			</time>
			{#if data.promotion.validUntil}
				<span class="valid-until">
					Platí do <strong>{formatDate(data.promotion.validUntil)}</strong>
				</span>
			{/if}
		</div>

		<img
			src={data.promotion.image}
			alt={data.promotion.title}
			class="cover-image"
			loading="eager"
		/>

		<!-- Trusted HTML: content is controlled/sanitized server-side in $lib/promotions -->
		<div class="prose">
			{@html data.promotion.html}
		</div>
	</div>
</section>

<style>
	/* ---- Shared ---- */
	.container {
		max-width: var(--container-prose);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	/* ---- Hero ---- */
	.hero {
		background-color: var(--color-brand-dark);
		padding: var(--space-hero-y) 0;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: var(--font-size-small);
		color: var(--text-on-dark);
		text-decoration: none;
		opacity: 0.85;
		transition:
			color var(--transition-fast),
			opacity var(--transition-fast);
	}

	.back-link:hover {
		color: var(--color-brand-hover);
		opacity: 1;
	}

	.hero h1 {
		margin: 0;
		font-size: var(--font-size-h1-compact);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.01em;
		line-height: 1.25;
	}

	/* ---- Content section ---- */
	.content-section {
		background-color: var(--color-white);
		padding: var(--space-section-y) 0 var(--space-section-y-end);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 1.5rem;
		align-items: baseline;
	}

	.post-date {
		font-size: 0.9rem;
		color: var(--text-muted);
	}

	.valid-until {
		font-size: 0.9rem;
		color: var(--color-brand-dark);
	}

	.cover-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-radius: var(--radius-lg);
		margin: 1.5rem 0 2rem;
		display: block;
	}

	/* ---- Prose ---- */
	.prose {
		line-height: 1.8;
		color: var(--text-on-light);
		font-size: 1rem;
	}

	.prose :global(h2) {
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-brand-dark);
		margin: 2rem 0 0.75rem;
		line-height: 1.3;
	}

	.prose :global(h3) {
		font-size: var(--font-size-h3);
		font-weight: 700;
		color: var(--color-brand-dark);
		margin: 1.75rem 0 0.6rem;
		line-height: 1.3;
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
		background-color: var(--surface-alt);
		border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
		color: var(--text-muted);
		font-style: italic;
	}

	.prose :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: var(--radius-md);
		display: block;
		margin: 1.5rem 0;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid var(--border-default);
		margin: 2rem 0;
	}
</style>
