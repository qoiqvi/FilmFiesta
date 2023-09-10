import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PersonCard.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { PersonInMovie } from "../../model/types/Person"

export interface PersonCardProps {
	className?: string
	person: PersonInMovie
}

export const PersonCard = memo((props: PersonCardProps) => {
	const { className, person } = props
	return (
		<Link
			to={RoutePath.person_by_id + person.id}
			className={classNames(cls.PersonCard, {}, [className])}
		>
			<div className={cls.container}>
				<img src={person.photo as string} className={cls.personPhoto} />
			</div>
			<Text
				text={person.name || person.enName || "Имя Фамилия"}
				className={cls.personName}
			/>
		</Link>
	)
})
