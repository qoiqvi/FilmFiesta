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
	const { name } = useParams<{ name: string }>()
	const [movie, setMovie] = useState<Movie[]>()
	useEffect(() => {
		;(async () => {
			const response = await Api.get(`/movie?page=1&limit=1&name=${name}`)
			console.log(response.data.docs)
			setMovie(response.data.docs)
		})()
	}, [])

	return (
		<div className={classNames(cls.FilmByNamePage, {}, [className])}>
			{movie?.map((elem) => (
				<div>
					<h1>{elem.name}</h1>
					<h2>{elem?.enName}</h2>
					<img src={elem?.poster?.url as string} />
				</div>
			))}
		</div>
	)
}

export default FilmByNamePage
