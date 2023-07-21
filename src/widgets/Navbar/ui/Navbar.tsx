import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { Button, PersonIcon } from "rambler-ui"
import { Link } from "react-router-dom"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<h1 className={cls.title}>FILMFIESTA</h1>
			<Button style={{ marginRight: 15 }} type="secondary" rounded container={<Link to="/films" />}>
				Фильмы
			</Button>
			<Button type="secondary" rounded>
				<PersonIcon size={"large"} color="black" className={cls.icon} />
				Войти
			</Button>
		</nav>
	)
})

{
	/* <Button container={<Link to="/home" />}>Кнопка-ссылка</Button> */
}
