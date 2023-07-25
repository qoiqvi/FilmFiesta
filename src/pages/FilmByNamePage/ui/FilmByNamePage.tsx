import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByNamePage.module.scss"
import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { Movie } from "entities/Movie"
import { mockMovie, mockMovies } from "shared/lib/mocks/Movie"
import { Text } from "shared/ui/Text"
import { Button, StarIcon } from "rambler-ui"
import { Watchability } from "features/Watchability"
import { Data } from "entities/Movie/model/types/Movie"
import { Api } from "shared/api/api"

export interface FilmByNamePageProps {
	className?: string
}

const FilmByNamePage = (props: FilmByNamePageProps) => {
	const { className } = props
	const { name } = useParams<{ name: string }>()
	const [movie, setMovie] = useState<Movie>()
	useEffect(() => {
		;(async () => {
			const response = await Api.get<Data<Movie>>(`/movie?page=1&limit=1&name=${name}`)
			setMovie(response.data.docs[0])
		})()
		// setMovie(mockMovie)
	}, [])

	const countries = useMemo(() => movie?.countries?.map((country) => <Text text={country.name} />), [movie])
	const genres = useMemo(() => movie?.genres?.map((genre) => <Text text={genre.name} />), [movie])

	return (
		<div className={classNames(cls.FilmByNamePage, {}, [className])}>
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
			<Watchability resources={movie?.watchability?.items} />
		</div>
	)
}

export default FilmByNamePage
