import { format, addHours, differenceInSeconds } from 'date-fns'
import { DEPARTURE, ARRIVAL } from 'constants'
import pubsub from 'graphql-schema/pubsub'
import { routes } from 'controller/route'

const ongoingFlights = async () => {
	const routeObjects = await routes()
	const time = format(addHours(Date.now(), 1), 'x')

	const flights = routeObjects.map(async route => {
		const hops = await Promise.all(route.hops)

		const hop = hops.find(hop => hop.startdate < time && hop.enddate > time)
		return {
			hopId: hop.id,
			routeId: route.id,
		}
	})
	return flights
}

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

export { ongoingFlights, processFlight }
