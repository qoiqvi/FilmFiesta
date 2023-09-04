import { FilmByIdPage } from "pages/FilmByIdPage"
import { FilmsPage } from "pages/FilmsPage"
import { MoviesByGenrePage } from "pages/MoviesByGenrePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { PersonByIdPage } from "pages/PersonByIdPage"
import { ProfilePage } from "pages/ProfilePage"
import { MoviesPage } from "pages/MoviesPage"
import { RouteProps } from "react-router-dom"
import { CartoonPage } from "pages/CartoonPage"

export enum AppRoutes {
	FILMS = "films",
	FILM_BY_ID = "film_by_id",
	PERSON_BY_ID = "person_by_id",
	PROFILE = "profile",
	MOVIES = "movies",
	MOVIES_BY_GENRE = "movies_by_genre",
	CARTOONS = "cartoons",
	SERIES = "series",
	NOT_FOUND = "not_found",
}

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.FILMS]: "/films",
	[AppRoutes.FILM_BY_ID]: "/film/",
	[AppRoutes.PERSON_BY_ID]: "/person/",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.MOVIES]: "/movies/",
	[AppRoutes.CARTOONS]: "/cartoons/",
	[AppRoutes.SERIES]: "/series/",
	[AppRoutes.MOVIES_BY_GENRE]: "/movies/",
	[AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
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
	[AppRoutes.MOVIES]: {
		element: <MoviesPage />,
		path: RoutePath.movies,
		authOnly: false,
	},
	[AppRoutes.CARTOONS]: {
		element: <CartoonPage />,
		path: RoutePath.cartoons,
		authOnly: false,
	},
	[AppRoutes.SERIES]: {
		element: <MoviesPage />,
		path: RoutePath.series,
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
