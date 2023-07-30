import axios from "axios"

export const Api = axios.create({
	baseURL: "https://api.kinopoisk.dev/",
	headers: {
		"X-API-KEY": "TJS8T17-DKXMJSB-GM8Y32K-GMJ2BXS",
	},
})
