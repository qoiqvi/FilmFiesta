import { useEffect, useState } from "react"
import { Button } from "shared/ui/Button"

export const BugButton = () => {
	const [error, setError] = useState(false)
	const throwError = () => {
		setError(!error)
	}

	useEffect(() => {
		if (error) throw new Error()
	}, [error])

	return <Button onClick={throwError}>Выбросить ошибку</Button>
}
