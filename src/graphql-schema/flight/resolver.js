import { ongoingFlights } from 'controller/flight'
import pubsub from 'graphql-schema/pubsub'
import { DEPARTURE, ARRIVAL } from 'constants'

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
