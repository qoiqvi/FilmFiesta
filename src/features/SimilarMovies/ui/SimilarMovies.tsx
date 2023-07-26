import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovies.module.scss"
import { memo } from "react"
import { useSimilarMoviesQuery } from "../api"
import { Data, Movie } from "entities/Movie/model/types/Movie"
import { Api } from "shared/api/api"

export interface SimilarMoviesProps {
	className?: string
	movieId: number | undefined
}

export const SimilarMovies = memo((props: SimilarMoviesProps) => {
	const { className, movieId } = props
	// Api.get("movie?page=1&limit=10&id=444,123").then((data) => console.log(data))
	const { isError, isLoading, data: similarMovies } = useSimilarMoviesQuery(movieId)
	// console.log(similarMovies?.docs.map((elem) => elem.id))
	console.log(similarMovies)
	return <div className={classNames(cls.SimilarMovies, {}, [className])}></div>
})
