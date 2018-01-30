import fs from 'fs'
import { PubSub } from 'graphql-subscriptions'

//import generator from '~/src/generator/hopGenerator'
import { produceOrder } from '~/src/connect/producers'
import { consumeHops } from '~/src/connect/consumers'

import { getHives } from '~/src/persistence/hive'

import {
	HIVE_ADDED,
	DRONE_ADDED,
	HIVE_REMOVED,
	DRONE_REMOVED,
} from '~/src/constants/topicNames'

let drones = []
fs.readFile(`${__dirname}/../testFiles/drones100.txt`, 'utf8', (err, data) => {
	if (err) {
		console.log(err) //eslint-disable-line
	}

	drones = JSON.parse(data)
})

let hives = []
fs.readFile(`${__dirname}/../testFiles/hives.json`, 'utf8', (err, data) => {
	if (err) {
		console.log(err) //eslint-disable-line
	}

	hives = JSON.parse(data)
})

const pubsub = new PubSub()
// generator(pubsub)
consumeHops(pubsub)

const orders = []

const resolvers = {
	Query: {
		//hives: () => hives,
		hives: () => getHives(),
		hive: (_, { id }) => hives.find(hive => hive.id == id),
		drones: () => {
			return []
		},
	},
	Mutation: {
		addHive: (_, { hive }) => {
			hives.push(hive)

			pubsub.publish(HIVE_ADDED, {
				hiveAdded: hive,
			})

			return hive
		},
		addDrone: (_, { drone }) => {
			drones.push(drone)

			pubsub.publish(DRONE_ADDED, {
				droneAdded: drone,
			})

			return drone
		},
		removeHive: (_, { id }) => {
			pubsub.publish(HIVE_REMOVED, {
				hiveRemoved: id,
			})

			hives = hives.filter(res => res.id !== id)
			return id
		},
		removeDrone: (_, { id }) => {
			pubsub.publish(DRONE_REMOVED, {
				droneRemoved: id,
			})

			drones = drones.filter(res => res.id !== id)
			return id
		},
		addOrder: (_, { order }) => {
			orders.push(order)
			produceOrder(order)
			return true
		},
	},
	Subscription: {
		hiveAdded: {
			subscribe: () => pubsub.asyncIterator(HIVE_ADDED),
		},
		droneAdded: {
			subscribe: () => pubsub.asyncIterator(DRONE_ADDED),
		},
		hiveRemoved: {
			subscribe: () => pubsub.asyncIterator(HIVE_REMOVED),
		},
		droneRemoved: {
			subscribe: () => pubsub.asyncIterator(DRONE_REMOVED),
		},
	},
}

export default resolvers
export { pubsub, hives }
