export { useMoviesByGenreQuery } from "./model/api"
export { getMoviesByGenre } from "./model/slice/MoviesByGenreSlice"
export { fetchMoviesByGenre } from "./model/services/fetchMoviesByGenre"
export { MoviesByGenreReducer } from "./model/slice/MoviesByGenreSlice"
export type { MoviesByGenreSchema } from "./model/types/moviesByGenreSchema"
export { MoviesByGenre } from "./ui/MoviesByGenre/MoviesByGenre"
export {
	getMoviesByGenreError,
	getMoviesByGenreHasMore,
	getMoviesByGenreIsLoading,
	getMoviesByGenrePage,
} from "./model/selectors"
