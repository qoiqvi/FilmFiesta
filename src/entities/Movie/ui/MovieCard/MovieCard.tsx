import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCard.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie/model/types/Movie"
import { Link } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

export interface MovieCardProps {
	className?: string
	movie: Movie
}

export const MovieCard = memo((props: MovieCardProps) => {
	const { className, movie } = props
	return (
		// <Link to={`${routeConfig.film}/${movie.enName}`}>
		// <Link to={`film/${movie.enName}`}>
		<Link to={`film/django`}>
			<div className={classNames(cls.MovieCard, {}, [className])}>
				<img width={200} height={200} src={movie.poster?.previewUrl as string} className={cls.poster} />
				<h3 className={cls.rating}>{movie.rating?.kp?.toFixed(1)}</h3>
			</div>
		</Link>
	)
})
