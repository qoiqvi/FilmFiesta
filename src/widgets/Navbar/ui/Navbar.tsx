import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo, useState } from "react"
import { Button } from "rambler-ui"
import { Link } from "react-router-dom"
import { Input } from "shared/ui/Input"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	const [search, setSearch] = useState<string>("Человек паук")
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<Link
				to="/"
				className={cls.title}
			>
				<h1>FILMFIESTA</h1>
			</Link>
			<Input
				value={search}
				onChange={(value: string) => setSearch(value)}
			/>
			{/* <Input style={{ width: 500, marginRight: 180 }} width={500} type="tel" value={search} /> */}
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
