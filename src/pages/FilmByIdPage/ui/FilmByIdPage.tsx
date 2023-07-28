import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByIdPage.module.scss"
import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { Movie } from "entities/Movie"
import { mockMovie, mockMovies } from "shared/lib/mocks/Movie"
import { Text } from "shared/ui/Text"
import { Button, StarIcon } from "rambler-ui"
import { Watchability } from "features/Watchability"
import { Data } from "entities/Movie/model/types/Movie"
import { Api } from "shared/api/api"
import { SimilarMovies } from "features/SimilarMovies"
import { useFilmByIdQuery } from "../api"

export interface FilmByIdPageProps {
	className?: string
}

const FilmByIdPage = (props: FilmByIdPageProps) => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: movie } = useFilmByIdQuery(id)
	const countries = useMemo(
		() => movie?.countries?.map((country) => <Text key={country.name} text={country.name} />),
		[movie]
	)
	const genres = useMemo(() => movie?.genres?.map((genre) => <Text key={genre.name} text={genre.name} />), [movie])

	return (
		<div className={classNames(cls.FilmByIdPage, {}, [className])}>
			<div className={cls.movieHeader}>
				<img className={cls.movieImg} src={movie?.poster?.url as string} />
				<div className={cls.info}>
					<Text size="size_l" title={movie?.name as string}></Text>
					{movie?.enName && <Text size="size_m" title={movie?.enName as string}></Text>}
					<div className={cls.block}>
						{movie?.year && <Text text={String(movie?.year)} />}
						{movie?.movieLength && <Text text={String(movie?.movieLength + " " + "мин")} />}
						{movie?.genres && genres}
						{movie?.countries && countries}
						{movie?.ageRating && <Text text={String(movie?.ageRating)} />}
					</div>
					<div className={cls.ratingBlock}>
						<div className={cls.mainRating}>
							<StarIcon className={cls.starIcon} color="#315efb" size={30} />
							<Text title={String(movie?.rating?.kp?.toFixed(1))} />
							{movie?.rating?.imdb && <Text text={`imdb: ${movie.rating.imdb.toFixed(1)}`} />}
							{movie?.rating?.tmdb && <Text text={`imdb: ${movie.rating.tmdb.toFixed(1)}`} />}
						</div>
					</div>
					<div className={cls.btnContainer}>
						<Button type="primary">Смотреть</Button>
						<Button type="primary">Избранное</Button>
						<Button type="primary">Оценить</Button>
					</div>
				</div>
			</div>
			<div className={cls.description}>
				<Text text={movie?.description as string} />
			</div>
			<div className={cls.actors}>
				{movie?.persons &&
					movie?.persons.map((person) => (
						<h1>
							{person.name}
							{person.description}
						</h1>
					))}
				{/* https://api.kinopoisk.dev/v1/person?page=1&limit=10&movies.name=1%2B1 */}
			</div>
			<SimilarMovies similarMovies={movie?.similarMovies} />
			<Watchability resources={movie?.watchability?.items} />
		</div>
	)
}

export default FilmByIdPage
