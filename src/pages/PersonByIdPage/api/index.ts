import { Person } from "entities/Movie/model/types/Movie"
import { rtkApi } from "shared/api/rtkApi"

const PersonByIdApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		personById: build.query<Person, string | undefined>({
			query: (id) => ({
				url: `v1/person/${id}`,
			}),
		}),
	}),
})

export const { usePersonByIdQuery } = PersonByIdApi
