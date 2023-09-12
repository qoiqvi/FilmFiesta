import { memo, useCallback, useState } from "react"
import { Combobox } from "@headlessui/react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import cls from "./SearcMovieSelect.module.scss"
import { Text } from "shared/ui/Text"
import { useMovieSearchQuery } from "../../../model/api"
import { useDebounce } from "shared/hooks/useDebounce/useDebounce"
import { TOP10KP } from "../../../model/config"
import { SearchMovieSelectOption } from "./SearchMovieSelectOption/SearchMovieSelectOption"
import { Spinner } from "shared/ui/Spinner"

export const SearchMovieSelect = memo(() => {
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

	const onChangeQuery = (value: string) => {
		setQuery(value)
		// debouncedFunc()
		onChangeDebouncedQuery()
	}

	const options = query ? movies?.docs : TOP10KP.docs

	return (
		<div className={cls.comboboxContainer}>
			<Combobox>
				<div>
					<Combobox.Button className={cls.btnWrapper}>
						<Combobox.Input
							className={cls.comboboxInput}
							value={query}
							onChange={(event) =>
								onChangeQuery(event.target.value)
							}
							placeholder="Фильмы и сериалы"
						/>
					</Combobox.Button>
					<Combobox.Button className={cls.comboboxButton}>
						<MagnifyingGlassIcon
							className={cls.icon}
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<Combobox.Options className={cls.comboboxOptions}>
					{movies?.total === 0 && query !== "" ? (
						<div className={cls.comboboxOption}>
							<Text
								className={cls.comboboxOption}
								text="Фильм не найден"
							/>
						</div>
					) : (
						<>
							{isLoading ? (
								<Spinner />
							) : (
								<>
									{options?.map((movie) => (
										<Combobox.Option
											value={""}
											key={movie?.id}
											onClick={() => setQuery("")}
											className={({ active }) =>
												active
													? cls.comboboxOptionActive
													: cls.comboboxOption
											}
										>
											<SearchMovieSelectOption
												movie={movie}
											/>
										</Combobox.Option>
									))}
								</>
							)}
						</>
					)}
				</Combobox.Options>
			</Combobox>
			<Combobox></Combobox>
		</div>
	)
})
