// import { classNames } from "shared/lib/classNames/classNames"
// import cls from "./MovieFilters.module.scss"
// import { memo, useCallback, useState } from "react"
// import type { QueryParams } from "../../../model/types/MovieSearchSchema"
// import { SearchSelect } from "shared/ui/SearchSelect"
// import { years, ratings, allGenres, allCountries } from "features/MovieSearch/model/config"
// import { Button } from "rambler-ui"
// import { useMovieByParamsQuery } from "features/MovieSearch/model/api"
// import { useAppDispatch } from "shared/hooks/useAppDispatch"
// import { fetchMoviesByParams } from "features/MovieSearch/model/services/fetchMovieByParams"
// import { useSelector } from "react-redux"
// import { getMoviesDataByParams } from "features/MovieSearch/model/selectors"
// import { MovieCard, MovieCardsList } from "entities/Movie"

// export interface MovieFiltersProps {
// 	className?: string
// }

// export const MovieFilters = memo((props: MovieFiltersProps) => {
// 	const { className } = props
// 	const dispatch = useAppDispatch()
// 	const movies = useSelector(getMoviesDataByParams)
// 	const [searchParams, setSearchParams] = useState<QueryParams>({
// 		// sortField: "rating.imdb",
// 		sortType: "-1",
// 		page: 1,
// 		limit: 10,
// 		"genres.name": undefined,
// 		"countries.name": undefined,
// 		ageRating: undefined,
// 		movieLength: undefined,
// 		"rating.imdb": undefined,
// 		year: undefined,
// 	})

// 	// let params: string = "?sortField=rating.kp&sortType=-1&page=1&limit=10"

// 	// const { isError, isLoading, data: movies } = useMovieByParamsQuery(params, { refetchOnMountOrArgChange: true })
// 	const onChangeGenre = useCallback(
// 		(value: string) => {
// 			setSearchParams((prev) => ({ ...prev, "genres.name": value }))
// 		},
// 		[setSearchParams]
// 	)

// 	const onChangeYear = useCallback(
// 		(value: string) => {
// 			setSearchParams((prev) => ({ ...prev, year: value }))
// 		},
// 		[setSearchParams]
// 	)

// 	const onChangeRating = useCallback(
// 		(value: string) => {
// 			setSearchParams((prev) => ({ ...prev, "rating.kp": value }))
// 		},
// 		[setSearchParams]
// 	)

// 	const onChangeCountry = useCallback(
// 		(value: string) => {
// 			setSearchParams((prev) => ({ ...prev, "countries.name": value }))
// 		},
// 		[setSearchParams]
// 	)

// 	const searchMovie = useCallback(() => {
// 		dispatch(fetchMoviesByParams(searchParams))
// 	}, [searchParams])

// 	return (
// 		<div>
// 			<div className={classNames(cls.MovieFilters, {}, [className])}>
// 				<SearchSelect
// 					placeholder="Жанр"
// 					notFound="Такого жанра нет"
// 					options={allGenres}
// 					onChange={onChangeGenre}
// 					width="small"
// 				/>
// 				<SearchSelect
// 					placeholder="Год релиза"
// 					notFound="Не найдено"
// 					options={years}
// 					onChange={onChangeYear}
// 					width="small"
// 				/>
// 				<SearchSelect
// 					placeholder="Рейтинг"
// 					notFound="Не найдено"
// 					options={ratings}
// 					onChange={onChangeRating}
// 					width="small"
// 					defaultValue={ratings[0].content}
// 				/>
// 				<SearchSelect
// 					placeholder="Страна"
// 					notFound="Не найдено"
// 					options={allCountries}
// 					onChange={onChangeCountry}
// 					width="small"
// 				/>
// 				<Button onClick={searchMovie}>Найти</Button>
// 			</div>
// 			<div>
// 				<MovieCardsList
// 					isLoading={false}
// 					movies={movies}
// 				/>
// 			</div>
// 		</div>
// 	)
// })

import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieFilters.module.scss"
import { memo, useCallback } from "react"
import { SearchSelect } from "shared/ui/SearchSelect"
import { years, ratings, allGenres, allCountries } from "features/MovieSearch/model/config"
import { Button } from "rambler-ui"
import { useMovieByParamsQuery } from "features/MovieSearch/model/api"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByParams } from "features/MovieSearch/model/services/fetchMovieByParams"
import { useSelector } from "react-redux"
import { getMoviesDataByParams } from "features/MovieSearch/model/selectors"
import { MovieCard, MovieCardsList } from "entities/Movie"
import { useParams, useSearchParams } from "react-router-dom"
import { QueryParams } from "features/MovieSearch/model/types/MovieSearchSchema"

export interface MovieFiltersProps {
	className?: string
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const movies = useSelector(getMoviesDataByParams)
	const [searchParams, setSearchParams] = useSearchParams()

	const onChangeGenre = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...Object.fromEntries(prev), "genres.name": value }))
		},
		[searchParams]
	)
	const onChangeYear = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...Object.fromEntries(prev), year: value }))
		},
		[searchParams]
	)

	const onChangeRating = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...Object.fromEntries(prev), "rating.kp": value }))
		},
		[searchParams]
	)

	const onChangeCountry = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...Object.fromEntries(prev), "countries.name": value }))
		},
		[searchParams]
	)

	const searchMovie = useCallback(() => {
		dispatch(fetchMoviesByParams(Object.fromEntries(searchParams)))
	}, [searchParams])

	return (
		<div>
			<div className={classNames(cls.MovieFilters, {}, [className])}>
				<SearchSelect
					placeholder="Жанр"
					notFound="Такого жанра нет"
					options={allGenres}
					onChange={onChangeGenre}
					width="small"
					value={searchParams.get("genres.name") || ""}
				/>
				<SearchSelect
					placeholder="Год релиза"
					notFound="Не найдено"
					options={years}
					onChange={onChangeYear}
					width="small"
					value={searchParams.get("year") || ""}
				/>
				<SearchSelect
					placeholder="Рейтинг"
					notFound="Не найдено"
					options={ratings}
					onChange={onChangeRating}
					width="small"
					value={searchParams.get("rating.kp") || ""}
				/>
				<SearchSelect
					placeholder="Страна"
					notFound="Не найдено"
					options={allCountries}
					onChange={onChangeCountry}
					width="small"
					value={searchParams.get("countries.name") || ""}
				/>
				<Button onClick={searchMovie}>Найти</Button>
			</div>
			<div>
				<MovieCardsList
					isLoading={false}
					movies={movies}
				/>
			</div>
		</div>
	)
})
