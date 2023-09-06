import cls from "./MoviesPage.module.scss"
import { useCallback, useEffect, useState } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { Page } from "widgets/Page"
import { useSearchParams } from "react-router-dom"
import { MovieCardsList } from "entities/Movie"
import { useSelector } from "react-redux"
import { MoviesPageTitle } from "./MoviesPageTitle/MoviesPageTitle"
import { MoviesByGenreReducer, MoviesByGenre } from "features/MoviesByGenre"
import {
	MovieFilters,
	MovieSearchSliceReducer,
	fetchMoviesByParams,
	fetchNextMovies,
	getMovies,
	getMoviesDataByParamsIsLoading,
} from "features/MovieSearch"

const reducer: ReducersList = {
	movieSearch: MovieSearchSliceReducer,
	MovieByGenere: MoviesByGenreReducer,
}

const MoviesPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
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
		dispatch(fetchMoviesByParams({ params, limit: 42, page: 1 }))
	}, [searchParams])

	const infiniteScrollFunc = useCallback(() => {
		console.log("infininte")
		dispatch(fetchNextMovies({ params: Object.fromEntries(searchParams), limit: 42 }))
	}, [searchParams, dispatch])

	return (
		<DynamicModuleLoader reducers={reducer}>
			{isSearch ? (
				<Page
					className={cls.MoviesPage}
					onScrollEnd={infiniteScrollFunc}
				>
					<MoviesPageTitle searchParams={searchParams} />
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
					<MoviesPageTitle searchParams={searchParams} />
					<MovieFilters />
					<div>
						<MoviesByGenre
							genre="боевик"
							title="Боевики:"
						/>
					</div>
				</Page>
			)}
		</DynamicModuleLoader>
	)
}

export default MoviesPage
