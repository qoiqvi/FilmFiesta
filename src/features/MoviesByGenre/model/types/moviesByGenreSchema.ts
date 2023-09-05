import { EntityState } from "@reduxjs/toolkit"
import { Movie } from "entities/Movie"

export interface MoviesByGenreSchema extends EntityState<Movie> {
	isLoading: boolean
	error: string | undefined
	hasMore: boolean
	page: number
}
