import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmByIdPage.module.scss"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text"
import { Watchability } from "features/Watchability"
import { SimilarMovies } from "features/SimilarMovies"
import { useFilmByIdQuery } from "../api"
import { PersonsList } from "features/PersonsList"
import { Page } from "widgets/Page"
import { FilmByIdMainBlock } from "./FilmByIdMainBlock/FilmByIdMainBlock"

export interface FilmByIdPageProps {
	className?: string
}

const FilmByIdPage = (props: FilmByIdPageProps) => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: movie } = useFilmByIdQuery(id)
	console.log(movie?.videos)
	return (
		<Page className={classNames(cls.FilmByIdPage, {}, [className])}>
			<FilmByIdMainBlock movie={movie} />
			<div className={cls.description}>
				<Text text={movie?.description as string} />
			</div>
			<PersonsList persons={movie?.persons} />
			<SimilarMovies similarMovies={movie?.similarMovies} />
			<Watchability resources={movie?.watchability?.items} />
		</Page>
	)
}

export default FilmByIdPage
