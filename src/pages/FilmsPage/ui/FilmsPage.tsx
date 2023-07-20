import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmsPage.module.scss"

import { memo } from "react"

export interface FilmsPageProps {
	className?: string
}

const FilmsPage = (props: FilmsPageProps) => {
	const { className } = props

	return <div className={classNames(cls.FilmsPage, {}, [className])}>FILMS PAGE</div>
}

export default memo(FilmsPage)
