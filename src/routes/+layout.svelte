<script lang="ts">
	import '$lib/styles/globals.css';
	import '$lib/styles/colors.css';
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
		z-index: 100;
		background-color: var(--color-brand-primary);
		color: #ffffff;
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 0.03em;
		text-decoration: none;
		text-transform: uppercase;
		padding: 1rem 1.75rem;
		border-radius: 6px;
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
		transition: background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
	}

	.cta-float:hover {
		background-color: var(--color-brand-hover);
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
	}
</style>

<Header />
<main>{@render children()}</main>
<Footer />

<a href="/quote" class="cta-float" aria-label="Cenová ponuka">Cenová ponuka</a>
