import { hives } from '~/src/controller/hive'
import { shops } from '~/src/controller/shop'

const resolver = {
	Query: {
		hives: () => hives(),
		shops: () => shops(),
	},
}

export { resolver }
