import { MovieType } from "features/MovieFilter"

export function createMoviePageTitle(searchParams: URLSearchParams, type: MovieType | undefined) {
	let typeOfTitle = ""
	switch (type) {
		case "movie":
			typeOfTitle = "Фильмы"
			break
		case "cartoon":
			typeOfTitle = "Мультфильмы"
			break
		case "tv-series":
			typeOfTitle = "Сериалы"
			break
		default:
			typeOfTitle = "Фильмы"
			break
	}
	let string = []
	if (searchParams.get("genres.name")) {
		string.push(searchParams.get("genres.name"))
	}
	if (searchParams.get("year")) {
		string.push(searchParams.get("year"))
	}
	if (string.length) {
		return `${typeOfTitle}: ${string.join(", ")}`
	}
	return typeOfTitle
}
