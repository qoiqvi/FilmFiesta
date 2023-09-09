import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ShowAllCard.module.scss"
import { memo } from "react"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Text } from "shared/ui/Text"
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid"
import { MovieType } from "features/MovieFilter"

export interface ShowAllCardProps {
	className?: string
	isLoading: boolean
	genre: string
	type: MovieType
}

export const ShowAllCard = memo((props: ShowAllCardProps) => {
	const { className, isLoading, genre, type } = props

	if (isLoading) {
		return null
	}

	return (
		<div className={classNames(cls.ShowAllCard, {}, [className])}>
			<Link to={`${RoutePath.movies_by_genre}${type}/${genre}`}>
				<div className={cls.MovieCard}>
					<div className={cls.circle}>
						<ArrowSmallRightIcon
							className={cls.icon}
							color="white"
							// height={20}
							// width={20}
						/>
					</div>
					<Text text={"Показать все"} />
				</div>
			</Link>
		</div>
	)
})
