import { lazy } from "react"

export const AsyncMoviesPage = lazy(async () => await import("./MoviesPage"))
