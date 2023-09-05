import { classNames } from "shared/lib/classNames/classNames"
import cls from "./MoviesByGenrePage.module.scss"
import { memo, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MovieCardsList } from "entities/Movie"
import { Page } from "widgets/Page"
import { Text } from "shared/ui/Text"
import { useSelector } from "react-redux"
import { MoviesByGenreReducer, getMoviesByGenre } from "features/MoviesByGenre/model/slice/MoviesByGenreSlice"
import { getMoviesDataByParamsIsLoading } from "features/MovieSearch/model/selectors"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByGenre } from "features/MoviesByGenre/model/services/fetchMoviesByGenre"
import { fetchNextMoviesByGenre } from "../model/services/fetchNextMoviesByGenre"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"

export interface MoviesByGenrePageProps {
	className?: string
}

const MoviesByGenrePage = memo((props: MoviesByGenrePageProps) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const { genre } = useParams<{ genre: string }>()

	const movies = useSelector(getMoviesByGenre.selectAll)
	const isLoading = useSelector(getMoviesDataByParamsIsLoading)

	if (isLoading) {
		return <div>LOADING</div>
	}

	useEffect(() => {
		if (genre) {
			dispatch(fetchMoviesByGenre({ genre: genre, limit: 5, page: 1, type: "movie" }))
		}
	}, [])

	const fetchNextMovies = () => {
		if (genre) {
			dispatch(fetchNextMoviesByGenre({ genre, limit: 40, type: "movie", replace: false }))
		}
	}

	const reducer: ReducersList = {
		MovieByGenere: MoviesByGenreReducer,
	}

	return (
		<DynamicModuleLoader reducers={reducer}>
			<Page
				className={classNames(cls.MoviesByGenrePage, {}, [className])}
				onScrollEnd={fetchNextMovies}
			>
				{genre && <Text title={genre[0].toUpperCase() + genre.slice(1) + ":"} />}
				<MovieCardsList
					movies={movies}
					isLoading={isLoading}
				/>
			</Page>
		</DynamicModuleLoader>
	)
})

export default MoviesByGenrePage
