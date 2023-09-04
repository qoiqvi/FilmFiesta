import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CartoonPage.module.scss"
import { memo } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { Page } from "widgets/Page"
import { MovieSearchSliceReducer } from "features/MovieSearch/model/slice/MovieSearchSlice"
import { MoviesByGenre } from "features/MoviesByGenre"

export interface CartoonPageProps {
	className?: string
}

const reducer: ReducersList = {
	movieSearch: MovieSearchSliceReducer,
}

const CartoonPage = memo((props: CartoonPageProps) => {
	const { className } = props
	return (
		// <DynamicModuleLoader reducers={reducer}>
		<div className={classNames(cls.CartoonPage, {}, [className])}>
			<Page>
				<MoviesByGenre
					genre="фантастика"
					title="Фантастика:"
					type="cartoon"
				/>
				<MoviesByGenre
					genre="вестерн"
					title="Фантастика:"
					type="cartoon"
				/>
				<MoviesByGenre
					genre="ужасы"
					title="Фантастика:"
					type="cartoon"
				/>
				<MoviesByGenre
					genre="триллер"
					title="Фантастика:"
					type="cartoon"
				/>
			</Page>
		</div>
		// </DynamicModuleLoader>
	)
})

export default CartoonPage
