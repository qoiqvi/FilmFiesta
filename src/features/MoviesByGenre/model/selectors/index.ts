import { StateSchema } from "app/providers/StoreProvider"

export const getMoviesByGenreIsLoading = (state: StateSchema) =>
	state.MovieByGenere?.isLoading

export const getMoviesByGenreError = (state: StateSchema) =>
	state.MovieByGenere?.error

export const getMoviesByGenreHasMore = (state: StateSchema) =>
	state.MovieByGenere?.hasMore

export const getMoviesByGenrePage = (state: StateSchema) =>
	state.MovieByGenere?.page
