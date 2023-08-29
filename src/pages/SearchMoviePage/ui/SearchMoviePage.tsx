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
import { Skeleton } from "shared/ui/Skeleton"
import {
	getMoviesDataByParams,
	getMoviesDataByParamsIsLoading,
	getMoviesDataByParamsHasMore,
	getMoviesDataByParamsPage,
} from "features/MovieSearch/model/api/selectors"
import { MovieSearchSliceReducer } from "features/MovieSearch/model/api/slice/MovieSearchSlice"
import { MovieFilters } from "features/MovieSearch"
import { fetchMoviesByParams } from "features/MovieSearch/model/api/services/fetchMovieByParams"
import { fetchNextMovies } from "features/MovieSearch/model/api/services/fetchNextMovies"

export interface SearchMoviePageProps {
	className?: string
}

const reducer: ReducersList = {
	movieSearch: MovieSearchSliceReducer,
}

const SearchMoviePage = memo((props: SearchMoviePageProps) => {
	const { className } = props
	const [searchParams] = useSearchParams()
	const [isSearch, setIsSearch] = useState(searchParams.size > 0)
	const dispatch = useAppDispatch()
	const movies = useSelector(getMoviesDataByParams)
	const isLoading = useSelector(getMoviesDataByParamsIsLoading)

	useEffect(() => {
		setIsSearch(Boolean(searchParams.size))
	}, [searchParams])

	// const infiniteScrollFunc = useCallback(() => {
	// 	if (!isLoading && hasMore) {
	// 		if (page !== undefined) {
	// 			console.log("infininte")
	// 			// dispatch(fetchMoviesByParams({ params: Object.fromEntries(searchParams), limit: 42, page: page + 1 }))
	// 		}
	// 	}
	// }, [searchParams, page, dispatch, isLoading, hasMore])

	const infiniteScrollFunc = useCallback(() => {
		console.log("infininte")
		dispatch(fetchNextMovies({ params: Object.fromEntries(searchParams), limit: 42 }))
	}, [searchParams, dispatch])

	// debugger

	if (isSearch && isLoading) {
		return (
			<Page className={classNames(cls.SearchMoviePage, {}, [className])}>
				{/* <SearchMoviePageTitle searchParams={searchParams} /> */}
				{/* <MovieFilters /> */}
				<div style={{ display: "flex" }}>
					<Skeleton
						height={200}
						width={300}
					/>
					<Skeleton
						height={200}
						width={300}
					/>
					<Skeleton
						height={200}
						width={300}
					/>
					<Skeleton
						height={200}
						width={300}
					/>
				</div>
			</Page>
		)
	}

	return (
		<DynamicModuleLoader reducers={reducer}>
			{isSearch ? (
				<Page
					className={classNames(cls.SearchMoviePage, {}, [className])}
					onScrollEnd={infiniteScrollFunc}
				>
					<div style={{ height: 2500 }}></div>
					<SearchMoviePageTitle searchParams={searchParams} />
					<MovieFilters />
					<div>
						<MovieCardsList
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
