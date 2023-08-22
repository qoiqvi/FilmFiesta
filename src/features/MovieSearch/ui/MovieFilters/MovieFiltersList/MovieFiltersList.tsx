import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieFiltersList.module.scss"
import { memo, useCallback } from "react"
import { MovieFiltersItem } from "../MovieFiltersItem/MovieFiltersItem"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { MovieSearchSliceActions } from "../../../model/slice/MovieSearchSlice"
import type { MovieGenres } from "../../../model/types/MovieSearchSchema"
import { Option } from "shared/types"
import { Select } from "shared/ui/Select"
import { SearchSelect } from "shared/ui/SearchSelect"
import { allGenres } from "shared/lib/consts/getAllGenres"

export interface MovieFiltersListProps {
	className?: string
}

const genreOptions: Option<MovieGenres>[] = [
	{ content: "Комедия", value: "комедия" },
	{ content: "Триллер", value: "триллер" },
	{ content: "Мелодрама", value: "мелодрама" },
]

export const MovieFiltersList = memo((props: MovieFiltersListProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const onChangeGenre = useCallback(
		(value: MovieGenres) => {
			dispatch(MovieSearchSliceActions.changeField({ genre: value }))
		},
		[dispatch]
	)
	// console.log(allGenres)
	return (
		<div className={classNames(cls.MovieFiltersList, {}, [className])}>
			{/* <MovieFiltersItem
				title="Жанр"
				defaultValue={"комедия"}
				onChange={onChangeGenre}
				options={genreOptions}
			/> */}
			<SearchSelect
				label="Жанры"
				options={allGenres}
				notFound="Жанр не найден"
			/>
		</div>
	)
})
