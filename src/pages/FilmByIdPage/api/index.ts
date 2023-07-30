import { Data, Movie } from "entities/Movie/model/types/Movie"
import { rtkApi } from "shared/api/rtkApi"

const FilmByIdApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		filmById: build.query<Movie, string | undefined>({
			query: (id) => ({
				url: `v1.3/movie/${id}`,
			}),
		}),
	}),
})

export const { useFilmByIdQuery } = FilmByIdApi
