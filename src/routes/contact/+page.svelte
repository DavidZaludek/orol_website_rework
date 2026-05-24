<script lang="ts">
	import { contact, mapsEmbedSrc, company } from '$lib/site';

	const staff = [
		{ role: 'majiteľ, konateľ', name: 'Ing. Koloman ŽALÚDEK', mobile: '+421 903 521 884' },
		{ role: 'obchodný a ekonomický riaditeľ, konateľ', name: 'RNDr. Renata ŽALÚDEKOVÁ', mobile: '+421 903 504 176' },
		{ role: 'vedúci predaja', name: 'Vladimír PLEVA', mobile: '+421 903 777 741' },
        { role: 'fakturácie a administratíva', name: 'Martina JURČOVÁ', mobile: '' },
        { role: 'skladník a distribútor tovaru', name: 'Michal ONDRUŠ', mobile: '' },
		{ role: 'skladník a distribútor tovaru', name: 'Ján ZÁHRADNÍK', mobile: '' }
	] as const;
</script>

<svelte:head>
	<title>Kontakt – Stavebniny Orol</title>
	<meta
		name="description"
		content="Kontaktné údaje, adresa a kontaktné osoby spoločnosti Stavebniny Orol v Liptovskom Mikuláši."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container">
		<h1>Kontakt</h1>
	</div>
</section>

<!-- Company info + map -->
<section class="info-section">
	<div class="container">
		<div class="info-grid">
			<!-- Left: company details -->
			<div class="company-info">
				<h2 class="section-heading">{company.name}</h2>

				<dl class="detail-list">
					<div class="detail-row">
						<dt class="detail-label">Adresa</dt>
						<dd class="detail-value">
							{contact.address.street}<br />
							{contact.address.city}
						</dd>
					</div>

					<div class="detail-row">
						<dt class="detail-label">E-mail</dt>
						<dd class="detail-value">
							<a href={contact.emailHref} class="contact-link">
								{contact.email}
							</a>
						</dd>
					</div>

					<div class="detail-row">
						<dt class="detail-label">Telefón</dt>
						<dd class="detail-value">
							<a href={contact.phoneHref} class="contact-link">{contact.phone}</a>
						</dd>
					</div>
				</dl>
			</div>

			<!-- Right: map -->
			<div class="map-wrapper">
				<iframe
					src={mapsEmbedSrc}
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Poloha {company.name} na mape"
				></iframe>
			</div>
		</div>
	</div>
</section>

<!-- Staff cards -->
<section class="staff-section">
	<div class="container">
		<div class="staff-grid">
			{#each staff as person (person.name)}
				<div class="staff-card">
					<div class="staff-header">
						<p class="staff-name">{person.name}</p>
						<span class="staff-role">{person.role}</span>
					</div>
					<a href="tel:{person.mobile.replace(/\s/g, '')}" class="staff-mobile">
						{person.mobile}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ---- Shared ---- */
	.container {
		max-width: var(--container-default);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

	.section-heading {
		margin: 0 0 2rem;
		font-size: var(--font-size-h2);
		font-weight: 700;
		color: var(--color-brand-dark);
	}

	/* ---- Hero ---- */
	.hero {
		background-color: var(--color-brand-dark);
		padding: var(--space-hero-y) 0;
	}

	.hero h1 {
		margin: 0;
		font-size: var(--font-size-h1);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
	}

	/* ---- Info section ---- */
	.info-section {
		padding: var(--space-section-y) 0;
		background-color: var(--color-white);
	}

	.info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	/* ---- Detail list ---- */
	.detail-list {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.detail-row {
		display: grid;
		grid-template-columns: 7rem 1fr;
		gap: 0.75rem;
	}

	.detail-label {
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		padding-top: 0.15rem;
	}

	.detail-value {
		margin: 0;
		font-size: 1rem;
		color: var(--text-on-light);
		line-height: 1.6;
	}

	.contact-link {
		color: var(--color-brand-primary);
		text-decoration: none;
		font-weight: 500;
		transition: color var(--transition-fast);
	}

	.contact-link:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Map ---- */
	.map-wrapper {
		height: 340px;
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 1px solid var(--border-default);
	}

	.map-wrapper iframe {
		display: block;
	}

	/* ---- Staff section ---- */
	.staff-section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		background-color: var(--surface-alt);
	}

	.staff-grid {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.staff-card {
		background-color: var(--color-white);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		padding: 1.75rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.staff-header {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.staff-name {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--color-iron);
		line-height: 1.2;
		white-space: nowrap;
	}

	.staff-role {
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-muted);
	}

	.staff-mobile {
		margin-top: 0.25rem;
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-brand-primary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.staff-mobile:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Responsive ---- */
	@media (max-width: 768px) {
		.info-grid {
			grid-template-columns: 1fr;
		}

		.map-wrapper {
			height: 280px;
		}
	}

	@media (max-width: 600px) {
		.detail-row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}

		.staff-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}
	}
</style>
