import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCard.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie/model/types/Movie"

export interface MovieCardProps {
	className?: string
	movie: Movie
}

export const MovieCard = memo((props: MovieCardProps) => {
	const { className, movie } = props
	return (
		<div className={classNames(cls.MovieCard, {}, [className])}>
			<h1>{movie.name}</h1>
			<img width={200} height={200} src={movie.logo?.url as string} />
		</div>
	)
})
