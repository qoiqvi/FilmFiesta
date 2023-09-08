import { RouteProps } from "react-router-dom"
import { FilmByIdPage } from "pages/FilmByIdPage"
import { MoviesByGenrePage } from "pages/MoviesByGenrePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { PersonByIdPage } from "pages/PersonByIdPage"
import { MoviesPage } from "pages/MoviesPage"
import { MainPage } from "pages/MainPage"

export enum AppRoutes {
	MAIN = "main",
	FILM_BY_ID = "film_by_id",
	PERSON_BY_ID = "person_by_id",
	MOVIES_CATALOG = "catalog",
	MOVIES_BY_GENRE = "movies_by_genre",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.FILM_BY_ID]: "/film/",
	[AppRoutes.PERSON_BY_ID]: "/person/",
	[AppRoutes.MOVIES_CATALOG]: "/catalog/",
	[AppRoutes.MOVIES_BY_GENRE]: "/byGenre/",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		element: <MainPage />,
		path: RoutePath.main,
		authOnly: false,
	},
	[AppRoutes.FILM_BY_ID]: {
		element: <FilmByIdPage />,
		path: RoutePath.film_by_id + ":id",
		authOnly: false,
	},
	[AppRoutes.PERSON_BY_ID]: {
		element: <PersonByIdPage />,
		path: RoutePath.person_by_id + ":id",
		authOnly: false,
	},
	[AppRoutes.MOVIES_CATALOG]: {
		element: <MoviesPage />,
		path: RoutePath.catalog + ":movieType",
		authOnly: false,
	},
	[AppRoutes.MOVIES_BY_GENRE]: {
		element: <MoviesByGenrePage />,
		path: RoutePath.movies_by_genre + ":movieType" + "/" + ":genre",
		authOnly: false,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <NotFoundPage />,
		path: RoutePath.not_found,
		authOnly: false,
	},
}
