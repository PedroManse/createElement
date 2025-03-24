export function $(q: string, doc: Document = document): HTMLElement {
	const f = doc.querySelector(q);
	if (f) {
		return f as HTMLElement;
	}
	throw new Error();
}
export const $$ = (qs: string, doc: Document = document) => Array.from(doc.querySelectorAll(qs))


