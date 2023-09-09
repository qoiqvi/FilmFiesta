import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonByIdPage.module.scss"
import { Link, useParams } from "react-router-dom"
import { usePersonByIdQuery } from "../model/api"
import { Text } from "shared/ui/Text"
import { Page } from "widgets/Page"
import { NotFoundPage } from "pages/NotFoundPage"
import { Spinner } from "shared/ui/Spinner"
import { FactsList } from "entities/Facts"
import { Movie } from "entities/Movie"
import { PersonMovieListItem } from "./PersonMovieListItem/PersonMovieListItem"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { MovieCardRating } from "entities/Rating"

export interface PersonByIdPageProps {
	className?: string
}

const PersonByIdPage = (props: PersonByIdPageProps) => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: person } = usePersonByIdQuery(id)
	console.log(person)

	if (isLoading) {
		return <Spinner />
	}

	if (!person) {
		return <NotFoundPage />
	}

	return (
		<Page className={classNames(cls.PersonByIdPage, {}, [className])}>
			<div className={cls.mainCont}>
				<img
					src={person?.photo as string}
					className={cls.photo}
				/>
				{person.name && <Text title={person.name} />}
				{person.name && <Text text={person.enName} />}
				{person.facts?.length ? <FactsList facts={person.facts} /> : null}
				<Text title="Фильмы"></Text>
				{person.movies?.map((movie) => (
					<div
						key={movie.id}
						className={cls.cont}
					>
						<Link
							to={`${RoutePath.film_by_id}${movie.id}`}
							className={cls.item}
						>
							<Text text={movie.name || movie.alternativeName} />
							<MovieCardRating
								className={cls.rating}
								rating={Number(movie.rating?.toFixed(1)) || undefined}
							/>
						</Link>
					</div>
				))}
			</div>
		</Page>
	)
}

export default PersonByIdPage
