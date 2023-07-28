import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ActorCard.module.scss"
import { memo } from "react"
import { PersonInMovie } from "entities/Movie/model/types/Movie"
import { Text } from "shared/ui/Text"
import { text } from "stream/consumers"

export interface ActorCardProps {
	className?: string
	actor: PersonInMovie
}

export const ActorCard = memo((props: ActorCardProps) => {
	const { className, actor } = props
	return (
		<div className={classNames(cls.ActorCard, {}, [className])}>
			<img src={actor.photo as string} className={cls.actorPhoto} />
			<Text text={actor.name as string} />
		</div>
	)
})
