export function extractContent(html: string) {
	return new DOMParser().parseFromString(html, "text/html").documentElement.textContent
}
