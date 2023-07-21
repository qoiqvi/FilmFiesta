import { StateSchema } from "app/providers/StoreProvider/config/stateSchema"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { CounterSliceActions } from "./CounterSlice"

export const Counter = () => {
	const value = useSelector((state: StateSchema) => state.counter.value)
	const dispatch = useAppDispatch()

	return (
		<div>
			{value}
			<button onClick={() => dispatch(CounterSliceActions.increse(1))}>123123</button>
		</div>
	)
}
