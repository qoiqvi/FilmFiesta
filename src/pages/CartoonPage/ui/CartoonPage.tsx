import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CartoonPage.module.scss"
import { memo } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { Page } from "widgets/Page"
import { MovieSearchSliceReducer } from "features/MovieSearch/model/slice/MovieSearchSlice"
import { MoviesByGenre } from "features/MoviesByGenre"
import { MoviesByGenreReducer } from "features/MoviesByGenre/model/slice/MoviesByGenreSlice"

export interface CartoonPageProps {
	className?: string
}

const reducer: ReducersList = {
	movieSearch: MovieSearchSliceReducer,
	MovieByGenere: MoviesByGenreReducer,
}

const CartoonPage = memo((props: CartoonPageProps) => {
	const { className } = props
	return (
		<DynamicModuleLoader reducers={reducer}>
			<div className={classNames(cls.CartoonPage, {}, [className])}>
				<Page>
					<MoviesByGenre
						genre="фантастика"
						title="Фантастика:"
						type="cartoon"
					/>
					<MoviesByGenre
						genre="вестерн"
						title="Вестерны:"
						type="cartoon"
					/>
					<MoviesByGenre
						genre="ужасы"
						title="Ужасы:"
						type="cartoon"
					/>
					<MoviesByGenre
						genre="триллер"
						title="Триллеры:"
						type="cartoon"
					/>
				</Page>
			</div>
		</DynamicModuleLoader>
	)
})

export default CartoonPage
