import { EntityState } from "@reduxjs/toolkit"
import { Movie } from "entities/Movie"
import { Data } from "entities/Movie/model/types/Movie"

export type SortBy = "year" | "rating.imdb" | "votes.kp"
export type SortDirection = "1" | "-1"
export type type = "movie" | "tv-series " | "cartoon" | "anime" | "animated-series " | "tv-show"

export interface QueryParams {
	sortField?: SortBy
	sortType?: SortDirection
	"genres.name"?: string
	type?: type
	page?: number
	limit?: number
	"countries.name"?: string
	ageRating?: string
	movieLength?: number
	"rating.imdb"?: string
	year?: string
	top250?: "!null"
}

// export interface MovieSearchSchema {
// 	movies: Movie[] | undefined
// 	// movies: Data<Movie>
// 	isLoading: boolean
// 	error?: string
// 	hasMore: boolean
// 	page: number
// }

export interface MovieSearchSchema extends EntityState<Movie> {
	isLoading: boolean
	error?: string
	hasMore: boolean
	page: number
}
