const schema = `
	type Location {
		address: String!,
		longitude: Float!,
		latitude: Float!
	}

	type Building inherits Location {
		id: ID!,
		type: BuildingType!
	}

	type Hive {
		id: ID!,
		name: String!
	}
`

const query = `
	hives: [Building]
`

export { schema, query }
