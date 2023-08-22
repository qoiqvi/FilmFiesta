import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"
import { memo, useState } from "react"
import { Listbox } from "@headlessui/react"

export interface SelectProps {
	className?: string
}

const people = [
	{ id: 1, name: "Durward Reynolds", unavailable: false },
	{ id: 2, name: "Kenton Towne", unavailable: false },
	{ id: 3, name: "Therese Wunsch", unavailable: false },
	{ id: 4, name: "Benedict Kessler", unavailable: true },
	{ id: 5, name: "Katelyn Rohan", unavailable: false },
]

export const Select = memo((props: SelectProps) => {
	const { className } = props
	const [selectedPerson, setSelectedPerson] = useState(people[0])
	return (
		<Listbox
			value={selectedPerson}
			onChange={setSelectedPerson}
		>
			<Listbox.Button>{selectedPerson.name}</Listbox.Button>
			<Listbox.Options>
				{people.map((person) => (
					<Listbox.Option
						key={person.id}
						value={person}
						disabled={person.unavailable}
					>
						{person.name}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	)
})
