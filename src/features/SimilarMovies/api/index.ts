import { Data } from "entities/Movie/model/types/Movie"
import { rtkApi } from "shared/api/rtkApi"
import { SimilarMovies } from "../model/types"

const SimilarMoviesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		similarMovies: build.query<Data<SimilarMovies>, number | undefined>({
			query: (id) => ({
				url: `movie?selectFields=similarMovies.id&id=${id}`,
			}),
		}),
	}),
})

export const { useSimilarMoviesQuery } = SimilarMoviesApi
