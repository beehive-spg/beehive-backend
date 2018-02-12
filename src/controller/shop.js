import { getShops } from '~/src/persistence/shop'

const shops = async () => {
	const objects = await getShops()

	return objects.map(building => {
		const shopObjects = building['building/shop'].map(shop => {
			return {
				id: shop['db/id'],
				name: shop['shop/name'],
			}
		})

		return {
			id: building['db/id'],
			location: {
				address: building['building/address'],
				longitude: building['building/xcoord'],
				latitude: building['building/ycoord'],
			},
			type: shopObjects,
		}
	})
}

export { shops }
