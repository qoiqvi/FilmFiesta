import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Movie } from "entities/Movie"
import { QueryParams } from "../types/MovieSearchSchema"
import { Data } from "entities/Movie/model/types/Movie"

export const fetchMoviesByParams = createAsyncThunk<Data<Movie>, QueryParams, ThunkConfig<string>>(
	"movieSearch/fetchMoviesByParams",
	async (params, { extra, rejectWithValue }) => {
		try {
			const Sparams: string[] = []
			Object.entries(params).map(([query, value], index) => {
				if (value !== undefined && value !== "") {
					if (index === 0) {
						Sparams.push(`?${query}=${value}`)
					} else {
						Sparams.push(`&${query}=${value}`)
					}
				}
			})
			console.log(Sparams)
			const response = await extra.api(`v1.3/movie${Sparams.join("")}`)
			if (!response.data) {
				throw new Error()
			}
			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	}
)
