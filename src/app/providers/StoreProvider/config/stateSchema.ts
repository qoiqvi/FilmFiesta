import type { ReducersMapObject, AnyAction, Reducer, CombinedState, EnhancedStore } from "@reduxjs/toolkit"
import type { AxiosInstance } from "axios"
import type { MoviesByGenreSchema } from "features/MoviesByGenre"
import type { MovieSearchSchema } from "features/MovieSearch"
import { rtkApi } from "shared/api/rtkApi"
import type { CounterStateSchema } from "shared/ui/Counter/CounterSlice"

export interface StateSchema {
	counter: CounterStateSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	getMovieByGenere?: MoviesByGenreSchema
	movieSearch?: MovieSearchSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface reducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
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
