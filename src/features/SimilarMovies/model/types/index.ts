import { ShortImage } from "entities/Movie/model/types/Movie"

export interface SimilarMovie {
	id?: number | null
	name: string
	enName: string
	alternativeName: string
	type?: string
	poster: ShortImage
}
