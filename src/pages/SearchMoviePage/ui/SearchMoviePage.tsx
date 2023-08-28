import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchMoviePage.module.scss"
import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { MovieSearchSliceReducer } from "features/MovieSearch/model/slice/MovieSearchSlice"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByParams } from "features/MovieSearch"
import { Page } from "widgets/Page"
import { MovieFilters } from "features/MovieSearch/ui/MovieFilters/MovieFilters/MovieFilters"
import { useSearchParams } from "react-router-dom"
import { MovieCardsList } from "entities/Movie"
import { useSelector } from "react-redux"
import {
	getMoviesDataByParams,
	getMoviesDataByParamsHasMore,
	getMoviesDataByParamsIsLoading,
	getMoviesDataByParamsPage,
} from "features/MovieSearch/model/selectors"
import { Text } from "shared/ui/Text"
import { MoviesByGenre } from "features/MoviesByGenre"
import { SearchMoviePageTitle } from "./SearchMoviePageTitle/SearchMoviePageTitle"

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
	const movies = useSelector(getMoviesDataByParams)
	const isLoading = useSelector(getMoviesDataByParamsIsLoading)
	const hasMore = useSelector(getMoviesDataByParamsHasMore)
	const page = useSelector(getMoviesDataByParamsPage)

	useEffect(() => {
		setIsSearch(Boolean(searchParams.size))
	}, [searchParams])

	const infiniteScrollFunc = useCallback(() => {
		if (!isLoading && !hasMore) {
			if (page !== undefined) {
				dispatch(fetchMoviesByParams({ params: Object.fromEntries(searchParams), limit: 42, page: page + 1 }))
			}
		}
	}, [searchParams, dispatch])

	return (
		<DynamicModuleLoader reducers={reducer}>
			<Page
				className={classNames(cls.SearchMoviePage, {}, [className])}
				onScrollEnd={infiniteScrollFunc}
			>
				<SearchMoviePageTitle searchParams={searchParams} />
				<MovieFilters />
				{isSearch ? (
					<div>
						<MovieCardsList
							isLoading={false}
							movies={movies}
						/>
					</div>
				) : (
					<div>
						<MoviesByGenre
							genre="боевик"
							title="Боевики:"
						/>
						{/* <MoviesByGenre
							genre="триллер"
							title="Триллеры:"
						/>
						<MoviesByGenre
							genre="ужасы"
							title="Ужасы:"
						/> */}
					</div>
				)}
			</Page>
		</DynamicModuleLoader>
	)
})

export default SearchMoviePage
