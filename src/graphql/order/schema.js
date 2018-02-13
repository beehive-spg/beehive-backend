const schema = `
	type Order {
		id: ID!,
		shop: Building!,
		customer: Building!
		route: ID!,
		source: String
	}

	input CoordinatesInput {
		address: String!,
		longitude: Float!,
		latitude: Float!
	}

	input OrderInput {
		shop: ID!,
		customer: CoordinatesInput!
	}
`

const query = `
	orders: [Order],
	order(id: ID!): Order
`

const mutation = `
	addOrder(order: OrderInput!): Boolean
`

export { schema, query, mutation }
