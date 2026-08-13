import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		// Pre-bundling breaks maplibre-gl's ESM worker (its sibling-chunk
		// imports 404 under .vite/deps); serve it from source instead.
		exclude: ['maplibre-gl']
	}
});
