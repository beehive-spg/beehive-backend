const schema = `union BuildingType = Hive`

const resolver = {
	BuildingType: {
		__resolveType(obj, context, info) {
			return obj.name ? 'Hive' : null
		},
	},
}

export { schema, resolver }
