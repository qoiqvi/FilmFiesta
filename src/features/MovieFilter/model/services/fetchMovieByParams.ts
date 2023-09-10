import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Movie } from "entities/Movie"
import { MovieType, QueryParams } from "../types/MovieFilterSchema"
import { Data } from "entities/Movie/model/types/Movie"

interface fetchMoviesByParamsProps {
	params: QueryParams
	limit: number
	page?: number
	type?: MovieType
	replace?: boolean
}

export const fetchMoviesByParams = createAsyncThunk<
	Data<Movie>,
	fetchMoviesByParamsProps,
	ThunkConfig<string>
>(
	"movieFilter/fetchMoviesByParams",
	async (
		{ params, limit, page, type = "movie", replace = true },
		{ extra, rejectWithValue },
	) => {
		console.log("FETCHING")
		try {
			const queryString: string[] = []

			Object.entries(params).map(([query, value], index) => {
				if (value !== undefined && value !== "") {
					if (index === 0) {
						queryString.push(
							`?${query}=${value}`,
							`&limit=${limit}`,
							`&page=${page}`,
							`&type=${type}`,
						)
					} else {
						queryString.push(`&${query}=${value}`)
					}
				}
			})

			const response = await extra.api<Data<Movie>>(
				`v1.3/movie${queryString.join("")}`,
			)

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			return rejectWithValue("error")
		}
	},
)

let a = {
	limit: 1,
	page: 1,
	pages: 2,
	total: 10,
	docs: [
		{
			rating: {
				kp: 8.808,
				imdb: 8.5,
				filmCritics: 6.8,
				russianFilmCritics: 100,
				await: null,
			},

			movieLength: 112,
			id: 535341,
			type: "movie",
			name: "1+1",
			description:
				"Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
			year: 2011,
			poster: {
				url: "https://st.kp.yandex.net/images/film_big/535341.jpg",
				previewUrl:
					"https://st.kp.yandex.net/images/film_iphone/iphone360_535341.jpg",
			},
			genres: [
				{ name: "драма" },
				{ name: "комедия" },
				{ name: "биография" },
			],
			countries: [{ name: "Франция" }],
			alternativeName: "Intouchables",
			enName: null,
			names: [{ name: "1+1" }],
			shortDescription:
				"Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
			logo: {
				url: "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig",
			},
			watchability: {
				items: [
					{
						name: "Okko",
						logo: {
							url: "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig",
						},
						url: "https://okko.tv/movie/intouchables?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed",
					},
				],
			},
		},
	],
} as Data<Movie>
