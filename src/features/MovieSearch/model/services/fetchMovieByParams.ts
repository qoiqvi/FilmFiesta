import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Movie } from "entities/Movie"
import { getMovieSearchQueryParams } from "../selectors"
import { queryParams } from "../types/MovieSearchSchema"

export const fetchMoviesByParams = createAsyncThunk<Movie[], void, ThunkConfig<string>>(
	"movieSearch/fetchMoviesByParams",
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			const queryParams: queryParams = getMovieSearchQueryParams(getState())
			const params: string[] = []
			Object.entries(queryParams).map(([query, value], index) => {
				if (value !== undefined) {
					if (index === 0) {
						params.push(`?${query}=${value}`)
					} else {
						params.push(`&${query}=${value}`)
					}
				}
			})
			params.join("")
			const response = await extra.api(`/movie${params.join("")}`)
			if (!response.data) {
				throw new Error()
			}
			return response.data.docs
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)

// export function addQueryParams(params: OptionalRecord<string, string>) {
// 	const searchParams = new URLSearchParams(window.location.search)
// 	Object.entries(params).forEach(([name, value]) => {
// 		if (value !== undefined) {
// 			searchParams.set(name, value)
// 		}
// 	})
// 	return `?${searchParams.toString()}`
// }

// export function getQueryParams(params: OptionalRecord<string, string>) {
// 	window.history.pushState(null, "", addQueryParams(params))
// }
