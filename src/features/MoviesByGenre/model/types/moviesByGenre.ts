import { Movie } from "entities/Movie"
import { Data } from "entities/Movie/model/types/Movie"

export interface MoviesByGenreSchema {
	movies: Data<Movie[]> | null
	isLoading: boolean
	error: string | undefined
	hasMore: boolean
}
