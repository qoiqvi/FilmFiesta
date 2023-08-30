import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCardSkeleton.module.scss"
import { memo } from "react"
import { Skeleton } from "shared/ui/Skeleton"

export interface MovieCardSkeletonProps {
	className?: string
}

export const MovieCardSkeleton = memo((props: MovieCardSkeletonProps) => {
	const { className } = props
	return <div className={classNames(cls.MovieCardSkeleton, {}, [className])}>{/* <Skeleton height={} /> */}</div>
})
