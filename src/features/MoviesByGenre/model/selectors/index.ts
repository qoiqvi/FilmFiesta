import { StateSchema } from "app/providers/StoreProvider"

export const getMoviesByGenre = (state: StateSchema) => state.getMovieByGenere?.movies

export const getMoviesByGenreIsLoading = (state: StateSchema) => state.getMovieByGenere?.isLoading

export const getMoviesByGenreError = (state: StateSchema) => state.getMovieByGenere?.error
