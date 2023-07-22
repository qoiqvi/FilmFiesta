import { FilmByNamePage } from "pages/FilmByNamePage"
import { FilmsPage } from "pages/FilmsPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
	FILMS = "films",
	FILM_BY_NAME = "film",
	PROFILE = "profile",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.FILMS]: "/films",
	[AppRoutes.FILM_BY_NAME]: "/film/:enName",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.FILM_BY_NAME]: {
		element: <FilmByNamePage />,
		path: RoutePath.film,
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
