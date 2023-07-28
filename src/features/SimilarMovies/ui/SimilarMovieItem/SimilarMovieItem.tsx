import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovieItem.module.scss"
import { memo } from "react"
import { SimilarMovie } from "../../model/types"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface SimilarMovieItemProps {
	className?: string
	movie: SimilarMovie
}

export const SimilarMovieItem = memo((props: SimilarMovieItemProps) => {
	const { className, movie } = props
	return (
		<Link to={`${RoutePath.film_by_id}${movie.id}`} className={classNames(cls.SimilarMovieItem, {}, [className])}>
			<div className={cls.MovieCard}>
				<img src={movie.poster.url as string} className={cls.poster} />
			</div>
		</Link>
	)
})
