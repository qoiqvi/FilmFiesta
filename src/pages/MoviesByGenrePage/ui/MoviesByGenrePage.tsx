import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenrePage.module.scss"
import { memo, useEffect, useState } from "react"
import { Api } from "shared/api/api"
import { useParams } from "react-router-dom"
import { MovieGenres } from "features/MovieSearch/model/types/MovieSearchSchema"
import { Movie } from "entities/Movie"
import { useFetchMoviesByGenreQuery } from "features/MoviesByGenre"

export interface MoviesByGenrePageProps {
	className?: string
}

const MoviesByGenrePage = memo((props: MoviesByGenrePageProps) => {
	const { className } = props
	const { genre } = useParams<{ genre: MovieGenres }>()
	const { isLoading, isError, data: movies } = useFetchMoviesByGenreQuery({ genre: genre as MovieGenres, limit: 20 })

	return <div className={classNames(cls.MoviesByGenrePage, {}, [className])}></div>
})

export default MoviesByGenrePage
