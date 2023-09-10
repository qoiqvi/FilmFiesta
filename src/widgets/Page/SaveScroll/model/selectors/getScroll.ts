import { createSelector } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"

export const getScrollPosition = (state: StateSchema) => state.saveScroll.scroll

export const getScroll = createSelector(
	getScrollPosition,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0,
)
