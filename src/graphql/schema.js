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
		stops: [Coordinates]
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

	type Query {
		hives: [Hive]
		hive(id: ID!): Hive
		drones: [Drone]
	}

	type Mutation {
		addHive(
			hive: HiveInput!
		): Hive
		updateHive(
			id: ID!
			location: String
		): Hive
	}

	type Subscription {
		hiveAdded: Hive
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