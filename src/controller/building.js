import { getBuilding } from '~/src/persistence/building'
import { buildHive } from '~/src/controller/hive'
import { buildShop } from '~/src/controller/shop'
import { buildCustomer } from '~/src/controller/customer'

const building = async id => {
	const object = await getBuilding(id)
	return buildBuilding(object)
}

const buildBuilding = building => {
	if (building['building/hive']) return buildHive(building)
	else if (building['building/shop']) return buildShop(building)
	else if (building['building/customer']) return buildCustomer(building)
}
export { building }
