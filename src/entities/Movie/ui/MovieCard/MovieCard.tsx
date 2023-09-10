import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCard.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie/model/types/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useHover } from "shared/hooks/useHover/useHover"
import { MovieCardRating } from "entities/Rating"

export interface MovieCardProps {
	className?: string
	movie: Movie
	rating?: boolean
}

export const MovieCard = memo((props: MovieCardProps) => {
	const { className, movie, rating = true } = props
	const [isHover, binds] = useHover()

	const mods: Mods = {
		[cls["hovered"]]: isHover,
	}

	return (
		<Link to={`${RoutePath.film_by_id}${movie.id}`} {...binds}>
			<div className={classNames(cls.MovieCard, mods, [className])}>
				<img
					src={movie.poster?.previewUrl as string}
					className={cls.poster}
				/>
				{rating && (
					<MovieCardRating
						className={cls.rating}
						rating={
							movie.rating?.kp?.toFixed(1) ||
							movie.rating?.tmdb?.toFixed(1) ||
							//@ts-ignore
							movie.rating?.toFixed(1) ||
							"5.0"
						}
					/>
				)}
			</div>
		</Link>
	)
})
