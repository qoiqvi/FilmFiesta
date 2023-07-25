import { useEffect } from "react"

export function useInitialEffect(callback: () => void) {
	useEffect(() => {
		// if (_PROJECT_ !== "storybook") {
		callback()
		// }
		// eslint-disable-next-line
	}, [])
}
