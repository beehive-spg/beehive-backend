import { routes, route } from '~/src/controller/route'

const resolver = {
	Query: {
		routes: () => routes(),
		route: (_, { id }) => route(id),
	},
}

export { resolver }
