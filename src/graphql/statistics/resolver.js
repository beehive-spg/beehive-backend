import { statistics } from '~/src/controller/statistics'
const resolver = {
	Query: {
		statistics: (_, { id }) => statistics(id),
	},
}

export { resolver }
