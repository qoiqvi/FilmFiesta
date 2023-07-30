import { lazy } from "react"

export const PersonByIdPageAsync = lazy(async () => await import("./PersonByIdPage"))
