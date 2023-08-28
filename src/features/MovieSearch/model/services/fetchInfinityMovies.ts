import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Movie } from "entities/Movie"
import { QueryParams } from "../types/MovieSearchSchema"
import { Data } from "entities/Movie/model/types/Movie"

interface fetchInfinityMoviesProps {
	params: QueryParams
	limit: number
	page: number
}

export const fetchInfinityMovies = createAsyncThunk<Data<Movie>, fetchInfinityMoviesProps, ThunkConfig<string>>(
	"movieSearch/fetchInfinityMovies",
	async ({ params, limit, page }, { extra, rejectWithValue }) => {
		console.log("FETCHING")
		try {
			const queryString: string[] = []

			Object.entries(params).map(([query, value], index) => {
				if (value !== undefined && value !== "") {
					if (index === 0) {
						queryString.push(`?${query}=${value}`, `&limit=${limit}`, `&page=${page}`)
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
