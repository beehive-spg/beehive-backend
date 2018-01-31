import path from 'path'
import jackrabbit from 'jackrabbit'

import { DRONE_ADDED, DRONE_REMOVED } from '~/src/constants'
import { pubsub, hives } from '~/src/graphql/resolvers'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const rabbit = jackrabbit(process.env.CLOUDAMQP_URL)
const hops = rabbit.default().queue({ name: 'hop_event' })

const consumeHops = () => {
	hops.consume(onHop, { noAck: true })
}

const onHop = data => {
	if (Buffer.byteLength(data, 'utf-8') === 0) return
	data = JSON.parse(data)
	if (data.type === 'dep') sendDeparture(data)
	else sendArrival(data.drone)
}

const sendDeparture = data => {
	const from = hives.find(hive => hive.id == data.location)
	const to = hives.find(hive => hive.id == data.destination)
	const hop = {
		id: data.drone,
		route: {
			from: {
				location: from.location,
				longitude: from.coordinates.longitude,
				latitude: from.coordinates.latitude,
			},
			to: {
				location: to.location,
				longitude: to.coordinates.longitude,
				latitude: to.coordinates.latitude,
			},
			currentPosition: {
				location: from.location,
				longitude: from.coordinates.longitude,
				latitude: from.coordinates.latitude,
			},
		},
	}

	pubsub.publish(DRONE_ADDED, {
		droneAdded: hop,
	})
}

const sendArrival = id => {
	pubsub.publish(DRONE_REMOVED, {
		droneRemoved: id,
	})
}
export { consumeHops }
