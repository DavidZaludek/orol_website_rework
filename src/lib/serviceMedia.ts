import cenovaAvif from '$lib/assets/services/source/cenova-ponuka.avif';
import cenovaJpg from '$lib/assets/services/source/cenova-ponuka.jpg';
import dopravaAvif from '$lib/assets/services/source/doprava.avif';
import dopravaJpg from '$lib/assets/services/source/doprava.jpg';
import kontaktyAvif from '$lib/assets/services/source/kontakty-na-remeselnikov.avif';
import kontaktyJpg from '$lib/assets/services/source/kontakty-na-remeselnikov.jpg';
import farbyAvif from '$lib/assets/services/source/miesanie-farieb.avif';
import farbyJpg from '$lib/assets/services/source/miesanie-farieb.jpg';
import poradenstvoAvif from '$lib/assets/services/source/poradenstvo.avif';
import poradenstvoJpg from '$lib/assets/services/source/poradenstvo.jpg';
import pozicovnaAvif from '$lib/assets/services/source/pozicovna-naradia.avif';
import pozicovnaPng from '$lib/assets/services/source/pozicovna-naradia.png';
import stavbyveduciAvif from '$lib/assets/services/source/stavbyveduci.avif';
import stavbyveduciJpg from '$lib/assets/services/source/stavbyveduci.jpg';

export interface ServiceImageSet {
	avif: string;
	fallback: string;
	fallbackType: 'image/jpeg' | 'image/png';
	width: number;
	height: number;
	/** Subject-safe position used only when the image is intentionally a background. */
	focal: string;
}

const image = (
	avif: string,
	fallback: string,
	width: number,
	height: number,
	focal = '50% 50%',
	fallbackType: ServiceImageSet['fallbackType'] = 'image/jpeg'
): ServiceImageSet => ({ avif, fallback, fallbackType, width, height, focal });

/**
 * Full, uncropped source frames. Detail pages render these with `contain`; compact
 * background cards use the per-image focal point and never a pre-cropped derivative.
 */
export const serviceMedia: Record<string, ServiceImageSet> = {
	'/services/cenova-ponuka': image(cenovaAvif, cenovaJpg, 2200, 1650, '64% 52%'),
	'/services/doprava': image(dopravaAvif, dopravaJpg, 2200, 1466, '46% 54%'),
	'/services/poradenstvo': image(poradenstvoAvif, poradenstvoJpg, 2200, 1650, '48% 52%'),
	'/services/stavbyveduci': image(stavbyveduciAvif, stavbyveduciJpg, 2200, 991, '58% 52%'),
	'/services/miesanie-farieb': image(farbyAvif, farbyJpg, 2200, 1466, '50% 54%'),
	'/services/kontakty-na-remeselnikov': image(kontaktyAvif, kontaktyJpg, 2200, 1466, '65% 44%'),
	'/services/pozicovna-naradia': image(
		pozicovnaAvif,
		pozicovnaPng,
		1600,
		1200,
		'52% 48%',
		'image/png'
	)
};
