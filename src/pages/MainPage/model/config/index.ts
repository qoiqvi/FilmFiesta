import { MovieType } from "features/MovieFilter"

interface MovieGenre {
	genre: string
	title: string
	type: MovieType
}

export const moviesByGenreConfig: MovieGenre[] = [
	{
		genre: "комедия",
		title: "Комедии для всей семьи",
		type: "movie",
	},
	{
		genre: "ужасы",
		title: "Если не боитесь испугаться",
		type: "movie",
	},
	{
		genre: "фантастика",
		title: "Мультфильмы на все времена",
		type: "cartoon",
	},
	{
		genre: "триллер",
		title: "Сериалы, которые держат в напряжении",
		type: "tv-series",
	},
	{
		genre: "фантастика",
		title: "Сериалы для самых маленьких и не только",
		type: "animated-series",
	},
	{
		genre: "фантастика",
		title: "Для любителей японского кинематографа",
		type: "anime",
	},
	{
		genre: "документальный",
		title: "Провести вечер с пользой",
		type: "movie",
	},
	{
		genre: "военный",
		title: "О войне",
		type: "movie",
	},
	{
		genre: "история",
		title: "Исторические сериалы",
		type: "tv-series",
	},
]
