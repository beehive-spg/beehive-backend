import { getBuilding } from 'persistence/building'
import { buildHive } from 'controller/hive'
import { buildShop } from 'controller/shop'
import { buildCustomer } from 'controller/customer'

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
