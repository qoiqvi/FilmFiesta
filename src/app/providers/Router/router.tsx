import { Suspense } from "react"
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { AppRoutesProps, routeConfig } from "shared/config/routeConfig/routeConfig"
import { PageLayout } from "widgets/PageLayout/ui/PageLayout"

const renderWithWrapper = (route: AppRoutesProps) => {
	const element = (
		<Suspense fallback={<h1>Loading...</h1>}>
			<>{route.element}</>
		</Suspense>
	)

	return <Route element={element} key={route.path} path={route.path} />
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<PageLayout />}>
			<>{Object.values(routeConfig).map(renderWithWrapper)}</>
		</Route>
	)
)
