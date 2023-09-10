import type {
	ReducersMapObject,
	AnyAction,
	Reducer,
	CombinedState,
	EnhancedStore,
} from "@reduxjs/toolkit"
import type { AxiosInstance } from "axios"
import { MovieFilterSchema } from "features/MovieFilter"
import type { MoviesByGenreSchema } from "features/MoviesByGenre"
import { rtkApi } from "shared/api/rtkApi"
import { SaveScrollSchema } from "widgets/Page"

export interface StateSchema {
	saveScroll: SaveScrollSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	MovieByGenere?: MoviesByGenreSchema
	movieSearch?: MovieFilterSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface reducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (
		state: StateSchema,
		action: AnyAction,
	) => CombinedState<StateSchema>
	add: (state: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
	getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: reducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
