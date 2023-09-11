import { classNames } from "shared/lib/classNames/classNames"
import cls from "./RandomMovie.module.scss"
import { memo } from "react"
import { useRandomMovieQuery } from "../model/api/api"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"

export interface RandomMovieProps {
	className?: string
}

export const RandomMovie = memo((props: RandomMovieProps) => {
	const { className } = props
	const { isLoading, data: movie, refetch } = useRandomMovieQuery()

	return (
		<div className={classNames(cls.RandomMovie, {}, [className])}>
			<Text
				text={movie?.name ?? movie?.enName ?? movie?.alternativeName}
			/>
			<div className={cls.poster}>
				<img src={movie?.poster?.url || ""} className={cls.img} />
				<Button
					onClick={() => refetch()}
					className={cls.button}
					disabled={isLoading}
				>
					<Text text={"Попробовать удачу!"} />
				</Button>
			</div>
		</div>
	)
})
