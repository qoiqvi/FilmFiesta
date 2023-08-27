import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Data, Movie } from "entities/Movie"

export const fetchMoviesByGenre = createAsyncThunk<Data<Movie[]>, string | string[], ThunkConfig<string>>(
	"moviesByGenre/fetchMoviesByGenre",
	async (genre, { extra, rejectWithValue }) => {
		try {
			const response = await extra.api(`/movie?limit=5&page=1&genres.name=${genre}`)
			console.log(response)
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
