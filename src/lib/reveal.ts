import type { Attachment } from 'svelte/attachments';

/**
 * Scroll-reveal attachment. Usage: `<div data-reveal {@attach reveal(120)}>`.
 * The `data-reveal` attribute must be set in markup so prerendered HTML and
 * the CSS hiding rule agree. That rule only applies while `<html>` carries
 * `data-reveal-ready` (set by the inline script in app.html), so a blocked or
 * broken bundle can never leave the page stuck invisible — see app.html.
 */
export function reveal(delayMs = 0): Attachment<HTMLElement> {
	return (el) => {
		// The bundle booted: cancel the failsafe that would unhide everything.
		const w = window as unknown as { __orolRevealFallback?: ReturnType<typeof setTimeout> };
		if (w.__orolRevealFallback !== undefined) {
			clearTimeout(w.__orolRevealFallback);
			w.__orolRevealFallback = undefined;
		}

		if (delayMs) el.style.setProperty('--reveal-delay', `${delayMs}ms`);

		if (
			typeof IntersectionObserver === 'undefined' ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			el.classList.add('is-revealed');
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						el.classList.add('is-revealed');
						io.disconnect();
					}
				}
			},
			{ rootMargin: '0px 0px -60px 0px' }
		);
		io.observe(el);
		return () => io.disconnect();
	};
}
