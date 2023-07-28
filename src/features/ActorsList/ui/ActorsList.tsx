import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ActorsList.module.scss"
import { memo, useState } from "react"
import { PersonInMovie } from "entities/Movie/model/types/Movie"
import { ActorCard } from "entities/Actor"

export interface ActorsListProps {
	className?: string
	actors: PersonInMovie[] | undefined
}

export const ActorsList = memo((props: ActorsListProps) => {
	const { className, actors } = props
	const [collapsed, setCollapsed] = useState(true)
	return (
		<div className={classNames(cls.ActorsList, {}, [className])}>
			{actors?.map((actor) => (
				<ActorCard actor={actor} />
			))}
		</div>
	)
})
