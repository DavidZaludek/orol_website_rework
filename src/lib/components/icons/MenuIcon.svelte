<script lang="ts">
	let { size = 26 }: { size?: number } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-width="2.5"
	stroke-linecap="round"
	aria-hidden="true"
>
	<line x1="3" y1="6" x2="21" y2="6"></line>
	<line x1="3" y1="12" x2="21" y2="12"></line>
	<line x1="3" y1="18" x2="21" y2="18"></line>
</svg>
