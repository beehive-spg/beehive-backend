import { hives } from 'controller/hive'
import { shops, shop } from 'controller/shop'
import { customers, customer } from 'controller/customer'

const resolver = {
	Query: {
		hives: () => hives(),
		shops: () => shops(),
		customers: () => customers(),
		shop: (_, { id }) => shop(id),
		customer: (_, { id }) => customer(id),
	},
}

export { resolver }
