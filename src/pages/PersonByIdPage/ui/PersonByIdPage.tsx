import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonByIdPage.module.scss"
import { memo } from "react"
import { PersonInMovie } from "entities/Person/model/types/Person"
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
	return (
		<Page className={classNames(cls.PersonByIdPage, {}, [className])}>
			<div>
				<img src={person?.photo as string} />
				{person?.facts?.map((fact) => (
					// <h1>{fact.value}</h1>
					<Text text={fact.value} />
				))}
			</div>
		</Page>
	)
}

export default PersonByIdPage
