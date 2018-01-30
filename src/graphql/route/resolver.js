import { getRoutes, getRoute } from '~/src/persistence/route'

const resolver = {
	Query: {
		routes: () => getRoutes(),
		route: (_, { id }) => getRoute(id),
	},
}

export { resolver }
