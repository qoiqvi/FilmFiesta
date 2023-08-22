import cls from "./SearchSelect.module.scss"
import { Combobox, Transition } from "@headlessui/react"
import { useState, Fragment, ReactNode } from "react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { Option } from "shared/types"
import { Text } from "shared/ui/Text"

export interface SearchSelectOption<T extends string> {
	value: T
	content: string
	disabled?: boolean
}

export interface SearchSelectProps<T extends string> {
	options: SearchSelectOption<T>[]
	label: string
	notFound: string
	readonly?: boolean
	onChange?: (value: T) => void
	value?: T
}

export const SearchSelect = <T extends string>({
	options,
	notFound,
	label,
	onChange,
	readonly,
	value,
}: SearchSelectProps<T>) => {
	const [selected, setSelected] = useState(value)
	const [query, setQuery] = useState("")

	const filteredOptions =
		query === ""
			? options
			: options.filter((option) =>
					option.content.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
			  )
	console.log(filteredOptions)
	return (
		<div>
			<Text title={label} />
			<Combobox
				value={selected}
				onChange={setSelected}
			>
				<span className={cls.comboboxContainer}>
					<span className={cls.comboboxInput}>
						<Combobox.Input
							displayValue={(option: SearchSelectOption<T>) => option.content}
							onChange={(event) => setQuery(event.target.value)}
						/>
					</span>
					<Combobox.Button>
						<ChevronUpDownIcon aria-hidden="true" />
					</Combobox.Button>
					<span className={cls.comboboxList}>
						<Combobox.Options>
							{filteredOptions.length === 0 && query !== "" ? (
								<Text text={notFound} />
							) : (
								filteredOptions.map((option) => (
									<span className={cls.comboboxOption}>
										<Combobox.Option
											key={option.value}
											value={option.content}
										>
											{({ selected, active }) => (
												<>
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}
													>
														<Text text={option.content} />
													</span>
													{selected ? (
														<span
															className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																active ? "text-white" : "text-teal-600"
															}`}
														>
															<CheckIcon
																className={cls.checkIcon}
																aria-hidden="true"
															/>
														</span>
													) : null}
												</>
											)}
										</Combobox.Option>
									</span>
								))
							)}
						</Combobox.Options>
					</span>
				</span>
			</Combobox>
		</div>
	)
}
