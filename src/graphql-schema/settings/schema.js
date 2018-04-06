const schema = `
	scalar Distribution
	scalar Routing
	scalar Drones

	type Settings {
		distribution: Distribution,
		routing: Routing,
		drones: Drones
	}
`

const query = `
	settings: Settings
`

const mutation = `
	setDist(dist: Distribution!): Boolean,
	setRout(rout: Routing!): Boolean,
	setDrones(drones: Drones!): Boolean,
`
export { schema, query, mutation }
