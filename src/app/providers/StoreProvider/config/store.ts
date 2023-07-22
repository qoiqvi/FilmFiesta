import { configureStore, CombinedState, ReducersMapObject, Reducer, getDefaultMiddleware } from "@reduxjs/toolkit"
import { StateSchema } from "./stateSchema"
import { createReducerManager } from "./reducerManager"
import { CounterSliceReducer } from "shared/ui/Counter/CounterSlice"
import { Api } from "shared/api/api"

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: CounterSliceReducer,
	}
	const reducerManager = createReducerManager(rootReducers)

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: _IS_DEV_,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: Api,
					},
				},
			}),
	})
	//@ts-ignore
	store.reducerManager = reducerManager
	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
