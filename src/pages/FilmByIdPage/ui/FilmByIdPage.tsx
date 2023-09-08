import cls from "./FilmByIdPage.module.scss"
import { useParams } from "react-router-dom"
import { SimilarMovies } from "features/SimilarMovies"
import { useFilmByIdQuery } from "../api"
import { PersonsList } from "features/PersonsList"
import { Page } from "widgets/Page"
import { FilmByIdMainBlock } from "./FilmByIdMainBlock/FilmByIdMainBlock"

const FilmByIdPage = () => {
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: movie } = useFilmByIdQuery(id)

	if (!movie) {
		return null
	}

	return (
		<Page className={cls.FilmByIdPage}>
			<FilmByIdMainBlock
				movie={movie}
				isLoading={isLoading}
			/>
			<PersonsList
				persons={movie?.persons}
				isLoading={isLoading}
			/>
			<SimilarMovies
				isLoading={isLoading}
				movie={movie}
			/>
		</Page>
	)
}

export default FilmByIdPage
