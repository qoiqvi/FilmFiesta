import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Carousel.module.scss"
import { ReactNode, memo } from "react"

export interface CarouselProps {
	className?: string
	children: ReactNode
}

export const Carousel = memo((props: CarouselProps) => {
	const { className, children } = props
	return (
		<div className={classNames(cls.Carousel, {}, [className])}>
			{children}
		</div>
	)
})
