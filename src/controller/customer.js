import { getCustomers } from '~/src/persistence/customer'

const customers = async () => {
	const objects = await getCustomers()

	return objects.map(building => {
		const customerObjects = building['building/customer'].map(customer => {
			return {
				id: customer['db/id'],
			}
		})

		return {
			id: building['db/id'],
			location: {
				address: building['building/address'],
				longitude: building['building/xcoord'],
				latitude: building['building/ycoord'],
			},
			type: customerObjects,
		}
	})
}

export { customers }
