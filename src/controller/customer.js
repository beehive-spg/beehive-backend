import { getCustomers } from '~/src/persistence/customer'

const customers = async () => {
	const objects = await getCustomers()

	return objects.map(building => {
		const customerObjects = building.customer.map(customer => {
			return {
				id: customer.id,
			}
		})

		return {
			id: building.id,
			location: {
				address: building.address,
				longitude: building.xcoord,
				latitude: building.ycoord,
			},
			type: customerObjects,
		}
	})
}

export { customers }
