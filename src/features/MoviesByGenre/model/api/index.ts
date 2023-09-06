import { Data, Movie } from "entities/Movie"
import { MovieType } from "features/MovieFilter"
import { rtkApi } from "shared/api/rtkApi"

interface MoviesByGenreApiProps {
	limit: number
	genre: string | undefined
	type?: MovieType
}

const MoviesByGenreApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		MoviesByGenre: build.query<Data<Movie>, MoviesByGenreApiProps>({
			query: ({ limit, genre, type = "movie" }) => ({
				url: "/v1.3/movie",
				params: {
					limit: limit,
					page: 1,
					type: type,
					"genres.name": genre,
				},
			}),
		}),
	}),
})

export const { useMoviesByGenreQuery } = MoviesByGenreApi
