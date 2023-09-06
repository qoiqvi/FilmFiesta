import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { MoviesByGenreSchema } from "../types/moviesByGenreSchema"
import { Movie } from "entities/Movie"
import { StateSchema } from "app/providers/StoreProvider"
import { fetchMoviesByGenre } from "../services/fetchMoviesByGenre"

const moviesByGenreAdapter = createEntityAdapter<Movie>({
	selectId: (movie) => movie.id,
})

export const getMoviesByGenre = moviesByGenreAdapter.getSelectors<StateSchema>(
	(state) => state.MovieByGenere || moviesByGenreAdapter.getInitialState()
)

export const MoviesByGenreSlice = createSlice({
	name: "MoviesByGenreSlice",
	initialState: moviesByGenreAdapter.getInitialState<MoviesByGenreSchema>({
		isLoading: false,
		page: 1,
		error: undefined,
		entities: {},
		ids: [],
		hasMore: true,
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesByGenre.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
				state.isLoading = false
				if (action.meta.arg.replace) {
					moviesByGenreAdapter.setAll(state, action.payload.docs)
				} else {
					moviesByGenreAdapter.addMany(state, action.payload.docs)
				}
				state.hasMore = action.payload.page < action.payload.pages
				state.page = action.payload.page
			})
			.addCase(fetchMoviesByGenre.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: MoviesByGenreActions } = MoviesByGenreSlice
export const { reducer: MoviesByGenreReducer } = MoviesByGenreSlice
