<script lang="ts">
	import { reveal } from '$lib/reveal';

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

<section class="section" aria-label="Galéria">
	<div class="gallery">
		<div class="gallery-row gallery-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Galéria</span>
				<h1 class="section-title">Naša práca v obrazoch</h1>
			</header>
			<a href="/contact" class="head-link-cell">Navštívte nás →</a>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		{#if photos.length === 0}
			<div class="empty-cell">
				<p class="empty">
					Galéria sa pripravuje. Onedlho tu nájdete fotografie z našej predajne a realizovaných
					stavieb.
				</p>
			</div>
		{:else}
			<div class="grid">
				{#each photos as photo, index (photo.src)}
					<button
						type="button"
						class="tile"
						onclick={() => openLightbox(index)}
						aria-label="Otvoriť fotografiu: {photo.alt}"
						data-reveal
						{@attach reveal(Math.min((index % 4) * 60, 240))}
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

	.acc {
		flex: 0 0 90px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	/* ===== Scroll reveal ===== */
	@media (scripting: enabled) {
		[data-reveal] {
			opacity: 0;
			transform: translateY(18px);
			transition:
				opacity var(--transition-reveal),
				transform var(--transition-reveal);
			transition-delay: var(--reveal-delay, 0ms);
		}

		[data-reveal]:global(.is-revealed) {
			opacity: 1;
			transform: none;
		}
	}

	/* ===== Gallery canvas ===== */
	.gallery {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.gallery-row {
		display: flex;
		gap: 5px;
	}

	.empty-cell {
		background-color: var(--color-white);
		padding: 3rem 1.5rem;
	}

	.empty {
		margin: 0;
		text-align: center;
		font-size: var(--font-size-body);
		color: var(--text-muted);
	}

	/* Photo cells — editorial: tiles keep their natural color. */
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 5px;
	}

	.tile {
		display: block;
		padding: 0;
		margin: 0;
		border: 0;
		background-color: var(--color-white);
		overflow: hidden;
		cursor: pointer;
		aspect-ratio: 1 / 1;
	}

	.tile:focus-visible {
		outline: 3px solid var(--color-brand-primary);
		outline-offset: -3px;
	}

	.tile-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform var(--transition-medium);
	}

	.tile:hover .tile-image,
	.tile:focus-visible .tile-image {
		transform: scale(1.04);
	}

	/* ===== Lightbox ===== */
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
		background-color: rgba(30, 32, 34, 0.94);
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
	}

	.lightbox-close,
	.lightbox-nav {
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-iron);
		color: var(--color-white);
		border: 0;
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
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		font-variant-numeric: tabular-nums;
		color: var(--color-white);
		background-color: var(--color-iron);
		padding: 0.35rem 0.9rem;
	}

	/* ===== Responsive ===== */
	@media (max-width: 1100px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 800px) {
		.gallery {
			gap: 4px;
			padding: 4px;
		}

		.gallery-row {
			gap: 4px;
		}

		.gallery-row--head {
			flex-direction: column;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.head-link-cell {
			padding: 0.9rem;
		}

		.acc {
			flex: none;
			min-height: 22px;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 4px;
		}
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

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.tile-image {
			transition: none;
		}
	}
</style>
