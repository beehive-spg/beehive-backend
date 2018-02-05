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
		name: String!,
		workload: Float
	}

	type Shop {
		id: ID!,
		name: String
	}
`

const query = `
	hives: [Building],
	shops: [Building]
`

export { schema, query }
