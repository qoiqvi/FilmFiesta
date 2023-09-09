import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCardRating.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"

export interface MovieCardRatingProps {
	className?: string
	rating: number | undefined
}

export const MovieCardRating = memo((props: MovieCardRatingProps) => {
	const { className, rating } = props
	let movieRate: MovieRate = "medium"
	type MovieRate = "low" | "medium" | "high"

	if (rating) {
		movieRate = rating > 7 ? "high" : rating > 5 ? "medium" : "low"
	}

	return (
		<>
			{rating ? (
				<div className={classNames(cls.MovieCardRating, {}, [className, cls[movieRate]])}>
					<Text
						text={rating.toString()}
						color="white"
					/>
				</div>
			) : null}
		</>
	)
})
