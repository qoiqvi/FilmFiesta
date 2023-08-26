import { useCallback, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { AppRoutesProps, routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<h1>Loading</h1>}>
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
