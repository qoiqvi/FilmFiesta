import { MovieGenres } from "features/MovieSearch/model/types/MovieSearchSchema"
import { rtkApi } from "shared/api/rtkApi"

interface MoviesByGenreApiProps {
	limit: number
	genre: MovieGenres
}

const MoviesByGenreApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchMoviesByGenre: build.query({
			query: ({ limit, genre }: MoviesByGenreApiProps) => ({
				url: `/movie?limit=${limit}&page=1&genres.name=${genre}`,
			}),
		}),
	}),
})

export const { useFetchMoviesByGenreQuery } = MoviesByGenreApi
