import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenre.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { MovieCardsList } from "entities/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Skeleton } from "shared/ui/Skeleton"
import { useMoviesByGenreQuery } from "../../model/api"
import { MovieType } from "features/MovieFilter/model/types/MovieFilterSchema"

export interface MoviesByGenreProps {
	className?: string
	genre: string
	title?: string
	type?: MovieType
}

export const MoviesByGenre = memo((props: MoviesByGenreProps) => {
	const { className, genre = "ужасы", title, type = "movie" } = props

	const { isLoading, isError, data: movies } = useMoviesByGenreQuery({ genre: genre, limit: 5, type: type })

	if (isLoading) {
		return (
			<div>
				<Skeleton />
			</div>
		)
	}

	console.log(`${RoutePath.movies_by_genre}/${type}/${genre}`)

	return (
		<div className={classNames(cls.MovieByGenre, {}, [className])}>
			<Link to={`${RoutePath.movies_by_genre}${type}/${genre}`}>
				<Text
					title={title}
					className={cls.title}
				/>
			</Link>
			<MovieCardsList
				movies={movies?.docs}
				isLoading={false}
			/>
		</div>
	)
})
