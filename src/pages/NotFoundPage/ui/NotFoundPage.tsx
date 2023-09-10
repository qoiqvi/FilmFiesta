import { classNames } from "shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"
import { Text } from "shared/ui/Text"
import { Button } from "shared/ui/Button"

export interface NotFoundPageProps {
	className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
	const { className } = props

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.NotFoundPage, {}, [className])}>
			<Text
				text={"Страница не найдена, не балуйтесь со строкой поиска!"}
				align="center"
			/>
			<Button theme="clear" onClick={reloadPage}>
				Обновить страницу
			</Button>
		</div>
	)
}
