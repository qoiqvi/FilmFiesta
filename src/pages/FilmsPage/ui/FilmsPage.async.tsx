import { lazy } from "react"

export const FilmsPageAsync = lazy(async () => await import("./FilmsPage"))
