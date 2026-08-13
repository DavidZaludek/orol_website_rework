import type { Attachment } from 'svelte/attachments';

/**
 * Scroll-reveal attachment. Usage: `<div data-reveal {@attach reveal(120)}>`.
 * The `data-reveal` attribute must be set in markup so prerendered HTML and
 * the CSS hiding rule (guarded by `@media (scripting: enabled)`) agree; the
 * attachment only flips `is-revealed` once the element enters the viewport.
 */
export function reveal(delayMs = 0): Attachment<HTMLElement> {
	return (el) => {
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
