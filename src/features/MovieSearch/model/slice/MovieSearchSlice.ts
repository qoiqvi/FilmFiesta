import { type PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit"
import { MovieSearchSchema } from "../types/MovieSearchSchema"
import { fetchMoviesByParams } from "../services/fetchMovieByParams"
import { Movie } from "entities/Movie"
import { Data } from "entities/Movie/model/types/Movie"

const initialState: MovieSearchSchema = {
	movies: undefined,
	isLoading: false,
	error: undefined,
	hasMore: true,
}

export const MovieSearchSlice = createSlice({
	name: "MovieSearchSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesByParams.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchMoviesByParams.fulfilled, (state, action) => {
				state.isLoading = false
				state.movies = action.payload
				state.hasMore = action.payload.page < action.payload.pages
			})
			.addCase(fetchMoviesByParams.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: MovieSearchSliceActions } = MovieSearchSlice
export const { reducer: MovieSearchSliceReducer } = MovieSearchSlice
