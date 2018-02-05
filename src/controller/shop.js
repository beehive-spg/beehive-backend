import { getShops } from '~/src/persistence/shop'

const shops = async () => {
	const objects = await getShops()

	return objects.map(building => {
		const shopObjects = building.shop.map(shop => {
			return {
				id: shop.id,
				name: shop.name,
			}
		})
		return {
			id: building.id,
			location: {
				address: building.address,
				longitude: building.xcoord,
				latitude: building.ycoord,
			},
			type: shopObjects,
		}
	})
}

export { shops }
