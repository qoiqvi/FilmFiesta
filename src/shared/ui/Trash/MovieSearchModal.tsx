import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieSearchModal.module.scss"
import { memo, useCallback, useEffect, useState } from "react"
import { Modal } from "shared/ui/Modal"
import { Input } from "shared/ui/Input"
import { useDebounce } from "shared/hooks/useDebounce/useDebounce"
import { useMovieSearchQuery } from "features/MovieSearch/model/api"

export interface MovieSearchModalProps {
	className?: string
	isOpen: boolean
	setIsOpen: (arg: boolean) => void
}

export const MovieSearchModal = memo((props: MovieSearchModalProps) => {
	const { className, isOpen, setIsOpen } = props
	const [query, setQuery] = useState("")
	const [debouncedQuery, setDebouncedQuery] = useState("")

	const { data: movies, isLoading } = useMovieSearchQuery(
		{ query: debouncedQuery },
		{ refetchOnMountOrArgChange: true },
	)

	const onChangeDebouncedQuery = useCallback(() => {
		setDebouncedQuery(query)
	}, [query])

	const debouncedFunc = useDebounce(onChangeDebouncedQuery, 300)

	const onCloseModal = () => {
		setIsOpen(false)
	}

	const onChangeQuery = (value: string) => {
		setQuery(value)
		debouncedFunc()
	}

	return (
		<Modal lazy={true} isOpen={isOpen} onClose={onCloseModal}>
			<div className={classNames(cls.MovieSearchModal, {}, [className])}>
				<Input
					value={query}
					onChange={onChangeQuery}
					placeholder="Фильмы и сериалы"
				/>
			</div>
		</Modal>
	)
})
