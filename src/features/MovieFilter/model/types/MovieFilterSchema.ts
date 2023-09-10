import { EntityState } from "@reduxjs/toolkit"
import { Movie } from "entities/Movie"

export type SortBy = "year" | "rating.imdb" | "votes.kp"
export type SortDirection = "1" | "-1"
export type MovieType =
	| "movie"
	| "tv-series"
	| "cartoon"
	| "anime"
	| "animated-series"
	| "tv-show"

export interface QueryParams {
	sortField?: SortBy
	sortType?: SortDirection
	"genres.name"?: string
	type?: MovieType
	page?: number
	limit?: number
	"countries.name"?: string
	"rating.imdb"?: string
	year?: string
	top250?: "!null"
}

export interface MovieFilterSchema extends EntityState<Movie> {
	isLoading: boolean
	error?: string
	hasMore: boolean
	page: number
}
