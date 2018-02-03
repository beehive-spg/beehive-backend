import { DEPARTURE, ARRIVAL } from '~/src/constants'
import pubsub from '~/src/graphql/pubsub'

const processFlight = data => {
	data.type === 'dep' ? sendDeparture(data) : sendArrival(data)
}

const sendDeparture = flight => {
	const departure = buildFlight(flight)
	pubsub.publish(DEPARTURE, {
		departure,
	})
}

const sendArrival = flight => {
	const arrival = buildFlight(flight)
	pubsub.publish(ARRIVAL, {
		arrival,
	})
}

const buildFlight = flight => {
	return {
		hopId: flight.hop_id,
		routeId: flight.route_id,
	}
}

export { processFlight }
