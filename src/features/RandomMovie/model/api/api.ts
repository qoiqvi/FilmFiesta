import { Movie } from "entities/Movie"
import { rtkApi } from "shared/api/rtkApi"

const RandomMovieApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		RandomMovie: build.query<Movie, void>({
			query: () => ({
				url: "/v1.3/movie/random",
			}),
		}),
	}),
})

export const { useRandomMovieQuery } = RandomMovieApi
