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
} from "features/MovieSearch/model/selectors"
import { Text } from "shared/ui/Text"
import { MoviesByGenre } from "features/MoviesByGenre"

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

	useEffect(() => {
		setIsSearch(Boolean(searchParams.size))
	}, [searchParams])

	const title = useMemo(() => {
		let string = []
		console.log("title")
		if (searchParams.get("genres.name")) {
			string.push(searchParams.get("genres.name"))
		}
		if (searchParams.get("year")) {
			string.push(searchParams.get("year"))
		}
		if (string.length) {
			return `Фильмы: ${string.join(", ")}`
		}
		return "Фильмы"
	}, [searchParams])

	const infiniteScrollFunc = useCallback(() => {
		if (!isLoading && !hasMore) {
			Object.entries(Object.fromEntries(searchParams)).map((param) => {
				if (param[0] === "page") {
					setSearchParams((prev) => ({
						...Object.fromEntries(prev),
						page: (Number(param[1]) + 1).toString(),
					}))
				} else {
					setSearchParams((prev) => ({
						...Object.fromEntries(prev),
						page: "2",
					}))
				}
			})
			dispatch(fetchMoviesByParams(Object.fromEntries(searchParams)))
		}
	}, [searchParams, dispatch])

	return (
		<DynamicModuleLoader reducers={reducer}>
			<Page
				className={classNames(cls.SearchMoviePage, {}, [className])}
				onScrollEnd={infiniteScrollFunc}
			>
				<Text title={title} />
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
						<MoviesByGenre
							genre="триллер"
							title="Триллеры:"
						/>
						<MoviesByGenre
							genre="ужасы"
							title="Ужасы:"
						/>
					</div>
				)}
			</Page>
		</DynamicModuleLoader>
	)
})

export default SearchMoviePage
