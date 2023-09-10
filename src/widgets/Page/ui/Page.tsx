import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Page.module.scss"
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from "react"
import { SaveScrollSliceActions } from "../SaveScroll/model/slice/SaveScrollSlice"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getScroll } from "../SaveScroll/model/selectors/getScroll"
import { StateSchema } from "app/providers/StoreProvider"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { useInitialEffect } from "shared/hooks/useInitialEffect/useInitialEffect"
import { useThrottle } from "shared/hooks/useThrottle/useThrottle"
import { useInfiniteScroll } from "shared/hooks/useInfiniteScroll/useInfiniteScroll"

export interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const scrollPosition = useSelector((state: StateSchema) =>
		getScroll(state, pathname),
	)

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition
	})

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	})

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			SaveScrollSliceActions.setScrollPosition({
				path: pathname,
				position: e.currentTarget.scrollTop,
			}),
		)
	}, 500)

	return (
		<section
			ref={wrapperRef}
			className={classNames(cls.PageWrapper, {}, [className])}
			onScroll={onScroll}
		>
			{children}
			{onScrollEnd ? (
				<div ref={triggerRef} className={cls.trigger} />
			) : null}
		</section>
	)
})
