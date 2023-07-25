import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Text.module.scss"

export type TextTheme = "primary" | "inverted" | "error"

export type TextAlign = "right" | "left" | "center"

export type TextSize = "size_s" | "size_m" | "size_l"

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlign
	size?: TextSize
}

type HeaderTagType = "h1" | "h2" | "h3"

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	size_s: "h3",
	size_m: "h2",
	size_l: "h1",
}

export const Text = (props: TextProps) => {
	const { className, text, title, theme = "primary", align = "left", size = "size_m" } = props
	const additional = [className, cls[theme], cls[align], cls[size]]
	const HeaderTag = mapSizeToHeaderTag[size]
	return (
		<div className={classNames(cls.Text, {}, additional)}>
			{title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
			{text && ( //
				<p className={cls.text}>{text}</p>
			)}
		</div>
	)
}
