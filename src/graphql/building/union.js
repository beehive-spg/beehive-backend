const schema = `union BuildingType = Hive | Shop | Customer`

const resolver = {
	BuildingType: {
		__resolveType(obj, context, info) {
			return obj.workload
				? 'Hive'
				: !obj.name ? 'Customer' : !obj.workload ? 'Shop' : null
		},
	},
}

export { schema, resolver }
