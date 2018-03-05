import { getHives, getCosts } from '~/src/persistence/hive'

const hives = async () => {
	const objects = await getHives()

	return objects.map(building => {
		return buildHive(building)
	})
}

const buildHive = async building => {
	const hive = building['building/hive']
	const costs = await getCosts(building['db/id'])
	const hiveObjects = [
		{
			id: hive['db/id'],
			name: hive['hive/name'],
			demand: hive['hive/demand'],
			costs: costs[0]['hive/cost'],
		},
	]

	return {
		id: building['db/id'],
		location: {
			address: building['building/address'],
			longitude: building['building/xcoord'],
			latitude: building['building/ycoord'],
		},
		type: hiveObjects,
	}
}

export { hives, buildHive }
