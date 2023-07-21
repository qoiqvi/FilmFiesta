import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Text.module.scss"

export enum TextTheme {
	PRIMARY = "primary",
	INVERTED = "inverted",
	ERROR = "error",
}

export enum TextAlingn {
	RIGHT = "right",
	LEFT = "left",
	CENTER = "center",
}

export enum TextSize {
	M = "size_m",
	L = "size_l",
}

export interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlingn
	size?: TextSize
}

export const Text = (props: TextProps) => {
	const { className, text, title, theme = TextTheme.PRIMARY, align = TextAlingn.LEFT, size = TextSize.M } = props
	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
