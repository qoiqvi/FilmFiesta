import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"
import { fetchMoviesByParams } from "../services/fetchMovieByParams"
import { Movie } from "entities/Movie"
import { StateSchema } from "app/providers/StoreProvider"
import { MovieFilterSchema } from "../types/MovieFilterSchema"

const moviesAdapter = createEntityAdapter<Movie>({
	selectId: (movie) => movie.id,
})

export const getMovies = moviesAdapter.getSelectors<StateSchema>(
	(state) => state.movieSearch || moviesAdapter.getInitialState()
)

export const MovieFilterSlice = createSlice({
	name: "MovieFilterSlice",
	initialState: moviesAdapter.getInitialState<MovieFilterSchema>({
		hasMore: true,
		isLoading: false,
		page: 1,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesByParams.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchMoviesByParams.fulfilled, (state, action) => {
				state.isLoading = false
				if (action.meta.arg.replace === false) {
					moviesAdapter.addMany(state, action.payload.docs)
				} else {
					moviesAdapter.setAll(state, action.payload.docs)
				}
				state.hasMore = action.payload.page < action.payload.pages
				state.page = action.payload.page
			})
			.addCase(fetchMoviesByParams.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: MovieFilterSliceActions } = MovieFilterSlice
export const { reducer: MovieFilterSliceReducer } = MovieFilterSlice
