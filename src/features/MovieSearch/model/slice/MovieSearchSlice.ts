import { type PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit"
import { MovieSearchSchema } from "../types/MovieSearchSchema"

const initialState: MovieSearchSchema = {
	queryParams: {
		sortField: "rating.kp",
		sortType: "-1",
		page: 1,
		limit: 10,
		countries: undefined,
		ageRating: undefined,
		movieLength: undefined,
		rating: undefined,
		year: undefined,
	},
	isLoading: false,
	error: undefined,
}

export const MovieSearchSlice = createSlice({
	name: "MovieSearchSlice",
	initialState,
	reducers: {
		changeField: (state, action: PayloadAction<any>) => {
			state.queryParams = {
				...state.queryParams,
				...action.payload,
			}
		},
	},
})

export const { actions: MovieSearchSliceActions } = MovieSearchSlice
export const { reducer: MovieSearchSliceReducer } = MovieSearchSlice
