export { MovieFilterSliceReducer, getMovies } from "./model/slice/MovieSearchSlice"
export { fetchMoviesByParams } from "./model/services/fetchMovieByParams"
export { fetchNextMovies } from "./model/services/fetchNextMovies"
export { MovieFilters } from "./ui/MovieFilters/MovieFilters"
export type { MovieFilterSchema, MovieType } from "./model/types/MovieFilterSchema"
export {
	getMoviesDataByParamsIsLoading,
	getMoviesDataByParamsError,
	getMoviesDataByParamsHasMore,
	getMoviesDataByParamsPage,
} from "./model/selectors"
