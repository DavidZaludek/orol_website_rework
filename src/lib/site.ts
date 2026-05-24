export const company = {
	name: 'Stavebniny Orol',
	legalName: 'OROL, spol. s.r.o.',
	ico: '12345678',
	dic: '2012345678',
	icDph: 'SK2012345678',
	copyrightYear: 2026
} as const;

export const contact = {
	phone: '+421 903 777 741',
	phoneHref: 'tel:+421903777741',
	email: 'stavebniny.orol@gmail.com',
	emailHref: 'mailto:stavebniny.orol@gmail.com',
	address: {
		street: 'kpt. Nálepku 2218',
		city: '031 01 Liptovský Mikuláš',
		country: 'Slovenská republika'
	}
} as const;

export const socials = {
	instagram: 'https://www.instagram.com/orol_stavebniny/',
	facebook: 'https://www.facebook.com/stavebninyOROL'
} as const;

export const openingHours = [
	{ day: 'Pondelok', hours: '7:00 – 16:00' },
	{ day: 'Utorok', hours: '7:00 – 16:00' },
	{ day: 'Streda', hours: '7:00 – 16:00' },
	{ day: 'Štvrtok', hours: '7:00 – 16:00' },
	{ day: 'Piatok', hours: '7:00 – 16:00' },
	{ day: 'Sobota', hours: '7:00 – 12:00' },
	{ day: 'Nedeľa', hours: 'Zatvorené' }
] as const;

export const navLinks = [
	{ href: '/products', label: 'Produkty' },
	{ href: '/services', label: 'Služby' },
	{ href: '/promotions', label: 'Akcie' },
	{ href: '/news', label: 'Aktuality' },
	{ href: '/gallery', label: 'Galéria' },
	{ href: '/quote', label: 'Cenová ponuka' },
	{ href: '/about', label: 'O nás' },
	{ href: '/contact', label: 'Kontakt' }
] as const;

export const legalLinks = [
	{ href: '/ochrana-osobnych-udajov', label: 'Ochrana osobných údajov' },
	{ href: '/cookies', label: 'Cookies' }
] as const;

export const mapsEmbedSrc =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4681693755897!2d19.6254822!3d49.08351649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47159948797ff9b9%3A0x4f4b8209e68f1ed1!2sOROL%2C%20spol.%20s.r.o.!5e1!3m2!1sen!2sfi!4v1778965070947!5m2!1sen!2sfi';
