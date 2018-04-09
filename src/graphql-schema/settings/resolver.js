import { GraphQLScalarType } from 'graphql'
import { settings, setDist, setRout, setDrones } from 'controller/settings'

const distribution = new GraphQLScalarType({
	name: 'DistributionScalar',
	serialize(value) {
		return value
	},
	parseValue(value) {
		return value
	},
	parseLiteral(ast) {
		return null
	},
})

const routing = new GraphQLScalarType({
	name: 'RoutingScalar',
	serialize(value) {
		return value
	},
	parseValue(value) {
		return value
	},
	parseLiteral(ast) {
		return null
	},
})

const drones = new GraphQLScalarType({
	name: 'DronesScalar',
	serialize(value) {
		return value
	},
	parseValue(value) {
		return value
	},
	parseLiteral(ast) {
		return null
	},
})

const resolver = {
	Query: {
		settings: () => settings(),
	},
	Mutation: {
		setDist: (_, { dist }) => setDist(dist),
		setRout: (_, { rout }) => setRout(rout),
		setDrones: (_, { drones }) => setDrones(drones),
	},
	Distribution: distribution,
	Routing: routing,
	Drones: drones,
}

export { resolver }
