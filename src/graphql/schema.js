import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
	type Coordinates {
		longitude: Float!,
		latitude: Float!
	}

	input CoordinatesInput {
		longitude: Float!,
		latitude: Float!
	}

	type Route {
		from: Coordinates
		to: Coordinates
		currentPosition: Coordinates
	}

	input RouteInput {
		from: CoordinatesInput!
		to: CoordinatesInput!
		currentPosition: CoordinatesInput
	}

	type Hive {
		id: ID!,
		location: String,
		coordinates: Coordinates
	}

	input HiveInput {
		id: ID!,
		location: String,
		coordinates: CoordinatesInput
	}

	type Drone {
		id: ID!,
		route: Route
	}

	input DroneInput {
		id: ID!
		route: RouteInput!
	}

	type Query {
		hives: [Hive]
		hive(id: ID!): Hive
		drones: [Drone]
	}

	type Mutation {
		addHive(
			hive: HiveInput!
		): Hive
		addDrone(
			drone: DroneInput!
		): Drone
		removeHive(id: ID!): ID
		removeDrone(id: ID!): ID
	}

	type Subscription {
		hiveAdded: Hive
		droneAdded: Drone
		hiveRemoved: ID!
		droneRemoved: ID!
	}

	schema {
    	query: Query
    	mutation: Mutation
    	subscription: Subscription
	}
`

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})
export default schema
