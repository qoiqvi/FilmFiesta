import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCheckboxFilter.module.scss"
import { memo } from "react"

export interface MovieCheckboxFilterProps {
	className?: string
}

export const MovieCheckboxFilter = memo((props: MovieCheckboxFilterProps) => {
	const { className } = props
	return <div className={classNames(cls.MovieCheckboxFilter, {}, [className])}></div>
})
