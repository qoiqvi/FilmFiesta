import { classNames } from "shared/lib/classNames/classNames"
import cls from "./GenresFilter.module.scss"
import { memo, useCallback, useState } from "react"
import { SearchSelect } from "shared/ui/SearchSelect"
import { allGenres, allGenresType } from "shared/lib/consts/getAllGenres"
import { Select } from "shared/ui/Select"
import { queryParams } from "features/MovieSearch/model/types/MovieSearchSchema"
import { ratings, years } from "features/MovieSearch/model/config"

export interface GenresFilterProps {
	className?: string
}

export const GenresFilter = memo((props: GenresFilterProps) => {
	const { className } = props

	return <div className={classNames(cls.GenresFilter, {}, [className])}></div>
})
