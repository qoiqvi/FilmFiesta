import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Movie } from "entities/Movie"
import { Data } from "entities/Movie/model/types/Movie"
import { type } from "features/MovieSearch/model/types/MovieSearchSchema"

interface fetchMoviesByGenreProps {
	genre: string
	type: type
	limit: number
	page?: number
	replace?: boolean
}

export const fetchMoviesByGenre = createAsyncThunk<Data<Movie>, fetchMoviesByGenreProps, ThunkConfig<string>>(
	"movieByGenre/fetchMoviesByGenre",
	async ({ limit, page, genre, type, replace = true }, { extra, rejectWithValue }) => {
		console.log("fetchMoviesByGenre", { limit, page, genre, type, replace })
		try {
			const response = await extra.api<Data<Movie>>("v1.3/movie", {
				params: {
					page: page,
					limit: limit,
					type: type,
					"genres.name": genre,
				},
			})

			if (!response.data) {
				throw new Error()
			}
			console.log(response)
			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
