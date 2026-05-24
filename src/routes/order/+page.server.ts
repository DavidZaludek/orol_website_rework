import { fail, type Actions } from '@sveltejs/kit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = (data.get('name')?.toString() ?? '').trim();
		const phone = (data.get('phone')?.toString() ?? '').trim();
		const email = (data.get('email')?.toString() ?? '').trim();
		const location = (data.get('location')?.toString() ?? '').trim();
		const transport = (data.get('transport')?.toString() ?? '').trim();
		const category = (data.get('category')?.toString() ?? '').trim();
		const description = (data.get('description')?.toString() ?? '').trim();

		const errors: Record<string, string> = {};
		if (!name) errors.name = 'Zadajte prosím meno a priezvisko.';
		if (!phone) errors.phone = 'Zadajte prosím telefónne číslo.';
		if (!email) errors.email = 'Zadajte prosím e-mailovú adresu.';
		else if (!EMAIL_RE.test(email)) errors.email = 'E-mailová adresa nie je platná.';
		if (!location) errors.location = 'Zadajte prosím lokalitu stavby.';
		if (!transport) errors.transport = 'Vyberte prosím možnosť dopravy.';
		if (!category) errors.category = 'Vyberte prosím kategóriu materiálu.';
		if (!description) errors.description = 'Opíšte prosím Vašu objednávku.';

		const values = { name, phone, email, location, transport, category, description };

		if (Object.keys(errors).length > 0) {
			return fail(400, { values, errors });
		}

		// TODO: deliver this submission to the company inbox.
		// Right now we only log on the server — no e-mail is sent.
		// Pick one of:
		//   - Resend / Mailgun / SendGrid (REST API, add API key to env)
		//   - Cloudflare Email Routing + Worker
		//   - Formspree / Web3Forms (point fetch() at their endpoint)
		// and call it from here before returning success.
		console.log('[order] new submission', values);

		return { success: true };
	}
};
