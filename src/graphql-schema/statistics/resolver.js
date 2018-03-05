import { statistics } from 'controller/statistics'

const resolver = {
	Query: {
		statistics: (_, { id }) => statistics(id),
	},
}

export { resolver }
