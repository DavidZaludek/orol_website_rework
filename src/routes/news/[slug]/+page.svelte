<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} – Stavebniny Orol</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container">
		<a href="/news" class="back-link">← Všetky aktuality</a>
		<h1>{data.post.title}</h1>
	</div>
</section>

<!-- Content -->
<section class="content-section">
	<div class="container">
		<time class="post-date" datetime={data.post.date}>
			{new Date(data.post.date).toLocaleDateString('sk-SK', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})}
		</time>

		<img
			src={data.post.image}
			alt={data.post.title}
			class="cover-image"
			loading="eager"
		/>

		<!-- Trusted HTML: content is controlled/sanitized server-side in $lib/posts -->
		<div class="prose">
			{@html data.post.html}
		</div>
	</div>
</section>

<style>
	/* ---- Shared ---- */
	.container {
		max-width: 780px;
		margin: 0 auto;
		padding-inline: 1.5rem;
	}

	/* ---- Hero ---- */
	.hero {
		background-color: var(--color-brand-dark);
		padding: 2rem 0;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: 0.9rem;
		color: var(--text-on-dark);
		text-decoration: none;
		opacity: 0.85;
		transition: color 0.15s ease, opacity 0.15s ease;
	}

	.back-link:hover {
		color: var(--color-brand-hover);
		opacity: 1;
	}

	.hero h1 {
		margin: 0;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.01em;
		line-height: 1.25;
	}

	/* ---- Content section ---- */
	.content-section {
		background-color: var(--color-white);
		padding: 3rem 0 5rem;
	}

	.post-date {
		display: block;
		font-size: 0.9rem;
		color: var(--text-muted);
		margin-bottom: 0;
	}

	.cover-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-radius: 8px;
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
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-brand-dark);
		margin: 2rem 0 0.75rem;
		line-height: 1.3;
	}

	.prose :global(h3) {
		font-size: 1.2rem;
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
		transition: color 0.15s ease;
	}

	.prose :global(a:hover) {
		color: var(--color-brand-hover);
	}

	.prose :global(blockquote) {
		margin: 1.5rem 0;
		padding: 0.75rem 1.25rem;
		border-left: 4px solid var(--color-brand-primary);
		background-color: var(--surface-alt);
		border-radius: 0 4px 4px 0;
		color: var(--text-muted);
		font-style: italic;
	}

	.prose :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 6px;
		display: block;
		margin: 1.5rem 0;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid var(--border-default);
		margin: 2rem 0;
	}
</style>
