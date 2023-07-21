import type { ReactNode } from "react"
import { Provider } from "react-redux"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/stateSchema"
import { createReduxStore } from "../config/store"

export interface StoreProviderProps {
	children: ReactNode
	initialState?: DeepPartial<StateSchema>
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
	const store = createReduxStore(
		initialState as StateSchema, //
		asyncReducers as ReducersMapObject<StateSchema>
	)
	return <Provider store={store}>{children}</Provider>
}
