export type MovieGenres =
	| "комедия"
	| "триллер"
	| "мюзикл"
	| "биография"
	| "документальный"
	| "мелодрама"
	| "ужасы"
	| "боевик"
	| "фэнтази"

export type SortBy = "year" | "rating.kp" | "votes.kp"
export type SortDirection = "1" | "-1"
export type type = "movie" | "tv-series " | "cartoon" | "anime" | "animated-series " | "tv-show"

export interface queryParams {
	sortBy?: SortBy
	sortDirection?: SortDirection
	genres?: MovieGenres | MovieGenres[]
	type?: type
	page?: number
	limit?: number
	countries?: string | string[]
	ageRating?: string
	movieLength?: number
	kpRating?: number
	year?: number
	top250?: "!null"
}

export interface MovieSearchSchema {
	queryParams: queryParams
	isLoading: boolean
	error?: string
}