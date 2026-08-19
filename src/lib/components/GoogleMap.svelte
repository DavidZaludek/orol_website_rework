<script lang="ts">
	import { env } from '$env/dynamic/public';

	// Maps Embed API: Google renders the map, the pin and the business info card
	// itself. No JS SDK, no Places lookup, no styling to keep in sync.
	const KEY = env.PUBLIC_GOOGLE_MAPS_KEY;
	const QUERY = 'OROL, spol. s r.o., Kpt. Nálepku 2218, Liptovský Mikuláš';

	const src = `https://www.google.com/maps/embed/v1/place?key=${KEY}&q=${encodeURIComponent(QUERY)}&language=sk&region=SK&zoom=15`;
</script>

<iframe class="map" title="Mapa – OROL, spol. s r.o." {src} loading="lazy" allowfullscreen
	referrerpolicy="no-referrer-when-downgrade"></iframe>

<style>
	.map {
		display: block;
		width: 100%;
		height: 100%;
		min-height: 420px;
		border: 0;
	}

	@media (max-width: 900px) {
		.map {
			min-height: 320px;
		}
	}
</style>
