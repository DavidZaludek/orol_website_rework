import cenovaJpg from '$lib/assets/services/source/cenova-ponuka.jpg';
import dopravaJpg from '$lib/assets/services/source/doprava.jpg';
import kontaktyJpg from '$lib/assets/services/source/kontakty-na-remeselnikov.jpg';
import farbyJpg from '$lib/assets/services/source/miesanie-farieb.jpg';
import poradenstvoJpg from '$lib/assets/services/source/poradenstvo.jpg';
import pozicovnaPng from '$lib/assets/services/source/pozicovna-naradia.png';
import stavbyveduciJpg from '$lib/assets/services/source/stavbyveduci.jpg';

export interface ServiceImageSet {
	fallback: string;
	fallbackType: 'image/jpeg' | 'image/png';
	width: number;
	height: number;
	/** Subject-safe position used only when the image is intentionally a background. */
	focal: string;
}

const image = (
	fallback: string,
	width: number,
	height: number,
	focal = '50% 50%',
	fallbackType: ServiceImageSet['fallbackType'] = 'image/jpeg'
): ServiceImageSet => ({ fallback, fallbackType, width, height, focal });

/**
 * Full, uncropped source frames. Detail pages render these with `contain`; compact
 * background cards use the per-image focal point and never a pre-cropped derivative.
 */
export const serviceMedia: Record<string, ServiceImageSet> = {
	'/services/cenova-ponuka': image(cenovaJpg, 2200, 1650, '64% 52%'),
	'/services/doprava': image(dopravaJpg, 2200, 1466, '46% 54%'),
	'/services/poradenstvo': image(poradenstvoJpg, 2200, 1650, '48% 52%'),
	'/services/stavbyveduci': image(stavbyveduciJpg, 2200, 991, '58% 52%'),
	'/services/miesanie-farieb': image(farbyJpg, 2200, 1466, '50% 54%'),
	'/services/kontakty-na-remeselnikov': image(kontaktyJpg, 2200, 1466, '65% 44%'),
	'/services/pozicovna-naradia': image(pozicovnaPng, 1600, 1200, '52% 48%', 'image/png')
};
