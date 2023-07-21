import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MoviesByGenreSchema } from "../types/moviesByGenre"
import { fetchMoviesByGenre } from "../services/fetchMoviesByGenre"
import { Movie } from "entities/Movie"

const initialState: MoviesByGenreSchema = {
	movies: [],
	isLoading: false,
	error: undefined,
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
			.addCase(fetchMoviesByGenre.fulfilled, (state, action: PayloadAction<Movie[]>) => {
				state.isLoading = false
				console.log(action.payload)
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
