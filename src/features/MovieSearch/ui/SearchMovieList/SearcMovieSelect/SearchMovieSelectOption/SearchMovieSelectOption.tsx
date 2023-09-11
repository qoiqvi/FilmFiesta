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

export const SearchMovieSelectOption = memo(
	(props: SearchMovieSelectOptionProps) => {
		const { className, movie } = props
		const isMovie = !movie.isSeries
		return (
			<Link
				to={`${RoutePath.film_by_id}${movie.id}`}
				className={classNames(cls.container, {}, [className])}
			>
				<img src={movie.poster as string} className={cls.poster} />
				<div className={cls.content}>
					<Text
						text={`${
							movie.name || movie.alternativeName || movie.enName
						}, ${
							isMovie
								? movie.year
								: movie.releaseYears?.[0].start +
								  "-" +
								  movie.releaseYears?.[0].end
						}`}
						className={cls.title}
					/>
				</div>
				<MovieCardRating
					className={cls.rating}
					rating={
						movie.rating?.kp?.toFixed(1) ||
						Number(movie.rating)?.toFixed(1) ||
						movie.rating?.tmdb?.toFixed(1) ||
						"5"
					}
				/>
			</Link>
		)
	},
)
