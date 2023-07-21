import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: CounterStateSchema = {
    value: 0
}

export interface CounterStateSchema {
    value: number
}

export const CountertSlice = createSlice({
	name: "CountertSlice",
	initialState,
	reducers: {
		increse: (state, action) => {
            state.value++
        }
	},
})

export const { actions: CounterSliceActions } = CountertSlice
export const { reducer:CounterSliceReducer } = CountertSlice
