import { Data, Movie } from "entities/Movie"
import { type } from "features/MovieSearch/model/types/MovieSearchSchema"
import { rtkApi } from "shared/api/rtkApi"

interface MoviesByGenreApiProps {
	limit: number
	genre: string | undefined
	type?: type
}

const MoviesByGenreApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchMoviesByGenre: build.query<Data<Movie>, MoviesByGenreApiProps>({
			query: ({ limit, genre, type = "movie" }) => ({
				url: `/v1.3/movie?limit=${limit}&page=1&type=${type}&genres.name=${genre}`,
			}),
		}),
	}),
})

export const { useFetchMoviesByGenreQuery } = MoviesByGenreApi
