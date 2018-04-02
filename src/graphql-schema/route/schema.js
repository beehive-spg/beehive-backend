const schema = `
	type Hop {
		id: ID!,
		start: Building!,
		end: Building!,
		startdate: String!,
		enddate: String!,
		speed: Float!
	}

	type Route {
		id: ID!,
		hops: [Hop]!,
		origin: String!
	}
`

const query = `
	routes: [Route],
	route(id: ID!): Route
`

export { schema, query }
