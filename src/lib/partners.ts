// Partner brands carried by Stavebniny Orol — logos + official sites.
import acoLogo from '$lib/assets/logos/Aco.svg';
import alcaLogo from '$lib/assets/logos/Alca.svg';
import anavekLogo from '$lib/assets/logos/Anavek.png';
import barvyALakyLogo from '$lib/assets/logos/Barvy-a-laky.svg';
import baumitLogo from '$lib/assets/logos/Baumit.jpg';
import bauwebLogo from '$lib/assets/logos/Bauweb.svg';
import bramacLogo from '$lib/assets/logos/Bramac.jpg';
import brittermLogo from '$lib/assets/logos/Britterm.png';
import cemixLogo from '$lib/assets/logos/Cemix.svg';
import ceresitLogo from '$lib/assets/logos/Ceresit.jpg';
import chyzbetLogo from '$lib/assets/logos/Chyzbet.png';
import DHInsulationLogo from '$lib/assets/logos/DHInsulation.png';
import dedraLogo from '$lib/assets/logos/Dedra.jpg';
import fakroLogo from '$lib/assets/logos/Fakro.png';
import fischerLogo from '$lib/assets/logos/Fischer.svg';
import foliarexLogo from '$lib/assets/logos/Foliarex.png';
import hacoLogo from '$lib/assets/logos/Haco.png';
import hasoftLogo from '$lib/assets/logos/Hasoft.png';
import heluzLogo from '$lib/assets/logos/Heluz.jpg';
import henkelLogo from '$lib/assets/logos/Henkel.svg';
import hermanLogo from '$lib/assets/logos/Herman.svg';
import hiltiLogo from '$lib/assets/logos/Hilti.svg';
import isoverLogo from '$lib/assets/logos/Isover.png';
import jutaLogo from '$lib/assets/logos/Juta.png';
import keramikaSoukupLogo from '$lib/assets/logos/Keramika-soukup.jpg';
import knaufLogo from '$lib/assets/logos/Knauf.png';
import kreiselLogo from '$lib/assets/logos/KreiselLogoCrop.png';
import levelysLogo from '$lib/assets/logos/Levelys.svg';
import likovLogo from '$lib/assets/logos/Likov.svg';
import makitaLogo from '$lib/assets/logos/Makita.svg';
import meaLogo from '$lib/assets/logos/Mea.svg';
import milwaukeeLogo from '$lib/assets/logos/Milwaukee.svg';
import penosilLogo from '$lib/assets/logos/PenosilRedBackground.svg';
import polifarbeLogo from '$lib/assets/logos/Polifarbe.png';
import porfixLogo from '$lib/assets/logos/Porfix.png';
import prefabetonLogo from '$lib/assets/logos/Prefabeton-Diviaky.webp';
import premacLogo from '$lib/assets/logos/Premac.svg';
import ravenLogo from '$lib/assets/logos/Raven.png';
import rigipsLogo from '$lib/assets/logos/Rigips.png';
import rotoLogo from '$lib/assets/logos/Roto.webp';
import sakretLogo from '$lib/assets/logos/Sakret.png';
import sapeliLogo from '$lib/assets/logos/Sapeli.svg';
import schiedelLogo from '$lib/assets/logos/Schiedel.svg';
import sikaLogo from '$lib/assets/logos/Sika.webp';
import solaLogo from '$lib/assets/logos/SolaRedBackground.svg';
import soudalLogo from '$lib/assets/logos/soudal.jpg';
import stachemaLogo from '$lib/assets/logos/Stachema.svg';
import stalcoLogo from '$lib/assets/logos/Stalco.svg';
import storchLogo from '$lib/assets/logos/Storch.svg';
import stroherLogo from '$lib/assets/logos/Stroher.svg';
import tegolaLogo from '$lib/assets/logos/Tegola.svg';
import topstoneLogo from '$lib/assets/logos/Topstone.svg';
import tytanLogo from '$lib/assets/logos/Tytan.webp';
import vaspoLogo from '$lib/assets/logos/Vaspo.svg';
import veloxLogo from '$lib/assets/logos/Velox.svg';
import veluxLogo from '$lib/assets/logos/Velux.png';
import weberLogo from '$lib/assets/logos/Weber.png';
import wienerbergerLogo from '$lib/assets/logos/Wienerberger.svg';
import wuerthLogo from '$lib/assets/logos/Wuerth.svg';
import xellaLogo from '$lib/assets/logos/Xella.png';

export interface Partner {
	name: string;
	logo: string;
	href: string;
	/** Logo artwork is white/near-white — needs a dark chip on light cells. */
	light?: boolean;
}

