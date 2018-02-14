import { hives } from './hive'
import { getRoutes, getRoute } from '~/src/persistence/route'
import { building } from '~/src/controller/building'

const routes = async () => {
	const objects = await getRoutes()

	return objects.map(route => {
		return buildRoute(route)
	})
}

const route = async id => {
	const object = await getRoute(id)

	return buildRoute(object[0])
}

const buildRoute = route => {
	const hops = route['hop/_route'].map(async hop => {
		const start = await building(hop['hop/start']['db/id'])
		const end = await building(hop['hop/end']['db/id'])

		return {
			id: hop['db/id'],
			start,
			end,
		}
	})

	const origin =
		route['route/origin']['db/ident'] === 'route.origin/order'
			? 'order'
			: 'distribution'

	return {
		id: route['db/id'],
		hops,
		origin,
	}
}

export { routes, route }
