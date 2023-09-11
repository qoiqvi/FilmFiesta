import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./MovieCard.module.scss"
import { memo } from "react"
import { Movie } from "entities/Movie/model/types/Movie"
import { Link } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useHover } from "shared/hooks/useHover/useHover"
import { MovieCardRating } from "entities/Rating"

export interface MovieCardProps {
	className?: string
	movie: Movie
	rating?: boolean
}

export const MovieCard = memo((props: MovieCardProps) => {
	const { className, movie, rating = true } = props
	const [isHover, binds] = useHover()

	const mods: Mods = {
		[cls["hovered"]]: isHover,
	}

	return (
		<Link to={`${RoutePath.film_by_id}${movie.id}`} {...binds}>
			<div className={classNames(cls.MovieCard, mods, [className])}>
				<img
					src={
						movie.poster?.previewUrl ||
						movie.poster?.url ||
						movie.backdrop?.previewUrl ||
						movie.backdrop?.url ||
						"https://www.kinopoisk.ru/t1FI46222/19b3d7NEp/8QMcMHLwnDbhVoIcqdwmZthfsEDeddba4zKbV6s2nbp9KedCvtRc8fpeXfQK9nuQmS5qELB3gUk-s0mP-UzZba0TbRB7_MQukDrGfIndCn7wPpwZ2nG2psfyJ-8L8kwyrcVH3lacOL3-fkX4Aop-gJlTVgjAhkBtrv7t39lg5U0tW_n9i1zw-mGmtmBJBZJKcE7EITeVvsobivePXy6AxsW9Y1YGJGB4hl7ZDBIKGvD1zsp0WGr9SR6OeX-hxBlBEYsxCf8I3FolVqr4Ten6mmDOgJGXddY670J7K5syaDbdXQtCvghYcOrquVCqEpZseRbOnLgqscUCijmT2RSVZb0nZWF_WBDatYqOfOk1ohKcohAxOxG6PruudzcTIgTWRVlTfqr8fGTybr0Ash5m9IVmTiQs2mkFJjo951H8Eemt-0FVd_zILhWyLoSp9Q4CWOY8QT_Bpmrjpt-_N3KUBkl1l66OpLygEgY9IJ5OohRtvq7kkKKRWb5q5eONfKGRjXNh4Rv8PCLt7koAFZ26CkjOxJFLXWLefwJrPwPSCK79fXdmUhy4yMIaaZiWZmpwiXrqxMAyoVGqKvEPtdD9ZeUfhZGDUGhSxVJSZEnZRp7sWoChW80eTgu2938LWpAqeXUDfqLE0PDa1s1cIq5yrImW8qjUmg1dmiY1ExVQXcGNl21Jk3BEqnE2ihDttVaWbBrcUV-RqpZvnr_zV3JwylHZe8baULQIouZtJCLiIhxl2mrcnNa1xR6i6Zdl3PmRYRsdCdPQmLZ9rmbULZ2GfshSRLWHTU46D2r7pwv-lBINTRem4vQMbPIG1XQOcoqocaqiaIBSaX22StVjWURBZalTHQHbqPQmnZoiWIFVMhJsXogJKy1CXle6F1dfZvyibXlnbv7g1HSOmgmEeuoeIMkeDthYZjElPgptg9EYLZHBG-mxr5jI5vECssAhGfZ6ECbICbeh_prTwvPLvyIkZtUx6y7q9Lg49g5dGGIORmRJumJgQDapWRY-4dtlfGUREQ-1GSvQyGr1Wj4QCf0-ymySWNlP5cLCT9rfvxO2VNaN3eeeauQ82P7eVeSqjoIcefYm3LymDTmW5iFDPUhN0T0fcW1L8Owq7bYWVF15ptpcXhCVx41eJveeh_OvrrhafdlL2lqkDKzS_olsVmYaGBXu8oAsfml5YsotX4FUzcE5e-G5lxg0InFK3mhNGYaajIbYPbsNzlLDqvNPozpgPmnpV_5CmEi0Upq9nCoa3ohhbrpUNFYV-aYiNcMNEN21lffxxXP4MAp1bt6MFbFCTtDuME0X2SrCu1Lr45cSCE5VoRtKSkS83JJObdBmhn4UGUJybBiymd2a5iknGeAVMRXTuUGDwOSaJU4K8N1BNk7wKlQBNxVmpmeW4zvnaoRKhXVfNjIAICRyfnWUutKOGMmqasS8YqE1DqJpR3lAeTVJb_kxQ6yoDsm6YtBZVcLmdCLohVdlbvbLSn9LU7K8vjUtw15W_KxMZjq9GBp60hCFSk5EpCYtsUKqpX8FfF1pBZd1XQuULGa9tk7Q7XnGCnwmpDG3WSJmA-6Hv8e6aEJdxeNeppSMdI7W7RCaXoqEnRZmoKRWYcVSztGbnRjpoblzee1vpMQm_bZaFKkxhpZsqqQhowWiomPOvwvbxhhW9T1Hss5E0KSSijnIohLaQNHe-vAwKjW5Wm7Rn1moXbUNZzH1S2C8Ag0CItBFtXqOSNakQb9pvmoP6jP3q55UTknJa7oi8DRkmuYlEPZOcrzBQnIgILLdzb6S0dORkPltkYv9sffwfHopzg4QgVXaPujCCDUb7ZIuhx5Xq1NurJZJpRfe1nBowJ4GTaTqHsbo8do2BAASZeFufkHbeTShOUEnbc1XyLT2ZZae1MHdOs6QrtxZp4myHkse99cH3hCq1TG7JtpwNGRCtlGcDn4aiNEiOtj0snUhIvZld7WUVUFt15GVA3DM2nUmGgSdFfZO_B5AbRtdRjLLmv_fO3YgSvHtY-LeYLg8Zv5pXDaqAhgJdn6kcHK5qVLiuXPpsH1peQvt5StY0FIV4j5ciTHaFmReNDGH1ZryM1pzDzfShIrByZce-oSgeC7Ktfh-evKgCeoGaPwm9fHShuFD_ViRPeUjSeEDxLCK9a4W6KGNAlJsJkSlex06cu8ySwszrnBO7aVTovYUwIguAqXMii5-9H1ewvzwbmVdSvotj1HkTZ39HzUJ25BQ0hkmqgwFEbpSYNo8md9ZLs53mt_vI24QCkmxPyI25LRsmvZVSK7ijnRxYmZE1KKZKb42vScdZMGlaRud5XcE3DaVkspQ6dmqktDqKNnXobqWQ6LXq9cmWBa1ddO6ouAAqIpe1WwCGk7ANZau8JzmmU22klF7peDlWcXTTd0b_EDqzbJekEHFjo5gJujR31FuTr8qUyPfJvSevQmH2g4ceET-1tXsnnpKNJkatlykxq35BsZF46lg5X2ZW4UVe9Dg9kVaPhiJAVbmxIbEmd8RqkZXWmtHK3Z4wt1NGzp6ELywymItVCpCjkxt2jaUkDY5Qd4WEQ8hdKl1bVPljadY5CbNEhKY6WEaBhA6EMGP4f5udy7_D58i0DLFSedWckhgpJ5OhSCCIs54QVpigNA6pT1afnETkXSh7XH77Z3zeDwCpb6akNW11u4Yptjl94VyWkuiCyfLcvSKOalPuuYk6PAuijkQnkYCmDXqwvywIilpGkYlYyHE_aGJI1mJ31jQ_rkumvgteco-cC4kJVPVLs4XmpdzU8qUanlNu1YOIEigfvbFaJYK0mAZWgaU1Db9eSY-HYPlKHnlCWuROUcUkFYhCkbgOe0CUmyCxG03xU4qbyJXi4P-fIJxxW-SXmD0sK5axYj-QlrEcSa-WBxyXUk6fjHnbbzpRbHTlWmXZKSakUa21K1BhrqkOlyxy5Vu8osKj8_fmriCDcEPps4YPOzeGiEUgsZqcP2W6oAodoUFMros"
					}
					className={cls.poster}
				/>
				{rating && (
					<MovieCardRating
						className={cls.rating}
						rating={
							movie.rating?.kp?.toFixed(1) ||
							movie.rating?.tmdb?.toFixed(1) ||
							//@ts-ignore
							movie.rating?.toFixed(1) ||
							"5.0"
						}
					/>
				)}
			</div>
		</Link>
	)
})
