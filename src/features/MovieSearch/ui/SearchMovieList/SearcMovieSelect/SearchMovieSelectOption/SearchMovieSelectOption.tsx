import cls from "./SearchMovieSelectOption.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie"
import { Text } from "shared/ui/Text"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { MovieCardRating } from "entities/Rating"

export interface SearchMovieSelectOptionProps {
	className?: string
	movie: Movie
}

export const SearchMovieSelectOption = memo((props: SearchMovieSelectOptionProps) => {
	const { className, movie } = props
	console.log(movie)
	return (
		<Link
			to={`${RoutePath.film_by_id}${movie.id}`}
			className={classNames(cls.container, {}, [className])}
		>
			<img
				src={movie.poster as string}
				className={cls.poster}
			/>
			<div className={cls.content}>
				<Text
					text={`${movie.name || movie.alternativeName || movie.enName}, ${movie.year}`}
					className={cls.title}
				/>
				<MovieCardRating
					className={cls.rating}
					//@ts-ignore
					rating={movie.rating?.kp?.toFixed(1) || movie.rating?.toFixed(1) || movie.rating?.tmdb?.toFixed(1)}
				/>
			</div>
			<div className={cls.watch}>
				<Text
					size="size_m"
					text={"Смотреть"}
					// align="center"
					color="white"
				/>
			</div>
		</Link>
	)
})
