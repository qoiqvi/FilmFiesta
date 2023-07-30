import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByIdMainBlock.module.scss"
import { memo, useMemo } from "react"
import { Movie } from "entities/Movie"
import { StarIcon, Button } from "rambler-ui"
import { Text } from "shared/ui/Text"

export interface FilmByIdMainBlockProps {
	className?: string
	movie: Movie | undefined
}

export const FilmByIdMainBlock = memo((props: FilmByIdMainBlockProps) => {
	const { className, movie } = props

	const countries = useMemo(
		() => movie?.countries?.map((country) => <Text key={country.name} text={country.name} />),
		[movie]
	)
	const genres = useMemo(() => movie?.genres?.map((genre) => <Text key={genre.name} text={genre.name} />), [movie])
	return (
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
	)
})
