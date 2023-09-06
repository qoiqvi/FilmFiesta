import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { QueryParams } from "../types/MovieFilterSchema"
import { getMoviesDataByParamsHasMore, getMoviesDataByParamsIsLoading, getMoviesDataByParamsPage } from "../selectors"
import { fetchMoviesByParams } from "./fetchMovieByParams"

interface fetchNextMovies {
	params: QueryParams
	limit: number
	page?: number
}

export const fetchNextMovies = createAsyncThunk<void, fetchNextMovies, ThunkConfig<string>>(
	"movieFilter/fetchNextMovies",
	async ({ params, limit }, { dispatch, rejectWithValue, getState }) => {
		console.log("NEXT MOVIES")
		try {
			const page = getMoviesDataByParamsPage(getState())
			const isLoading = getMoviesDataByParamsIsLoading(getState())
			const hasMore = getMoviesDataByParamsHasMore(getState())

			if (hasMore && !isLoading && page) {
				dispatch(fetchMoviesByParams({ params, limit, page: page + 1, replace: false }))
				console.log("dispatch(fetchMoviesByParams({ params, limit, page: page + 1 }))")
			}
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
