import { useCallback, useRef } from "react"

export function useThrottle(callback: (...args: any[]) => void, timeout: number) {
	const throttleRef = useRef(true)
	return useCallback(
		(...args: any[]) => {
			if (throttleRef.current) {
				callback(...args)
				throttleRef.current = false
				setTimeout(() => {
					throttleRef.current = true
				}, timeout)
			}
		},
		[callback, timeout]
	)
}
