<script lang="ts">
	import { enhance } from '$app/forms';
	import { contact } from '$lib/site';

	let { form } = $props();

	const categories = [
		'Hrubá stavba',
		'Suché zmesy, malty a omietky',
		'Tepelné izolácie',
		'Fasádne a interiérové farby',
		'Strešné krytiny',
		'Hydroizolácia',
		'Špecializovaná chémia',
		'Dlažby a betónové tvárnice',
		'Betonárska oceľ',
		'Okná',
		'Kanalizácia, voda a sanita',
		'Viac kategórií / iné'
	] as const;

	const transportOptions = [
		{ value: 'potrebujem', label: 'Áno, potrebujem dopravu na stavbu' },
		{ value: 'odveziem', label: 'Nie, materiál si odveziem sám' },
		{ value: 'neviem', label: 'Nie som si istý / chcem poradiť' }
	] as const;

	let submitting = $state(false);

	function fieldValue(field: string): string {
		return (form?.values as Record<string, string> | undefined)?.[field] ?? '';
	}

	function fieldError(field: string): string | undefined {
		return (form?.errors as Record<string, string> | undefined)?.[field];
	}
</script>

<svelte:head>
	<title>Cenová ponuka – Stavebniny Orol</title>
	<meta
		name="description"
		content="Vyplňte formulár a my Vám pripravíme nezáväznú cenovú ponuku na stavebný materiál šitú na mieru Vášho projektu."
	/>
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Cenová ponuka</h1>
		<p class="hero-lead">
			Vyplňte stručný formulár a my Vás kontaktujeme s nezáväznou cenovou ponukou. Polia označené
			hviezdičkou sú povinné.
		</p>
	</div>
</section>

