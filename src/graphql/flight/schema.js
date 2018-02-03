const schema = `
	type Flight {
		hopId: ID!,
		routeId: ID!,
	}
`

const subscription = `
	departure: Flight,
	arrival: Flight
`

export { schema, subscription }
