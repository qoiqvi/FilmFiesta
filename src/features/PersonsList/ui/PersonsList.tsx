import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonsList.module.scss"
import { memo } from "react"
import { PersonInMovie } from "entities/Movie/model/types/Movie"
import { PersonCard } from "entities/Person"
import { Text } from "shared/ui/Text"
import { Carousel } from "shared/ui/Carousel"

export interface PersonsListProps {
	className?: string
	persons: PersonInMovie[] | undefined
	isLoading: boolean
}

export const PersonsList = memo((props: PersonsListProps) => {
	const { className, persons, isLoading } = props
	return (
		<>
			<Text
				title="Актеры и создатели"
				className={cls.title}
			/>
			<Carousel>
				<div className={classNames(cls.PersonsList, {}, [className])}>
					{persons?.map((person, i) =>
						i < 9 ? (
							<PersonCard
								person={person}
								key={person.id}
							/>
						) : null
					)}
				</div>
			</Carousel>
		</>
	)
})
