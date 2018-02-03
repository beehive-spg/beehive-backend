const schema = `
	type Location {
		address: String!,
		longitude: Float!,
		latitude: Float!
	}

	type Building {
		id: ID!,
		location: Location!
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
