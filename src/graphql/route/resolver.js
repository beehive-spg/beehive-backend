import { pubsub } from '~/src/graphql'
import { getRoutes, getRoute } from '~/src/persistence/route'
import { START_HOP, END_HOP } from '~/src/constants'

const resolver = {
	Query: {
		routes: () => getRoutes(),
		route: (_, { id }) => getRoute(id),
	},
	Subscription: {
		startHop: {
			subscribe: () => pubsub.asyncIterator(START_HOP),
		},
		endHop: {
			subscribe: () => pubsub.asyncIterator(END_HOP),
		},
	},
}

export { resolver }
