<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { contact, company, openingHours } from '$lib/site';
	import GoogleMap from '$lib/components/GoogleMap.svelte';
	import OrolMap from '$lib/components/OrolMap.svelte';
	import { reveal } from '$lib/reveal';

	const useGoogleMap = Boolean(env.PUBLIC_GOOGLE_MAPS_KEY);

	const staff = [
		{ role: 'majiteľ, konateľ', name: 'Ing. Koloman ŽALÚDEK', mobile: '+421 903 521 884' },
		{
			role: 'obchodný a ekonomický riaditeľ, konateľ',
			name: 'RNDr. Renata ŽALÚDEKOVÁ',
			mobile: '+421 903 504 176'
		},
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

<section class="section" aria-label="Kontakt">
	<div class="contact">
		<div class="contact-row contact-row--head">
			<header class="head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Kontakt</span>
				<h1 class="section-title">Navštívte nás</h1>
				<p class="head-note">{contact.address.street}, {contact.address.city}</p>
			</header>
			<a href={contact.phoneHref} rel="external" class="head-link-cell">{contact.phone}</a>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		<!-- Company info + map -->
		<div class="contact-row">
			<div class="info-cell" data-reveal {@attach reveal()}>
				<h2 class="info-title">{company.name}</h2>

				<dl class="detail-list">
					<div class="detail-row">
						<dt class="detail-label">Adresa</dt>
						<dd class="detail-value">
							{contact.address.street}<br />
							{contact.address.city}
						</dd>
					</div>

					<div class="detail-row">
						<dt class="detail-label">Telefón</dt>
						<dd class="detail-value">
							<a href={contact.phoneHref} rel="external" class="contact-link">{contact.phone}</a><br
							/>
							<a href={contact.landlineHref} rel="external" class="contact-link"
								>{contact.landline}</a
							>
						</dd>
					</div>

					<div class="detail-row">
						<dt class="detail-label">E-mail</dt>
						<dd class="detail-value">
							<a href={contact.emailHref} rel="external" class="contact-link">{contact.email}</a>
						</dd>
					</div>
				</dl>

				<h3 class="hours-title">Otváracie hodiny</h3>
				<table class="hours">
					<tbody>
						{#each openingHours as row (row.day)}
							<tr>
								<th scope="row">{row.day}</th>
								<td class:closed={row.hours === 'Zatvorené'}>{row.hours}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div class="map-cell" data-reveal {@attach reveal(120)}>
				{#if useGoogleMap}
					<GoogleMap />
				{:else}
					<OrolMap />
				{/if}
			</div>
		</div>

		<!-- Staff -->
		<div class="contact-row contact-row--staffhead">
			<div class="staff-head-cell" data-reveal {@attach reveal()}>
				<span class="eyebrow">Kontaktné osoby</span>
			</div>
			<div class="acc acc--blue" aria-hidden="true"></div>
			<div class="acc acc--yellow" aria-hidden="true"></div>
		</div>

		<div class="staff-grid">
			{#each staff as person, i (person.name)}
				<div class="person-cell" data-reveal {@attach reveal(Math.min(i * 60, 300))}>
					<p class="person-name">{person.name}</p>
					<span class="person-role">{person.role}</span>
					{#if person.mobile}
						<a href="tel:{person.mobile.replace(/\s/g, '')}" class="person-phone">
							{person.mobile}
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 0 0 var(--space-section-y-end);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: var(--color-brand-primary);
	}

	.eyebrow::before {
		content: '';
		width: 24px;
		height: 3px;
		background-color: var(--color-brand-primary);
	}

	.section-title {
		margin: 0.35rem 0 0;
		font-family: var(--font-display);
		font-size: var(--font-size-display-lg);
		font-weight: 700;
		line-height: 1.02;
		text-transform: uppercase;
		letter-spacing: 0.015em;
		color: var(--color-iron);
	}

	.head-cell {
		flex: 4 1 0;
		min-width: 0;
		background-color: var(--color-white);
		padding: 1.75rem clamp(1.25rem, 3vw, 2.5rem) 1.9rem;
	}

	.head-note {
		margin: 0.6rem 0 0;
		font-size: var(--font-size-small);
		color: var(--text-muted);
		max-width: 60ch;
		line-height: 1.55;
	}

	.head-link-cell {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		text-align: center;
		text-decoration: none;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
		transition: background-color var(--transition-fast);
	}

	.head-link-cell:hover {
		background-color: var(--color-brand-hover);
	}

	/* ===== Scroll reveal ===== */
	/* Hidden only while the reveal script is armed (see app.html) — a
	   blocked bundle can never leave content permanently invisible. */
	:global(html[data-reveal-ready]) [data-reveal] {
		opacity: 0;
		transform: translateY(18px);
		transition:
			opacity var(--transition-reveal),
			transform var(--transition-reveal);
		transition-delay: var(--reveal-delay, 0ms);
	}

	:global(html[data-reveal-ready]) [data-reveal]:global(.is-revealed) {
		opacity: 1;
		transform: none;
	}

	/* ===== Contact canvas ===== */
	.contact {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
		background-color: var(--color-iron);
	}

	.contact-row {
		display: flex;
		gap: 5px;
	}

	/* Info cell */
	.info-cell {
		flex: 5 1 0;
		min-width: 0;
		background-color: var(--color-white);
		padding: clamp(1.75rem, 3vw, 2.5rem) clamp(1.25rem, 3vw, 2.5rem) 2rem;
	}

	.info-title {
		margin: 0 0 1.5rem;
		font-family: var(--font-display);
		font-size: var(--font-size-display-md);
		font-weight: 700;
		line-height: 1.05;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: var(--color-iron);
	}

	.detail-list {
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}

	.detail-row {
		display: grid;
		grid-template-columns: 7rem 1fr;
		gap: 0.75rem;
	}

	.detail-label {
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-slate);
		padding-top: 0.1rem;
	}

	.detail-value {
		margin: 0;
		font-size: 1rem;
		color: var(--color-iron);
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
		text-decoration: underline;
	}

	/* Opening hours */
	.hours-title {
		margin: 2rem 0 0.75rem;
		font-family: var(--font-display);
		font-size: 0.95rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-slate);
	}

	.hours {
		width: 100%;
		max-width: 320px;
		border-collapse: collapse;
	}

	.hours th {
		padding: 0.3rem 0;
		text-align: left;
		font-size: var(--font-size-small);
		font-weight: 500;
		color: var(--text-muted);
	}

	.hours td {
		padding: 0.3rem 0;
		text-align: right;
		font-size: var(--font-size-small);
		font-variant-numeric: tabular-nums;
		color: var(--color-iron);
	}

	.hours td.closed {
		color: var(--color-slate);
	}

	/* Map cell */
	.map-cell {
		flex: 7 1 0;
		min-width: 0;
		display: flex;
		min-height: 380px;
		background-color: var(--color-white);
	}

	.map-cell :global(.map) {
		flex: 1 1 auto;
		width: 100%;
	}

	/* Staff band */
	.staff-head-cell {
		flex: 4 1 0;
		min-width: 0;
		display: flex;
		align-items: center;
		background-color: var(--color-white);
		padding: 1.1rem clamp(1.25rem, 3vw, 2.5rem);
	}

	.staff-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;
	}

	.person-cell {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.35rem;
		background-color: var(--color-white);
		padding: 1.4rem 1.5rem 1.5rem;
	}

	.person-name {
		margin: 0;
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.1;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-iron);
	}

	.person-role {
		font-size: var(--font-size-small);
		color: var(--text-muted);
	}

	.person-phone {
		margin-top: 0.4rem;
		font-size: var(--font-size-small);
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		color: var(--color-brand-primary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.person-phone:hover {
		color: var(--color-brand-hover);
		text-decoration: underline;
	}

	/* Accent cells */
	.acc {
		flex: 0 0 90px;
	}

	.acc--yellow {
		background-color: var(--color-accent-yellow);
	}

	.acc--blue {
		background-color: var(--color-accent-blue);
	}

	/* ===== Responsive ===== */
	@media (max-width: 1000px) {
		.staff-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 800px) {
		.contact {
			gap: 4px;
			padding: 4px;
		}

		.contact-row {
			flex-direction: column;
			gap: 4px;
		}

		.head-cell {
			padding: 1.25rem 1rem 1.4rem;
		}

		.head-link-cell {
			padding: 0.9rem;
		}

		.info-cell {
			padding: 1.4rem 1.2rem 1.6rem;
		}

		.map-cell {
			min-height: 320px;
		}

		.staff-head-cell {
			padding: 1rem 1.2rem;
		}

		.staff-grid {
			gap: 4px;
		}

		.person-cell {
			padding: 1.1rem 1.2rem 1.25rem;
		}

		.acc {
			flex: none;
			min-height: 22px;
		}
	}

	@media (max-width: 640px) {
		.staff-grid {
			grid-template-columns: 1fr;
		}

		.detail-row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
	}

	/* ===== Reduced motion ===== */
	@media (prefers-reduced-motion: reduce) {
		[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
