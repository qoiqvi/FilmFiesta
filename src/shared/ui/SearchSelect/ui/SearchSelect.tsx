import { memo, useEffect, useState } from "react"
import { Combobox } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import cls from "./SearchSelect.module.scss"
import { Text } from "shared/ui/Text"
import { classNames } from "shared/lib/classNames/classNames"

export interface SearchSelectOption<T extends string> {
	value: T
	content: string
	disabled?: boolean
}

export type SearchSelectWidth = "small" | "medium" | "large"

export interface SearchSelectProps<T extends string> {
	options: SearchSelectOption<T>[]
	notFound: string
	readonly?: boolean
	onChange?: (value: string) => void
	value?: T
	width?: SearchSelectWidth
	placeholder?: string
}

export const SearchSelect = memo(
	<T extends string>(props: SearchSelectProps<T>) => {
		const {
			options,
			notFound,
			onChange,
			readonly,
			value,
			width = "medium",
			placeholder,
		} = props
		const [selected, setSelected] = useState("")
		const [query, setQuery] = useState("")

		const onChangeHandler = (item: SearchSelectOption<T>) => {
			onChange?.(item?.value)
			setSelected((item as any) ?? "")
		}
		useEffect(
			() =>
				setSelected?.(
					// @ts-ignore
					options.find((elem) => elem.value.includes(value)),
				),
			[value],
		)

		const filteredOptions =
			query === ""
				? options
				: options.filter(
						(option) =>
							option?.content
								.toLowerCase()
								.replace(/\s+/g, "")
								.includes(
									query.toLowerCase().replace(/\s+/g, ""),
								),
				  )

		return (
			<div
				className={classNames(cls.comboboxContainer, {}, [cls[width]])}
			>
				<Combobox
					disabled={readonly}
					value={selected}
					onChange={(item) => onChangeHandler(item as any)}
				>
					<div>
						<Combobox.Button className={cls.comboboxWrapper}>
							<Combobox.Input
								className={cls.comboboxInput}
								displayValue={(option: SearchSelectOption<T>) =>
									option?.content
								}
								onChange={(event) =>
									setQuery(event?.target?.value)
								}
								placeholder={placeholder}
							/>
						</Combobox.Button>
						<Combobox.Button className={cls.comboboxButton}>
							<ChevronUpDownIcon
								className={cls.barsIcon}
								aria-hidden="true"
							/>
						</Combobox.Button>
					</div>
					<Combobox.Options className={cls.comboboxOptions}>
						{filteredOptions.length === 0 && query !== "" ? (
							<div className={cls.comboboxOption}>
								<Text
									className={cls.comboboxOption}
									text={notFound}
								/>
							</div>
						) : (
							filteredOptions.map((option) => (
								<Combobox.Option
									key={option?.value}
									className={({ active }) =>
										active
											? cls.comboboxOptionActive
											: cls.comboboxOption
									}
									value={option}
								>
									<Text text={option?.content} />
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Combobox>
			</div>
		)
	},
)
