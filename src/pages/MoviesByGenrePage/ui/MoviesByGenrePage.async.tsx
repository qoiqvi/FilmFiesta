import { lazy } from "react"

export const AsyncMoviesByGenre = lazy(async () => await import("./MoviesByGenrePage"))
// export const FilmsPageAsync = lazy(async () => await import("./FilmsPage"))
