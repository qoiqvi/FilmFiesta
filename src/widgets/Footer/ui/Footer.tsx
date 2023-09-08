import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Footer.module.scss"
import { memo } from "react"

export interface FooterProps {
	className?: string
}

export const Footer = memo((props: FooterProps) => {
	const { className } = props
	return <div className={classNames(cls.Footer, {}, [className])}></div>
})
