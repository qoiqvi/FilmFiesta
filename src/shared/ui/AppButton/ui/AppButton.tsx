import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./AppButton.module.scss"
import { memo, type ButtonHTMLAttributes, type FC } from "react"

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export type ButtonSize = "size_m" | "size_l" | "size_xl"

export type ButtonTheme = "clear" | "outlined" | "outlined_red" | "background" | "background_inverted"

export const AppButton = memo((props: AppButtonProps) => {
	const { className, square, size = "size_m", children, theme = "outlined", disabled, ...otherProps } = props
	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	}
	return (
		<button
			{...otherProps}
			disabled={disabled}
			className={classNames(cls.AppButton, mods, [className, cls[size], cls[theme]])}
		>
			{children}
		</button>
	)
})
