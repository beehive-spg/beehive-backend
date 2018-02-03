import { hives } from './hive'
import { getRoutes, getRoute } from '~/src/persistence/route'

const routes = async () => {
	const objects = await getRoutes()
	const hiveObjects = await hives()

	return objects.map(route => {
		return buildRoute(route, hiveObjects)
	})
}

const route = async id => {
	const object = await getRoute(id)
	const hiveObjects = await hives()

	return buildRoute(object[0], hiveObjects)
}

const buildRoute = (route, hiveObjects) => {
	const hops = route._route.map(hop => {
		const start = hiveObjects.find(building => building.id === hop.start.id)
		const end = hiveObjects.find(building => building.id === hop.end.id)

		return {
			id: hop.id,
			start,
			end,
		}
	})
	return {
		id: route.id,
		hops,
	}
}

export { routes, route }
