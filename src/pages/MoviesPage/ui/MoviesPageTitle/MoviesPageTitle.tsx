import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesPageTitle.module.scss"
import { memo, useMemo } from "react"
import { Text } from "shared/ui/Text"
import { MovieType } from "features/MovieFilter"
import { createMoviePageTitle } from "../../model/utils/createMoviePageTitle"

export interface MoviesPageTitleProps {
	className?: string
	searchParams: URLSearchParams
	type?: MovieType
}

export const MoviesPageTitle = memo((props: MoviesPageTitleProps) => {
	const { className, searchParams, type } = props

	const title = useMemo(() => {
		return createMoviePageTitle(searchParams, type)
	}, [searchParams, type])

	return (
		<div className={classNames(cls.MoviesPageTitle, {}, [className])}>
			<Text title={title} />
		</div>
	)
})
