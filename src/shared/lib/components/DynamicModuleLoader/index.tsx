import { Reducer } from "@reduxjs/toolkit"
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/stateSchema"
import { ReactNode, useEffect } from "react"
import { useStore } from "react-redux"
import { useAppDispatch } from "../../../hooks/useAppDispatch"

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

export interface DynamicModuleLoaderProps {
	children: ReactNode
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const { children, reducers, removeAfterUnmount = true } = props
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useAppDispatch()
	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers()
		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey]
			if (!mounted) {
				//@ts-ignore
				store.reducerManager.add(name as StateSchemaKey, reducer)
				dispatch({ type: `@INIT ${name} reducer` })
			}
		})
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({ type: `@DESTROY ${name as StateSchemaKey} reducer` })
				})
			}
		}
		// eslint-disable-next-line
	}, [])
	return <>{children}</>
}
