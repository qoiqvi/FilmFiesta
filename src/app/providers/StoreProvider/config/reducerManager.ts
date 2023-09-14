import {
	AnyAction,
	Reducer,
	ReducersMapObject,
	combineReducers,
} from "@reduxjs/toolkit"
import {
	MountedReducers,
	StateSchema,
	StateSchemaKey,
	reducerManager,
} from "./stateSchema"

export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>,
): reducerManager {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)
	const mountedReducers: MountedReducers = {}
	let keysToRemove: StateSchemaKey[] = []

	return {
		getReducerMap: () => reducers,
		getMountedReducers: () => mountedReducers,
		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }
				for (const key of keysToRemove) {
					delete state[key]
				}
				keysToRemove = []
			}
			return combinedReducer(state, action)
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}
			reducers[key] = reducer
			combinedReducer = combineReducers(reducers)
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return
			}
			delete reducers[key]
			keysToRemove.push(key)
			combinedReducer = combineReducers(reducers)
		},
	}
}
