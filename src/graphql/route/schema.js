const schema = `
	type Hop {
		id: ID!,
		start: Building!,
		end: Building!,
		drone: ID!
	}

	type Route {
		id: ID!,
		hops: [Hop]!
	}
`

const query = `
	routes: [Route],
	route(id: ID!): Route
`

export { schema, query }
