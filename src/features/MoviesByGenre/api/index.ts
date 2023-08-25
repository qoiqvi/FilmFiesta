import { rtkApi } from "shared/api/rtkApi"

interface MoviesByGenreApiProps {
	limit: number
	genre: string | undefined
}

const MoviesByGenreApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchMoviesByGenre: build.query({
			query: ({ limit, genre }: MoviesByGenreApiProps) => ({
				url: `/v1.3/movie?limit=${limit}&page=1&genres.name=${genre}`,
			}),
		}),
	}),
})

export const { useFetchMoviesByGenreQuery } = MoviesByGenreApi
