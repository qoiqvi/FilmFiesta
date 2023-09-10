import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FactsList.module.scss"
import { memo, useState } from "react"
import { FactInMovie, FactInPerson } from "../../model/types"
import { FactsItem } from "../FactsItem/FactsItem"
import { Button } from "shared/ui/Button"
import { Text } from "shared/ui/Text"

export interface FactsListProps {
	className?: string
	facts: FactInMovie[] | FactInPerson[]
}

export const FactsList = memo((props: FactsListProps) => {
	const { className, facts } = props
	const [collapsed, setCollapsed] = useState(true)
	if (!facts?.length) {
		return null
	}
	const collapsedFacts = collapsed ? facts.slice(0, 3) : facts

	return (
		<>
			<div className={cls.headerCont}>
				<Text title="Интересные факты" className={cls.title} />
			</div>
			<ul className={classNames(cls.FactsList, {}, [className])}>
				<>
					{collapsedFacts.map((fact) => (
						<FactsItem key={fact.value} fact={fact} />
					))}
				</>
			</ul>
			{facts.length > 3 ? (
				<Button theme="clear" onClick={() => setCollapsed(!collapsed)}>
					<span className={cls.btn}>
						{collapsed
							? `Развернуть (${facts.length})`
							: "Свернуть"}
					</span>
				</Button>
			) : null}
		</>
	)
})
