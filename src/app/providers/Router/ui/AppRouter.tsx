import { useCallback, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { AppRoutesProps, routeConfig } from "shared/config/routeConfig/routeConfig"
import { Spinner } from "shared/ui/Spinner"

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<Spinner />}>
				<>{route.element}</>
			</Suspense>
		)
		return (
			<Route
				path={route.path}
				key={route.path}
				element={element}
			/>
		)
	}, [])
	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default AppRouter
