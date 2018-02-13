const schema = `
	type Hop {
		id: ID!,
		start: Building!,
		end: Building!,
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
