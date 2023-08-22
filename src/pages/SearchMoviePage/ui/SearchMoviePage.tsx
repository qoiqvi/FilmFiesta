import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchMoviePage.module.scss"
import { memo, useCallback } from "react"
import { MovieFiltersList } from "features/MovieSearch/ui/MovieFilters/MovieFiltersList/MovieFiltersList"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { MovieSearchSliceReducer } from "features/MovieSearch/model/slice/MovieSearchSlice"
import { Button } from "rambler-ui"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByParams } from "features/MovieSearch"
import { Page } from "widgets/Page"

export interface SearchMoviePageProps {
	className?: string
}

const SearchMoviePage = memo((props: SearchMoviePageProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	// const [params] = useSearchParams()
	// console.log(params.get("search"))
	// Нужно почитать про useSearchParams сделать так, чтоыъбы каждый фильтр сам пушил q-параметр в строку
	// хотя надо ли это, врядли, но про хук почитать надо
	const reducer: ReducersList = {
		movieSearch: MovieSearchSliceReducer,
	}
	const searchMovie = useCallback(() => {
		dispatch(fetchMoviesByParams())
	}, [dispatch])
	return (
		<DynamicModuleLoader reducers={reducer}>
			<Page className={classNames(cls.SearchMoviePage, {}, [className])}>
				<h1>MOVIE SEARCH PAGE</h1>
				<MovieFiltersList />
				<Button
					className={cls.searchBtn}
					type="primary"
					onClick={searchMovie}
				>
					Найти
				</Button>
			</Page>
		</DynamicModuleLoader>
	)
})

export default SearchMoviePage
