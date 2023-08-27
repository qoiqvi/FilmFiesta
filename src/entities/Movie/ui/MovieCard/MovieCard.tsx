import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCard.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie/model/types/Movie"
import { Link } from "react-router-dom"
import { RoutePath, routeConfig } from "shared/config/routeConfig/routeConfig"
import { useHover } from "shared/hooks/useHover/useHover"
import { Text } from "shared/ui/Text"

export interface MovieCardProps {
	className?: string
	movie: Movie
}

export const MovieCard = memo((props: MovieCardProps) => {
	const { className, movie } = props
	const [isHover, binds] = useHover()

	const mods: Mods = {
		[cls["hovered"]]: isHover,
	}

	return (
		<Link
			to={`${RoutePath.film_by_id}${movie.id}`}
			{...binds}
		>
			<div className={classNames(cls.MovieCard, mods, [className])}>
				<img
					width={200}
					height={200}
					src={movie.poster?.previewUrl as string}
					className={cls.poster}
				/>
				{isHover && (
					<Text
						color="white"
						align="center"
						className={cls.rating}
						text={movie.rating?.kp?.toFixed(1)}
					/>
				)}
			</div>
		</Link>
	)
})
