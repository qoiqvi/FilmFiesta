import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { MovieType } from "features/MovieFilter/model/types/MovieFilterSchema"
import {
	getMoviesByGenreHasMore,
	getMoviesByGenreIsLoading,
	getMoviesByGenrePage,
} from "features/MoviesByGenre/model/selectors"
import { fetchMoviesByGenre } from "features/MoviesByGenre/model/services/fetchMoviesByGenre"

interface fetchNextMoviesByGenreProps {
	genre: string
	type: MovieType
	limit: number
	replace?: boolean
}

export const fetchNextMoviesByGenre = createAsyncThunk<void, fetchNextMoviesByGenreProps, ThunkConfig<string>>(
	"movieByGenrePage/fetchNextMoviesByGenre",
	({ limit, genre, type, replace = true }, { dispatch, getState }) => {
		console.log("fetchNEXTMoviesByGenre")

		const page = getMoviesByGenrePage(getState())
		const isLoading = getMoviesByGenreIsLoading(getState())
		const hasMore = getMoviesByGenreHasMore(getState())

		if (hasMore && !isLoading && page) {
			dispatch(fetchMoviesByGenre({ limit, page: page + 1, genre, type, replace: false }))
			console.log("dispatch(fetchMoviesByGenre({ limit, page: page + 1, genre, type, replace: false }))")
		}
	}
)
