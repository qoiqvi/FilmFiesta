import { FilmByNamePage } from "pages/FilmByNamePage"
import { FilmsPage } from "pages/FilmsPage"
import { MainPage } from "pages/MainPage"
import { MoviesByGenrePage } from "pages/MoviesByGenrePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { SearchMoviePage } from "pages/SearchMoviePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
	FILMS = "films",
	FILM_BY_NAME = "film_by_name",
	PROFILE = "profile",
	SEARCH = "search",
	MOVIES_BY_GENRE = "movies_by_genre",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.FILMS]: "/films",
	[AppRoutes.FILM_BY_NAME]: "/film/",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.SEARCH]: "/search",
	[AppRoutes.MOVIES_BY_GENRE]: "/movies/",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.FILM_BY_NAME]: {
		element: <FilmByNamePage />,
		path: RoutePath.film_by_name + ":name",
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
	[AppRoutes.SEARCH]: {
		element: <SearchMoviePage />,
		path: RoutePath.search,
		authOnly: false,
	},
	[AppRoutes.MOVIES_BY_GENRE]: {
		element: <MoviesByGenrePage />,
		path: RoutePath.movies_by_genre + ":genre",
		authOnly: false,
	},
	[AppRoutes.NOT_FOUND]: {
		element: <NotFoundPage />,
		path: RoutePath.not_found,
		authOnly: false,
	},
}
