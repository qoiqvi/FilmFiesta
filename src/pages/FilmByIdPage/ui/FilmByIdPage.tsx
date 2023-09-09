import cls from "./FilmByIdPage.module.scss"
import { useParams } from "react-router-dom"
import { SimilarMovies } from "features/SimilarMovies"
import { useFilmByIdQuery } from "../api"
import { PersonsList } from "features/PersonsList"
import { Page } from "widgets/Page"
import { FilmByIdMainBlock } from "./FilmByIdMainBlock/FilmByIdMainBlock"
import { FactsList } from "entities/Facts"
import { NotFoundPage } from "pages/NotFoundPage"

const FilmByIdPage = () => {
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: movie } = useFilmByIdQuery(id)

	const isSeries = movie?.isSeries ?? false

	if (!movie) {
		return <NotFoundPage />
	}

	return (
		<Page className={cls.FilmByIdPage}>
			<FilmByIdMainBlock
				isSeries={isSeries}
				movie={movie}
				isLoading={isLoading}
			/>
			<PersonsList
				persons={movie?.persons}
				isLoading={isLoading}
			/>
			<FactsList facts={movie.facts} />
			<SimilarMovies
				isSeries={isSeries}
				isLoading={isLoading}
				movie={movie}
			/>
		</Page>
	)
}

export default FilmByIdPage
