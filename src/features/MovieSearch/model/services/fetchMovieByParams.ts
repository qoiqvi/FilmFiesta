import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Movie } from "entities/Movie"
import { QueryParams } from "../types/MovieSearchSchema"
import { Data } from "entities/Movie/model/types/Movie"

export const fetchMoviesByParams = createAsyncThunk<Data<Movie>, QueryParams, ThunkConfig<string>>(
	"movieSearch/fetchMoviesByParams",
	async (params, { extra, rejectWithValue }) => {
		try {
			const queryString: string[] = []
			Object.entries(params).map(([query, value], index) => {
				if (value !== undefined && value !== "") {
					if (index === 0) {
						queryString.push(`?${query}=${value}`)
					} else {
						queryString.push(`&${query}=${value}`)
					}
				}
			})
			const response = await extra.api(`v1.3/movie${queryString.join("")}`)
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
