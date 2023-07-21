import axios from "axios"

export const $api = axios.create({
	baseURL: "https://api.kinopoisk.dev/v1.3/",
	headers: {
		"X-API-KEY": "TJS8T17-DKXMJSB-GM8Y32K-GMJ2BXS",
	},
})
