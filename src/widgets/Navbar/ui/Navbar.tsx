import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo, useState } from "react"
import { Button, Input, PersonIcon } from "rambler-ui"
import { Link } from "react-router-dom"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	const [search, setSearch] = useState<string>("Человек паук")
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<h1 className={cls.title}>FILMFIESTA</h1>
			<Input style={{ width: 500, marginRight: 180 }} width={500} type="tel" value={search} />
			<Button className={cls.button} type="secondary" rounded container={<Link to="/films" />}>
				Фильмы
			</Button>
			<Button className={cls.button} type="secondary" rounded container={<Link to="/search" />}>
				Поиск
			</Button>
			<Button className={cls.button} type="secondary" rounded container={<Link to="/" />}>
				Главная
			</Button>
			<Button className={cls.button} type="secondary" rounded>
				<PersonIcon size={"large"} color="black" className={cls.icon} />
				Войти
			</Button>
		</nav>
	)
})

{
	/* <Button container={<Link to="/home" />}>Кнопка-ссылка</Button> */
}
