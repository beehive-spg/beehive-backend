const schema = `
	type Section {
		time: String,
		value: Int
	}
`

const query = `
	statistics(id: ID!): [Section]
`

export { schema, query }
