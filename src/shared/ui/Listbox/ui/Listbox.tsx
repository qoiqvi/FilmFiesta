import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Listbox.module.scss"
import { memo, useState } from "react"
import { Listbox } from "@headlessui/react"

export interface ListboxProps {
	className?: string
}

const people = [
	{ id: 1, name: "Durward Reynolds", unavailable: false },
	{ id: 2, name: "Kenton Towne", unavailable: false },
	{ id: 3, name: "Therese Wunsch", unavailable: false },
	{ id: 4, name: "Benedict Kessler", unavailable: true },
	{ id: 5, name: "Katelyn Rohan", unavailable: false },
]

export const Select = memo((props: ListboxProps) => {
	const { className } = props
	const [selectedPerson, setSelectedPerson] = useState(people[0])

	return (
		<div className={classNames(cls.Listbox, {}, [className])}>
			<Listbox
				value={selectedPerson}
				onChange={setSelectedPerson}
			>
				{/* Стили для кнопки */}
				<Listbox.Button className={cls["Listbox-button"]}>
					{selectedPerson.name}
					<span className={cls["Listbox-arrow"]}>▼</span>
				</Listbox.Button>

				{/* Стили для выпадающего списка */}
				<Listbox.Options className={cls["Listbox-options"]}>
					{people.map((person) => (
						<Listbox.Option
							key={person.id}
							value={person}
							disabled={person.unavailable}
							/* Стили для элементов списка */
							className={cls["Listbox-option"]}
						>
							{person.name}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>
		</div>
	)
})
