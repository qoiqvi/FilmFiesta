import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { MovieType, QueryParams } from "../types/MovieFilterSchema"
import { getMoviesDataByParamsHasMore, getMoviesDataByParamsIsLoading, getMoviesDataByParamsPage } from "../selectors"
import { fetchMoviesByParams } from "./fetchMovieByParams"

interface fetchNextMovies {
	params: QueryParams
	limit: number
	page?: number
	type?: MovieType
}

export const fetchNextMovies = createAsyncThunk<void, fetchNextMovies, ThunkConfig<string>>(
	"movieFilter/fetchNextMovies",
	async ({ params, limit, type }, { dispatch, rejectWithValue, getState }) => {
		try {
			const page = getMoviesDataByParamsPage(getState())
			const isLoading = getMoviesDataByParamsIsLoading(getState())
			const hasMore = getMoviesDataByParamsHasMore(getState())

			if (hasMore && !isLoading && page) {
				dispatch(fetchMoviesByParams({ params, limit, page: page + 1, replace: false, type: type }))
			}
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
