import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovies.module.scss"
import { memo } from "react"
import { SimilarMovie } from "../../model/types"
import { SimilarMovieItem } from "../SimilarMovieItem/SimilarMovieItem"
import { Text } from "shared/ui/Text"

export interface SimilarMoviesProps {
	className?: string
	similarMovies: SimilarMovie[] | undefined
}

export const SimilarMovies = memo((props: SimilarMoviesProps) => {
	const { className, similarMovies } = props
	return (
		<>
			<Text title="Похожие фильмы:" className={cls.title} />
			<div className={classNames(cls.SimilarMovies, {}, [className])}>
				{similarMovies?.map((movie) => (
					<SimilarMovieItem movie={movie} />
				))}
			</div>
		</>
	)
})
