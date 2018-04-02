import { routes, route } from 'controller/route'

const resolver = {
	Query: {
		routes: () => routes(),
		route: (_, { id }) => route(id),
	},
}

export { resolver }
