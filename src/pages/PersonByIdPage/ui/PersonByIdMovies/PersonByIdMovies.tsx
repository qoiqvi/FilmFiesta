import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonByIdMovies.module.scss"
import { memo, useState } from "react"
import { MovieCardRating } from "entities/Rating"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Text } from "shared/ui/Text"
import { MovieInPerson } from "pages/PersonByIdPage/model/types"
import { Button } from "shared/ui/Button"

export interface PersonByIdMoviesProps {
	className?: string
	movies: MovieInPerson[] | undefined
}

export const PersonByIdMovies = memo((props: PersonByIdMoviesProps) => {
	const { className, movies } = props
	const [collapsed, setCollapsed] = useState(true)

	if (!movies) {
		return null
	}

	const collapsedMovies = collapsed ? movies.slice(0, 5) : movies

	return (
		<div className={classNames(cls.PersonByIdMovies, {}, [className])}>
			<Text title="Фильмы"></Text>
			{collapsedMovies?.map((movie) => (
				<Link to={`${RoutePath.film_by_id}${movie.id}`}>
					<div key={movie.id} className={cls.item}>
						<Text text={movie.name || movie.alternativeName} />
						{/* <Text text={movie?.enProfession} /> */}
						<div className={cls.rating}>
							<MovieCardRating
								rating={movie.rating?.toFixed(1) || ""}
							/>
						</div>
					</div>
				</Link>
			))}
			{movies.length > 5 ? (
				<Button
					theme="clear"
					onClick={() => setCollapsed(!collapsed)}
					className={cls.btn}
				>
					<span className={cls.btn}>
						{collapsed
							? `Развернуть (${movies.length})`
							: "Свернуть"}
					</span>
				</Button>
			) : null}
		</div>
	)
})
