import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkApi = createApi({
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.kinopoisk.dev/",
		headers: {
			"X-API-KEY": "TJS8T17-DKXMJSB-GM8Y32K-GMJ2BXS",
		},
	}),
	endpoints: (builder) => ({}),
})
