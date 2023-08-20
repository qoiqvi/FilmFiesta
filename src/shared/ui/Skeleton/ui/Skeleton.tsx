import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Skeleton.module.scss"
import type { CSSProperties } from "react"

export interface SkeletonProps {
	className?: string
	height?: number | string
	width?: number | string
	border?: string
}

export const Skeleton = (props: SkeletonProps) => {
	const { className, border, height, width } = props
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	}
	return (
		<div
			style={styles}
			className={classNames(cls.Skeleton, {}, [className])}
		></div>
	)
}
