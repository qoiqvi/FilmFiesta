import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenre.module.scss"
import { memo, useEffect, useState } from "react"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByGenre } from "../../model/services/fetchMoviesByGenre"
import { useSelector } from "react-redux"
import { getMoviesByGenre, getMoviesByGenreError, getMoviesByGenreIsLoading } from "../../model/selectors"
import { Text } from "shared/ui/Text"
import { Movie, MovieCardsList } from "entities/Movie"
import { $api } from "shared/api/api"
import { Data } from "entities/Movie/model/types/Movie"

export interface MoviesByGenreProps {
	className?: string
	genre: string | string[]
	title?: string
}

export const MoviesByGenre = memo((props: MoviesByGenreProps) => {
	const { className, genre, title } = props
	const [movies, setMovies] = useState<Movie[]>([])
	const dispatch = useAppDispatch()
	// const movies = useSelector(getMoviesByGenre)
	const isLoading = useSelector(getMoviesByGenreIsLoading)
	const error = useSelector(getMoviesByGenreError)

	useEffect(() => {
		;(async () => {
			const respone = await $api.get<Data<Movie>>(`/movie?limit=5&page=1&genres.name=${genre}`)
			setMovies(respone.data.docs)
		})()
	}, [genre])
	console.log(movies)
	return (
		<div className={classNames(cls.MovieByGenre, {}, [className])}>
			<Text title={title} />
			<MovieCardsList movies={movies} isLoading={isLoading} />
		</div>
	)
})
