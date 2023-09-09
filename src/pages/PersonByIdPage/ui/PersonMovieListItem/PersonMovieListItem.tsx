import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonMovieListItem.module.scss"
import { memo } from "react"
import { MovieCardRating } from "entities/Rating"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { MovieInPerson } from "../../model/types"
import { Text } from "shared/ui/Text"

export interface PersonMovieListItemProps {
	className?: string
	movie: MovieInPerson
}

export const PersonMovieListItem = memo((props: PersonMovieListItemProps) => {
	const { className, movie } = props
	return (
		<Link
			to={`${RoutePath.film_by_id}${movie.id}`}
			className={classNames(cls.PersonMovieListItem, {}, [className])}
		>
			<div className={cls.content}>
				<Text
					text={`${movie.name || movie.alternativeName}`}
					className={cls.title}
				/>
				<MovieCardRating
					className={cls.rating}
					rating={Number(movie.rating?.toFixed(1)) || undefined}
				/>
			</div>
			<div className={cls.watch}>
				<Text
					size="size_m"
					text={"Смотреть"}
					color="white"
				/>
			</div>
		</Link>
	)
})
