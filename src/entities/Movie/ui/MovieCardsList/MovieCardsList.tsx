import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCardsList.module.scss"
import { memo } from "react"
import { Data, Movie } from "../../model/types/Movie"
import { MovieCard } from "../MovieCard/MovieCard"
import { Skeleton } from "shared/ui/Skeleton"

export interface MovieCardsListProps {
	className?: string
	movies: Movie[] | undefined
	isLoading: boolean | undefined
}

export const MovieCardsList = memo((props: MovieCardsListProps) => {
	const { className, isLoading, movies } = props

	const getSkeletons = () =>
		new Array(20).fill(0).map((_, index) => (
			<Skeleton
				key={index}
				height={200}
				width={200}
			/>
		))

	if (isLoading) {
		return <div className={classNames(cls.MovieCardsList, {}, [className])}>{getSkeletons()}</div>
	}
	return (
		<div className={classNames(cls.MovieCardsList, {}, [className])}>
			{movies &&
				movies.map((movie) => (
					<MovieCard
						movie={movie}
						key={movie.id}
					/>
				))}
		</div>
	)
})
