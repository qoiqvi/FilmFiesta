import { useEffect, useState } from "react"
import { AppButton } from "shared/ui/AppButton"

export const BugButton = () => {
	const [error, setError] = useState(false)
	const throwError = () => {
		setError(!error)
	}

	useEffect(() => {
		if (error) throw new Error()
	}, [error])

	return <AppButton onClick={throwError}>Выбросить ошибку</AppButton>
}
