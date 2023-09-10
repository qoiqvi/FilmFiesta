import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovies.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { Movie, MovieCard } from "entities/Movie"
import { Carousel } from "shared/ui/Carousel"
import { Skeleton } from "shared/ui/Skeleton"

export interface SimilarMoviesProps {
	className?: string
	isLoading: boolean
	movie: Movie
	isSeries: boolean
}

export const SimilarMovies = memo((props: SimilarMoviesProps) => {
	const { className, movie, isLoading, isSeries } = props
	if (isLoading) {
		return (
			<div className={cls.SimilarMovies}>
				{new Array(9).fill(1).map((elem, i) => (
					<Skeleton height={300} width={200} key={i} />
				))}
			</div>
		)
	}
	return (
		<>
			<Text
				title={`С ${isSeries ? "сериалом" : "фильмом"} «${
					movie.name
				}» смотрят`}
				className={cls.title}
			/>
			<Carousel>
				<div className={classNames(cls.SimilarMovies, {}, [className])}>
					{movie.similarMovies?.map((movie) => (
						<MovieCard movie={movie as Movie} rating={false} />
					))}
				</div>
			</Carousel>
			{movie.sequelsAndPrequels?.length ? (
				<>
					<Text title={`Сиквелы и приквелы `} className={cls.title} />
					<Carousel>
						<div
							className={classNames(cls.SimilarMovies, {}, [
								className,
							])}
						>
							{movie.sequelsAndPrequels?.map((movie) => (
								<MovieCard
									movie={movie as Movie}
									rating={false}
								/>
							))}
						</div>
					</Carousel>
				</>
			) : null}
		</>
	)
})
