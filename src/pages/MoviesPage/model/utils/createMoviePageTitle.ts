import { MovieType } from "features/MovieFilter"

export function createMoviePageTitle(
	searchParams: URLSearchParams,
	type: MovieType | undefined,
) {
	console.log(type)
	const typeOfTitle =
		type === "cartoon"
			? "Мультфильмы"
			: type === "tv-series"
			? "Сериалы"
			: "Фильмы"
	console.log(typeOfTitle)
	const genresName = searchParams.get("genres.name")
	const year = searchParams.get("year")

	if (genresName && year) {
		return `${typeOfTitle}: ${genresName}, ${year}`
	} else if (genresName) {
		return `${typeOfTitle}: ${genresName}`
	} else if (year) {
		return `${typeOfTitle}: ${year}`
	} else {
		return typeOfTitle
	}
}
