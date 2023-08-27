import { StateSchema } from "app/providers/StoreProvider"

export const getMoviesDataByParams = (state: StateSchema) => state.movieSearch?.movies || undefined

export const getMoviesDataByParamsIsLoading = (state: StateSchema) => state.movieSearch?.isLoading

export const getMoviesDataByParamsError = (state: StateSchema) => state.movieSearch?.error

export const getMoviesDataByParamsHasMore = (state: StateSchema) => state.movieSearch?.hasMore
