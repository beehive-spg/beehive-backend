import fs from 'fs'
import turf from 'turf'

import { DRONE_ADDED, DRONE_REMOVED } from '~/src/constants/topicNames'

const initialize = pubsub => {
	let hives = []
	fs.readFile(`${__dirname}/../testFiles/hives.json`, 'utf8', (err, data) => {
		if (err) {
			console.log(err) //eslint-disable-line
		}

		hives = JSON.parse(data)

		setInterval(function() {
			const hop = getHop(hives)
			if (hop.route.from === hop.route.to) {
				console.log(hop) //eslint-disable-line
			}

			pubsub.publish(DRONE_ADDED, {
				droneAdded: hop,
			})

			setTimeout(function() {
				pubsub.publish(DRONE_REMOVED, {
					droneRemoved: hop.id,
				})
			}, hop.time)
		}, 750)
	})
}

const getHop = hives => {
	const from = Math.floor(Math.random() * (22 - 0))

	let reachable = []
	hives.forEach(hive => {
		if (hive.id === from) {
			reachable = hive.reachable
		}
	})

	const to = reachable[Math.floor(Math.random() * reachable.length)]

	const fromProperties = getProperties(from, hives)
	const toProperties = getProperties(to, hives)

	const time = getTime(fromProperties, toProperties)

	return {
		id: getId(),
		time,
		route: {
			from: fromProperties,
			to: toProperties,
			currentPosition: fromProperties,
		},
	}
}

const getProperties = (id, hives) => {
	let hive = {}
	hives.forEach(res => {
		if (res.id === id) {
			hive = {
				location: res.location,
				longitude: res.coordinates.longitude,
				latitude: res.coordinates.latitude,
			}
		}
	})
	return hive
}

const getId = () => {
	const date = new Date()
	return (
		date.getDay().toString() +
		date.getHours().toString() +
		date.getMinutes().toString() +
		date.getSeconds().toString() +
		date.getMilliseconds().toString()
	)
}

const getTime = (from, to) => {
	const fromPoint = turf.point([from.longitude, from.latitude])
	const toPoint = turf.point([to.longitude, to.latitude])
	const distance = turf.distance(fromPoint, toPoint)
	const velocity = 150

	const time = distance / velocity

	const ms = time * (60 * 60 * 1000)

	return ms
}

export default initialize
