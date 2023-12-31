import { StateSchema } from "app/providers/StoreProvider"

export const getMoviesDataByParamsIsLoading = (state: StateSchema) =>
	state.movieSearch?.isLoading

export const getMoviesDataByParamsError = (state: StateSchema) =>
	state.movieSearch?.error

export const getMoviesDataByParamsHasMore = (state: StateSchema) =>
	state.movieSearch?.hasMore

export const getMoviesDataByParamsPage = (state: StateSchema) =>
	state.movieSearch?.page
