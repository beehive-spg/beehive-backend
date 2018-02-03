import { getHives } from '~/src/persistence/hive'

const hives = async () => {
	const objects = await getHives()

	return objects.map(building => {
		return {
			id: building.id,
			location: {
				address: building.address,
				longitude: building.xcoord,
				latitude: building.ycoord,
			},
			type: {
				id: building.hive.id,
				name: building.hive.name,
			},
		}
	})
}

export { hives }
