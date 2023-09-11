import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByIdMainBlock.module.scss"
import { memo, useMemo } from "react"
import { Movie } from "entities/Movie"
import { Text } from "shared/ui/Text"
import { Skeleton } from "shared/ui/Skeleton"
import { Button } from "shared/ui/Button"
import { StarIcon } from "@heroicons/react/20/solid"

export interface FilmByIdMainBlockProps {
	className?: string
	movie: Movie
	isLoading: boolean
	isSeries: boolean
}

export const FilmByIdMainBlock = memo((props: FilmByIdMainBlockProps) => {
	const { className, movie, isLoading, isSeries } = props

	if (isLoading) {
		return (
			<>
				<div className={classNames(cls.movieHeader, {}, [className])}>
					<Skeleton className={cls.movieImg} />
					<div className={cls.info}>
						<Skeleton height={30} width={200} />
						<div className={cls.block}>
							<Skeleton height={24} width={70} />
							<Skeleton height={24} width={70} />
							<Skeleton height={24} width={70} />
						</div>
						<div className={cls.ratingBlock}>
							<StarIcon
								className={cls.starIcon}
								color="#315efb"
								height={30}
								width={30}
							/>
							<Skeleton height={24} width={40} />
							<Skeleton height={24} width={40} />
						</div>
						<div className={cls.btnContainer}>
							<Button disabled>Смотреть</Button>
							<Button disabled>Избранное</Button>
							<Button disabled>Оценить</Button>
						</div>
					</div>
				</div>
				<div className={cls.description}>
					<Skeleton width={1000} height={130} />
				</div>
			</>
		)
	}

	const countries = useMemo(
		() =>
			movie?.countries?.map((country, i) => {
				let countries: string[] = []
				if (i < 4 && country.name) {
					countries.push(country?.name)
				}
				return countries.join(", ")
			}),
		[movie],
	)

	const genres = useMemo(
		() =>
			movie?.genres?.map((genre, i) => {
				let genres = []
				if (i < 4 && genre.name) {
					genres.push(genre?.name)
				}
				return genres.join(", ")
			}),
		[movie],
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
						size="size_m"
						title={
							movie?.name ||
							movie.alternativeName ||
							movie.enName ||
							"<Название отсутствует>"
						}
					></Text>
					{movie?.slogan && (
						<Text size="size_m" text={movie.slogan}></Text>
					)}
					<div className={cls.block}>
						<Text
							size="size_m"
							text={`${
								isSeries
									? `${movie?.releaseYears?.[0].start} - ${
											movie?.releaseYears?.[0].end ||
											"..."
									  }`
									: movie.year
							}  |  ${
								isSeries
									? movie.seriesLength
									: movie?.movieLength
							} мин  |  ${genres} |  ${countries} | ${
								movie.ageRating || "6"
							}+`}
						/>
					</div>
					<div className={cls.ratingBlock}>
						<div className={cls.mainRating}>
							<StarIcon
								className={cls.starIcon}
								color="#315efb"
								height={30}
								width={30}
							/>
							<Text
								title={String(movie?.rating?.kp?.toFixed(1))}
							/>
						</div>
					</div>
					<div className={cls.btnContainer}>
						<Button>Смотреть</Button>
						<Button>Избранное</Button>
						<Button>Оценить</Button>
					</div>
				</div>
			</div>
			<Text title="Описание:" className={cls.description} />
			<Text text={movie.description} />
		</>
	)
})
