<script lang="ts">
	import type { ServiceImageSet } from '$lib/serviceMedia';

	let {
		media,
		alt = '',
		fit = 'contain',
		loading = 'lazy',
		fetchpriority = 'auto',
		class: className
	}: {
		media: ServiceImageSet;
		alt?: string;
		fit?: 'contain' | 'cover';
		loading?: 'eager' | 'lazy';
		fetchpriority?: 'high' | 'low' | 'auto';
		class?: string;
	} = $props();
</script>

<picture>
	<source type={media.fallbackType} srcset={media.fallback} />
	<img
		class={className}
		class:fit-contain={fit === 'contain'}
		class:fit-cover={fit === 'cover'}
		src={media.fallback}
		{alt}
		width={media.width}
		height={media.height}
		{loading}
		{fetchpriority}
		decoding="async"
		style:object-position={media.focal}
	/>
</picture>

<style>
	picture {
		display: contents;
	}

	img.fit-contain {
		object-fit: contain;
	}

	img.fit-cover {
		object-fit: cover;
	}
</style>
