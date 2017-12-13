import fs from 'fs'
import { PubSub } from 'graphql-subscriptions'

import generator from '~/src/generator/hopGenerator'
import publishOrder from '~/src/connect/send'

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
generator(pubsub)

const orders = []

const resolvers = {
	Query: {
		hives: () => hives,
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
			//TODO finding should be done in send module, as soon as the db is available
			const to = hives.find(
				hive => hive.location === order.customer.coordinates.location,
			)
			orders.push(order)
			publishOrder(order, to.id)
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
