import { ReactNode } from "react"

export interface Option<T extends string> {
	value: T
	content: string | ReactNode
	disabled?: boolean
}
