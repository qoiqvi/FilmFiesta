import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonCard.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { PersonInMovie } from "entities/Movie/model/types/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface PersonCardProps {
	className?: string
	person: PersonInMovie
}

export const PersonCard = memo((props: PersonCardProps) => {
	const { className, person } = props
	return (
		<Link to={RoutePath.person_by_id + person.id} className={classNames(cls.PersonCard, {}, [className])}>
			<img src={person.photo as string} className={cls.personPhoto} />
			<Text text={person.name as string} />
		</Link>
	)
})
