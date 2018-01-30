import { getHives } from '~/src/persistence/hive'

const resolver = {
	Query: {
		hives: () => getHives(),
	},
}

export { resolver }
