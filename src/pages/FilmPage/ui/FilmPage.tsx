import { classNames } from "shared/lib/classNames/classNames"
import cls from "./FilmPage.module.scss"

import { memo } from "react"

export interface FilmPageProps {
	className?: string
}

const FilmPage = (props: FilmPageProps) => {
	const { className } = props

	return <div className={classNames(cls.FilmPage, {}, [className])}>FILMPAGE</div>
}

export default memo(FilmPage)
