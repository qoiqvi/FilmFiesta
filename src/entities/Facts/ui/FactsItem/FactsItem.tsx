import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FactsItem.module.scss"
import { memo } from "react"
import { FactInMovie, FactInPerson } from "../../model/types"

export interface FactsItemProps {
	className?: string
	fact: FactInMovie | FactInPerson
}

export const FactsItem = memo((props: FactsItemProps) => {
	const { className, fact } = props

	return (
		<>
			{fact.value && (
				<li
					className={classNames(cls.FactsItem, {}, [className])}
					dangerouslySetInnerHTML={{
						__html: fact.value ?? "",
					}}
				></li>
			)}
		</>
	)
})
