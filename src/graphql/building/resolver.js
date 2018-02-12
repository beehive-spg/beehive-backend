import { hives } from '~/src/controller/hive'
import { shops } from '~/src/controller/shop'
import { customers, customer } from '~/src/controller/customer'

const resolver = {
	Query: {
		hives: () => hives(),
		shops: () => shops(),
		customers: () => customers(),
		customer: id => customer(id),
	},
}

export { resolver }
