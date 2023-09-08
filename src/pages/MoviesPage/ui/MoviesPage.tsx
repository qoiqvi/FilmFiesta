import cls from "./MoviesPage.module.scss"
import { useCallback, useEffect, useState } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { Page } from "widgets/Page"
import { useParams, useSearchParams } from "react-router-dom"
import { MovieCardsList } from "entities/Movie"
import { useSelector } from "react-redux"
import { MoviesPageTitle } from "./MoviesPageTitle/MoviesPageTitle"
import { MoviesByGenreReducer, MoviesByGenre } from "features/MoviesByGenre"
import {
	MovieFilters,
	MovieFilterSliceReducer,
	fetchMoviesByParams,
	fetchNextMovies,
	getMovies,
	getMoviesDataByParamsIsLoading,
	MovieType,
} from "features/MovieFilter"
import { NotFoundPage } from "pages/NotFoundPage"

const reducer: ReducersList = {
	movieSearch: MovieFilterSliceReducer,
	MovieByGenere: MoviesByGenreReducer,
}

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { movieType } = useParams<{ movieType: MovieType }>()
	const [isSearch, setIsSearch] = useState(searchParams.size > 0)
	const dispatch = useAppDispatch()
	const movies = useSelector(getMovies.selectAll)
	const isLoading = useSelector(getMoviesDataByParamsIsLoading)

	useEffect(() => {
		setIsSearch(Boolean(searchParams.size))
		const newSearchParams = new URLSearchParams(searchParams)
		const params = Object.fromEntries(searchParams)
		Object.entries(params).map((param) => (param[1] === "" ? newSearchParams.delete(param[0]) : null))
		setSearchParams(newSearchParams.toString())
		dispatch(fetchMoviesByParams({ params, limit: 42, page: 1, type: movieType }))
	}, [searchParams])

	const infiniteScrollFunc = useCallback(() => {
		dispatch(fetchNextMovies({ params: Object.fromEntries(searchParams), limit: 42, type: movieType }))
	}, [searchParams, dispatch])

	if (!movieType) {
		return <NotFoundPage />
	}

	return (
		<DynamicModuleLoader reducers={reducer}>
			{isSearch ? (
				<Page
					className={cls.MoviesPage}
					onScrollEnd={infiniteScrollFunc}
				>
					<MoviesPageTitle
						searchParams={searchParams}
						type={movieType}
					/>
					<MovieFilters />
					<div>
						<MovieCardsList
							className={cls.movies}
							isLoading={isLoading}
							movies={movies}
						/>
					</div>
				</Page>
			) : (
				<Page className={cls.MoviesPage}>
					<MoviesPageTitle
						searchParams={searchParams}
						type={movieType}
					/>
					<MovieFilters />
					<div>
						<MoviesByGenre
							genre="боевик"
							title="Боевики"
							type={movieType}
						/>
						<MoviesByGenre
							genre="комедия"
							title="Комедия"
							type={movieType}
						/>
						<MoviesByGenre
							genre="вестерн"
							title="Вестерн"
							type={movieType}
						/>
						<MoviesByGenre
							genre="фантастика"
							title="Фантастика"
							type={movieType}
						/>
						<MoviesByGenre
							genre="ужасы"
							title="Ужасы"
							type={movieType}
						/>
						<MoviesByGenre
							genre="биография"
							title="Биография"
							type={movieType}
						/>
					</div>
				</Page>
			)}
		</DynamicModuleLoader>
	)
}

export default MoviesPage
