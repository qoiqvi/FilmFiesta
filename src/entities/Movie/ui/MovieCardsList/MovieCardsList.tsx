import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCardsList.module.scss"
import { memo } from "react"
import { Data, Movie } from "../../model/types/Movie"
import { MovieCard } from "../MovieCard/MovieCard"

export interface MovieCardsListProps {
	className?: string
	movies: Data<Movie> | undefined
	isLoading: boolean | undefined
}

export const MovieCardsList = memo((props: MovieCardsListProps) => {
	const { className, isLoading, movies } = props
	return (
		<div className={classNames(cls.MovieCardsList, {}, [className])}>
			{movies &&
				movies.docs.map((movie) => (
					<MovieCard
						movie={movie}
						key={movie.id}
					/>
				))}
		</div>
	)
})
