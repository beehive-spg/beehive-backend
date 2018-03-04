import { ongoingFlights } from '~/src/controller/flight'
import pubsub from '~/src/graphql/pubsub'
import { DEPARTURE, ARRIVAL } from '~/src/constants'

const resolver = {
	Query: {
		ongoingFlights: () => ongoingFlights(),
	},
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
