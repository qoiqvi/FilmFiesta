import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PageError.module.scss"
import { AppButton } from "shared/ui/AppButton"

export interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>Произошла непредвиденная ошибка</p>
			<AppButton
				theme="clear"
				onClick={reloadPage}
			>
				Обновить страницу
			</AppButton>
		</div>
	)
}
