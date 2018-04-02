const schema = `union BuildingType = Hive | Shop | Customer`

const resolver = {
	BuildingType: {
		__resolveType(obj, context, info) {
			return obj.demand
				? 'Hive'
				: !obj.name ? 'Customer' : !obj.demand ? 'Shop' : null
		},
	},
}

export { schema, resolver }
