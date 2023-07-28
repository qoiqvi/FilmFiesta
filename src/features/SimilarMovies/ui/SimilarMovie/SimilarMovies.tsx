import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovies.module.scss"
import { memo } from "react"
import { Data, Movie } from "entities/Movie/model/types/Movie"
import { Api } from "shared/api/api"
import { SimilarMovie } from "../../model/types"
import { SimilarMovieItem } from "../SimilarMovieItem/SimilarMovieItem"

export interface SimilarMoviesProps {
	className?: string
	similarMovies: SimilarMovie[] | undefined
}

export const SimilarMovies = memo((props: SimilarMoviesProps) => {
	const { className, similarMovies } = props
	return (
		<div className={classNames(cls.SimilarMovies, {}, [className])}>
			{similarMovies?.map((movie) => (
				<SimilarMovieItem movie={movie} />
			))}
		</div>
	)
})
