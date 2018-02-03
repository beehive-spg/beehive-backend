import { hives } from '~/src/controller/hive'

const resolver = {
	Query: {
		hives: () => hives(),
	},
}

export { resolver }
