import cls from "./FilmByIdPage.module.scss"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text"
import { Watchability } from "features/Watchability"
import { SimilarMovies } from "features/SimilarMovies"
import { useFilmByIdQuery } from "../api"
import { PersonsList } from "features/PersonsList"
import { Page } from "widgets/Page"
import { FilmByIdMainBlock } from "./FilmByIdMainBlock/FilmByIdMainBlock"

const FilmByIdPage = () => {
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: movie } = useFilmByIdQuery(id)
	return (
		<Page className={cls.FilmByIdPage}>
			<FilmByIdMainBlock movie={movie} />
			<div className={cls.description}>
				<Text text={movie?.description as string} />
			</div>
			<PersonsList persons={movie?.persons} />
			<SimilarMovies
				isLoading={isLoading}
				similarMovies={movie?.similarMovies}
			/>
		</Page>
	)
}

export default FilmByIdPage
