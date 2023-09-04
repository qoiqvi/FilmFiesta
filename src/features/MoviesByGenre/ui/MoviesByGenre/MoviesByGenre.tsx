import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenre.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { MovieCardsList } from "entities/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useFetchMoviesByGenreQuery } from "features/MoviesByGenre/api"
import { Skeleton } from "shared/ui/Skeleton"
import { type } from "features/MovieSearch/model/types/MovieSearchSchema"

export interface MoviesByGenreProps {
	className?: string
	genre: string
	title?: string
	type?: type
}

export const MoviesByGenre = memo((props: MoviesByGenreProps) => {
	const { className, genre, title, type } = props
	const {
		isLoading,
		isError,
		data: movies,
	} = useFetchMoviesByGenreQuery({ genre: genre, limit: 5, type: type }, { refetchOnMountOrArgChange: true })
	if (isLoading) {
		return (
			<div>
				<Skeleton />
			</div>
		)
	}
	return (
		<div className={classNames(cls.MovieByGenre, {}, [className])}>
			<Link to={`${RoutePath.movies_by_genre}${genre}`}>
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
