const schema = `
	type Location {
		address: String!,
		longitude: Float!,
		latitude: Float!
	}

	type Building {
		id: ID!,
		location: Location!
		type: [BuildingType]!
	}

	type Hive {
		id: ID!,
		name: String,
		demand: Float,
		costs: Float
	}

	type Shop {
		id: ID!,
		name: String
	}

	type Customer {
		id: ID!
	}
`

const query = `
	hives: [Building],
	shops: [Building],
	customers: [Building],
	shop(id: ID!): Building,
	customer(id: ID!): Building
`

export { schema, query }
