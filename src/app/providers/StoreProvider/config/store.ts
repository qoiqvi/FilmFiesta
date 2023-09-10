import {
	configureStore,
	CombinedState,
	ReducersMapObject,
	Reducer,
	getDefaultMiddleware,
} from "@reduxjs/toolkit"
import { StateSchema } from "./stateSchema"
import { createReducerManager } from "./reducerManager"
import { Api } from "shared/api/api"
import { rtkApi } from "shared/api/rtkApi"
import { SaveScrollSliceReducer } from "widgets/Page"

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		saveScroll: SaveScrollSliceReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
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
			}).concat(rtkApi.middleware),
	})
	//@ts-ignore
	store.reducerManager = reducerManager
	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
