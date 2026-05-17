<script lang="ts">
	const staff = [
		{ role: 'majiteľ', name: 'Ing. Koloman ŽALÚDEK', mobile: '+421 903 521 884' },
		{ role: 'obchodný a ekonomický riaditeľ, konateľ', name: 'RNDr. Renáta ŽALÚDEKOVÁ', mobile: '+421 903 504 176' },
		{ role: 'obchodný zástupca, vedúci predajne', name: 'Vladimír PLEVA', mobile: '+421 903 777 741' },
        { role: 'fakturácie a účtovníctvo', name: 'Martina JURČOVÁ', mobile: '' },
        { role: 'vedúci skladu', name: 'Ján NOVÁK', mobile: '' },
		{ role: 'vedúci distribúcie a skladník', name: 'Peter HORVÁTH', mobile: '' }
	] as const;

	const MAPS_SRC =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4681693755897!2d19.6254822!3d49.08351649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47159948797ff9b9%3A0x4f4b8209e68f1ed1!2sOROL%2C%20spol.%20s.r.o.!5e1!3m2!1sen!2sfi!4v1778965070947!5m2!1sen!2sfi';
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
				<h2 class="section-heading">Stavebniny Orol</h2>

				<dl class="detail-list">
					<div class="detail-row">
						<dt class="detail-label">Adresa</dt>
						<dd class="detail-value">
							kpt. Nálepku 2218<br />
							031 01 Liptovský Mikuláš
						</dd>
					</div>

					<div class="detail-row">
						<dt class="detail-label">E-mail</dt>
						<dd class="detail-value">
							<a href="mailto:stavebniny.orol@gmail.com" class="contact-link">
								stavebniny.orol@gmail.com
							</a>
						</dd>
					</div>

					<div class="detail-row">
						<dt class="detail-label">Telefón</dt>
						<dd class="detail-value">
							<a href="tel:+421 903 777 741" class="contact-link">+421 903 777 741</a>
						</dd>
					</div>
				</dl>
			</div>

			<!-- Right: map -->
			<div class="map-wrapper">
				<iframe
					src={MAPS_SRC}
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Poloha Stavebniny Orol na mape"
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
		max-width: 1100px;
		margin: 0 auto;
		padding-inline: 1.5rem;
	}

	.section-heading {
		margin: 0 0 2rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-brand-dark);
	}

	/* ---- Hero ---- */
	.hero {
		background-color: var(--color-brand-dark);
		padding: 2rem 0;
	}

	.hero h1 {
		margin: 0;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 800;
		color: var(--text-on-dark);
		letter-spacing: 0.02em;
	}

	/* ---- Info section ---- */
	.info-section {
		padding: 4rem 0;
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
		transition: color 0.18s ease;
	}

	.contact-link:hover {
		color: var(--color-brand-hover);
	}

	/* ---- Map ---- */
	.map-wrapper {
		height: 340px;
		border-radius: 6px;
		overflow: hidden;
		border: 1px solid var(--border-default);
	}

	.map-wrapper iframe {
		display: block;
	}

	/* ---- Staff section ---- */
	.staff-section {
		padding: 4rem 0 5rem;
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
		border-radius: 6px;
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
		transition: color 0.18s ease;
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
	}
</style>