export const partners: readonly Partner[] = [
	{ name: 'ACO', logo: acoLogo, href: 'https://www.aco.sk' },
	{ name: 'Alcadrain', logo: alcaLogo, href: 'https://www.alcadrain.sk' },
	{ name: 'Anavek', logo: anavekLogo, href: 'https://www.anavek.sk' },
	{ name: 'Barvy a laky', logo: barvyALakyLogo, href: 'https://www.bal.cz' },
	{ name: 'Baumit', logo: baumitLogo, href: 'https://www.baumit.sk' },
	{ name: 'Bauweb', logo: bauwebLogo, href: 'https://www.bauweb.sk' },
	{ name: 'Bramac', logo: bramacLogo, href: 'https://www.bramac.sk' },
	{ name: 'Britterm', logo: brittermLogo, href: 'https://www.britterm.sk' },
	{ name: 'Cemix', logo: cemixLogo, href: 'https://www.cemix.sk' },
	{ name: 'Ceresit', logo: ceresitLogo, href: 'https://www.ceresit.sk' },
	{ name: 'Chyžbet', logo: chyzbetLogo, href: 'https://www.chyzbet.sk' },
	{ name: 'DHInsulation', logo: DHInsulationLogo, href: 'https://www.dhinsulation.cz/' },
	{ name: 'Dedra', logo: dedraLogo, href: 'https://www.dedra.pl' },
	{ name: 'Fakro', logo: fakroLogo, href: 'https://www.fakro.sk' },
	{ name: 'Fischer', logo: fischerLogo, href: 'https://www.fischer-sk.sk' },
	{ name: 'Foliarex', logo: foliarexLogo, href: 'https://foliarex.com.pl/en/' },
	{ name: 'Haco', logo: hacoLogo, href: 'https://www.haco.cz' },
	{ name: 'Hasoft', logo: hasoftLogo, href: 'https://www.hasoft.cz' },
	{ name: 'Heluz', logo: heluzLogo, href: 'https://www.heluz.sk' },
	{ name: 'Henkel', logo: henkelLogo, href: 'https://www.henkel.sk' },
	{ name: 'Herman', logo: hermanLogo, href: 'https://www.herman.sk' },
	{ name: 'Hilti', logo: hiltiLogo, href: 'https://www.hilti.sk' },
	{ name: 'Isover', logo: isoverLogo, href: 'https://www.isover.sk' },
	{ name: 'Juta', logo: jutaLogo, href: 'https://www.juta.cz' },
	{ name: 'Keramika Soukup', logo: keramikaSoukupLogo, href: 'https://www.keramikasoukup.cz' },
	{ name: 'Knauf', logo: knaufLogo, href: 'https://www.knauf.sk' },
	{ name: 'Kreisel', logo: kreiselLogo, href: 'https://www.kreisel.sk' },
	{ name: 'Levelys', logo: levelysLogo, href: 'https://www.levelys.sk', light: true },
	{ name: 'Likov', logo: likovLogo, href: 'https://likov.cz/' },
	{ name: 'Makita', logo: makitaLogo, href: 'https://www.makita.sk' },
	{ name: 'MEA', logo: meaLogo, href: 'https://www.mea-group.com' },
	{ name: 'Milwaukee', logo: milwaukeeLogo, href: 'https://www.milwaukeetool.eu' },
	{ name: 'Penosil', logo: penosilLogo, href: 'https://www.penosil.cz'},
	{ name: 'Polifarbe', logo: polifarbeLogo, href: 'https://www.polifarbe.hu/' },
	{ name: 'Porfix', logo: porfixLogo, href: 'https://www.porfix.sk' },
	{ name: 'Prefabeton Diviaky', logo: prefabetonLogo, href: 'https://www.prefabeton.sk' },
	{ name: 'Premac', logo: premacLogo, href: 'https://www.premac.sk' },
	{ name: 'Raven', logo: ravenLogo, href: 'https://www.raven.sk' },
	{ name: 'Rigips', logo: rigipsLogo, href: 'https://www.rigips.sk' },
	{ name: 'Roto', logo: rotoLogo, href: 'https://www.roto-frank.com/cs-cz/dst' },
	{ name: 'Sakret', logo: sakretLogo, href: 'https://www.sakret.sk' },
	{ name: 'Sapeli', logo: sapeliLogo, href: 'https://www.sapeli.sk' },
	{ name: 'Schiedel', logo: schiedelLogo, href: 'https://www.schiedel.sk' },
	{ name: 'Sika', logo: sikaLogo, href: 'https://svk.sika.com' },
	{ name: 'Sola', logo: solaLogo, href: 'https://www.sola.at' },
	{ name: 'Soudal', logo: soudalLogo, href: 'https://www.soudal.sk' },
	{ name: 'Stachema', logo: stachemaLogo, href: 'https://www.stachema.sk' },
	{ name: 'Stalco', logo: stalcoLogo, href: 'https://stalco.pl/en/' },
	{ name: 'Storch', logo: storchLogo, href: 'https://www.storch.sk' },
	{ name: 'Ströher', logo: stroherLogo, href: 'https://www.stroeher.de', light: true },
	{ name: 'Tegola', logo: tegolaLogo, href: 'https://tegolacanadese.com' },
	{ name: 'TopStone', logo: topstoneLogo, href: 'https://www.topstone.sk' },
	{ name: 'Tytan', logo: tytanLogo, href: 'https://www.tytan.pl' },
	{ name: 'Vaspo', logo: vaspoLogo, href: 'https://www.vaspo.sk' },
	{ name: 'Velox', logo: veloxLogo, href: 'https://www.velox.sk' },
	{ name: 'Velux', logo: veluxLogo, href: 'https://www.velux.sk' },
	{ name: 'Weber', logo: weberLogo, href: 'https://sk.weber' },
	{ name: 'Wienerberger', logo: wienerbergerLogo, href: 'https://www.wienerberger.sk' },
	{ name: 'Würth', logo: wuerthLogo, href: 'https://www.wurth.sk' },
	{ name: 'Xella', logo: xellaLogo, href: 'https://www.xella.sk' }
] as const;
