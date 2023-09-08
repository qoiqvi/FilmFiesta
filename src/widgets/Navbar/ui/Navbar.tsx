import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo, useState } from "react"
import { Button } from "rambler-ui"
import { Link } from "react-router-dom"
import { SearchMovieSelect } from "features/MovieSearch"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<Link
				to="/"
				className={cls.title}
			>
				<h1>FILMFIESTA</h1>
			</Link>

			<SearchMovieSelect />

			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to={`${RoutePath.catalog}movie`} />}
			>
				Фильмы
			</Button>
			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to={`${RoutePath.catalog}tv-series`} />}
			>
				Сериалы
			</Button>
			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to={`${RoutePath.catalog}cartoon`} />}
			>
				Мультфильмы
			</Button>
			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to="/" />}
			>
				Главная
			</Button>
		</nav>
	)
})
