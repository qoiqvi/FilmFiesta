import { SelectOption } from "shared/ui/Select/Select"

interface allGenresInterface {
	value: string
	content: string
}

export const allGenres: allGenresInterface[] = [
	{ value: "боевик", content: "Боевик" },
	{ value: "фэнтези", content: "Фэнтези" },
	{ value: "фантастика", content: "Фантастика" },
	{ value: "триллер", content: "Триллер" },
	{ value: "военный", content: "Военный" },
	{ value: "детектив", content: "Детектив" },
	{ value: "комедия", content: "Комедия" },
	{ value: "драма", content: "Драма" },
	{ value: "ужасы", content: "Ужасы" },
	{ value: "криминал", content: "Криминал" },
	{ value: "мелодрама", content: "Мелодрама" },
	{ value: "вестерн", content: "Вестерн" },
	{ value: "биография", content: "Биография" },
	{ value: "аниме", content: "Аниме" },
	{ value: "детский", content: "Детский" },
	{ value: "мультфильм", content: "Мультфильм" },
	{ value: "фильм-нуар", content: "Фильм-нуар" },
	{ value: "для взрослых", content: "Для взрослых" },
	{ value: "документальный", content: "Документальный" },
	{ value: "игра", content: "Игра" },
	{ value: "история", content: "История" },
	{ value: "концерт", content: "Концерт" },
	{ value: "короткометражка", content: "Короткометражка" },
	{ value: "музыка", content: "Музыка" },
	{ value: "мюзикл", content: "Мюзикл" },
	{ value: "новости", content: "Новости" },
	{ value: "приключения", content: "Приключения" },
	{ value: "реальное ТВ", content: "Реальное ТВ" },
	{ value: "семейный", content: "Семейный" },
	{ value: "спорт", content: "Спорт" },
	{ value: "ток-шоу", content: "Ток-шоу" },
	{ value: "церемония", content: "Церемония" },
]

export const ratings: SelectOption<string>[] = [
	{ value: "", content: "Любой рейтинг" },
	{ value: "9-10", content: "Больше 9" },
	{ value: "8-10", content: "Больше 8" },
	{ value: "7-10", content: "Больше 7" },
	{ value: "6-10", content: "Больше 6" },
	{ value: "5-10", content: "Больше 5" },
]

export const years: SelectOption<string>[] = [
	{ value: "", content: "Все годы" },
	{ value: "2022-2023", content: "2022-2023" },
	{ value: "2020-2021", content: "2020-2021" },
	{ value: "2014-2019", content: "2014-2019" },
	{ value: "2010-2014", content: "2010-2014" },
	{ value: "2000-2009", content: "2000-2009" },
	{ value: "1990-1999", content: "1990-1999" },
	{ value: "1980-1989", content: "1980-1989" },
	{ value: "1970-1979", content: "1970-1979" },
	{ value: "1960-1969", content: "1960-1969" },
	{ value: "0-1959", content: "до 1959" },
]

// export const filters = [
// 	{ content: "Жанры", queryName: "genre", options: genres },
// 	{ content: "Рейтинг", queryName: "rating", options: ratings },
// 	{ content: "Годы выхода", queryName: "year", options: years },
// ]
