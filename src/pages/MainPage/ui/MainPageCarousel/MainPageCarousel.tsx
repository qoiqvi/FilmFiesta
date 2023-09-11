import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MainPageCarousel.module.scss"
import { memo } from "react"

export interface MainPageCarouselProps {
	className?: string
}

export const MainPageCarousel = memo((props: MainPageCarouselProps) => {
	const { className } = props
	return (
		<div
			className={classNames(cls.MainPageCarousel, {}, [className])}
		></div>
	)
})
