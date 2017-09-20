import { PubSub } from 'graphql-subscriptions'
import { HIVE_ADDED, DRONE_ADDED } from '~/src/constants/topicNames'

const pubsub = new PubSub()

const hives = [
	{
		id: 1,
		location: 'hütteldorf',
		coordinates: {
			longitude: 16.271334,
			latitude: 48.20962,
		},
	},
	{
		id: 2,
		location: 'leopoldau',
		coordinates: {
			longitude: 16.451428,
			latitude: 48.277378,
		},
	},
	{
		id: 3,
		location: 'spengergasse',
		coordinates: {
			longitude: 16.3568,
			latitude: 48.1857,
		},
	},
	{
		id: 4,
		location: 'karlsplatz',
		coordinates: {
			longitude: 16.3709,
			latitude: 48.2003,
		},
	},
]

const drones = [
	{
		id: 1,
		route: {
			stops: [
				{
					longitude: 16.3568,
					latitude: 48.1857,
				},
				{
					longitude: 16.3709,
					latitude: 48.2003,
				},
			],
		},
	},
]

const resolvers = {
	Query: {
		hives: () => hives,
		hive: (_, { id }) => hives.find(hive => hive.id == id),
		drones: () => drones,
	},
	Mutation: {
		addHive: (_, { hive }) => {
			hives.push(hive)

			pubsub.publish(HIVE_ADDED, {
				hiveAdded: hive,
			})

			return hive
		},
		updateHive: (_, { id, location }) => {
			const index = hives.findIndex(hive => hive.id == id)
			hives[index].location = location
			return hives[index]
		},
		addDrone: (_, { drone }) => {
			drones.push(drone)

			pubsub.publish(DRONE_ADDED, {
				droneAdded: drone,
			})

			return drone
		},
	},
	Subscription: {
		hiveAdded: {
			subscribe: () => pubsub.asyncIterator(HIVE_ADDED),
		},
		droneAdded: {
			subscribe: () => pubsub.asyncIterator(DRONE_ADDED),
		},
	},
}

export default resolvers
