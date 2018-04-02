const schema = `
	type Flight {
		hopId: ID!,
		routeId: ID!,
	}
`

const query = `
	ongoingFlights: [Flight]
`
const subscription = `
	departure: Flight,
	arrival: Flight
`

export { schema, query, subscription }
