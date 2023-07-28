export interface PersonInMovie {
	/**
	 * Id персоны с кинопоиска
	 * @example 6317
	 */
	id?: number | null
	/** @example "https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg" */
	photo?: string | null
	/** @example "Пол Уокер" */
	name?: string | null
	/** @example "Paul Walker" */
	enName?: string | null
	description: string
	profession: string
	enProfession: string
}
