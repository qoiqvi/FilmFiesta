import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchMovieList.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie"

export interface SearchMovieListProps {
	className?: string
	movies: Movie[]
}

export const SearchMovieList = memo((props: SearchMovieListProps) => {
	const { className, movies } = props
	return (
		<div className={classNames(cls.SearchMovieList, {}, [className])}>
			<div>
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>{movie.name}</li>
					))}
				</ul>
			</div>
		</div>
	)
})
