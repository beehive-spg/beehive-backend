import { getHives } from '~/src/persistence/hive'

const hives = async () => {
	const objects = await getHives()

	return objects.map(building => {
		return buildHive(building)
	})
}

const buildHive = building => {
	console.log(building)
	const hive = building['building/hive']
	const hiveObjects = [
		{
			id: hive['db/id'],
			name: hive['hive/name'],
			demand: hive['hive/demand'],
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
