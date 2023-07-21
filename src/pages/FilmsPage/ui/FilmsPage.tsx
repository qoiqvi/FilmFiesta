import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmsPage.module.scss"
import { memo } from "react"
import { MoviesByGenre } from "features/MoviesByGenre"

export interface FilmsPageProps {
	className?: string
}

const FilmsPage = (props: FilmsPageProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.FilmsPage, {}, [className])}>
			<MoviesByGenre genre={"комедия"} title="Комедия" />
			<MoviesByGenre genre={"боевик"} title="Боевик" />
			<MoviesByGenre genre={"биография"} title="Биография" />
			<MoviesByGenre genre={"триллер"} title="Биография" />
		</div>
	)
}

export default memo(FilmsPage)
