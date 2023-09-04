import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesPageTitle.module.scss"
import { memo, useMemo, useState } from "react"
import { Text } from "shared/ui/Text"

export interface MoviesPageTitleProps {
	className?: string
	searchParams: URLSearchParams
}

export const MoviesPageTitle = memo((props: MoviesPageTitleProps) => {
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
		<div className={classNames(cls.MoviesPageTitle, {}, [className])}>
			<Text title={title} />
		</div>
	)
})
