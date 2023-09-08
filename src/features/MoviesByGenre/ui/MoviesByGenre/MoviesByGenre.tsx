import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenre.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { MovieCard, MovieCardsList } from "entities/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Skeleton } from "shared/ui/Skeleton"
import { useMoviesByGenreQuery } from "../../model/api"
import { MovieType } from "features/MovieFilter"
import { Carousel } from "shared/ui/Carousel"
import { ShowAllCard } from "./ShowAllCard/ShowAllCard"

export interface MoviesByGenreProps {
	className?: string
	genre: string
	title?: string
	type?: MovieType
}

export const MoviesByGenre = memo((props: MoviesByGenreProps) => {
	const { className, genre = "ужасы", title, type = "movie" } = props

	const { isLoading, isError, data: movies } = useMoviesByGenreQuery({ genre: genre, limit: 10, type: type })

	const getSkeletons = () =>
		new Array(7).fill(1).map((_, index) => (
			<Skeleton
				key={index}
				height={300}
				width={200}
			/>
		))

	if (isLoading) {
		return (
			<div className={classNames(cls.MovieByGenre, {}, [className])}>
				<Skeleton
					className={cls.title}
					height={30}
					width={150}
				/>
				<Carousel>
					<div className={cls.container}>{getSkeletons()}</div>
				</Carousel>
			</div>
		)
	}

	return (
		<div className={classNames(cls.MovieByGenre, {}, [className])}>
			<Link to={`${RoutePath.movies_by_genre}${type}/${genre}`}>
				<Text
					title={`${title}>`}
					className={cls.title}
				/>
			</Link>
			<Carousel>
				<div className={cls.container}>
					{movies?.docs.map((movie) => (
						<MovieCard
							movie={movie}
							key={movie.id}
						/>
					))}
					<ShowAllCard
						type={type}
						isLoading={isLoading}
						genre={genre}
					/>
				</div>
			</Carousel>
		</div>
	)
})
