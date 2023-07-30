import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmsPage.module.scss"
import { memo } from "react"
import { MoviesByGenre } from "features/MoviesByGenre"
import { Page } from "widgets/Page"

export interface FilmsPageProps {
	className?: string
}

const FilmsPage = (props: FilmsPageProps) => {
	const { className } = props
	return (
		<Page className={classNames(cls.FilmsPage, {}, [className])}>
			<MoviesByGenre genre={"комедия"} title="Комедия" />
			{/* <MoviesByGenre genre={"боевик"} title="Боевик" />
			<MoviesByGenre genre={"биография"} title="Биография" />
			<MoviesByGenre genre={"триллер"} title="Биография" /> */}
		</Page>
	)
}

export default memo(FilmsPage)
