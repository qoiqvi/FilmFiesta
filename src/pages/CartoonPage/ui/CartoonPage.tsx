import cls from "./CartoonPage.module.scss"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { Page } from "widgets/Page"
import { MoviesByGenre, MoviesByGenreReducer } from "features/MoviesByGenre"
import { MovieSearchSliceReducer } from "features/MovieSearch"

const reducer: ReducersList = {
	movieSearch: MovieSearchSliceReducer,
	MovieByGenere: MoviesByGenreReducer,
}

const CartoonPage = () => {
	return (
		<DynamicModuleLoader reducers={reducer}>
			<div className={cls.CartoonPage}>
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
}

export default CartoonPage
