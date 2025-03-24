export function reactEl(
	name: string,
	attrs: { [key: string]: any } | null = null,
	...elements: (HTMLElement[] | { toString: () => string }[])
): HTMLElement {
	const el = document.createElement(name);
	for (const prop in attrs) {
		const attr = attrs[prop];
		if (prop === "style") {
			for (const stl in attr) {
				el.style.setProperty(stl, attr[stl]);
			}
		} else {
			el.setAttribute(prop, attr);
		}
	}
	for (const child of elements) {
		if (child instanceof HTMLElement) {
			el.appendChild(child);
		} else {
			el.innerHTML += child.toString();
		}
	}
	return el;
}

