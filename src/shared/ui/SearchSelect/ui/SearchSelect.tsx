import { Fragment, memo, useEffect, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import cls from "./SearchSelect.module.scss"
import { Text } from "shared/ui/Text"
import { classNames } from "shared/lib/classNames/classNames"
import { useParams } from "react-router-dom"

export interface SearchSelectOption<T extends string> {
	value: T
	content: string
	disabled?: boolean
}

export type SearchSelectWidth = "small" | "medium" | "large"

export interface SearchSelectProps<T extends string> {
	options: SearchSelectOption<T>[]
	label?: string
	placeholder: string
	notFound: string
	readonly?: boolean
	onChange?: (value: string) => void
	value?: T
	width?: SearchSelectWidth
	nullable?: boolean
}

export const SearchSelect = memo(<T extends string>(props: SearchSelectProps<T>) => {
	const { options, notFound, label, onChange, readonly, value, placeholder, width = "medium" } = props
	const [selected, setSelected] = useState("")
	const [query, setQuery] = useState("")

	const onChangeHandler = (item: SearchSelectOption<T>) => {
		onChange?.(item?.value)
		setSelected((item as any) ?? "")
	}
	// @ts-ignore
	useEffect(() => setSelected?.(options.find((elem) => elem.value.includes(value))), [value])
	const filteredOptions =
		query === ""
			? options
			: options.filter((option) =>
					option?.content.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
			  )

	return (
		<div className={classNames(cls.comboboxContainer, {}, [cls[width]])}>
			<Combobox
				disabled={readonly}
				value={selected}
				onChange={(item) => onChangeHandler(item as any)}
			>
				{label && (
					<Combobox.Label>
						<Text
							className={cls.label}
							title={label}
						/>
					</Combobox.Label>
				)}
				<div>
					<Combobox.Input
						placeholder={placeholder}
						className={cls.comboboxInput}
						displayValue={(option: SearchSelectOption<T>) => option?.content}
						onChange={(event) => setQuery(event?.target?.value)}
					/>
					<Combobox.Button className={cls.comboboxButton}>
						<ChevronUpDownIcon
							className={cls.barsIcon}
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery("")}
				>
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
									className={({ active }) => (active ? cls.comboboxOptionActive : cls.comboboxOption)}
									value={option}
								>
									{({ selected }) =>
										selected ? (
											<div className={cls.comboboxSelectedOption}>
												<CheckIcon className={cls.checkedIcon} />
												<Text text={option?.content} />{" "}
											</div>
										) : (
											<Text text={option?.content} />
										)
									}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</Combobox>
		</div>
	)
})
