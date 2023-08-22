import cls from "./MovieFiltersItem.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { ChangeEvent, memo, useState } from "react"
import { Text } from "shared/ui/Text"
import { Option } from "shared/types"
import { Button } from "rambler-ui"
import { MovieGenres } from "features/MovieSearch/model/types/MovieSearchSchema"

export interface MovieFiltersItemProps {
	className?: string
	title?: string
	options?: Option<MovieGenres>[]
	onChange: (value: MovieGenres) => void
	defaultValue?: MovieGenres
}

export const MovieFiltersItem = memo((props: MovieFiltersItemProps) => {
	const { className, title, options, onChange, defaultValue } = props
	const [collapsed, setCollapsed] = useState<boolean>(true)

	const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value as MovieGenres)
	}

	return (
		<div className={classNames(cls.MovieFiltersItem, {}, [className])}>
			{collapsed ? (
				<div>
					<Button
						type="flat"
						onClick={() => setCollapsed(!collapsed)}
					>
						<Text title={title} />
					</Button>
				</div>
			) : (
				<div>
					<Button
						type="flat"
						onClick={() => setCollapsed(!collapsed)}
					>
						<Text title={title} />
					</Button>
					<select
						defaultValue={defaultValue}
						onChange={onChangeHandler}
					>
						{options?.map((item) => (
							<option
								key={item.value}
								value={item.value}
							>
								{item.content}
							</option>
						))}
					</select>
				</div>
			)}
		</div>
	)
})
