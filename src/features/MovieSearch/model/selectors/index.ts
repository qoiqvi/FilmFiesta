import { StateSchema } from "app/providers/StoreProvider"
import { queryParams } from "../types/MovieSearchSchema"

const initialState: queryParams = {
	sortBy: "rating.kp",
	sortDirection: "-1",
	page: 1,
	limit: 10,
	genres: undefined,
	countries: undefined,
	ageRating: undefined,
	movieLength: undefined,
	kpRating: undefined,
	year: undefined,
}
// sortBy?: "year" | "rating.kp" | "votes.kp"
// sortDirection?: "1" | "-1"
// genre?: MovieGenres
// page?: number
// limit?: number
// country?: string
// ageRating?: string
// movieLength?: number
// kpRating?: number
// year?: number

export const getMovieSearchQueryParams = (state: StateSchema) => state.movieSearch?.queryParams || initialState

export const getMovieSearchIsLoading = (state: StateSchema) => state.movieSearch?.isLoading

export const getMovieSearchError = (state: StateSchema) => state.movieSearch?.error
