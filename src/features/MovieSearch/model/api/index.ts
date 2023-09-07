import { Data, Movie } from "entities/Movie"
import { rtkApi } from "shared/api/rtkApi"

interface MoviesSearchApiProps {
	limit?: number
	query: string
}

const MoviesSearchApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		MovieSearch: build.query<Data<Movie>, MoviesSearchApiProps>({
			query: ({ limit = 10, query = "человек паук" }) => {
				return {
					url: "/v1.2/movie/search",
					params: {
						limit: limit,
						query: query,
						page: 1,
					},
				}
			},
		}),
	}),
})

export const { useMovieSearchQuery, useLazyMovieSearchQuery } = MoviesSearchApi
