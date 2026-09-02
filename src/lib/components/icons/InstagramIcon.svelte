<script lang="ts">
	import Icon from '$lib/assets/icons/social-instagram.svg?component';

	let { size = 24 }: { size?: number } = $props();
</script>

<span class="icon" style:width="{size}px" style:height="{size}px" aria-hidden="true">
	<Icon />
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
