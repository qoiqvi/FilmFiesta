import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieSearchModal.module.scss"
import { memo, useCallback, useEffect, useState } from "react"
import { Modal } from "shared/ui/Modal"
import { Input } from "shared/ui/Input"
import { SearchMovieList } from "./SearchMovieList/SearchMovieList"
import { useMovieSearchQuery } from "../model/api"

export interface MovieSearchModalProps {
	className?: string
}

export const MovieSearchModal = memo((props: MovieSearchModalProps) => {
	const { className } = props
	const [isOpen, setIsOpen] = useState(true)
	const [query, setQuery] = useState("")
	const { data: movies, isLoading, refetch } = useMovieSearchQuery({ query })

	//

	const onCloseModal = () => {
		setIsOpen(false)
	}

	const onChangeQuery = useCallback((value: string) => {
		setQuery(value)
	}, [])

	if (!movies) {
		return null
	}

	return (
		<Modal
			lazy={true}
			isOpen={isOpen}
			onClose={onCloseModal}
		>
			<div className={classNames(cls.MovieSearchModal, {}, [className])}>
				<Input
					value={query}
					onChange={onChangeQuery}
				/>
				<SearchMovieList movies={movies.docs} />
			</div>
		</Modal>
	)
})
