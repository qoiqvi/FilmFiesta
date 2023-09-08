import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovies.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { getSkeletonsArray } from "shared/lib/utils/getSkeletonsArray/getSkeletonsArray"
import { Movie, MovieCard } from "entities/Movie"
import { Carousel } from "shared/ui/Carousel"

export interface SimilarMoviesProps {
	className?: string
	isLoading: boolean
	movie: Movie
}

export const SimilarMovies = memo((props: SimilarMoviesProps) => {
	const { className, movie, isLoading } = props
	if (isLoading) {
		return (
			<div className={cls.SimilarMovies}>
				<>{getSkeletonsArray({ length: 10, height: 200, width: 300 })}</>
			</div>
		)
	}
	return (
		<>
			<Text
				title={`С фильмом «${movie.name}» смотрят`}
				className={cls.title}
			/>
			<Carousel>
				<div className={classNames(cls.SimilarMovies, {}, [className])}>
					{movie.similarMovies?.map((movie) => (
						<MovieCard
							movie={movie as Movie}
							rating={false}
						/>
					))}
				</div>
			</Carousel>
		</>
	)
})
