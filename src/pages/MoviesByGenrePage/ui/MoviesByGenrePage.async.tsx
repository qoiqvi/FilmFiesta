import { lazy } from "react"

export const AsyncMoviesByGenre = lazy(async () => await import("./MoviesByGenrePage"))
