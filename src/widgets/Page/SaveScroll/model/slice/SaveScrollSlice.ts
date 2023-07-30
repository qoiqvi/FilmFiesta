import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SaveScrollSchema } from "../types/saveScrollSchema"

const initialState: SaveScrollSchema = {
	scroll: {},
}

export const SaveScrollSlice = createSlice({
	name: "SaveScrollSlice",
	initialState,
	reducers: {
		setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
			state.scroll[payload.path] = payload.position
		},
	},
})

export const { actions: SaveScrollSliceActions } = SaveScrollSlice
export const { reducer: SaveScrollSliceReducer } = SaveScrollSlice
