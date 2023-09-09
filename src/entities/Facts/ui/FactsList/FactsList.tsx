import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FactsList.module.scss"
import { memo, useState } from "react"
import { FactInMovie } from "../../model/types"
import { FactsItem } from "../FactsItem/FactsItem"
import { Button } from "shared/ui/Button"
import { Text } from "shared/ui/Text"

export interface FactsListProps {
	className?: string
	facts: FactInMovie[]
}

export const FactsList = memo((props: FactsListProps) => {
	const { className, facts } = props
	const [collapsed, setCollapsed] = useState(true)
	const collapsedFacts = collapsed ? facts.slice(0, 3) : facts
	return (
		<>
			<div className={cls.headerCont}>
				<Text
					title="Интересные факты"
					className={cls.title}
				/>
				<Button
					theme="clear"
					onClick={() => setCollapsed(!collapsed)}
				>
					<span className={cls.btn}>{collapsed ? `Развернуть (${facts.length})` : "Свернуть"}</span>
				</Button>
			</div>
			<ul className={classNames(cls.FactsList, {}, [className])}>
				<>
					{collapsedFacts.map((fact) => (
						<FactsItem
							key={fact.type}
							fact={fact}
						/>
					))}
				</>
			</ul>
		</>
	)
})
