<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Aktuality – Stavebniny Orol</title>
	<meta name="description" content="Najnovšie správy a aktuality zo Stavebniny Orol." />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container">
		<h1>Aktuality</h1>
	</div>
</section>

<!-- Posts grid -->
<section class="posts-section">
	<div class="container">
		{#if data.posts.length === 0}
			<p class="empty">Žiadne aktuality</p>
		{:else}
			<div class="grid">
				{#each data.posts as post (post.slug)}
					<article class="card">
						<a href="/news/{post.slug}" class="card-image-link" tabindex="-1" aria-hidden="true">
							<img
								src={post.image}
								alt={post.title}
								class="card-image"
								loading="lazy"
							/>
						</a>
						<div class="card-body">
							<time class="card-date" datetime={post.date}>
								{new Date(post.date).toLocaleDateString('sk-SK', {
									day: 'numeric',
									month: 'long',
									year: 'numeric'
								})}
							</time>
							<h2 class="card-title">{post.title}</h2>
							<p class="card-excerpt">{post.excerpt}</p>
							<a href="/news/{post.slug}" class="card-link">Čítať viac</a>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	/* ---- Shared ---- */
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding-inline: 1.5rem;
	}

	/* ---- Hero ---- */
	.hero {
		background-color: var(--color-brand-dark);
		padding: 2rem 0;
	}

	.hero h1 {
		margin: 0;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
	}

	/* ---- Posts section ---- */
	.posts-section {
		background-color: var(--color-white);
		padding: 3rem 0 5rem;
	}

	.empty {
		text-align: center;
		color: var(--text-muted);
		font-size: 1rem;
		padding: 3rem 0;
	}

	/* ---- Grid ---- */
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	/* ---- Card ---- */
	.card {
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		transition: box-shadow 0.18s ease;
	}

	.card:hover {
		box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
	}

	.card-image-link {
		display: block;
		line-height: 0;
	}

	.card-image {
		aspect-ratio: 16 / 9;
		object-fit: cover;
		width: 100%;
		display: block;
	}

	.card-body {
		padding: 1.25rem 1.5rem 1.5rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.card-date {
		display: block;
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.card-title {
		margin: 0.4rem 0 0.75rem;
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--color-iron);
		line-height: 1.35;

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-excerpt {
		margin: 0 0 auto;
		font-size: 0.9rem;
		color: var(--text-muted);
		line-height: 1.6;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-link {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-brand-primary);
		text-decoration: none;
	}

	.card-link:hover {
		text-decoration: underline;
		color: var(--color-brand-hover);
	}
</style>
