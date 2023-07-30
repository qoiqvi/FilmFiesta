import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonsList.module.scss"
import { memo, useState } from "react"
import { PersonInMovie } from "entities/Movie/model/types/Movie"
import { PersonCard } from "entities/Person"

export interface PersonsListProps {
	className?: string
	persons: PersonInMovie[] | undefined
}

export const PersonsList = memo((props: PersonsListProps) => {
	const { className, persons } = props
	const [collapsed, setCollapsed] = useState(true)
	return (
		<div className={classNames(cls.PersonsList, {}, [className])}>
			{persons?.map((person) => (
				<PersonCard person={person} />
			))}
		</div>
	)
})
