export default function El(
	name: string,
	elements: HTMLElement | HTMLElement[] | string = [],
	attributes: { [key: string]: any } | null = null,
) {
	const el = document.createElement(name);
	for (const prop in attributes) {
		const attr = attributes[prop];
		if (prop === "style") {
			for (const stl in attr) {
				el.style.setProperty(stl, attr[stl]);
			}
		} else {
			el.setAttribute(prop, attr);
		}
	}
	// array of elements
	if (Array.isArray(elements)) {
		el.append(...elements);
		// raw HTML
	} else if (typeof elements === "string") {
		el.innerHTML = elements;
		// single element
	} else if (elements instanceof HTMLElement) {
		el.append(elements);
	}
	return el;
}


