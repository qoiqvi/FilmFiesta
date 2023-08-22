import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Listbox.module.scss"
import { memo } from "react"

export interface ListboxProps {
	className?: string
}

export const Listbox = memo((props: ListboxProps) => {
	const { className } = props
	return <div className={classNames(cls.Listbox, {}, [className])}></div>
})
