import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenre.module.scss"
import { memo, useEffect } from "react"
import { Text } from "shared/ui/Text"
import { MovieCardsList } from "entities/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Skeleton } from "shared/ui/Skeleton"
import { type } from "features/MovieSearch/model/types/MovieSearchSchema"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByGenre } from "../../model/services/fetchMoviesByGenre"
import { useSelector } from "react-redux"
import { getMoviesByGenre } from "../../model/slice/MoviesByGenreSlice"
import { getMoviesByGenreIsLoading } from "../../model/selectors"

export interface MoviesByGenreProps {
	className?: string
	genre: string
	title?: string
	type?: type
}

export const MoviesByGenre = memo((props: MoviesByGenreProps) => {
	const { className, genre, title, type = "movie" } = props
	const dispatch = useAppDispatch()
	const movies = useSelector(getMoviesByGenre.selectAll)
	const isLoading = useSelector(getMoviesByGenreIsLoading)

	useEffect(() => {
		dispatch(fetchMoviesByGenre({ genre: genre, limit: 5, type: type, page: 1 }))
	}, [dispatch])

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
				movies={movies}
				isLoading={false}
			/>
		</div>
	)
})
