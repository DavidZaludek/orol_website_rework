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
</script>

<footer>
	<div class="maps-wrapper">
		<iframe
			src={mapsEmbedSrc}
			width="100%"
			height="300"
			style="border:0;"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Poloha {company.name} na mape"
		></iframe>
	</div>

	<div class="footer-main">
		<div class="footer-inner">
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
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<circle cx="12" cy="12" r="4"></circle>
							<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
						</svg>
					</a>
					<a
						href={socials.facebook}
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
						</svg>
					</a>
				</div>
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
	.maps-wrapper {
		width: 100%;
		line-height: 0;
	}

	.maps-wrapper iframe {
		display: block;
		width: 100%;
	}

	/* ---- Main columns ---- */
	.footer-main {
        padding: 3rem 1.5rem 2.5rem;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2.5rem;
        max-width: 1700px;
        margin: 0 auto;
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
	@media (max-width: 768px) {
		.footer-inner {
			grid-template-columns: repeat(2, 1fr);
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
