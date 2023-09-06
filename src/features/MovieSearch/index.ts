export { MovieSearchSliceReducer, getMovies } from "./model/slice/MovieSearchSlice"
export { fetchMoviesByParams } from "./model/services/fetchMovieByParams"
export { fetchNextMovies } from "./model/services/fetchNextMovies"
export { MovieSearchSlice } from "./model/slice/MovieSearchSlice"
export { MovieFilters } from "./ui/MovieFilters/MovieFilters"
export type { MovieSearchSchema, MovieType } from "./model/types/MovieSearchSchema"
export {
	getMoviesDataByParamsIsLoading,
	getMoviesDataByParamsError,
	getMoviesDataByParamsHasMore,
	getMoviesDataByParamsPage,
} from "./model/selectors"
