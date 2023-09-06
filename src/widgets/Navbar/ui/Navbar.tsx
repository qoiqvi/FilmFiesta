import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo, useState } from "react"
import { Button } from "rambler-ui"
import { Link } from "react-router-dom"
import { Input } from "shared/ui/Input"
import { Modal } from "shared/ui/Modal"
import { MovieSearchModal } from "features/MovieSearch"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	const [open, setOpen] = useState(false)
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<Link
				to="/"
				className={cls.title}
			>
				<h1>FILMFIESTA</h1>
			</Link>
			<MovieSearchModal />
			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to="/movies" />}
			>
				Фильмы
			</Button>
			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to="/series" />}
			>
				Сериалы
			</Button>
			<Button
				className={cls.button}
				type="secondary"
				rounded
				container={<Link to="/cartoons" />}
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
