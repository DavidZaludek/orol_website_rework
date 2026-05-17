<script lang="ts">
	const navLinks = [
		{ href: '/products', label: 'Produkty' },
		{ href: '/services', label: 'Služby' },
		{ href: '/promotions', label: 'Akcie' },
		{ href: '/news', label: 'Aktuality' },
		{ href: '/quote', label: 'Cenová ponuka' },
		{ href: '/about', label: 'O nás' },
		{ href: '/contact', label: 'Kontakt' }
	] as const;

	const openingHours = [
		{ day: 'Pondelok', hours: '7:00 – 17:00' },
		{ day: 'Utorok', hours: '7:00 – 17:00' },
		{ day: 'Streda', hours: '7:00 – 17:00' },
		{ day: 'Štvrtok', hours: '7:00 – 17:00' },
		{ day: 'Piatok', hours: '7:00 – 17:00' },
		{ day: 'Sobota', hours: '7:00 – 12:00' },
		{ day: 'Nedeľa', hours: 'Zatvorené' }
	] as const;
</script>

<footer>
	<div class="maps-wrapper">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4681693755897!2d19.6254822!3d49.08351649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47159948797ff9b9%3A0x4f4b8209e68f1ed1!2sOROL%2C%20spol.%20s.r.o.!5e1!3m2!1sen!2sfi!4v1778965070947!5m2!1sen!2sfi"
			width="100%"
			height="300"
			style="border:0;"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Poloha Stavebniny Orol na mape"
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
							<dd class:closed={row.hours === 'Zatvorené'}>{row.hours}</dd>
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
					<li>
						<a href="tel:+421903777741" class="contact-link">+421 903 777 741</a>
					</li>
					<li>
						<a href="mailto:info@stavebninyorol.sk" class="contact-link">info@stavebninyorol.sk</a>
					</li>
					<li class="address">
						<span>Kysucan 123</span><br />
						<span>022 01 Čadca</span><br />
						<span>Slovenská republika</span>
					</li>
				</ul>
				<div class="social-links">
					<a
						href="https://www.instagram.com/orol_stavebniny/"
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<circle cx="12" cy="12" r="4"></circle>
							<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
						</svg>
					</a>
					<a
						href="https://www.facebook.com/stavebninyOROL"
						class="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
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
				<a href="/gdpr" class="legal-link">GDPR</a>
				<a href="/privacy" class="legal-link">Ochrana súkromia</a>
				<a href="/cookies" class="legal-link">Cookies</a>
			</div>
			<div class="company-ids">
				<span>IČO: 12345678</span>
				<span>DIČ: 2012345678</span>
				<span>IČ DPH: SK2012345678</span>
				<span>&copy; 2025 Stavebniny Orol</span>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-brand-dark);
		color: var(--text-on-dark);
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
		gap: 0.75rem;
		margin-top: 0.25rem;
		padding-left: 1.2rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		color: var(--color-concrete);
		text-decoration: none;
		transition: color 0.18s ease;
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
		color: var(--text-on-dark);
		text-decoration: none;
		transition: color 0.18s ease;
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
		color: var(--text-on-dark);
		text-align: right;
		white-space: nowrap;
	}

	.hours-row dd.closed {
		color: var(--color-white);
		font-style: italic;
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

	.contact-link {
		font-size: 0.9rem;
		color: var(--text-on-dark);
		text-decoration: none;
		transition: color 0.18s ease;
	}

	.contact-link:hover {
		color: var(--color-brand-hover);
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
		max-width: 1700px;
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
		transition: color 0.18s ease;
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
