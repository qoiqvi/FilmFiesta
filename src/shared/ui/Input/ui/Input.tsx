import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss"
import {
	useState,
	type ChangeEvent,
	type InputHTMLAttributes,
	useEffect,
	useRef,
	memo,
	type MutableRefObject,
} from "react"
import { Text } from "shared/ui/Text"

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"onChange" | "value" | "readOnly"
>

export interface InputProps extends HTMLInputProps {
	className?: string
	value: string
	autofocus?: boolean
	type?: string
	onChange?: (value: string) => void
	placeholder?: string
	readonly?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		autofocus,
		value,
		onChange,
		type = "text",
		placeholder,
		readonly = false,
		...otherProps
	} = props
	const [focus, setFocus] = useState(false)
	const ref = useRef() as MutableRefObject<HTMLInputElement>

	const onFocus = () => {
		setFocus(true)
	}
	const onBlur = () => {
		setFocus(false)
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	useEffect(() => {
		if (autofocus) {
			setFocus(true)
			ref?.current?.focus()
		}
	}, [autofocus])

	const mods: Mods = {
		[cls.readonly]: readonly,
	}
	return (
		<input
			ref={ref}
			type={type}
			value={value}
			placeholder={placeholder}
			className={classNames(cls.input, mods, [className])}
			onChange={onChangeHandler}
			onFocus={onFocus}
			onBlur={onBlur}
			autoFocus={focus}
			readOnly={readonly}
			{...otherProps}
		/>
	)
})
