import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCardRating.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"

export interface MovieCardRatingProps {
	className?: string
	rating: string
}

export const MovieCardRating = memo((props: MovieCardRatingProps) => {
	const { className, rating: rate } = props
	let movieRate: MovieRate = "medium"
	type MovieRate = "low" | "medium" | "high"

	const rating = Number(rate)

	if (rating) {
		movieRate = rating > 6.9 ? "high" : rating > 5 ? "medium" : "low"
	}

	return (
		<div>
			{rating ? (
				<div
					className={classNames(cls.MovieCardRating, {}, [
						className,
						cls[movieRate],
					])}
				>
					<Text text={rating.toFixed(1)} color="white" />
				</div>
			) : null}
		</div>
	)
})
