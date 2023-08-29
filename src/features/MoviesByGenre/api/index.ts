import { Data, Movie } from "entities/Movie"
import { rtkApi } from "shared/api/rtkApi"

interface MoviesByGenreApiProps {
	limit: number
	genre: string | undefined
}

const MoviesByGenreApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchMoviesByGenre: build.query<Data<Movie>, MoviesByGenreApiProps>({
			query: ({ limit, genre }) => ({
				url: `/v1.3/movie?limit=${limit}&page=1&genres.name=${genre}`,
			}),
		}),
	}),
})

export const { useFetchMoviesByGenreQuery } = MoviesByGenreApi
