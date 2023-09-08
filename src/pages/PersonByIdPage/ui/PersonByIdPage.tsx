import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonByIdPage.module.scss"
import { useParams } from "react-router-dom"
import { usePersonByIdQuery } from "../api"
import { Text } from "shared/ui/Text"
import { Page } from "widgets/Page"

export interface PersonByIdPageProps {
	className?: string
}

const PersonByIdPage = (props: PersonByIdPageProps) => {
	const { className } = props
	const { id } = useParams<{ id: string }>()
	const { isError, isLoading, data: person } = usePersonByIdQuery(id)
	if (!person) null
	return (
		<Page className={classNames(cls.PersonByIdPage, {}, [className])}>
			<div>
				<img src={person?.photo as string} />
				{person?.facts?.map((fact) => (
					// <h1>{fact.value}</h1>
					<Text text={fact.value} />
				))}
				{person?.movies && person?.movies.map((movie) => <Text text={movie.name} />)}
			</div>
		</Page>
	)
}

export default PersonByIdPage
