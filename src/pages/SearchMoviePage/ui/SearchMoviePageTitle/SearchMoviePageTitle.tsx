import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SearchMoviePageTitle.module.scss"
import { memo, useMemo, useState } from "react"
import { Text } from "shared/ui/Text"

export interface SearchMoviePageTitleProps {
	className?: string
	searchParams: URLSearchParams
}

export const SearchMoviePageTitle = memo((props: SearchMoviePageTitleProps) => {
	const { className, searchParams } = props
	const [collapsed, setCollapsed] = useState(true)

	const title = useMemo(() => {
		let string = []
		if (searchParams.get("genres.name")) {
			string.push(searchParams.get("genres.name"))
		}
		if (searchParams.get("year")) {
			string.push(searchParams.get("year"))
		}
		if (string.length) {
			return `Фильмы: ${string.join(", ")}`
		}
		return "Фильмы"
	}, [searchParams])

	return (
		<div className={classNames(cls.SearchMoviePageTitle, {}, [className])}>
			<Text title={title} />
		</div>
	)
})
