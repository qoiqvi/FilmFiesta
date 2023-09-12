import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonByIdPage.module.scss"
import { useParams } from "react-router-dom"
import { usePersonByIdQuery } from "../model/api"
import { Text } from "shared/ui/Text"
import { Page } from "widgets/Page"
import { Spinner } from "shared/ui/Spinner"
import { FactsList } from "entities/Facts"
import { PersonByIdMovies } from "./PersonByIdMovies/PersonByIdMovies"
import { NotFoundPage } from "pages/NotFoundPage"

export interface PersonByIdPageProps {
	className?: string
}

const PersonByIdPage = (props: PersonByIdPageProps) => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: person } = usePersonByIdQuery(id)

	if (isLoading) {
		return <Spinner />
	}

	if (isError) {
		return <NotFoundPage />
	}

	if (!person) {
		return null
	}

	return (
		<Page className={classNames(cls.PersonByIdPage, {}, [className])}>
			<div className={cls.mainCont}>
				<img src={person?.photo as string} className={cls.photo} />
				{person.name && <Text title={person.name} />}
				{person.name && <Text text={person.enName} />}
				{person.facts?.length ? (
					<FactsList facts={person.facts} />
				) : null}
				<PersonByIdMovies movies={person.movies} />
			</div>
		</Page>
	)
}

export default PersonByIdPage
