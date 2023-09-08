import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCardRating.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"

export interface MovieCardRatingProps {
	className?: string
	rating: number
}

export const MovieCardRating = memo((props: MovieCardRatingProps) => {
	const { className, rating } = props
	type MovieRate = "low" | "medium" | "high"
	const movieRate: MovieRate = rating > 7 ? "high" : rating > 5 ? "medium" : "low"

	return (
		<div className={classNames(cls.MovieCardRating, {}, [className, cls[movieRate]])}>
			<Text
				text={rating.toString()}
				color="white"
			/>
		</div>
	)
})
