import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieFilters.module.scss"
import { memo, useCallback, useState } from "react"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import type { queryParams } from "../../../model/types/MovieSearchSchema"
import { SearchSelect } from "shared/ui/SearchSelect"
import { allGenres, allGenresType } from "shared/lib/consts/getAllGenres"
import { years, ratings } from "features/MovieSearch/model/config"
import { Button } from "rambler-ui"
import { fetchMoviesByParams } from "features/MovieSearch/model/services/fetchMovieByParams"
import { useMovieByParamsQuery } from "features/MovieSearch/model/api"

export interface MovieFiltersProps {
	className?: string
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const [searchParams, setSearchParams] = useState<queryParams>({
		sortField: "rating.kp",
		sortType: "-1",
		page: 1,
		limit: 10,
		countries: undefined,
		ageRating: undefined,
		movieLength: undefined,
		rating: undefined,
		year: undefined,
	})
	let params: string = ""
	const { isError, isLoading, data: movies } = useMovieByParamsQuery(params, { refetchOnMountOrArgChange: true })

	const onChangeGenre = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, genre: value }))
		},
		[setSearchParams]
	)

	const onChangeYear = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, year: value }))
			console.log(searchParams)
		},
		[setSearchParams]
	)

	const onChangeRating = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...prev, rating: value }))
		},
		[setSearchParams]
	)

	const searchMovie = useCallback(() => {
		const reqArr: string[] = []
		Object.entries(searchParams).map(([query, value], index) => {
			if (value !== undefined) {
				if (index === 0) {
					reqArr.push(`?${query}=${value}`)
				} else {
					reqArr.push(`&${query}=${value}`)
				}
			}
		})
		params = reqArr.join("")

		console.log(movies, isError, params)
	}, [])

	return (
		<div className={classNames(cls.MovieFilters, {}, [className])}>
			<SearchSelect
				placeholder="Жанр"
				notFound="Такого жанра нет"
				options={allGenres}
				onChange={onChangeGenre}
				value={(searchParams.genres as string) ?? ""}
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
				value={searchParams.rating ?? ""}
			/>
			<Button onClick={searchMovie}>Найти</Button>
			{/* <div>{movies && movies?.map((elem) => <h1>{elem.page}</h1>)}</div> */}
		</div>
	)
})
