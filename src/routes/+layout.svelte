<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '$lib/styles/globals.css';
	import '$lib/styles/colors.css';
	import '$lib/styles/tokens.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon}/>
</svelte:head>

<style>
	.cta-float {
		position: fixed;
		bottom: 1.75rem;
		left: 1.75rem;
		z-index: var(--z-float);
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-weight: 700;
		font-size: var(--font-size-body);
		letter-spacing: 0.03em;
		text-decoration: none;
		text-transform: uppercase;
		padding: 1rem 1.75rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-float);
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.cta-float:hover {
		background-color: var(--color-brand-hover);
		transform: translateY(-3px);
		box-shadow: var(--shadow-float-hover);
	}
</style>

<Header />
<main>{@render children()}</main>
<Footer />

<a href="/quote" class="cta-float" aria-label="Cenová ponuka">Cenová ponuka</a>
