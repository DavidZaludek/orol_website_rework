<script lang="ts">
	import {
		navLinks,
		openingHours,
		contact,
		socials,
		legalLinks,
		company,
		mapsEmbedSrc
	} from '$lib/site';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';
	import logoFull from '$lib/assets/orol_loga/orol_all_white.svg';
</script>

<footer>
	<iframe
		class="maps-iframe"
		src={mapsEmbedSrc}
		width="100%"
		height="300"
		style="border:0;"
		allowfullscreen
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Poloha {company.name} na mape"
	></iframe>

	<div class="footer-inner">
		<a href="/" class="footer-brand" aria-label="Stavebniny Orol — domov">
			<img src={logoFull} alt="Stavebniny Orol logo" class="footer-logo" />
		</a>

		<div class="col col-hours">
			<h3 class="col-heading">Otváracie hodiny</h3>
			<dl class="hours-list">
				{#each openingHours as row (row.day)}
					<div class="hours-row">
						<dt>{row.day}</dt>
						<dd>{row.hours}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="col col-links">
			<h3 class="col-heading">Rýchle odkazy</h3>
			<nav aria-label="Pätičková navigácia">
				{#each navLinks as link (link.href)}
					<a href={link.href} class="footer-link">{link.label}</a>
				{/each}
			</nav>
		</div>

		<div class="col col-contact">
			<h3 class="col-heading">Kontakt</h3>
			<ul class="contact-list">
				<li class="company-name">{company.legalName}</li>
				<li class="address">
					<span>{contact.address.street}</span><br />
					<span>{contact.address.city}</span>
				</li>
				<li>
					<span class="contact-label">tel:</span>
					<a href={contact.phoneHref} class="contact-link">{contact.phone}</a>
				</li>
				<li>
					<span class="contact-label">e-mail:</span>
					<a href={contact.emailHref} class="contact-link">{contact.email}</a>
				</li>
			</ul>
			<div class="social-links">
				<a
					href={socials.instagram}
					class="social-link"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<InstagramIcon size={32} />
				</a>
				<a
					href={socials.facebook}
					class="social-link"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<FacebookIcon size={32} />
				</a>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="footer-bottom-inner">
			<div class="legal-links">
				{#each legalLinks as link (link.href)}
					<a href={link.href} class="legal-link">{link.label}</a>
				{/each}
			</div>
			<div class="company-ids">
				<span>IČO: {company.ico}</span>
				<span>DIČ: {company.dic}</span>
				<span>IČ DPH: {company.icDph}</span>
				<span>&copy; {company.copyrightYear} {company.name}</span>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-brand-dark);
		color: var(--color-concrete);
	}

	/* ---- Map ---- */
	.maps-iframe {
		display: block;
		width: 100%;
	}

	/* ---- Main columns ---- */
	.footer-inner {
		display: grid;
		grid-template-columns: auto repeat(3, minmax(0, 1fr));
		gap: 4rem;
		max-width: 1700px;
		margin: 0 auto;
		padding: 3rem 1.5rem 2.5rem;
	}

	/* ---- Brand logo (left) ---- */
	.footer-brand {
		/* ============================================================
		   FOOTER LOGO SCALING — adjust this value to resize the logo.
		   ============================================================ */
		--footer-logo-width: clamp(120px, 14vw, 190px);

		display: flex;
		align-items: flex-start;
	}

	.footer-logo {
		width: var(--footer-logo-width);
		height: auto;
		display: block;
	}

	.social-links {
		display: flex;
		gap: 1rem;
		margin-top: 0.75rem;
		padding-left: 1.2rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
		line-height: 1;
	}

	.social-link:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Column: common ---- */
	.col-heading {
		margin: 0 0 1.5rem;
		font-size: 1rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-concrete);
	}

	/* ---- Column: Quick links ---- */
	.col-links nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding-left: 1.2rem;
	}

	.footer-link {
		font-size: 0.9rem;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
		width: fit-content;
	}

	.footer-link:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Column: Opening hours ---- */
	.hours-list {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding-left: 1.2rem;
	}

	.hours-row {
		display: flex;
		gap: 1rem;
	}

	.hours-row dt {
		font-size: 0.875rem;
		color: var(--color-concrete);
		min-width: 7rem;
	}

	.hours-row dd {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-concrete);
		text-align: right;
		white-space: nowrap;
	}

	/* ---- Column: Contact ---- */
	.contact-list {
		list-style: none;
		margin: 0;
		padding: 0 0 0 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.contact-label {
		display: inline-block;
		min-width: 3.75rem;
		font-size: 0.85rem;
		color: var(--color-concrete);
	}

	.contact-link {
		font-size: 0.9rem;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.contact-link:hover {
		color: var(--color-brand-hover);
	}

	.company-name {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--color-concrete);
		letter-spacing: 0.01em;
	}

	.address {
		font-size: 0.875rem;
		color: var(--color-concrete);
		line-height: 1.6;
	}

	/* ---- Bottom bar ---- */
	.footer-bottom {
		background-color: var(--color-steel);
		padding: 1rem 1.5rem;
	}

	.footer-bottom-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.75rem 1.5rem;
		max-width: var(--container-wide);
		margin: 0 auto;
	}

	.legal-links {
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
	}

	.legal-link {
		font-size: 0.8rem;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.legal-link:hover {
		color: var(--color-brand-hover);
	}

	.company-ids {
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
		font-size: 0.8rem;
		color: var(--color-concrete);
	}

	/* ---- Responsive ---- */
	/* Tablets: collapse the 4-column desktop layout so contacts never
	   push off-screen (no horizontal scroll). Logo spans the full width. */
	@media (max-width: 1024px) {
		.footer-inner {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 2rem 2.5rem;
		}

		.footer-brand {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 600px) {
		.footer-inner {
			grid-template-columns: 1fr;
		}

		.footer-bottom-inner {
			flex-direction: column;
			align-items: flex-start;
		}

		.company-ids {
			flex-direction: column;
			gap: 0.25rem;
		}
	}
</style>