<section class="body-section">
	<div class="container">
		{#if form?.success}
			<div class="success" role="status" aria-live="polite">
				<h2>Ďakujeme za Vašu požiadavku!</h2>
				<p>
					Formulár sme prijali a čoskoro Vás budeme kontaktovať. V naliehavých prípadoch nám
					zavolajte na <a href={contact.phoneHref}>{contact.phone}</a>.
				</p>
				<a href="/" class="success-link">Späť na úvod</a>
			</div>
		{:else}
			<form
				method="POST"
				class="quote-form"
				novalidate
				use:enhance={() => {
					submitting = true;
					return async ({ update }) => {
						await update();
						submitting = false;
					};
				}}
			>
				<div class="field">
					<label for="name">Meno a priezvisko <span class="req" aria-hidden="true">*</span></label>
					<input
						id="name"
						name="name"
						type="text"
						autocomplete="name"
						required
						value={fieldValue('name')}
						aria-invalid={fieldError('name') ? 'true' : undefined}
						aria-describedby={fieldError('name') ? 'name-error' : undefined}
					/>
					{#if fieldError('name')}
						<p class="error" id="name-error">{fieldError('name')}</p>
					{/if}
				</div>

				<div class="row">
					<div class="field">
						<label for="phone">Telefónne číslo <span class="req" aria-hidden="true">*</span></label>
						<input
							id="phone"
							name="phone"
							type="tel"
							autocomplete="tel"
							inputmode="tel"
							required
							value={fieldValue('phone')}
							aria-invalid={fieldError('phone') ? 'true' : undefined}
							aria-describedby={fieldError('phone') ? 'phone-error' : undefined}
						/>
						{#if fieldError('phone')}
							<p class="error" id="phone-error">{fieldError('phone')}</p>
						{/if}
					</div>

					<div class="field">
						<label for="email">E-mail <span class="req" aria-hidden="true">*</span></label>
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							inputmode="email"
							required
							value={fieldValue('email')}
							aria-invalid={fieldError('email') ? 'true' : undefined}
							aria-describedby={fieldError('email') ? 'email-error' : undefined}
						/>
						{#if fieldError('email')}
							<p class="error" id="email-error">{fieldError('email')}</p>
						{/if}
					</div>
				</div>

				<div class="field">
					<label for="location">Lokalita stavby <span class="req" aria-hidden="true">*</span></label>
					<input
						id="location"
						name="location"
						type="text"
						autocomplete="address-level2"
						required
						placeholder="Napr. Liptovský Mikuláš, Demänovská cesta"
						value={fieldValue('location')}
						aria-invalid={fieldError('location') ? 'true' : undefined}
						aria-describedby={fieldError('location') ? 'location-error' : undefined}
					/>
					{#if fieldError('location')}
						<p class="error" id="location-error">{fieldError('location')}</p>
					{/if}
				</div>

				<div class="row">
					<div class="field">
						<label for="transport">Doprava <span class="req" aria-hidden="true">*</span></label>
						<select
							id="transport"
							name="transport"
							required
							aria-invalid={fieldError('transport') ? 'true' : undefined}
							aria-describedby={fieldError('transport') ? 'transport-error' : undefined}
						>
							<option value="" disabled selected={!fieldValue('transport')}>Vyberte možnosť…</option>
							{#each transportOptions as opt (opt.value)}
								<option value={opt.value} selected={fieldValue('transport') === opt.value}>
									{opt.label}
								</option>
							{/each}
						</select>
						{#if fieldError('transport')}
							<p class="error" id="transport-error">{fieldError('transport')}</p>
						{/if}
					</div>

					<div class="field">
						<label for="category">Kategória materiálu <span class="req" aria-hidden="true">*</span></label>
						<select
							id="category"
							name="category"
							required
							aria-invalid={fieldError('category') ? 'true' : undefined}
							aria-describedby={fieldError('category') ? 'category-error' : undefined}
						>
							<option value="" disabled selected={!fieldValue('category')}>Vyberte kategóriu…</option>
							{#each categories as cat (cat)}
								<option value={cat} selected={fieldValue('category') === cat}>{cat}</option>
							{/each}
						</select>
						{#if fieldError('category')}
							<p class="error" id="category-error">{fieldError('category')}</p>
						{/if}
					</div>
				</div>

				<div class="field">
					<label for="description">
						Stručný popis požiadavky <span class="req" aria-hidden="true">*</span>
					</label>
					<textarea
						id="description"
						name="description"
						rows="6"
						required
						placeholder="Napr. potrebujem cenovú ponuku na tehly a strop pre rodinný dom 120 m²…"
						aria-invalid={fieldError('description') ? 'true' : undefined}
						aria-describedby={fieldError('description') ? 'description-error' : undefined}
					>{fieldValue('description')}</textarea>
					{#if fieldError('description')}
						<p class="error" id="description-error">{fieldError('description')}</p>
					{/if}
				</div>

				<div class="actions">
					<button type="submit" class="submit" disabled={submitting}>
						{submitting ? 'Odosielam…' : 'Odoslať požiadavku'}
					</button>
					<p class="hint">
						Alebo nám zavolajte na <a href={contact.phoneHref}>{contact.phone}</a>.
					</p>
				</div>
			</form>
		{/if}
	</div>
</section>

<style>
	.container {
		max-width: var(--container-narrow);
		margin: 0 auto;
		padding-inline: var(--container-px);
	}

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

	.hero-lead {
		margin: 0.75rem 0 0;
		font-size: var(--font-size-body);
		line-height: 1.7;
		color: var(--color-concrete);
		max-width: 60ch;
	}

	.body-section {
		padding: var(--space-section-y) 0 var(--space-section-y-end);
		background-color: var(--color-white);
	}

	.quote-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	@media (max-width: 640px) {
		.row {
			grid-template-columns: 1fr;
		}
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.field label {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-iron);
	}

	.req {
		color: var(--color-brand-primary);
	}

	.field input,
	.field select,
	.field textarea {
		font: inherit;
		padding: 0.7rem 0.85rem;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		background-color: var(--color-white);
		color: var(--color-iron);
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.field input:focus,
	.field select:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--color-brand-primary);
		box-shadow: 0 0 0 3px rgba(192, 40, 28, 0.15);
	}

	.field textarea {
		resize: vertical;
		min-height: 140px;
		line-height: 1.5;
	}

	.field [aria-invalid='true'] {
		border-color: var(--color-error);
	}

	.field [aria-invalid='true']:focus {
		box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.15);
	}

	.error {
		margin: 0;
		font-size: 0.85rem;
		color: var(--color-error);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		margin-top: 0.5rem;
		flex-wrap: wrap;
	}

	.submit {
		background-color: var(--color-brand-primary);
		color: var(--color-white);
		font: inherit;
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 0.02em;
		padding: 0.85rem 1.75rem;
		border: none;
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: background-color var(--transition-fast);
	}

	.submit:hover:not(:disabled) {
		background-color: var(--color-brand-hover);
	}

	.submit:disabled {
		opacity: 0.6;
		cursor: progress;
	}

	.hint {
		margin: 0;
		font-size: 0.9rem;
		color: var(--text-muted);
	}

	.hint a {
		color: var(--color-brand-primary);
		text-decoration: none;
		font-weight: 600;
	}

	.hint a:hover {
		text-decoration: underline;
	}

	.success {
		background-color: var(--surface-alt);
		border-left: 4px solid var(--color-success);
		border-radius: var(--radius-sm);
		padding: 2rem 1.75rem;
	}

	.success h2 {
		margin: 0 0 0.5rem;
		font-size: var(--font-size-h2);
		color: var(--color-brand-dark);
	}

	.success p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-iron);
	}

	.success a {
		color: var(--color-brand-primary);
		text-decoration: none;
		font-weight: 600;
	}

	.success a:hover {
		text-decoration: underline;
	}

	.success-link {
		display: inline-block;
		margin-top: 1rem;
	}
</style>
