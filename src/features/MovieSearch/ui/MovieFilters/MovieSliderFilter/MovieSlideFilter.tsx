import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieSlideFilter.module.scss"
import { memo } from "react"

export interface MovieSlideFilterProps {
	className?: string
}

export const MovieSlideFilter = memo((props: MovieSlideFilterProps) => {
	const { className } = props
	return <div className={classNames(cls.MovieSlideFilter, {}, [className])}></div>
})
