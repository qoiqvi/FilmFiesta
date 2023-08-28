import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieFilters.module.scss"
import { memo, useCallback, useEffect } from "react"
import { SearchSelect } from "shared/ui/SearchSelect"
import { years, ratings, allGenres, allCountries, allSortFields, allSortType } from "features/MovieSearch/model/config"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByParams } from "features/MovieSearch/model/services/fetchMovieByParams"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getMoviesDataByParamsPage } from "features/MovieSearch/model/selectors"

export interface MovieFiltersProps {
	className?: string
}

export const MovieFilters = memo((props: MovieFiltersProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const page = useSelector(getMoviesDataByParamsPage)
	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		const newSearchParams = new URLSearchParams(searchParams)
		Object.entries(Object.fromEntries(searchParams)).map((param) =>
			param[1] === "" ? newSearchParams.delete(param[0]) : null
		)
		setSearchParams(newSearchParams.toString())
		dispatch(fetchMoviesByParams({ params: Object.fromEntries(searchParams), limit: 42, page: 1 }))
	}, [dispatch, searchParams])

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

	const onChangeSortType = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...Object.fromEntries(prev), sortType: value }))
		},
		[searchParams]
	)

	const onChangeSortField = useCallback(
		(value: string) => {
			setSearchParams((prev) => ({ ...Object.fromEntries(prev), sortField: value }))
		},
		[searchParams]
	)

	return (
		<div className={classNames(cls.MovieFilters, {}, [className])}>
			<SearchSelect
				notFound="Такого жанра нет"
				options={allGenres}
				placeholder="Жанр"
				onChange={onChangeGenre}
				width="small"
				value={searchParams.get("genres.name") || ""}
			/>
			<SearchSelect
				notFound="Не найдено"
				options={years}
				placeholder="Годы выхода"
				onChange={onChangeYear}
				width="small"
				value={searchParams.get("year") || ""}
			/>
			<SearchSelect
				notFound="Не найдено"
				placeholder="Рейтинг"
				options={ratings}
				onChange={onChangeRating}
				width="small"
				value={searchParams.get("rating.kp") || ""}
			/>
			<SearchSelect
				notFound="Не найдено"
				placeholder="Страна"
				options={allCountries}
				onChange={onChangeCountry}
				width="small"
				value={searchParams.get("countries.name") || ""}
			/>
			<div className={cls.sortContainer}>
				<SearchSelect
					notFound="Не найдено"
					placeholder="Сортировать по"
					options={allSortFields}
					width="small"
					onChange={onChangeSortField}
					value={searchParams.get("sortField") || ""}
				/>
				<SearchSelect
					notFound="Не найдено"
					placeholder="Страна"
					options={allSortType}
					width="small"
					onChange={onChangeSortType}
					value={searchParams.get("sortType") || ""}
				/>
			</div>
		</div>
	)
})
