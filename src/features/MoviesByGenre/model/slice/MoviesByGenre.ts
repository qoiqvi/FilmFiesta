import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MoviesByGenreSchema } from "../types/moviesByGenre"
import { fetchMoviesByGenre } from "../services/fetchMoviesByGenre"
import { Data, Movie } from "entities/Movie"

const initialState: MoviesByGenreSchema = {
	movies: null,
	isLoading: false,
	error: undefined,
	hasMore: true,
}

export const MoviesByGenreSlice = createSlice({
	name: "MoviesByGenreSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesByGenre.pending, (state) => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchMoviesByGenre.fulfilled, (state, action: PayloadAction<Data<Movie[]>>) => {
				state.isLoading = false
				state.movies = action.payload
			})
			.addCase(fetchMoviesByGenre.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: MoviesByGenreActions } = MoviesByGenreSlice
export const { reducer: MoviesByGenreReducer } = MoviesByGenreSlice
