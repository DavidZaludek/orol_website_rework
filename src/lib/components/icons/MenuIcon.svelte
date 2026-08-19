<script lang="ts">
	import icon from '$lib/assets/icons/ui-menu.svg?raw';

	let { size = 26 }: { size?: number } = $props();
</script>

<span class="icon" style:width="{size}px" style:height="{size}px" aria-hidden="true">
	{@html icon}
</span>

<style>
	.icon {
		display: inline-flex;
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
	}
</style>
