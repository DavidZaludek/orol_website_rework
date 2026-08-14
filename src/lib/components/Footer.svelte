<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { navLinks, contact, socials, legalLinks, company } from '$lib/site';
	import { partners } from '$lib/partners';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';
	import GoogleMap from './GoogleMap.svelte';
	import OrolMap from './OrolMap.svelte';
	import logoMark from '$lib/assets/orol_loga/orol_all_white.svg';

	const useGoogleMap = Boolean(env.PUBLIC_GOOGLE_MAPS_KEY);
</script>

<footer>
	<div class="mondrian">
		<a href="/" class="cell cell--brand" aria-label="Stavebniny Orol — domov">
			<img src={logoMark} alt="" class="brand-mark" />
			<span class="brand-name">Stavebniny<br />Orol</span>
		</a>

		<div class="cell cell--hours">
			<span class="cell-heading">Otváracie hodiny</span>
			<dl class="hours">
				<div class="hours-row">
					<dt>Pondelok – Piatok</dt>
					<dd>7:00 – 16:00</dd>
				</div>
				<div class="hours-row">
					<dt>Sobota</dt>
					<dd>7:00 – 12:00</dd>
				</div>
				<div class="hours-row">
					<dt>Nedeľa</dt>
					<dd>zatvorené</dd>
				</div>
			</dl>
		</div>

		<div class="cell cell--yellow" aria-hidden="true"></div>

		<nav class="cell cell--nav" aria-label="Pätičková navigácia">
			<span class="cell-heading">Navigácia</span>
			{#each navLinks as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<div class="cell cell--blue" aria-hidden="true"></div>
		<div class="cell cell--wsm" aria-hidden="true"></div>

		<div class="cell cell--contact">
			<a href={contact.phoneHref} class="contact-phone">{contact.phone}</a>
			<a href={contact.emailHref} class="contact-email">{contact.email}</a>
		</div>

		<div class="cell cell--social">
			<a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
				<InstagramIcon size={24} />
			</a>
			<a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
				<FacebookIcon size={24} />
			</a>
		</div>

		<div class="cell cell--map">
			{#if useGoogleMap}
				<GoogleMap />
			{:else}
				<OrolMap />
			{/if}
		</div>

		<div class="cell cell--partners" aria-label="Naši partneri">
			<div class="footer-partners-track">
				{#each [...partners, ...partners] as partner, i (i)}
					<a
						href={partner.href}
						class:dup={i >= partners.length}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={partner.name}
						aria-hidden={i >= partners.length ? 'true' : undefined}
						tabindex={i >= partners.length ? -1 : 0}
					>
						<img
							src={partner.logo}
							alt={partner.name}
							class:logo-chip={partner.light}
							loading="lazy"
						/>
					</a>
				{/each}
			</div>
		</div>
		<div class="cell cell--racc" aria-hidden="true"></div>
	</div>

	<div class="footer-legal">
		<div class="legal-inner">
			<div class="legal-links">
				{#each legalLinks as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
			</div>
			<p class="legal-ids">
				IČO: {company.ico} · DIČ: {company.dic} · IČ DPH: {company.icDph}
			</p>
			<p class="legal-copy">© {company.copyrightYear} {company.name}</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-iron);
	}

	/* The Mondrian composition — iron shows through the gaps as the grid lines. */
	.mondrian {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-areas:
			'brand brand brand hours hours hours hours hours nav nav nav nav'
			'map   map   map   map   map   map   map   map   map map map map'
			'contact contact contact contact yellow social social social blue blue wsm wsm'
			'partners partners partners partners partners partners partners partners partners partners racc racc';
		gap: 5px;
		/* Heavier top edge separates the footer canvas from page content. */
		padding-top: 18px;
		background-color: var(--color-iron);
	}

	.cell {
		padding: 1.4rem 1.6rem;
		min-height: 72px;
	}

	.cell-heading {
		display: block;
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-iron);
		margin-bottom: 0.7rem;
	}

	/* Brand — red block */
	.cell--brand {
		grid-area: brand;
		background-color: var(--color-brand-primary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 0.9rem;
		text-decoration: none;
	}

	.brand-mark {
		width: 56px;
		height: auto;
	}

	.brand-name {
		font-family: var(--font-display);
		font-size: 1.7rem;
		font-weight: 700;
		line-height: 1.02;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-white);
	}

	/* Hours — white block */
	.cell--hours {
		grid-area: hours;
		background-color: var(--color-white);
	}

	.hours {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.hours-row {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		font-size: var(--font-size-small);
		max-width: 320px;
	}

	.hours-row dt {
		color: var(--text-muted);
	}

	.hours-row dd {
		margin: 0;
		font-weight: 600;
		color: var(--color-iron);
		font-variant-numeric: tabular-nums;
	}

	/* Navigation — white block */
	.cell--nav {
		grid-area: nav;
		background-color: var(--color-white);
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		align-content: flex-start;
		column-gap: 1.5rem;
	}

	.cell--nav .cell-heading {
		flex-basis: 100%;
	}

	/* Map — its own cell in the composition */
	.cell--map {
		grid-area: map;
		position: relative;
		padding: 0;
		min-height: 460px;
		background-color: var(--color-white);
	}

	.cell--map :global(.map) {
		position: absolute;
		inset: 0;
		min-height: 0;
	}

	.cell--nav a {
		font-size: var(--font-size-small);
		font-weight: 500;
		color: var(--color-steel);
		text-decoration: none;
		line-height: 2;
		transition: color var(--transition-fast);
	}

	.cell--nav a:hover {
		color: var(--color-brand-primary);
	}

	/* Contact — red block */
	.cell--contact {
		grid-area: contact;
		background-color: var(--color-brand-primary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.3rem;
	}

	.contact-phone {
		font-family: var(--font-display);
		font-size: clamp(1.4rem, 2.5vw, 1.9rem);
		font-weight: 700;
		letter-spacing: 0.04em;
		color: var(--color-white);
		text-decoration: none;
		font-variant-numeric: tabular-nums;
	}

	.contact-phone:hover {
		text-decoration: underline;
	}

	.contact-email {
		font-size: var(--font-size-small);
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
	}

	.contact-email:hover {
		color: var(--color-white);
		text-decoration: underline;
	}

	/* Social — white block */
	.cell--social {
		grid-area: social;
		background-color: var(--color-white);
		display: flex;
		align-items: center;
		gap: 1.1rem;
	}

	.cell--social a {
		color: var(--color-iron);
		line-height: 1;
		transition: color var(--transition-fast);
	}

	.cell--social a:hover {
		color: var(--color-brand-primary);
	}

	/* Pure accent blocks */
	.cell--yellow {
		grid-area: yellow;
		background-color: var(--color-accent-yellow);
	}

	.cell--blue {
		grid-area: blue;
		background-color: var(--color-accent-blue);
	}

	.cell--wsm {
		grid-area: wsm;
		background-color: var(--color-accent-yellow);
	}

	.cell--racc {
		grid-area: racc;
		background-color: var(--color-brand-primary);
	}

	/* Partners — scrolling brand strip */
	.cell--partners {
		grid-area: partners;
		background-color: var(--color-white);
		padding: 0.85rem 0;
		overflow: hidden;
	}

	.footer-partners-track {
		display: flex;
		align-items: center;
		width: max-content;
		animation: footer-scroll 90s linear infinite;
	}

	@keyframes footer-scroll {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}

	.cell--partners:hover .footer-partners-track {
		animation-play-state: paused;
	}

	.footer-partners-track a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120px;
		height: 36px;
		margin-right: 2rem;
		flex-shrink: 0;
		filter: grayscale(100%);
		opacity: 0.6;
		transition:
			filter var(--transition-fast),
			opacity var(--transition-fast);
	}

	.footer-partners-track a:hover,
	.footer-partners-track a:focus-visible {
		filter: grayscale(0);
		opacity: 1;
	}

	.footer-partners-track img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		display: block;
	}

	/* Legal bar — the dark edge below the canvas */
	.footer-legal {
		background-color: var(--color-iron);
		font-size: var(--font-size-xs);
	}

	.legal-inner {
		max-width: var(--container-default);
		margin: 0 auto;
		padding: 0.9rem var(--container-px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.legal-links {
		display: flex;
		gap: 1.25rem;
	}

	.legal-links a {
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.legal-links a:hover {
		color: var(--color-brand-hover);
	}

	.legal-ids,
	.legal-copy {
		margin: 0;
		color: var(--color-slate);
		font-variant-numeric: tabular-nums;
	}

	@media (prefers-reduced-motion: reduce) {
		.footer-partners-track {
			animation: none;
			flex-wrap: wrap;
			width: auto;
			justify-content: center;
		}

		.footer-partners-track a.dup {
			display: none;
		}
	}

	@media (max-width: 760px) {
		.mondrian {
			grid-template-columns: repeat(4, 1fr);
			grid-template-areas:
				'brand brand brand brand'
				'hours hours hours hours'
				'map map map map'
				'yellow nav nav nav'
				'blue   nav nav nav'
				'contact contact contact contact'
				'social social social social'
				'partners partners partners partners';
			gap: 4px;
			padding-top: 14px;
		}

		.cell--map {
			min-height: 260px;
		}

		.cell--wsm,
		.cell--racc {
			display: none;
		}

		.cell {
			padding: 1.2rem 1.3rem;
		}

		.legal-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.4rem;
		}
	}
</style>
