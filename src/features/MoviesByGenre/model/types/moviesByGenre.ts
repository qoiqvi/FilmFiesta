import { Movie } from "entities/Movie"

export interface MoviesByGenreSchema {
	movies: Movie[]
	isLoading: boolean
	error: string | undefined
}
