import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieFilters.module.scss"
import { memo, useCallback, useState } from "react"
import type { queryParams } from "../../../model/types/MovieSearchSchema"
import { SearchSelect } from "shared/ui/SearchSelect"
import { years, ratings, allGenres, allCountries } from "features/MovieSearch/model/config"
import { Button } from "rambler-ui"
import { useMovieByParamsQuery } from "features/MovieSearch/model/api"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByParams } from "features/MovieSearch/model/services/fetchMovieByParams"
import { useSelector } from "react-redux"
import { getMoviesDataByParams } from "features/MovieSearch/model/selectors"
import { MovieCard, MovieCardsList } from "entities/Movie"

export interface MovieFiltersProps {
	className?: string
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const movies = useSelector(getMoviesDataByParams)
	const [searchParams, setSearchParams] = useState<queryParams>({
		// sortField: "rating.imdb",
		sortType: "-1",
		page: 1,
		limit: 10,
		"genres.name": undefined,
		"countries.name": undefined,
		ageRating: undefined,
		movieLength: undefined,
		"rating.imdb": undefined,
		year: undefined,
	})

	// let params: string = "?sortField=rating.kp&sortType=-1&page=1&limit=10"

	// const { isError, isLoading, data: movies } = useMovieByParamsQuery(params, { refetchOnMountOrArgChange: true })
	const onChangeGenre = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, "genres.name": value }))
		},
		[setSearchParams]
	)

	const onChangeYear = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, year: value }))
		},
		[setSearchParams]
	)

	const onChangeRating = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, "rating.kp": value }))
		},
		[setSearchParams]
	)

	const onChangeCountry = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, "countries.name": value }))
		},
		[setSearchParams]
	)

	// const searchMovie = () => {
	// 	const reqArr: string[] = []
	// 	Object.entries(searchParams).map(([query, value], index) => {
	// 		if (value !== undefined) {
	// 			if (index === 0) {
	// 				reqArr.push(`?${query}=${value}`)
	// 			} else {
	// 				reqArr.push(`&${query}=${value}`)
	// 			}
	// 		}
	// 	})
	// 	params = reqArr.join("")
	// 	console.log(params)
	// }
	const searchMovie = async () => {
		let a = await dispatch(fetchMoviesByParams(searchParams))
		console.log(a.payload)
	}

	return (
		<div>
			<div className={classNames(cls.MovieFilters, {}, [className])}>
				<SearchSelect
					placeholder="Жанр"
					notFound="Такого жанра нет"
					options={allGenres}
					onChange={onChangeGenre}
					value={(searchParams["genres.name"] as string) ?? ""}
				/>
				<SearchSelect
					placeholder="Год релиза"
					notFound="Не найдено"
					options={years}
					onChange={onChangeYear}
					value={searchParams.year ?? ""}
				/>
				<SearchSelect
					placeholder="Рейтинг"
					notFound="Не найдено"
					options={ratings}
					onChange={onChangeRating}
					value={searchParams["rating.imdb"] ?? ""}
				/>
				<SearchSelect
					placeholder="Страна"
					notFound="Не найдено"
					options={allCountries}
					onChange={onChangeCountry}
					value={searchParams["countries.name"] ?? ""}
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
