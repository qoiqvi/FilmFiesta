import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchMoviePage.module.scss"
import { memo, useCallback, useState } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { MovieSearchSliceReducer } from "features/MovieSearch/model/slice/MovieSearchSlice"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByParams } from "features/MovieSearch"
import { Page } from "widgets/Page"
import { MovieFilters } from "features/MovieSearch/ui/MovieFilters/MovieFilters/MovieFilters"
import { useSearchParams } from "react-router-dom"
import { Button } from "rambler-ui"
import { MovieCardsList } from "entities/Movie"
import { useSelector } from "react-redux"
import { getMoviesDataByParams } from "features/MovieSearch/model/selectors"

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

	const searchMovie = useCallback(() => {
		dispatch(fetchMoviesByParams(Object.fromEntries(searchParams)))
	}, [searchParams])

	return (
		<DynamicModuleLoader reducers={reducer}>
			<Page className={classNames(cls.SearchMoviePage, {}, [className])}>
				<MovieFilters />
				{/* {isSearch ? (
					<div>
						<Button onClick={searchMovie}>Найти</Button>
					</div>
				) : (
					<div>
						<Button onClick={searchMovie}>Найти</Button>
					</div>
				)} */}
				<MovieCardsList
					isLoading={false}
					movies={movies}
				/>
			</Page>
		</DynamicModuleLoader>
	)
})

export default SearchMoviePage
