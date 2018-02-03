import pubsub from '~/src/graphql/pubsub'
import { DEPARTURE, ARRIVAL } from '~/src/constants'

const resolver = {
	Subscription: {
		departure: {
			subscribe: () => pubsub.asyncIterator(DEPARTURE),
		},
		arrival: {
			subscribe: () => pubsub.asyncIterator(ARRIVAL),
		},
	},
}

export { resolver }
