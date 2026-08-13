<script lang="ts">
	import { env } from '$env/dynamic/public';
	import orolMark from '$lib/assets/orol_loga/orol_all_white.svg';
	import orolMarkRaw from '$lib/assets/orol_loga/orol_all_white.svg?raw';

	// OROL, spol. s r.o., Kpt. Nálepku 2218, Liptovský Mikuláš
	const center = { lat: 49.0835165, lng: 19.6254822 };

	const KEY = env.PUBLIC_GOOGLE_MAPS_KEY;
	const MAP_ID = env.PUBLIC_GOOGLE_MAPS_MAP_ID;

	// Brand styling used when no cloud-styled Map ID is configured. Once a
	// Map ID exists (with its style built in the Google console), it takes
	// over and this inline style is ignored.
	// Quiet neutral map — the red Orol pin is the only brand color on it.
	const inlineStyles = [
		{ elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
		{ elementType: 'labels.text.fill', stylers: [{ color: '#6b7175' }] },
		{ elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
		{ featureType: 'poi', stylers: [{ visibility: 'off' }] },
		{ featureType: 'transit', stylers: [{ visibility: 'off' }] },
		{ featureType: 'road', elementType: 'geometry', stylers: [{ color: '#e8eaeb' }] },
		{ featureType: 'road', elementType: 'geometry.stroke', stylers: [{ visibility: 'off' }] },
		{ featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#d6dadc' }] },
		{ featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e2e6e8' }] },
		{ featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#ffffff' }] }
	];

	// Classic-marker pin: the white eagle nested in a red badge, as an SVG
	// data URI (the DOM-based AdvancedMarker requires a Map ID).
	const eagleInner = orolMarkRaw
		.replace(/<\?xml[^?]*\?>/, '')
		.replace(/<!--[\s\S]*?-->/, '')
		.replace(/width="[^"]*"/, 'x="9" width="26"')
		.replace(/height="[^"]*"/, 'y="16" height="12.4"');
	const pinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"><circle cx="22" cy="22" r="20" fill="#c0281c" stroke="#ffffff" stroke-width="3"/>${eagleInner}</svg>`;
	const pinUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(pinSvg)}`;

	/* Minimal typings for the Maps JS bootstrap — the SDK loads at runtime. */
	interface GMaps {
		importLibrary: (name: string) => Promise<Record<string, unknown>>;
		Point?: new (x: number, y: number) => unknown;
	}

	function getGoogleMaps(): GMaps | undefined {
		return (window as unknown as { google?: { maps?: GMaps } }).google?.maps;
	}

	function initMap(el: HTMLElement) {
		let cancelled = false;

		(async () => {
			if (!getGoogleMaps()) {
				await new Promise<void>((resolve, reject) => {
					const w = window as unknown as { __orolGmapsReady?: () => void };
					w.__orolGmapsReady = () => resolve();
					const s = document.createElement('script');
					s.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=weekly&loading=async&callback=__orolGmapsReady`;
					s.onerror = () => reject(new Error('Google Maps JS failed to load'));
					document.head.appendChild(s);
				});
			}
			if (cancelled) return;

			const gmaps = getGoogleMaps();
			if (!gmaps) return;
			const { Map } = (await gmaps.importLibrary('maps')) as {
				Map: new (el: HTMLElement, opts: Record<string, unknown>) => unknown;
			};
			const markerLib = (await gmaps.importLibrary('marker')) as {
				Marker: new (opts: Record<string, unknown>) => unknown;
				AdvancedMarkerElement: new (opts: Record<string, unknown>) => unknown;
			};
			if (cancelled) return;

			const map = new Map(el, {
				center,
				zoom: 13,
				gestureHandling: 'cooperative',
				// Keep only zoom — the default widget chrome fights the page design.
				disableDefaultUI: true,
				zoomControl: true,
				...(MAP_ID ? { mapId: MAP_ID } : { styles: inlineStyles })
			});

			if (MAP_ID) {
				const pin = document.createElement('div');
				pin.className = 'orol-pin';
				const img = document.createElement('img');
				img.src = orolMark;
				img.alt = '';
				pin.appendChild(img);
				new markerLib.AdvancedMarkerElement({ map, position: center, content: pin });
			} else {
				new markerLib.Marker({
					map,
					position: center,
					title: 'OROL, spol. s r.o.',
					icon: gmaps.Point ? { url: pinUrl, anchor: new gmaps.Point(22, 22) } : { url: pinUrl }
				});
			}
		})().catch((e) => console.error('GoogleMap init failed:', e));

		return () => {
			cancelled = true;
			el.replaceChildren();
		};
	}
</script>

<div class="map" {@attach initMap}></div>

<style>
	.map {
		width: 100%;
		height: 100%;
		min-height: 420px;
	}

	.map :global(.orol-pin) {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background-color: var(--color-brand-primary);
		border: 3px solid var(--color-white);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.map :global(.orol-pin img) {
		width: 26px;
		height: 26px;
		display: block;
	}

	@media (max-width: 900px) {
		.map {
			min-height: 320px;
		}
	}
</style>
