import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonsList.module.scss"
import { memo } from "react"
import { PersonCard, PersonInMovie } from "entities/Person"
import { Text } from "shared/ui/Text"
import { Carousel } from "shared/ui/Carousel"
import { Skeleton } from "shared/ui/Skeleton"

export interface PersonsListProps {
	className?: string
	persons: PersonInMovie[] | undefined
	isLoading: boolean
}

export const PersonsList = memo((props: PersonsListProps) => {
	const { className, persons, isLoading } = props
	if (isLoading) {
		return (
			<Carousel>
				<div className={cls.PersonsList}>
					{new Array(9).fill(1).map((elem, i) => (
						<Skeleton height={200} width={150} key={i} />
					))}
				</div>
			</Carousel>
		)
	}
	if (!persons?.length) {
		return null
	}
	return (
		<>
			<Text title="Актеры и создатели" className={cls.title} />
			<Carousel>
				<div className={classNames(cls.PersonsList, {}, [className])}>
					{persons?.map((person, i) =>
						i < 9 ? (
							<PersonCard person={person} key={person.id} />
						) : null,
					)}
				</div>
			</Carousel>
		</>
	)
})
