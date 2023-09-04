import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchMoviePage.module.scss"
import { memo, useCallback, useEffect, useState } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { Page } from "widgets/Page"
import { useSearchParams } from "react-router-dom"
import { MovieCardsList } from "entities/Movie"
import { useSelector } from "react-redux"
import { MoviesByGenre } from "features/MoviesByGenre"
import { SearchMoviePageTitle } from "./SearchMoviePageTitle/SearchMoviePageTitle"
import { getMoviesDataByParamsIsLoading } from "features/MovieSearch/model/api/selectors"
import { MovieFilters } from "features/MovieSearch"
import { fetchMoviesByParams } from "features/MovieSearch/model/api/services/fetchMovieByParams"
import { fetchNextMovies } from "features/MovieSearch/model/api/services/fetchNextMovies"
import { MovieSearchSliceReducer, getMovies } from "features/MovieSearch/model/api/slice/MovieSearchSlice"

export interface SearchMoviePageProps {
	className?: string
}

const reducer: ReducersList = {
	movieSearch: MovieSearchSliceReducer,
}

const SearchMoviePage = memo((props: SearchMoviePageProps) => {
	const { className } = props
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
					className={classNames(cls.SearchMoviePage, {}, [className])}
					onScrollEnd={infiniteScrollFunc}
				>
					<SearchMoviePageTitle searchParams={searchParams} />
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
				<Page className={classNames(cls.SearchMoviePage, {}, [className])}>
					<SearchMoviePageTitle searchParams={searchParams} />
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
})

export default SearchMoviePage
