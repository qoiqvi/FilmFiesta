import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MainPage.module.scss"

import { memo } from "react"
import { Button } from "rambler-ui"
import { Counter } from "shared/ui/Counter/Counter"

export interface MainPageProps {
	className?: string
}

const MainPage = (props: MainPageProps) => {
	const { className } = props

	return (
		<div className={classNames(cls.MainPage, {}, [className])}>
			<h1>12e12e12e21</h1>
			<Button type="danger" rounded={true}>
				1111
			</Button>
			<Counter />
			<Counter />
			<Counter />
		</div>
	)
}

export default memo(MainPage)
