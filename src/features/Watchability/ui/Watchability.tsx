import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Watchability.module.scss"
import { memo } from "react"
import { WatchabilityItem } from "entities/Movie/model/types/Movie"
import { Link } from "react-router-dom"
import { Text } from "shared/ui/Text"

export interface WatchabilityProps {
	className?: string
	resources?: WatchabilityItem[]
}

export const Watchability = memo((props: WatchabilityProps) => {
	const { className, resources } = props
	return (
		<div className={classNames(cls.Watchability, {}, [className])}>
			<Text title="Смотреть на других ресурсах" />
			{resources?.map((resource, ind) => (
				<Link to={resource.url} key={ind}>
					<Text size="size_m" title={resource.name as string} />
					<img sizes="25" src={resource.logo as string} />
				</Link>
			))}
		</div>
	)
})
