import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MainPage.module.scss"
import { memo } from "react"
import { MoviesByGenre } from "features/MoviesByGenre"
import { Page } from "widgets/Page"
import { RandomMovie } from "features/RandomMovie"
import { moviesByGenreConfig } from "../model/config"

export interface MainPageProps {
	className?: string
}

const MainPage = (props: MainPageProps) => {
	const { className } = props

	return (
		<Page className={classNames(cls.MainPage, {}, [className])}>
			<div>
				{moviesByGenreConfig.map((movie) => (
					<MoviesByGenre
						genre={movie.genre}
						title={movie.title}
						type={movie.type}
					/>
				))}
			</div>
		</Page>
	)
}

export default memo(MainPage)
