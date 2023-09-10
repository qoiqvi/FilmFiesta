import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { memo } from "react"
import { Link } from "react-router-dom"
import { SearchMovieSelect } from "features/MovieSearch"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Button } from "shared/ui/Button"
import { Text } from "shared/ui/Text"

export interface NavbarProps {
	className?: string
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<Link to="/" className={cls.title}>
				<h1>FILMFIESTA</h1>
			</Link>
			<SearchMovieSelect />
			<Button theme="clear" className={cls.button}>
				<Link to={`${RoutePath.catalog}tv-series`}>
					<Text text="Сериалы" color="white" size="size_l" />
				</Link>
			</Button>
			<Button theme="clear" className={cls.button}>
				<Link to={`${RoutePath.catalog}movie`}>
					<Text text="Фильмы" color="white" size="size_l" />
				</Link>
			</Button>
			<Button theme="clear" className={cls.button}>
				<Link to={`${RoutePath.catalog}cartoon`}>
					<Text text="Мультфильмы" color="white" size="size_l" />
				</Link>
			</Button>
			<Button theme="clear" className={cls.button}>
				<Link to={`${RoutePath.catalog}anime`}>
					<Text text="Аниме" color="white" size="size_l" />
				</Link>
			</Button>
		</nav>
	)
})
