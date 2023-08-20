import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SimilarMovies.module.scss"
import { memo } from "react"
import { SimilarMovie } from "../../model/types"
import { SimilarMovieItem } from "../SimilarMovieItem/SimilarMovieItem"
import { Text } from "shared/ui/Text"
import { Skeleton } from "shared/ui/Skeleton"
import { getSkeletonsArray } from "shared/lib/utils/getSkeletonsArray/getSkeletonsArray"

export interface SimilarMoviesProps {
	className?: string
	isLoading: boolean
	similarMovies: SimilarMovie[] | undefined
}

export const SimilarMovies = memo((props: SimilarMoviesProps) => {
	const { className, similarMovies, isLoading } = props
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
				title="Похожие фильмы:"
				className={cls.title}
			/>
			<div className={classNames(cls.SimilarMovies, {}, [className])}>
				{similarMovies?.map((movie) => (
					<SimilarMovieItem movie={movie} />
				))}
			</div>
		</>
	)
})
