import cls from "./MoviesByGenrePage.module.scss"
import { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MovieCardsList } from "entities/Movie"
import { Page } from "widgets/Page"
import { Text } from "shared/ui/Text"
import { useSelector } from "react-redux"
import { MoviesByGenreReducer, getMoviesByGenre } from "features/MoviesByGenre/model/slice/MoviesByGenreSlice"
import { getMoviesDataByParamsIsLoading } from "features/MovieFilter/model/selectors"
import { useAppDispatch } from "shared/hooks/useAppDispatch"
import { fetchMoviesByGenre } from "features/MoviesByGenre/model/services/fetchMoviesByGenre"
import { fetchNextMoviesByGenre } from "../model/services/fetchNextMoviesByGenre"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader"
import { MovieType } from "features/MovieFilter/model/types/MovieFilterSchema"

const MoviesByGenrePage = () => {
	const dispatch = useAppDispatch()
	const { genre, movieType } = useParams<{ genre: string; movieType: MovieType }>()

	const movies = useSelector(getMoviesByGenre.selectAll)
	const isLoading = useSelector(getMoviesDataByParamsIsLoading)

	if (isLoading) {
		return <div>LOADING</div>
	}

	useEffect(() => {
		if (genre) {
			dispatch(fetchMoviesByGenre({ genre: genre, limit: 50, page: 1, type: movieType ?? "movie" }))
		}
	}, [])

	const fetchNextMovies = useCallback(() => {
		if (genre) {
			dispatch(fetchNextMoviesByGenre({ genre, limit: 40, type: movieType ?? "movie", replace: false }))
		}
	}, [dispatch, genre, movieType])

	const reducer: ReducersList = {
		MovieByGenere: MoviesByGenreReducer,
	}

	return (
		<DynamicModuleLoader reducers={reducer}>
			<Page
				className={cls.MoviesByGenrePage}
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
}

export default MoviesByGenrePage
