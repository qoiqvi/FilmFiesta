import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByNamePage.module.scss"
import { memo, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Movie } from "entities/Movie"
import { Api } from "shared/api/api"

export interface FilmByNamePageProps {
	className?: string
}

const FilmByNamePage = (props: FilmByNamePageProps) => {
	const { className } = props
	const { enName } = useParams<{ enName: string }>()
	const [movie, setMovie] = useState<Movie>()
	useEffect(() => {
		;(async () => {
			const response = await Api.get(`/movie?page=1&limit=1&enName=${enName}`)
			setMovie(response.data)
		})()
	}, [])

	return (
		<div className={classNames(cls.FilmByNamePage, {}, [className])}>
			<h1>{movie?.name}</h1>
			<h2>{movie?.enName}</h2>
			<img src={movie?.poster?.url as string} />
		</div>
	)
}

export default memo(FilmByNamePage)
