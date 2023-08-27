import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Tabs.module.scss"
import { memo } from "react"
import { Tab } from "@headlessui/react"
import { Text } from "shared/ui/Text"

export interface TabsProps {
	className?: string
}

export const Tabs = memo((props: TabsProps) => {
	const { className } = props
	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			<Tab.Group>
				<Tab.List className={cls.TabList}>
					<Tab className={cls.Tab}>
						<Text text={"Tab 1"} />{" "}
					</Tab>
					<Tab className={cls.Tab}>
						<Text text={"Tab 1"} />
					</Tab>
					<Tab className={cls.Tab}>
						<Text text={"Tab 1"} />
					</Tab>
				</Tab.List>
			</Tab.Group>
		</div>
	)
})
