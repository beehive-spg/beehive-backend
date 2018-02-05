const schema = `union BuildingType = Hive | Shop`

const resolver = {
	BuildingType: {
		__resolveType(obj, context, info) {
			return obj.workload ? 'Hive' : !obj.workload ? 'Shop' : null
		},
	},
}

export { schema, resolver }
