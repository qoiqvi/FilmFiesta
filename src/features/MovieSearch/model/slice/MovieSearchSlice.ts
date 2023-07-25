import { type PayloadAction, createSlice, AnyAction } from "@reduxjs/toolkit"
import { MovieSearchSchema } from "../types/MovieSearchSchema"

const initialState: MovieSearchSchema = {
    queryParams: {
        sortBy: "rating.kp",
	sortDirection: "-1",
	page: 1,
	limit: 10,
	countries: undefined,
	ageRating: undefined,
	movieLength: undefined,
	kpRating: undefined,
	year: undefined,
    },
    isLoading: false,
	error: undefined
}

export const MovieSearchSlice = createSlice({
    name: "MovieSearchSlice",
    initialState,
    reducers: {
        changeField: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
           state.queryParams = {
            ...state.queryParams,
            ...action.payload
           }
        }
    },
})

export const { actions: MovieSearchSliceActions } = MovieSearchSlice
export const { reducer: MovieSearchSliceReducer } = MovieSearchSlice
