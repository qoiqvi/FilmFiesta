import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { MoviesByGenreSchema } from "../types/moviesByGenreSchema"
import { Data, Movie } from "entities/Movie"
import { StateSchema } from "app/providers/StoreProvider"
import { fetchMoviesByGenre } from "../services/fetchMoviesByGenre"
import { MovieSearchSchema } from "features/MovieSearch"

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
				console.log("isLoading")
			})
			.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
				state.isLoading = false
				console.log(action.payload.docs)
				if (action.meta.arg.replace) {
					moviesByGenreAdapter.setAll(state, action.payload.docs)
				} else {
					moviesByGenreAdapter.addMany(state, action.payload.docs)
				}
				state.hasMore = action.payload.page < action.payload.pages
				state.page = action.payload.page
				console.log(action.payload)
			})
			.addCase(fetchMoviesByGenre.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
				console.log(action.error)
			})
	},
})

export const { actions: MoviesByGenreActions } = MoviesByGenreSlice
export const { reducer: MoviesByGenreReducer } = MoviesByGenreSlice
