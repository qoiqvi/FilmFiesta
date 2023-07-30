import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenrePage.module.scss"
import { memo, useEffect, useState } from "react"
import { Api } from "shared/api/api"
import { useParams } from "react-router-dom"
import { MovieGenres } from "features/MovieSearch/model/types/MovieSearchSchema"
import { Movie, MovieCardsList } from "entities/Movie"
import { useFetchMoviesByGenreQuery } from "features/MoviesByGenre"
import { Page } from "widgets/Page"

export interface MoviesByGenrePageProps {
	className?: string
}

const MoviesByGenrePage = memo((props: MoviesByGenrePageProps) => {
	const { className } = props
	const { genre } = useParams<{ genre: MovieGenres }>()
	const { isLoading, isError, data: movies } = useFetchMoviesByGenreQuery({ genre: genre as MovieGenres, limit: 20 })

	return (
		<Page className={classNames(cls.MoviesByGenrePage, {}, [className])}>
			<MovieCardsList movies={movies} isLoading={isLoading} />
		</Page>
	)
})

export default MoviesByGenrePage
