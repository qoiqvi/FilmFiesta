import { classNames } from "shared/lib/classNames/classNames"
import cls from "./GenresFilter.module.scss"
import { memo } from "react"
import { SearchSelect } from "shared/ui/SearchSelect"
import { allGenres } from "shared/lib/consts/getAllGenres"

export interface GenresFilterProps {
	className?: string
}

export const GenresFilter = memo((props: GenresFilterProps) => {
	const { className } = props

	return (
		<div className={classNames(cls.GenresFilter, {}, [className])}>
			<SearchSelect
				options={allGenres}
				label="Жанры"
				notFound="Такого жанра нет"
				value=""
			/>
		</div>
	)
})
