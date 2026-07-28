<script lang="ts">
	type Photo = { src: string; thumb: string; alt: string };

	const fullModules = import.meta.glob(
		'../../lib/assets/gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
		{ eager: true, query: '?url', import: 'default' }
	) as Record<string, string>;

	const thumbModules = import.meta.glob(
		'../../lib/assets/gallery/thumbs/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
		{ eager: true, query: '?url', import: 'default' }
	) as Record<string, string>;

	function filenameOf(path: string): string {
		return path.split('/').pop() ?? path;
	}

	function filenameToAlt(path: string): string {
		const noExt = filenameOf(path).replace(/\.[^.]+$/, '');
		const cleaned = noExt.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
		return cleaned.length > 0 ? cleaned.charAt(0).toUpperCase() + cleaned.slice(1) : 'Fotografia';
	}

	const thumbsByName: Record<string, string> = Object.fromEntries(
		Object.entries(thumbModules).map(([path, src]) => [filenameOf(path), src])
	);

	const photos: Photo[] = Object.entries(fullModules)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([path, src]) => ({
			src,
			thumb: thumbsByName[filenameOf(path)] ?? src,
			alt: filenameToAlt(path)
		}));

	let dialog = $state<HTMLDialogElement | null>(null);
	let currentIndex = $state(0);
	let isOpen = $state(false);

	const currentPhoto = $derived<Photo | null>(photos[currentIndex] ?? null);

	function openLightbox(index: number) {
		currentIndex = index;
		isOpen = true;
		dialog?.showModal();
	}

	function closeLightbox() {
		dialog?.close();
	}

	function showPrev() {
		if (photos.length === 0) return;
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
	}

	function showNext() {
		if (photos.length === 0) return;
		currentIndex = (currentIndex + 1) % photos.length;
	}

	function onDialogKeydown(event: KeyboardEvent) {
		if (!isOpen) return;
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			showPrev();
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			showNext();
		}
	}

	function onBackdropClick(event: MouseEvent) {
		if (event.target === dialog) closeLightbox();
	}

	function onDialogClose() {
		isOpen = false;
	}
</script>

<svelte:head>
	<title>Galéria – Stavebniny Orol</title>
	<meta
		name="description"
		content="Fotogaléria predajne, realizovaných stavieb a produktov Stavebniny Orol."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Galéria</h1>
	</div>
</section>

<section class="body-section">
	<div class="container">
		{#if photos.length === 0}
			<p class="empty">
				Galéria sa pripravuje. Onedlho tu nájdete fotografie z našej predajne a realizovaných
				stavieb.
			</p>
		{:else}
			<div class="grid">
				{#each photos as photo, index (photo.src)}
					<button
						type="button"
						class="tile"
						onclick={() => openLightbox(index)}
						aria-label="Otvoriť fotografiu: {photo.alt}"
					>
						<img src={photo.thumb} alt={photo.alt} class="tile-image" loading="lazy" />
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>

<dialog
	bind:this={dialog}
	class="lightbox"
	aria-label="Náhľad fotografie"
	onclick={onBackdropClick}
	onkeydown={onDialogKeydown}
	onclose={onDialogClose}
>
	{#if currentPhoto}
		<div class="lightbox-inner">
			<button type="button" class="lightbox-close" onclick={closeLightbox} aria-label="Zavrieť">
				&times;
			</button>

			{#if photos.length > 1}
				<button
					type="button"
					class="lightbox-nav lightbox-prev"
					onclick={showPrev}
					aria-label="Predchádzajúca fotografia"
				>
					&#8249;
				</button>
			{/if}

			<img src={currentPhoto.src} alt={currentPhoto.alt} class="lightbox-image" />

			{#if photos.length > 1}
				<button
					type="button"
					class="lightbox-nav lightbox-next"
					onclick={showNext}
					aria-label="Nasledujúca fotografia"
				>
					&#8250;
				</button>
			{/if}

			<div class="lightbox-counter">{currentIndex + 1} / {photos.length}</div>
		</div>
	{/if}
</dialog>

<style>
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	.hero {
		background-color: var(--color-brand-dark);
		padding: var(--space-hero-y) 0;
	}

	.hero h1 {
		margin: 0;
		font-size: var(--font-size-h1);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
	}

	.body-section {
		background-color: var(--color-white);
		padding: var(--space-section-y) 0 var(--space-section-y-end);
	}

	.empty {
		margin: 0;
		text-align: center;
		font-size: var(--font-size-body);
		color: var(--text-muted);
		padding: 3rem 0;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
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

	.tile {
		position: relative;
		display: block;
		padding: 0;
		margin: 0;
		border: 0;
		background: none;
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-card);
		cursor: pointer;
		aspect-ratio: 1 / 1;
		transition:
			box-shadow var(--transition-fast),
			transform var(--transition-fast);
	}

	.tile:hover,
	.tile:focus-visible {
		transform: translateY(-3px);
		box-shadow: var(--shadow-float-hover);
	}

	.tile:focus-visible {
		outline: 2px solid var(--color-brand-primary);
		outline-offset: 2px;
	}

	.tile-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform var(--transition-fast);
	}

	.tile:hover .tile-image,
	.tile:focus-visible .tile-image {
		transform: scale(1.04);
	}

	.lightbox {
		padding: 0;
		border: 0;
		background: transparent;
		max-width: 100vw;
		max-height: 100vh;
		width: 100vw;
		height: 100vh;
		color: var(--color-white);
		overflow: hidden;
	}

	.lightbox::backdrop {
		background-color: rgba(0, 0, 0, 0.85);
	}

	.lightbox-inner {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-image {
		max-width: 90vw;
		max-height: 90vh;
		object-fit: contain;
		display: block;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-float);
	}

	.lightbox-close,
	.lightbox-nav {
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.45);
		color: var(--color-white);
		border: 0;
		border-radius: 999px;
		cursor: pointer;
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast);
		z-index: var(--z-float);
	}

	.lightbox-close:hover,
	.lightbox-close:focus-visible,
	.lightbox-nav:hover,
	.lightbox-nav:focus-visible {
		background-color: var(--color-brand-primary);
		outline: none;
	}

	.lightbox-close {
		top: 1rem;
		right: 1rem;
		width: 2.75rem;
		height: 2.75rem;
		font-size: 1.75rem;
		line-height: 1;
	}

	.lightbox-nav {
		top: 50%;
		transform: translateY(-50%);
		width: 3rem;
		height: 3rem;
		font-size: 2rem;
		line-height: 1;
	}

	.lightbox-nav:hover,
	.lightbox-nav:focus-visible {
		transform: translateY(-50%) scale(1.05);
	}

	.lightbox-prev {
		left: 1rem;
	}

	.lightbox-next {
		right: 1rem;
	}

	.lightbox-counter {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		font-size: var(--font-size-small);
		color: var(--color-white);
		background-color: rgba(0, 0, 0, 0.5);
		padding: 0.35rem 0.75rem;
		border-radius: var(--radius-sm);
	}

	@media (max-width: 600px) {
		.lightbox-close {
			top: 0.5rem;
			right: 0.5rem;
		}

		.lightbox-prev {
			left: 0.5rem;
		}

		.lightbox-next {
			right: 0.5rem;
		}

		.lightbox-image {
			max-width: 95vw;
			max-height: 85vh;
		}
	}
</style>
