import { Skeleton } from "shared/ui/Skeleton"

interface getSkeletonsArrayProps {
	length: number
	height: number
	width: number
}

export const getSkeletonsArray = ({ height, length, width }: getSkeletonsArrayProps) => {
	return new Array(length).fill(1).map((elem) => (
		<Skeleton
			height={height}
			width={width}
		/>
	))
}
