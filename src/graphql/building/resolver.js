import { hives } from '~/src/controller/hive'
import { shops, shop } from '~/src/controller/shop'
import { customers, customer } from '~/src/controller/customer'

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
