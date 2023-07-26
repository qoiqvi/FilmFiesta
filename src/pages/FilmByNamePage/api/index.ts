import { Data, Movie } from "entities/Movie/model/types/Movie"
import { rtkApi } from "shared/api/rtkApi"

const FilmByIdApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		filmById: build.query<Data<Movie>, string | undefined>({
			query: (id) => ({
				url: `movie/${id}`,
			}),
		}),
	}),
})

export const { useFilmByIdQuery } = FilmByIdApi
