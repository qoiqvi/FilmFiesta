import { Movie } from "entities/Movie"
import { Data } from "entities/Movie/model/types/Movie"
import { rtkApi } from "shared/api/rtkApi"

const MovieByParamsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		MovieByParams: build.query<Data<Movie>[], string>({
			query: (params) => ({
				url: `v1.3/movie${params}`,
			}),
		}),
	}),
})

export const { useMovieByParamsQuery } = MovieByParamsApi
