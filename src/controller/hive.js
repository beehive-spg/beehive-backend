import { getHives } from '~/src/persistence/hive'

const hives = async () => {
	const objects = await getHives()

	return objects.map(building => {
		const hiveObjects = [
			{
				id: building.hive.id,
				name: building.hive.name,
				// TODO implement actual value from db
				workload: 10.0,
			},
		]
		return {
			id: building.id,
			location: {
				address: building.address,
				longitude: building.xcoord,
				latitude: building.ycoord,
			},
			type: hiveObjects,
		}
	})
}

export { hives }
