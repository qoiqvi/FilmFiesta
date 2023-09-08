import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByIdMainBlock.module.scss"
import { memo, useMemo } from "react"
import { Movie } from "entities/Movie"
import { StarIcon, Button } from "rambler-ui"
import { Text } from "shared/ui/Text"
import { Skeleton } from "shared/ui/Skeleton"

export interface FilmByIdMainBlockProps {
	className?: string
	movie: Movie
	isLoading: boolean
}

export const FilmByIdMainBlock = memo((props: FilmByIdMainBlockProps) => {
	const { className, movie, isLoading } = props
	console.log(movie)

	if (isLoading) {
		return (
			<>
				<div className={classNames(cls.movieHeader, {}, [className])}>
					<Skeleton className={cls.movieImg} />
					<div className={cls.info}>
						<Skeleton
							height={30}
							width={200}
						/>
						<div className={cls.block}>
							<Skeleton
								height={24}
								width={70}
							/>
							<Skeleton
								height={24}
								width={70}
							/>
							<Skeleton
								height={24}
								width={70}
							/>
						</div>
						<div className={cls.ratingBlock}>
							<StarIcon
								className={cls.starIcon}
								color="#315efb"
								size={30}
							/>
							<Skeleton
								height={24}
								width={40}
							/>
							<Skeleton
								height={24}
								width={40}
							/>
						</div>
						<div className={cls.btnContainer}>
							<Button
								disabled
								type="primary"
							>
								Смотреть
							</Button>
							<Button
								disabled
								type="primary"
							>
								Избранное
							</Button>
							<Button
								disabled
								type="primary"
							>
								Оценить
							</Button>
						</div>
					</div>
				</div>
				<div className={cls.description}>
					<Skeleton
						width={1000}
						height={130}
					/>
				</div>
			</>
		)
	}

	const countries = useMemo(
		() =>
			movie?.countries?.map((country) => (
				<Text
					key={country.name}
					text={country.name}
				/>
			)),
		[movie]
	)

	const genres = useMemo(
		() =>
			movie?.genres?.map((genre) => (
				<Text
					key={genre.name}
					text={genre.name}
				/>
			)),
		[movie]
	)

	return (
		<>
			<div className={classNames(cls.movieHeader, {}, [className])}>
				<img
					className={cls.movieImg}
					src={movie?.poster?.url as string}
				/>
				<div className={cls.info}>
					<Text
						size="size_l"
						title={movie?.name as string}
					></Text>
					{movie?.enName && (
						<Text
							size="size_m"
							title={movie?.enName as string}
						></Text>
					)}
					<div className={cls.block}>
						{movie?.year && <Text text={String(movie?.year)} />}
						{movie?.movieLength && <Text text={String(movie?.movieLength + " " + "мин")} />}
						{movie?.genres && genres}
						{movie?.countries && countries}
						{movie?.ageRating && <Text text={`${String(movie?.ageRating)}+`} />}
					</div>
					<div className={cls.ratingBlock}>
						<div className={cls.mainRating}>
							<StarIcon
								className={cls.starIcon}
								color="#315efb"
								size={30}
							/>
							<Text title={String(movie?.rating?.kp?.toFixed(1))} />
							{/* {movie?.rating?.imdb && <Text text={`imdb: ${movie.rating.imdb.toFixed(1)}`} />} */}
							{/* {movie?.rating?.tmdb && <Text text={`imdb: ${movie.rating.tmdb.toFixed(1)}`} />} */}
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
		</>
	)
})
