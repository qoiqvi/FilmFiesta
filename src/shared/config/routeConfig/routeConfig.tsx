import { FilmsPage } from "pages/FilmsPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
	MAIN = "main",
	PROFILE = "profile",
	FILMS = "films",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.FILMS]: "/films",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
		authOnly: false,
	},
	[AppRoutes.FILMS]: {
		element: <FilmsPage />,
		path: RoutePath.films,
		authOnly: false,
	},
	[AppRoutes.PROFILE]: {
		element: <ProfilePage />,
		path: RoutePath.profile,
		authOnly: false,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <NotFoundPage />,
		path: RoutePath.not_found,
		authOnly: false,
	},
}
