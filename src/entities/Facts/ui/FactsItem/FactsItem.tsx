import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FactsItem.module.scss"
import { memo } from "react"
import { Text } from "shared/ui/Text"
import { FactInMovie, FactInPerson } from "../../model/types"
import { extractContent } from "../../model/lib/extractContent"

export interface FactsItemProps {
	className?: string
	fact: FactInMovie | FactInPerson
}

export const FactsItem = memo((props: FactsItemProps) => {
	const { className, fact } = props
	return (
		<>
			{fact.value && (
				<li className={classNames(cls.FactsItem, {}, [className])}>
					<Text text={extractContent(fact.value)} />
				</li>
			)}
		</>
	)
})
