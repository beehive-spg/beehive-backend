import { hives } from './hive'
import { getRoutes, getRoute } from '~/persistence/route'
import { building } from '~/controller/building'
import speed from '~/utils/speed'

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

		const startdate = hop['hop/starttime']
		const enddate = hop['hop/endtime']

		const distance = hop['hop/distance']
		const droneSpeed = speed(startdate, enddate, distance)
		return {
			id: hop['db/id'],
			start,
			end,
			startdate,
			enddate,
			speed: droneSpeed,
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
