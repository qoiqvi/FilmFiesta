import { classNames } from "shared/lib/classNames/classNames"
import cls from "./GenresFilter.module.scss"
import { memo, useCallback, useState } from "react"

export interface GenresFilterProps {
	className?: string
}

export const GenresFilter = memo((props: GenresFilterProps) => {
	const { className } = props

	return <div className={classNames(cls.GenresFilter, {}, [className])}></div>
})
