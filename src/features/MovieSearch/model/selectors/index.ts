import { StateSchema } from "app/providers/StoreProvider"

export const getMoviesDataByParams = (state: StateSchema) => state.movieSearch?.movies || undefined
